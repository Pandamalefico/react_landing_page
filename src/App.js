import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import LandingSect from './components/LandingSect';
import WeDoSect from './components/WeDoSect';
import WorksSect from './components/WorksSect';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <LandingSect id='Landing-Sect'/>
        <WeDoSect id='WeDo-Sect'/>
        <WorksSect />
      </div>
    );
  }
}

export default App;
