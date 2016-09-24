import React, { Component } from 'react';
import Measure from 'react-measure'

import logo from './logo.svg';
import './App.css';
import Container from './components/container'
import TestComponent from './components/test'
import Controls from './components/controls'
import InputProps from './components/inputProps'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Controls/>
          <InputProps/>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Container>
          <TestComponent/>
        </Container>
      </div>
    );
  }
}

export default App;
