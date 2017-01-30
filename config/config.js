/* eslint no-magic-numbers:0 */

'use strict';

/*=============================================>>>>>
= SEQUELIZE MIGRATIONS CONFIGURATIONS =
===============================================>>>>>*/

if (process.env.NODE_ENV === 'development' || process.NODE_ENV === '') {
  require('dotenv').config();
}

const _ = require('lodash');
const DB_URL = process.env.DATABASE_URL || '';

/**
 * PARSE POSTGRES BASED DATABASE URL
 * FOR ALL OTHER TYPES OF DATABASE >>
 * @link{http://docs.sequelizejs.com/en/latest/docs/getting-started/}
 */

try {
  const dbUrl = require('url').parse(DB_URL);

  // Parse the Heroku type database URL to retrieve the vars
  const CREDENTIALS = dbUrl.auth.split(':');
  const DATABASE = dbUrl.pathname.substr(1);
  const HOST = dbUrl.host.split(':').shift();
  const ENGINE = process.env.DATABASE_ENGINE;

  let config = {
    username:       CREDENTIALS.shift(),
    password:       CREDENTIALS.shift(),
    database:       DATABASE,
    host:           HOST,
    dialect:        ENGINE,
  };

  if(process.env.DATABASE_SSL === 'true') {
    config = _.extend(config, {
      ssl:            true,
      dialectOptions: {
        ssl: true
      }
    });
  }

  module.exports = config;

} catch(e) {
  throw new Error('Failed to parse database credentials from env');
}

/*= End of SEQUELIZE MIGRATIONS CONFIGURATIONS =*/
/*=============================================<<<<<*/
