'use strict';

import helpers from '../helpers';
import {
  DISPLAY_MESSAGE,
  FETCH_QUOTE
} from './constants';

/*=============================================>>>>>
= INITIAL STATE =
===============================================>>>>>*/

const initialState = {
  content: 'Loading...'
};

/*= End of INITIAL STATE =*/
/*=============================================<<<<<*/

/*=============================================>>>>>
= REDUCER =
===============================================>>>>>*/

const REDUCER_HANDLERS = {

  /**
   * Dispatches the new message to display
   * @param  {Object} state  the current state object
   * @param  {Object} action the action to perform
   * @return {Object}        the new state
   */
  [ DISPLAY_MESSAGE ]: (state, action) => {
    return helpers.reduce(state, {
      content: action.content
    });
  },

};

/*= End of REDUCER =*/
/*=============================================<<<<<*/

/**
 * Exports the Home Reducer functions
 * @param  {Object} [state=initialState] state to be modified
 * @param  {Object} action               action to be performed
 * @return {Object}                      the state result
 */
export default function home(state = initialState, action) {
  return helpers.performReduce(state, action, REDUCER_HANDLERS);
}
