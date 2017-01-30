// ────────────────────────────────────────────────────────────────────────────────
// MODULES

const path = require('path');
const merge = require('webpack-merge');
const common = require('./common');

const WebpackMd5Hash = require('webpack-md5-hash');

// ────────────────────────────────────────────────────────────────────────────────
module.exports = merge(common, {
  output: {
    path: path.resolve(`${__dirname}/../bin/app`),
    filename: '[name].bundle.js',
    sourceMapFilename: '[name].bundle.map',
    chunkFilename: '[id].chunk.js',
    library: 'ac_[name]',
    libraryTarget: 'var',
  },
  plugins: [
    new WebpackMd5Hash(),
  ],
});
