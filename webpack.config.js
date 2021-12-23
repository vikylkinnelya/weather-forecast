'use strict';
const path = require('path');

module.exports = (env, options) => {
  return {
    entry: './src/js/main.js',

    output: {
      path: __dirname + '/js',
      filename: 'bundle.js',
    },

    devtool: 'source-map',

    resolve: {
      extensions: ['.js', '.jsx']
    }
  }
};