import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import LandingSect from './components/LandingSect';
import WeDoSect from './components/WeDoSect';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <LandingSect id='Landing-Sect'/>
        <WeDoSect id='WeDo-Sect'/>
      </div>
    );
  }
}

export default App;
