// ────────────────────────────────────────────────────────────────────────────────
// MODULES

import bodyParser from 'body-parser';
import compression from 'compression';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import express from 'express';
// import localStrategy from 'passport-local';
import path from 'path';
import passport from 'passport';
// import uuid from 'node-uuid';
import helmet from 'helmet';
import hpp from 'hpp';

import hotMiddleware from './hotMiddleware';

// const log = require('./logging');

// ────────────────────────────────────────────────────────────────────────────────

/**
 * Orchestrates the middleware tools for the Express Application
 * @param  {Object} app Express Application
 */
const middleware = (app) => {
  const env = process.env.NODE_ENV;

  if (env === 'development' || env === 'staging') {
    // custom dev/staging middleware
    hotMiddleware(app);
  } else {
    app.use(express.static(path.join(__dirname, '..', '..', 'app')));
    // trust first proxy
    app.set('trust proxy', 1);
    // serve secure cookies if https enabled
    // sess.cookie.secure = true;
    /* Turn on View Caching */
    app.set('view cache', true);
  }

  // ────────────────────────────────────────────────────────────────────────────────
  // SECURITY MIDDLEWARE

  /* Prevent XSS Attacks */
  app.use(helmet.xssFilter());
  /* Prevents click jacking */
  app.use(helmet.frameguard('deny'));
  /* Enforces users to use HTTPS (requires HTTPS/TLS/SSL) */
  // app.use(helmet.hsts({ maxAge: process.env.APP_HTTPS_TIMEOUT }));
  /* Hides x-powered-by header */
  app.use(helmet.hidePoweredBy());
  /* Prevent MIME type sniffing */
  app.use(helmet.noSniff());
  /* Disable Caching */
  app.use(helmet.noCache());
  /* Prevent Parameter Pollution */
  app.use(hpp());

  // ────────────────────────────────────────────────────────────────────────────────
  // SERVER MIDDLEWARE

  /* Enables CORS Headers */
  app.use('*', cors());
  /* parses cookies */
  app.use(cookieParser());
  /* Parses the request body */
  app.use(bodyParser.urlencoded({ extended: false }));
  /* Returns request body as JSON */
  app.use(bodyParser.json());
  /* Imports Passport Middleware */
  app.use(passport.initialize());
  /* Manages the same Cookie Session */
  app.use(passport.session());
  /* GZIP everything */
  app.use(compression());

  // ────────────────────────────────────────────────────────────────────────────────
  // USER LOGIN MANAGEMENT

  // passport.serializeUser((user, done) => {
  //   done(null, user.token);
  // });

  // passport.deserializeUser((token, done) => {
  //   Users.findOne({
  //     where: { token: token }
  //   }).then(user => {
  //     if(user) {
  //       done(null, user.toJSON());
  //     } else {
  //       done(null, {});
  //     }
  //   });
  // });

  // LOCAL STRATEGY

  // const localStrategy = new LocalStrategy.Strategy({
  //   usernameField: 'email',
  //   passwordField: 'password'
  // }, (username, password, done) => {
  //   // Fetch matching user by email
  //   Users.findOne({
  //     where: { email: username }
  //   }).then(user => {
  //     // check password
  //     if(user !== null) {
  //       if(Security.cryptCompare(password, user.get('password'))) {
  //         // Password Success
  //         user.set('token', uuid.v4()).save().then(() => {
  //           return done(null, { id: user.get('id'), token: user.get('token') }, { message: 'Success' });
  //         }).catch(err => {
  //           log.debug(err);
  //           return done(null, false, { message: 'Failed to set new user token securely' });
  //         });
  //       } else {
  //         // Password Failed
  //         return done(null, false, { message: 'Password Failed' });
  //       }
  //     } else {
  //       // No User Found
  //       return done(null, false, { message: `No User exists with Email: ${username}` });
  //     }
  //   }).catch(err => {
  //     log.debug(err);
  //     return done(null, false, { message: err });
  //   });
  // });

  // ────────────────────────────────────────────────────────────────────────────────

  // passport.use(localStrategy);
};

export default middleware;
