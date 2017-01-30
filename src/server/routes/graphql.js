// ────────────────────────────────────────────────────────────────────────────────
// MODULES

// const path = require('path');
const Router = require('express').Router;

const graphHTTP = require('express-graphql');
const schema = require('../modules/models/graph');

// const Handles = require('../modules/services/handles');

// ────────────────────────────────────────────────────────────────────────────────

/**
 * Root API Router
 * @return {Object}    - the express router
 */
const GraphRouter = () => {
  const router = Router();

  /**
   * Graph Page
   * @param  {String} '/' - url route
   * @param  {Function}   - GraphQL HTTP Handler
   * @return {String}     - json response
   */
  // router.use('/', graphHTTP(req => ({
  //   schema,
  //   rootValue: { session: req.session, user: req.user },
  //   graphiql: (process.env.NODE_ENV === 'development'),
  // })));

  return router;
};

module.exports = GraphRouter;
