import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import LandingSect from './components/LandingSect';
import WeDoSect from './components/WeDoSect';
import WorksSect from './components/WorksSect';
import ServicessSect from './components/ServicesSect';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <LandingSect id='Landing-Sect'/>
        <WeDoSect id='WeDo-Sect'/>
        <WorksSect id='Work-Sect'/>
        <ServicessSect id='Services-Sect'/>
      </div>
    );
  }
}

export default App;
