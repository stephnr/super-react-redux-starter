'use strict';

/*=============================================>>>>>
= MODULES =
===============================================>>>>>*/

import ReactDOM from 'react-dom';

import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { apiMiddleware } from 'redux-api-middleware';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { routerReducer } from 'react-router-redux';

import { componentReducers } from './bundler';

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
  const middleware = applyMiddleware(thunkMiddleware, loggerMiddleware, apiMiddleware);
  const reducers = combineReducers({ ...componentReducers, routing: routerReducer });

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
