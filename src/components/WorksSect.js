import React, { Component } from "react";
import Card from './Card';
import Works from '../assets/works.json';

export default class WorksSect extends Component {
  render(){
    return (
      <div id='Works-Sect'>
        <Card items={Works}/>
      </div>
    );
  }
}