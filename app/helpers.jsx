/* eslint no-magic-numbers:0, brace-style: 0 */
'use strict';

import Immutable from 'immutable';

/**
 * Runs exporters on Actions
 * @param {Object}  ACTIONS  collection of actions
 * @return {Object}          exported set of action constants
 */
export const exportActions = ACTIONS => {
  return Reflect.apply(Immutable.Seq.of, this, ACTIONS).toMap().flip().map(v => ACTIONS[ v ]).toObject();
};

/**
 * Performs a reduction to construct a state update
 * @param  {Object} state   the current state tree
 * @param  {Object} updates new state updates
 * @return {Object}         the merged state
 */
export const reduce = (state, updates) => {
  return Immutable.Map(state).merge(updates).toJS();
};

/**
 * Executes a reduce event to update the state tree
 * @param {Object} state     the current state tree
 * @param {Object} action    the action to perform
 * @param {Object} handlers  the map of reduce handlers
 * @return {Object}          the updated state tree
 */
export const performReduce = (state, action, handlers) => {
  const handler = handlers[ action.type ];
  return handler ? handler(state, action) : state;
};
