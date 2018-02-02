import React, { Component } from "react";

export default class List extends Component {
  render(){
    const items = this.props.items.map((item, i) =>{
      return <li key={i}><a href=''>{item}</a></li>
    });
    return (
      <nav>
        <ul>
          {items}
        </ul>
      </nav>
    );
  }
}