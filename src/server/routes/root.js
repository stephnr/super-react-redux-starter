// ────────────────────────────────────────────────────────────────────────────────
// MODULES

const path = require('path');
const Router = require('express').Router;

// const Handles = require('../modules/services/handles');

// ────────────────────────────────────────────────────────────────────────────────

/**
 * Root API Router
 * @return {Object}    - the express router
 */
const RootRouter = () => {
  const router = Router();

  /**
   * Home Page
   * @param  {String} '/' - url route
   * @param  {Function}   - HTTP Handler
   * @return {String}     - json response
   */
  router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', 'app', 'index.html'));
  });

  return router;
};

module.exports = RootRouter;
