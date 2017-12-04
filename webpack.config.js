var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');

var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "app");

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
          test: /\.css$/,
          exclude: /node_modules/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.jsx?$/,
          exclude: /(node_modules|bower_components)/,
          loader: "babel-loader",
          query: {
            presets: ["react", "es2015", "stage-0"]
          }
        },
        {
          test: /\.(eot|svg|otf|ttf|woff|woff2)$/,
          use: 'file-loader',
        }
    ]
  },
  output: {
      path: DIST_DIR,
      filename: "bundle.min.js"
  },
  plugins: [HtmlWebpackPluginConfig]
};