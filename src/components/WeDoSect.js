import React, { Component } from "react";
import Card from './Card';
import Items from '../assets/WeDo.json';

export default class WeDoSect extends Component {
  render(){
    return (
      <div id={this.props.id}>
        <Card items={Items}/>
        <a href="">Learn More About Us</a>
      </div>
    );
  }
}