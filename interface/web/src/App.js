import React from 'react';
import './App.css';

import Clock from './components/Clock';
import Tempreature from './components/Tempreature';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Clock/>
        <Tempreature/>
      </header>
    </div>
  );
}

export default App;
