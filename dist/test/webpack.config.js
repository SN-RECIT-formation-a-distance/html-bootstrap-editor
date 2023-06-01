"use strict";

var path = require('path');
module.exports = {
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.(jsx|js)$/,
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: [['@babel/preset-env', {
            "targets": "defaults"
          }], '@babel/preset-react']
        }
      }]
    }, {
      test: /\.css$/,
      use: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader'
      }]
    }, {
      test: /\.s[ac]ss$/i,
      use: ["style-loader", "css-loader", "sass-loader"]
    }, {
      test: /\.(woff|woff2|ttf|eot|png|jpg|svg|gif|asset)$/i,
      use: {
        loader: 'file-loader',
        options: {
          esModule: false
        }
      }
    }]
  }
};