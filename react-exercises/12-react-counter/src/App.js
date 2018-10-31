import React from 'react';

/**
 * As a user, I should be able to click on a button named Increment to increment the count
 * As a user, I should be able to click on a button named Decrement to decrement the count
 * As a user, I should be able to click on reset to reset the counter
 * As a user, I should not be able to go below 0 on the count
 * if the count goes above 10, the count should not be rendered to the sreen
 */

import React, { Component } from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
<<<<<<< HEAD

  incClick = () => {
    this.setState({ count: this.state.count + 1 });
    /*if ( this.state.count > 9 ) {
      this.setState({ count: this.state.count + 0 });
    }*/
  }

  decClick = () => {
    this.setState({ count: this.state.count - 1 });
    if ( this.state.count < 1 ) {
      this.setState({ count: this.state.count - 0 });
    }
  }

  resClick = () => {
    this.setState({ count: 0 });
  }

  render() {
    return (
      <div>
        <button onClick={this.incClick} className="inc">Increment!</button>
        <button onClick={this.decClick} className="dec">Decrement!</button>
        <button onClick={this.resClick} className="reset">Reset</button>
        {this.state.count < 11 ? <h1>Current Count: {this.state.count}</h1> : null }
=======
  Increment = () => {
    let newCount = this.state.count + 1;
    this.setState({
      count: newCount
    });
  };
  render() {
    return (
      <div>
        <button className="inc" onClick={this.Increment}>
          Increment!
        </button>
        <button className="dec">Decrement!</button>
        <button className="reset">Reset</button>
        <h1>Current Count: {this.state.count}</h1>
>>>>>>> c3fd38596f2bc620fa11025af27d348b46543c6c
      </div>
    );
  }
}

<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> c3fd38596f2bc620fa11025af27d348b46543c6c
