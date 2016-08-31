'use strict';

/*===============================
=            MODULES            =
===============================*/

import { performReduce, reduce } from '../helpers';

import {
  DISPLAY_MESSAGE,
  FETCH_QUOTE,
  FETCH_USER_SUCCESS
} from './constants';

/*=====  End of MODULES  ======*/


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
    return reduce(state, {
      content: action.content
    });
  },

  [ FETCH_USER_SUCCESS ]: (state, action) => {
    return reduce(state, {
      user: action.payload.user
    })
  }

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
  return performReduce(state, action, REDUCER_HANDLERS);
}
