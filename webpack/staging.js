// ────────────────────────────────────────────────────────────────────────────────
// MODULES

const path = require('path');
const merge = require('webpack-merge');
const common = require('./common');
const webpack = require('webpack');
const WebpackNotifierPlugin = require('webpack-notifier');

// ────────────────────────────────────────────────────────────────────────────────

module.exports = merge(common, {
  devtool: 'cheap-module-source-map',
  output: {
    path: path.resolve(`${__dirname}/../bin/app`),
    filename: '[name].bundle.js',
    sourceMapFilename: '[name].map',
    chunkFilename: '[id].chunk.js',
    library: 'ac_[name]',
    libraryTarget: 'var',
  }
});
