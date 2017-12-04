var express = require('express'),
  bodyParser = require('body-parser'),
  consolidate = require('consolidate'),
  methodOverride = require('method-override'),
  session = require('express-session'),
  passport = require('passport'),
  swig = require('swig'),
  SpotifyStrategy = require('passport-spotify').Strategy;

var appKey = 'faacdd13c1f344b48cd2994147a69b9f';
var appSecret = 'f9dcad5597144e7e8e7d16707361f614';
var callbackURL = 'http://localhost:3001/auth/spotify/callback';

//  Passport session setup.
//  To support persistent login sessions, Passport needs to be able to
//  serialize users into and deserialize users out of the session. Typically,
//  this will be as simple as storing the user ID when serializing, and finding
//  the user by ID when deserializing. However, since this example does not
//  have a database of user records, the complete spotify profile is serialized
//  and deserialized.
passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (obj, done) {
  done(null, obj);
});


//  Use the SpotifyStrategy within Passport.
//  Strategies in Passport require a `verify` function, which accept
//  credentials (in this case, an accessToken, refreshToken, and spotify
//  profile), and invoke a callback with a user object.
passport.use(new SpotifyStrategy({
  clientID: appKey,
  clientSecret: appSecret,
  callbackURL: callbackURL
},
  function (accessToken, refreshToken, profile, done) {
    //  asynchronous verification, for effect...
    process.nextTick(function () {
      // To keep the example simple, the user's spotify profile is returned to
      // represent the logged-in user. In a typical application, you would want
      // to associate the spotify account with a user record in your database,
      // and return that user instead.

      console.log('user profile: ', profile, accessToken);

      return done(null, profile);
    });
  }));

var app = express();

// configure Express
app.set('views', __dirname + '/server/views');
app.set('view engine', 'ejs');

app.use(bodyParser());
app.use(methodOverride());
app.use(session({ secret: 'BgU8$U6%f9qdLqqVgn?71@4SXbk5ac' }));

// Initialize Passport!  Also use passport.session() middleware, to support
// persistent login sessions (recommended).
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(__dirname + '/public'));
app.engine('html', consolidate.swig);

app.get('/', function (req, res) {
  res.render('index.html', { user: req.user });
});

app.get('/account', ensureAuthenticated, function (req, res) {
  res.render('account.html', { user: req.user });
});

app.get('/login', function (req, res) {
  res.render('login.html', { user: req.user });
});

//  GET /auth/spotify
//  Use passport.authenticate() as route middleware to authenticate the
//  request. The first step in spotify authentication will involve redirecting
//  the user to spotify.com. After authorization, spotify will redirect the user
//  back to this application at /auth/spotify/callback
app.get('/auth/spotify',
  passport.authenticate('spotify', { scope: ['user-read-email', 'user-read-private'], showDialog: true }),
  function (req, res) {
    //  The request will be redirected to spotify for authentication, so this
    //  function will not be called.
  });

//  GET /auth/spotify/callback
//  Use passport.authenticate() as route middleware to authenticate the
//  request. If authentication fails, the user will be redirected back to the
//  login page. Otherwise, the primary route function function will be called,
//  which, in this example, will redirect the user to the home page.
app.get('/auth/spotify/callback',
  passport.authenticate('spotify', { failureRedirect: '/login' }),
  
  function (req, res) {
    res.redirect('/');
  });

app.get('/logout', function (req, res) {
  req.logout();
  res.redirect('/');
});

app.set("port", process.env.PORT || 3001);

app.listen(app.get("port"), () => {
  console.log(`Find the server at: http://localhost:${app.get("port")}/`);
});

//  Simple route middleware to ensure user is authenticated.
//  Use this route middleware on any resource that needs to be protected.  If
//  the request is authenticated (typically via a persistent login session),
//  the request will proceed. Otherwise, the user will be redirected to the
//  login page.
function ensureAuthenticated(req, res, next) {
  console.log('isAuthenticated: ', req.isAuthenticated());

  if (req.isAuthenticated()) { return next(); }
  res.redirect('/login');
}