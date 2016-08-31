'use strict';

/*===============================
=            MODULES            =
===============================*/

import { CALL_API } from 'redux-api-middleware';

import {
  DISPLAY_MESSAGE,
  FETCH_USER,
  FETCH_USER_SUCCESS
} from './constants';

import { QUERY_GET_USER } from './graphs';

/*=====  End of MODULES  ======*/


/**
 * Displays a simple message
 * @param  {String} msg    message to display
 * @return {Object}        the action
 */
exports.displayMessage = msg => ({
  type:    DISPLAY_MESSAGE,
  content: msg
});

/**
 * Example of triggering an API call using redux-thunk
 * @return {Function} function dispatcher
 */
exports.displayQuoteofTheDay = () => (dispatch => {
  dispatch(exports.displayMessage('Loading'));
  return fetch('http://quotes.rest/qod.json', { method: 'GET' })
  .then(response => response.json())
  .then(json => dispatch(exports.displayMessage(json.contents.quotes.pop().quote)));
});

/**
 * Example of triggering an API call using API middleware
 * @return {Object} the api dispatch object
 */
exports.displayQuote = () => ({
  [ CALL_API ]: {
    endpoint: 'http://quotes.rest/qod.json',
    method:   'GET',
    types:    [ DISPLAY_MESSAGE, DISPLAY_MESSAGE, DISPLAY_MESSAGE ]
  }
});

/**
 * Retrieves the User object using a Graph API call
 * @return {Function} the api function to dispatch
 */
exports.fetchUser = (token, userID) => ((dispatch, getState, client) => {
  client.query(QUERY_GET_USER).then(result => {
    dispatch({
      type:    FETCH_USER_SUCCESS,
      payload: result.data
    })
  });
});
