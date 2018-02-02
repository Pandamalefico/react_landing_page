import React, { Component } from "react";
import Items from '../assets/Services.json';

export default class ServicesSect extends Component {
  render(){
    const listItems = Items.map((item, i) => {
      return <li key={i}>{item}</li>;
    })
    return (
      <div id={this.props.id}>
        <header className='Services-Header'>
          <h3> Like what you see?</h3>
          <h2> We're Just Getting Started. </h2>
          <a href="">Learn About Us</a>
        </header>
        <ul>
          {listItems}
        </ul>
      </div>
    );
  }
}