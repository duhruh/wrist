import React, { Component } from "react";
import './App.css';

import Clock from './components/Clock';
import Temperature from './components/Temperature';


import {TemperatureServiceClient} from './lib/temperature/temperature_grpc_web_pb';


class App extends Component {
state = {
  client: new TemperatureServiceClient(process.env.REACT_APP_TEMPERATURE_API),
}


  render(){
    return (
      <div className="App">
        <header className="App-header">
          <Clock/>
          <Temperature client={this.state.client}/>
        </header>
      </div>
    );
  }
}

export default App;
