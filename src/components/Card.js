import React, { Component } from "react";

export default class Card extends Component {
  render(){
    const itemsList = this.props.items.map((item, i)=>{
      return (
        <div key={i}>
          <img src={require('../assets/img/'+item.img+'.png')} alt={item.title}/>
          <h2>{item.title}</h2>
          <p>{item.text}</p>
        </div>
      )
    });
    return (
      <div className="card-container">
        {itemsList}
      </div>
    );
  }
}