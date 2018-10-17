import React, { Component } from 'react';

/***
 *  As a user, I should be able to click on the button to hide the text.
 *  Clicking the button a second try unhides the text.
 *
 */

class App extends Component {
  state = {
    showText: true
  };

  toggleVisibility = () => {
    let newState = Object.assign(this.state);
    newState.showText = !newState.showText;
    this.setState(newState);
  };

  render() {
    var buttonText = this.state.showText ? "Click To Hide Text" : "Click To Show Text";
    return (
      <div>
        <div>
          {this.state.showText ? <h1>Now you see me...</h1> : null}
        </div>
        <button onClick={this.toggleVisibility}>{buttonText}</button>
      </div>
    );
  }
}

export default App;