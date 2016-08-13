'use strict';

/*=============================================>>>>>
= MODULES =
===============================================>>>>>*/

import { connect } from 'react-redux';

import { displayMessage, displayQuoteofTheDay, displayQuote } from './actions';
import Home from './component';

/*= End of MODULES =*/
/*=============================================<<<<<*/

/*=============================================>>>>>
= HOME CONTAINER =
===============================================>>>>>*/

/**
 * Bind props from the state tree
 * @param  {String} state the current state tree
 * @return {Object}       the mapped state/props
 */
const mapStateToProps = state => ({
  message: state.Home.content
});

/**
 * Binds actions to props for component binding
 * @type {Object}
 */
const mapActionCreators = {
  displayMessage,
  displayQuoteofTheDay,
  displayQuote
};

/*= End of HOME CONTAINER =*/
/*=============================================<<<<<*/

export default connect(mapStateToProps, mapActionCreators)(Home);
