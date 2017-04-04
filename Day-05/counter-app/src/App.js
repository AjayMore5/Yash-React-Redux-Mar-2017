import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Counter from './counter/Counter';
import BugTracker from './bugTracker/BugTracker';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Counter className="App-intro" counterData="10"></Counter>
        <hr/>
        <BugTracker></BugTracker>
      </div>
    );
  }
}

export default App;
