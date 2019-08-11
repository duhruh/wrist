import React from 'react';
import './App.css';

import Clock from './components/Clock';
import Tempreature from './components/Tempreature';


import {TempreatureService} from './lib/tempreature/temperature_grpc_web_pb';
import {ReadingsRequest} from './lib/tempreature/temperature_pb';

class App extends Component {
state = {
  client: new TempreatureService(process.env.REACT_APP_TEMPREATURE_API),
}

componentDidMount(){
  let req = new ReadingsRequest();
  let stream = this.state.client.streamReadings(req);
  stream.on('data', this.onReading.bind(this));
  stream.on('end', ()=>{
    console.log("done")
    console.log(arguments)
  })
}
onReading(){
  console.log(arguments);
}
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <Clock/>
          <Tempreature/>
        </header>
      </div>
    );
  }
}

export default App;
