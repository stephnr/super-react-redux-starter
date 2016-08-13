'use strict';

const MAPPED_REDUCERS = {};

/*=============================================>>>>>
= REDUCERS =
===============================================>>>>>*/

// K/V pairs of the reducers
// (State Object Name, Path to Root of Reducer file)
const REDUCER_ROOT_PATHS = {
  Home: './Home'
};

/*= End of REDUCERS =*/
/*=============================================<<<<<*/

Object.keys(REDUCER_ROOT_PATHS).forEach(k => {
  if(REDUCER_ROOT_PATHS.hasOwnProperty(k)) {
    MAPPED_REDUCERS[ k ] = require(`${REDUCER_ROOT_PATHS[ k ]}/reducer`).default;
  }
});

export const componentReducers = MAPPED_REDUCERS;
