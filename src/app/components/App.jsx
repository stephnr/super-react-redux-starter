// ────────────────────────────────────────────────────────────────────────────────
// MODULES

import React from 'react';

// ────────────────────────────────────────────────────────────────────────────────

class App extends React.Component {
  render() {
    return this.props.children;
  }
}

exports.App = App;
