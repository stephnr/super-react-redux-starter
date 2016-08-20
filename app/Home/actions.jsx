'use strict';

import { CALL_API } from 'redux-api-middleware';

import {
  DISPLAY_MESSAGE
} from './constants';

import {
  ANOTHER_CONSTANT
} from './constants';

import constants from './constants';

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
