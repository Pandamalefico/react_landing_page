import React, { Component } from "react";

export default class Card extends Component {
  render(){
    const {img,title,text} = this.props;
    return (
      <div>
        <img src={require('../assets/img/'+ img+'.png' )} alt={title}/>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    );
  }
}