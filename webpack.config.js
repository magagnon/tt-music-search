const debug = process.env.NODE_ENV !== "production";
const webpack = require('webpack');
const path = require('path');

const DIST_DIR = path.resolve(__dirname, "dist");
const SRC_DIR = path.resolve(__dirname, "app");

// Webpack uses `publicPath` to determine where the app is being served from.
// In development, we always serve from the root. This makes config easier.
const publicPath = '/';

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './public/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  context: SRC_DIR,
  entry: SRC_DIR + "/src/index.js",
  module: {
    loaders: [
      // Preprocess our own .css files
      // This is the place to add your own loaders (e.g. sass/less etc.)
      // for a list of loaders, see https://webpack.js.org/loaders/#styling    
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      // {
      //   test: /\.css$/,
      //   use: [
      //     'style-loader',
      //     'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:5]',
      //     'postcss-loader',
      //   ],
      // },
      // {
      //   test: /\.scss$/,
      //   use: [
      //     'style-loader',
      //     'css-loader?modules&importLoaders=2&localIdentName=[name]__[local]__[hash:base64:5]',
      //     'postcss-loader',
      //     'sass-loader',
      //   ],
      // },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      { 
        test: /\.png$/, 
        loader: "url-loader?limit=100000" 
      },
      { 
        test: /\.jpg$/, 
        loader: "file-loader" 
      },
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, 
        loader: 'url-loader?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, 
        loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, 
        loader: 'file-loader'
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, 
        loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
      }
    ]
  },
  output: {
    path: DIST_DIR,
    filename: "bundle.min.js",
    sourceMapFilename: 'bundle.map.js',
    // This is the URL that app is served from
    publicPath: publicPath
  },
  devtool: '#source-map',
  plugins: [HtmlWebpackPluginConfig]
};


