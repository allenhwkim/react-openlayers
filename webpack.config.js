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
    extensions: ['.ts', '.tsx', '.js', '.json', '.css', '.html'],
    alias: {
      'react-openlayers': path.join(__dirname, 'src', 'index.ts')
    },
  },
  module: {
    rules: [
      {test: /\.ts$/, use: 'ts-loader' },
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
        ],
      },
      {test: /\.html/, use: 'html-loader'},
      {test: /\.tsx?$/, use: 'ts-loader'}
    ]
  }
};

module.exports = config;
