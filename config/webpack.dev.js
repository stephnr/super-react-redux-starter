'use strict';

/*=============================================>>>>>
= MODULES =
===============================================>>>>>*/

const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common');
const DefinePlugin = require('webpack/lib/DefinePlugin');
const webpack = require('webpack');
const WebpackNotifierPlugin = require('webpack-notifier');

const ENV = process.env.NODE_ENV = process.env.ENV = 'dev';

/*= End of MODULES =*/
/*=============================================<<<<<*/

module.exports = merge(common, {
  debug:    true,
  devtool:  'cheap-module-source-map',
  output:   {
    path:              path.resolve('${__dirname}/../dist'),
    filename:          '[name].bundle.js',
    sourceMapFilename: '[name].map',
    chunkFilename:     '[id].chunk.js',
    library:           'ac_[name]',
    libraryTarget:     'var'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new WebpackNotifierPlugin({
      title:        'SRS: Application',
      alwaysNotify: true
    })
  ]
});
