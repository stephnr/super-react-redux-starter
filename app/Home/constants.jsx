'use strict';

import { exportActions } from '../helpers';

/*=============================================>>>>>
= ACTIONS =
===============================================>>>>>*/

const ACTIONS = [
  'DISPLAY_MESSAGE',
  'ANOTHER_CONSTANT'
];

/*= End of ACTIONS =*/
/*=============================================<<<<<*/

// Export the enumerations
module.exports = exportActions(ACTIONS);
