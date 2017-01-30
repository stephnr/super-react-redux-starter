// ────────────────────────────────────────────────────────────────────────────────
// MODULES

import React from 'react';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

// ────────────────────────────────────────────────────────────────────────────────

import { composeStore, displayApp } from './config';

// COMPONENTS

import {
  Home,
  App
} from './components';

/* ----------- PREPARE COMPONENTS/REDUCERS/ETC ----------- */

const store = composeStore();
const history = syncHistoryWithStore(hashHistory, store);

/* ----------- RENDER APP ----------- */

const MOUNT_NODE = document.getElementById('react');

const ROOT = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
      </Route>
    </Router>
  </Provider>
);

displayApp(
  ROOT,
  MOUNT_NODE,
);

export default ROOT;
