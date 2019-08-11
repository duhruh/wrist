    
import React, { Component } from "react";


export default class Clock extends Component {

  state = {
    time: new Date().toLocaleString(),
  };

  componentDidMount() {
    this.intervalID = setInterval(
      () => this.tick(),
      1000
    );
  }
  tick() {
    this.setState({
      time: new Date().toLocaleString()
    });
  }

  render() {
    return (
      <span>{this.state.time}</span>
    );
  }
}