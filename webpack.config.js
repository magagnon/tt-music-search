var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');

var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "app");

module.exports = {
    context: SRC_DIR,
    entry: SRC_DIR + "/main.js",
    module: {
    loaders: [
        {
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: "babel-loader",
            query: {
                presets: ["react", "es2015", "stage-0"]
            }
        }
    ]
  },
  output: {
      path: DIST_DIR,
      filename: "bundle.min.js",
      publicPath: "/app"
  }
};