'use strict';

/*===============================
=            MODULES            =
===============================*/

import { exportActions } from '../helpers';

/*=====  End of MODULES  ======*/


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
