'use strict';

import { exportActions } from '../helpers';

/*=============================================>>>>>
= ACTIONS =
===============================================>>>>>*/

const ACTIONS = [
  'DISPLAY_MESSAGE',
  'ANOTHER_CONSTANT',
  'FETCH_USER',
  'FETCH_USER_SUCCESS'
];

/*= End of ACTIONS =*/
/*=============================================<<<<<*/

// Export the enumerations
module.exports = exportActions(ACTIONS);
