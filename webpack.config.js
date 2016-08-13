'use strict';

const ENV = process.env.NODE_ENV;

switch(ENV) {
case 'dev':
case 'development':
  module.exports = require('./config/webpack.dev');
  break;

case 'prod':
case 'production':
  module.exports = require('./config/webpack.prod');
  break;

default:
  module.exports = require('./config/webpack.dev');
  break;
}
