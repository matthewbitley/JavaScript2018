import React, { Component } from "react";
import axios from 'axios';

/**
 * https://api.darksky.net/forecast/6111b812232ce4bc2370f18ee3b64134/[latitude],[longitude]
 * As an user, I should be greeted with the temperature, and summary.
 * As an engineer, I should use componentDidMount as well as axios to accomplish the task.
 *
 * You will be performing two AJAX calls:
 * 1.) The first call will return the user's latitude and longitude
 *     API: http://ip-api.com/json
 * 2.) The second call should return detailed weather information for a given latitude and longitude.
 *     Replace [latitude] and [longitude] in the URL below with the results from the first API.
 *     API: http://dev.mydbc.co/demo/api.php?lat=[latitude]&long=[longitude]
 */



class App extends Component {
  state = {
    weather: '',
    lat: '',
    long: ''
  };

  getIP = (callback) => {
    axios
      .get(`http://dev.mydbc.co/demo/latlong.php`)
      .then(response => {
        this.setState({
          lat: response.data.lat,
          long: response.data.lon
        }, ()=> callback());
      })
      .catch(error => {
        console.log('U DUN GOOFED WITH IP');
      });
  }

  getWeather= () => {
    axios
      .get(`http://dev.mydbc.co/demo/api.php?lat=${this.state.lat}&long=${this.state.long}`)
      .then(response => {
        this.setState({
          weather: response.data
        });
      })
      .catch(error => {
        console.log('U DUN GOOFED WITH WEATHER');
      });
  };

  componentDidMount() {
    this.getIP(()=> this.getWeather());
  }


  render() {
    const {weather} = this.state;
    return (
      <div className="card">
        <div className="card-section">
          <div className="container">
            <h3>{weather.timezone}</h3>
            <p>{this.state.summary}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
