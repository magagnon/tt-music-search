const args = [ '--config webpack.config.js --open --port 3000' ];
const opts = { stdio: 'inherit', shell: true };
require('child_process').spawn('webpack-dev-server', args, opts);