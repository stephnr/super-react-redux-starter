/* eslint no-magic-numbers: 0 */
'use strict';

/*=============================================>>>>>
= PREPARE THE WEBPACK SERVER =
===============================================>>>>>*/

const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
let config = {};

if(process.env.NODE_ENV === 'dev' || process.env.NODE_ENV === 'development') {
  config = require('./webpack.dev');
} else {
  config = require('./webpack.prod');
}

config.entry.main.push('webpack-dev-server/client?http://localhost:5555');
config.entry.main.push('webpack/hot/dev-server');

/*= End of PREPARE THE WEBPACK SERVER =*/
/*=============================================<<<<<*/

const compiler = webpack(config);
const server = new WebpackDevServer(compiler, {
  hot:    true,
  quiet:  false,
  noInfo: false,
  stats:  { colors: true }
});

server.listen(5555);
