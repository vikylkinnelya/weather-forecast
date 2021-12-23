'use strict';
const path = require('path');

module.exports = () => {
  return {
    entry: './src/js/main.js',

    output: {
      path: __dirname + '/src/js',
      filename: 'bundle.js',
    },

    devtool: 'source-map',

    resolve: {
      extensions: ['.js', '.jsx']
    }
  }
};