import React, { Component } from "react";

export default class Card extends Component {
  render(){
    const {img,title,text} = this.props;
    return (
      <div>
        <img src={require('../assets/img/'+ img+'.png' )} alt={this.props.title}/>
        <h2>{this.props.title}</h2>
        <p>{this.props.text}</p>
      </div>
    );
  }
}