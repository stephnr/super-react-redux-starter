'use strict';

/*=============================================>>>>>
= MODULES =
===============================================>>>>>*/

import React from 'react';
import { Route, IndexRoute } from 'react-router';

/*= End of MODULES =*/
/*=============================================<<<<<*/

/*=============================================>>>>>
= COMPONENTS =
===============================================>>>>>*/

import Home from '../Home';

/*= End of COMPONENTS =*/
/*=============================================<<<<<*/

export const routes = (
  <Route path="/" component={Home}>
    <IndexRoute component={Home}/>
  </Route>
);
