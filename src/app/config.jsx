// ────────────────────────────────────────────────────────────────────────────────
// MODULES

import React from 'react';
import ReactDOM from 'react-dom';

import Redbox from 'redbox-react';
import createLogger from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { routerReducer } from 'react-router-redux';

import reducerBundle from './reducers';

// ────────────────────────────────────────────────────────────────────────────────

/**
 * Composes the redux data store
 * @see {@link http://redux.js.org/docs/basics/Store.html}
 * @return {Object} the store object
 */
exports.composeStore = () => {
  let store = {};

  const loggerMiddleware = createLogger();

  const middleware = applyMiddleware(ReduxThunk, loggerMiddleware);
  const reducers = combineReducers({ ...reducerBundle, routing: routerReducer });

  if (ENV === 'development') {
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
      MOUNT_NODE,
    );
  };

  const executeRender = () => {
    try {
      appRender();
    } catch (e) {
      ReactDOM.render(<Redbox error={e} />, MOUNT_NODE);
    }
  };

  if (ENV === 'development') {
    executeRender();
  } else {
    appRender();
  }
};
