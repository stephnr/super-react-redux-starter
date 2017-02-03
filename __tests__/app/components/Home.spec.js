// ────────────────────────────────────────────────────────────────────────────────
// MODULES

import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { Home } from '../../../src/app/components';

// ────────────────────────────────────────────────────────────────────────────────
// PREP STORE

let store = {};
let wrapper = null;
const mockStore = configureMockStore([thunk]);
const storeStateMock = {
  TEST: {
    msg: 'Hello World',
  },
};

// ────────────────────────────────────────────────────────────────────────────────

test.beforeEach(() => {
  store = mockStore(storeStateMock);
  wrapper = shallow(<Home store={store} />).shallow();
});

test('Home exists', (t) => {
  t.truthy(wrapper.find('div'));
});


