// ────────────────────────────────────────────────────────────────────────────────
// MODULES

import _ from 'lodash';

// ────────────────────────────────────────────────────────────────────────────────

/**
 * Constructs a redux reducer
 * @param {object} initialState - the state to begin with
 * @param {object} reducerMap - the associated reducer responses
 */
export const createReducer = (initialState = {}, reducerMap = {}) => {
  initialState = _.clone(initialState);
  return (state = initialState, action = {}) => {
    const reducer = reducerMap[action.type];
    return reducer ? reducer(state, action) : state;
  };
};
