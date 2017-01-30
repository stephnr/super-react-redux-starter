// ────────────────────────────────────────────────────────────────────────────────
// MODULES

import {
  TEST_LOG,
} from '../constants';

import { createReducer } from '../utils';

// ────────────────────────────────────────────────────────────────────────────────

const initialState = {
  msg: 'HELLO',
};

export default createReducer(initialState, {
  [TEST_LOG]: (state = {}, action = {}) => {
    console.log(action.msg);
    return Object.assign({}, state);
  },
});
