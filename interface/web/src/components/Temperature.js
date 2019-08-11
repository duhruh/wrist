    
import React, { Component } from "react";
import PropTypes from "prop-types";
import {ReadingsRequest} from '../lib/temperature/temperature_pb';

export default class Tempreature extends Component {
  static propTypes = {
    client: PropTypes.object.isRequired,
  };
static defaultProps = {
  client: {},
};

state = {
  temp: "0",
}
  componentDidMount() {
    let req = new ReadingsRequest();
    let stream = this.props.client.streamReadings(req);
    stream.on('data', this.onReading.bind(this));
    stream.on('end', this.onEnd.bind(this))
  }
  onEnd(){
    console.log("done")
    console.log(arguments)
  }
  onReading(reading){
    let temp = reading.getMessage()
    .slice(reading.getMessage()
    .indexOf("t="));
    let c = temp.split("=")[1].substring(0,2);
    this.setState({temp: this.cToF(c)});
  }

  cToF(c){
    return ((c * (9/5)) + 32).toFixed(2)
  }
  render() {
    return (
      <span>{this.state.temp}f</span>
    );
  }
}