/* global __dirname, require, module */

const webpack = require("webpack");
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
const path = require("path");

const libraryName = "glfx";
const fileName = "glfx";

const plugins = [new UglifyJsPlugin({ minimize: true })];
const outputFile = fileName + ".min.js";
const outputDirectory = "/package/";

module.exports = {
  entry: __dirname + "/src/index.js",
  output: {
    path: __dirname + outputDirectory,
    filename: outputFile,
    publicPath: outputDirectory,
    library: libraryName,
    libraryTarget: "umd",
    umdNamedDefine: true,
  },
  module: {
    rules: [
      {
        test: /\.js/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    modules: [path.resolve("./node_modules"), path.resolve("./src")],
    extensions: [".json", ".js"],
  },
  plugins: plugins,
};
