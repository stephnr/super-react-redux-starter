'use strict';

/*=============================================>>>>>
= MODULES =
===============================================>>>>>*/

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');

/*= End of MODULES =*/
/*=============================================<<<<<*/

const cssModulesLoader = [
  'css?sourceMap&-minimize',
  'modules',
  'importLoaders=1'
].join('&');

const METADATA = {
  title:       'SRS: Super React/Redux Starter',
  ENV:         (process.env.NODE_ENV)
};

const config = {
  metadata:       METADATA,
  entry:          {
    main: [ './app/index.jsx' ]
  },
  output: {
    path:       './dist',
    publicPath: '/',
    filename:   '[name].bundle.js'
  },
  resolve: {
    root:               '.',
    extensions:         [ '', '.js', '.jsx' ],
    modulesDirectories: [ 'node_modules' ]
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /(node_modules)/, loader: 'react-hot!babel?cacheDirectory,presets[]=es2015,presets[]=react' },
      { test: /\.(sass|scss)$/, exclude: /(node_modules)/, loaders: [ 'style', cssModulesLoader, 'postcss', 'sass?sourceMap' ] },
      { test: /\.(png|jpg|jpeg)$/, loader: 'file?name=[name].[ext]' },
      { test: /\.html$/, loader: 'html' }
    ]
  },
  node: {
    global:         'window',
    crypto:         'empty',
    module:         false,
    clearImmediate: false,
    setImmediate:   false
  },
  postcss: function() {
    return [ autoprefixer ];
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(true),
    new webpack.optimize.DedupePlugin(),
    new HtmlWebpackPlugin({
      showError:      true,
      template:       './index.ejs',
      filename:       'index.html',
      chunksSortMode: 'dependency'
    }),
    new webpack.EnvironmentPlugin([
      'NODE_ENV'
    ])
  ]
};

module.exports = config;
