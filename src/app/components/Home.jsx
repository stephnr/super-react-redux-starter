// ────────────────────────────────────────────────────────────────────────────────
// MODULES

import React from 'react';
import { connect } from 'react-redux';

import {
  SEND_TO_LOG,
} from '../actions';

// ────────────────────────────────────────────────────────────────────────────────
// COMPONENT

class Home extends React.Component {
  componentWillMount() {
    this.props.dispatch(SEND_TO_LOG('HELLO WORLD'));
  }

  render() {
    return <div>Hello World</div>;
  }
}

// ────────────────────────────────────────────────────────────────────────────────
// CONTAINER

const mapProps = (state = {}) => ({
  msg: state.TEST.msg,
});

exports.Home = connect(mapProps)(Home);
