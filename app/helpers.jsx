/* eslint no-magic-numbers:0, brace-style: 0 */
'use strict';

import Immutable from 'immutable';

/**
 * Runs exporters on Actions
 * @param {Object}  ACTIONS  collection of actions
 * @return {Object}          exported set of action constants
 */
exports.exportActions = ACTIONS => {
  return Immutable.Seq.of(ACTIONS).toMap().flip().map(v => ACTIONS[ v ]).toObject();
};

/**
 * Performs a reduction to construct a state update
 * @param  {Object} state   the previous state
 * @param  {Object} updates new state updates
 * @return {Object}         the merged state
 */
exports.reduce = (state, updates) => {
  return Immutable.Map(state).merge(updates).toJS();
};

exports.performReduce = (state, action, handlers) => {
  const handler = handlers[ action.type ];
  return handler ? handler(state, action) : state;
};
