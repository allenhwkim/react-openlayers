/**
 * This config is to build dist/react-openlayers.umd.js
 */
var path = require("path");
var webpack = require('webpack');

var config = {
  entry: './src/index.tsx',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: "react-openlayers.umd.js",
    library: ["react-openlayers"],
    libraryTarget: "umd"
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.ts', '.tsx', '.js', '.json', '.css', '.html'],
    alias: {
      'react-openlayers': path.join(__dirname, 'src', 'index.ts')
    },
  },
  module: {
    loaders: [
      {test: /\.ts$/, loader: 'ts' },
      {test: /\.css$/, loader: 'style!css'},
      {test: /\.html/, loader: 'html'},
      {test: /\.tsx?$/, loader: 'ts-loader'},
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
