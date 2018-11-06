import React, { Component } from "react";
<<<<<<< HEAD
import axios from 'axios';
=======
import axios from "axios";
>>>>>>> d47b24d52e14b203c1e3889d9bf3ae4c4ce10f89

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
<<<<<<< HEAD
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


=======
    location: "",
    temperature: 0,
    summary: "",
    isLoading: true
  };
  getCoordinates = callback => {
    return axios.get("http://dev.mydbc.co/demo/latlong.php").then(response => {
      if (!response.data.lat || !response.data.lon)
        throw new Error("No response from lat + long");
      callback(response.data.lat, response.data.lon);
      this.setState({ location: response.data.location });
    });
  };
  getWeather = (lat, long) => {
    return axios
      .get(`http://dev.mydbc.co/demo/api.php?lat=${lat}&long=${long}`)
      .then(response => {
        const { temperature, summary } = response.data.currently;
        console.log(response.data);
        this.setState({
          temperature,
          summary,
          isLoading: false
        });
      });
  };
  componentDidMount() {
    this.getCoordinates(this.getWeather);
  }
>>>>>>> d47b24d52e14b203c1e3889d9bf3ae4c4ce10f89
  render() {
    const {weather} = this.state;
    return (
      <div className="card">
<<<<<<< HEAD
        <div className="card-section">
          <div className="container">
            <h3>{weather.timezone}</h3>
            <p>{this.state.summary}</p>
=======
        {this.state.isLoading ? (
          <p>Loading</p>
        ) : (
          <div className="card-section">
            <div className="container">
              <h3>{this.state.location}</h3>
              <p>
                {this.state.summary}
                <br />
                Temperature: {this.state.temperature}
                &deg;F
              </p>
            </div>
>>>>>>> d47b24d52e14b203c1e3889d9bf3ae4c4ce10f89
          </div>
        )}
      </div>
    );
  }
}

export default App;
