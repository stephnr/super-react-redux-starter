// ────────────────────────────────────────────────────────────────────────────────
// MODULES

const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'dev') {
  require('dotenv').config();
}

// ────────────────────────────────────────────────────────────────────────────────

module.exports = {
  entry: {
    app: [
      './src/app/index'
    ],
  },
  output: {
    path: path.resolve(`${__dirname}/../bin/app`),
    publicPath: '/',
    filename: '[name].bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: ['node_modules']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          'babel-loader',
        ],
        exclude: /(node_modules)/,
      },
      {
        test: /\.(sass|scss)$/,
        use: [
          'style-loader',
          'css-loader?sourceMap&-minimize&modules&importLoaders=1&localIdentName=[name]__[local]--[hash:base64:5]',
          'postcss-loader',
          'sass-loader?sourceMap',
        ],
        exclude: /(node_modules)/,
      },
      {
        test: /\.(png|jpg|jpeg)$/,
        use: [
          'file-loader?name=[name].[ext]',
        ],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      ENV: JSON.stringify(process.env.NODE_ENV),
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(`${__dirname}/../src/server`),
        to: path.resolve(`${__dirname}/../bin/server`)
      }
    ]),
    new HtmlWebpackPlugin({
      showError:      true,
      template:       './src/app/index.html',
      filename:       'index.html',
      chunksSortMode: 'dependency'
    }),
  ],
};
