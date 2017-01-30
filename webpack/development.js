// ────────────────────────────────────────────────────────────────────────────────
// MODULES

const path = require('path');
const merge = require('webpack-merge');
const common = require('./common');
const webpack = require('webpack');
const WebpackNotifierPlugin = require('webpack-notifier');

// ────────────────────────────────────────────────────────────────────────────────

// common.entry.app = ['webpack-hot-middleware/client?reload=true'].concat(common.entry.app);
common.entry.app = ['webpack/hot/only-dev-server'].concat(common.entry.app);
common.entry.app = ['react-hot-loader/patch'].concat(common.entry.app);

module.exports = merge(common, {
  devtool: 'cheap-module-eval-source-map',
  output: {
    path: path.resolve(`${__dirname}/../bin/app`),
    filename: '[name].bundle.js',
    sourceMapFilename: '[name].map',
    chunkFilename: '[id].chunk.js',
    library: 'ac_[name]',
    libraryTarget: 'var',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new WebpackNotifierPlugin({
      title: 'Webpack Bundler',
      alwaysNotify: true,
    }),
  ],
});
