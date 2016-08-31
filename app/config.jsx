'use strict';

/*=============================================>>>>>
= MODULES =
===============================================>>>>>*/

import React from 'react';

import ReactDOM from 'react-dom';

import createLogger from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import { apiMiddleware } from 'redux-api-middleware';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { routerReducer } from 'react-router-redux';

import { componentReducers } from './bundler';

import ApolloClient, { createNetworkInterface } from 'apollo-client';

/*= End of MODULES =*/
/*=============================================<<<<<*/

/**
 * Composes the redux data store
 * @see {@link http://redux.js.org/docs/basics/Store.html}
 * @return {Object} the store object
 */
exports.composeStore = () => {
  let store = {};

  const loggerMiddleware = createLogger();
  const networkInterface = createNetworkInterface('http://localhost:5000');

  const client = new ApolloClient({ networkInterface });
  const middleware = applyMiddleware(ReduxThunk.withExtraArgument(client), loggerMiddleware, apiMiddleware, client.middleware());
  const reducers = combineReducers({ ...componentReducers, routing: routerReducer, apollo: client.reducer() });

  if(process.env.NODE_ENV === 'dev') {
    store = createStore(reducers, window.devToolsExtension(), middleware);
  } else {
    store = createStore(reducers, middleware);
  }

  return store;
};

/**
 * Displays the React Application
 * @param  {HTML} routes        JSX styled element to render
 * @param  {Element} MOUNT_NODE HTML element to render against
 */
exports.displayApp = (routes, MOUNT_NODE) => {
  const appRender = () => {
    ReactDOM.render(
      routes,
      MOUNT_NODE
    );
  };

  if(process.env.NODE_ENV === 'dev') {
    const Redbox = require('redbox-react').default;
    try {
      appRender();
    } catch(e) {
      ReactDOM.render(<Redbox error={e}/>, MOUNT_NODE);
    }
  } else {
    appRender();
  }
};
