const ENV = process.env.NODE_ENV;

switch (ENV) {
  case 'dev':
  case 'development':
    module.exports = require('./webpack/development');
    break;

  case 'prod':
  case 'production':
    module.exports = require('./webpack/production');
    break;

  case 'test':
  case 'testing':
  case 'stage':
  case 'staging':
    module.exports = require('./webpack/staging');
    break;

  default:
    module.exports = require('./webpack/development');
    break;
}
