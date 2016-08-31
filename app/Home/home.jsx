'use strict';

/*=============================================>>>>>
= MODULES =
===============================================>>>>>*/

import React, { PropTypes } from 'react';
import { Link, browserHistory } from 'react-router';
import classes from './styles.scss';

/*= End of MODULES =*/
/*=============================================<<<<<*/

/** Application Component */
class Home extends React.Component {
  /**
   * Constructs the component
   * @param  {Object} props the properties sourced from the container
   */
  constructor(props) {
    super(props);
    // Action Creators
    this.displayMessage = this.displayMessage.bind(this);
    this.displayQuoteofTheDay = this.displayQuoteofTheDay.bind(this);

    this.props.fetchUser('5cdc57cd-14f3-44f2-b590-39de935fcd7e');

    this.username = '';
  }

  /** Displays the initial message */
  componentDidMount() {
    this.displayMessage('Hello World!');
    // this.fetchUser();
  }

  /**
   * Displays a new message
   * @param  {string} msg the message
   */
  displayMessage(msg) {
    this.props.displayMessage(msg);
  }

  /** Displays another message */
  displayQuoteofTheDay() {
    // Trigger using a thunk
    this.props.displayQuoteofTheDay();
    // Trigger using api middleware
    // this.props.displayQuote();
  }

  /*=============================================>>>>>
  = RENDER VIEW =
  ===============================================>>>>>*/

  /**
   * Renders the view
   * @return {HTML} the view
   */
  render() {
    return <div>
      <h1 className={classes.heading}>{this.props.message}</h1>
      <h2>Hello, {this.props.user.firstName} {this.props.user.lastName}</h2>
      <button onClick={this.displayQuoteofTheDay}>Show Quote of the Day...</button>
      {this.props.children}
    </div>;
  }

  /*= End of RENDER VIEW =*/
  /*=============================================<<<<<*/
}

/*=============================================>>>>>
= PROPS VALIDATION =
===============================================>>>>>*/

Home.propTypes = {
  message: PropTypes.string
};

/*= End of PROPS VALIDATION =*/
/*=============================================<<<<<*/

export default Home;
