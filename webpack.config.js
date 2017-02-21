/**
 * This config is to build dist/react-openlayer.umd.js
 */
var path = require("path");
var webpack = require('webpack');

var config = {
  entry: './src/index.ts',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: "[name].umd.js",
    library: ["[name]"],
    libraryTarget: "umd"
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.ts', '.tsx', '.js', '.json', '.css', '.html'],
    alias: {
      'react-openlayer': path.join(__dirname, 'src', 'index.ts')
    },
  },
  module: {
    loaders: [
      {test: /\.ts$/, loader: 'ts' },
      {test: /\.css$/, loader: 'style!css'},
      {test: /\.html/, loader: 'html'},
      {test: /\.tsx?$/, loader: 'awesome-typescript-loader'},
      //{test: /\.(ico|png|jpg|gif|svg|eot|ttf|woff|woff2)(\?.+)?$/, loader: 'url?limit=50000'}
    ]
  },
  resolveLoader: {
    root: path.join(__dirname, 'node_modules')
  },
  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  }
};

module.exports = config;
