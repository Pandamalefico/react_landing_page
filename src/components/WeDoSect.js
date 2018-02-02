import React, { Component } from "react";
import Card from './Card';

export default class WeDoSect extends Component {
  render(){
    const items = [
      {
        img: 'boat',
        title: 'Web Design & Development',
        text: 'Your website is your chance to convey your message to the world. We help you shine through the virtual web to be unique and memorable. Partner with us for gorgeous designs along with genius user experience and top code.'
      },
      {
        img: 'brand',
        title: 'Brand Development',
        text: 'From creating a fitting logo to the birth of your brand identity – we follow top design to really make your project stand out. Allow us to blow your mind, from idea to reality!'
      },
      {
        img: 'marketing',
        title: 'Managed Services & Marketing',
        text: 'We offer full time maintenance services along with online social/content marketing to complete the entire cycle of fine tuning and promoting your new website post launch.'
      }
    ];
    const displayCards = items.map((item, i)=>{
      return <Card img={item.img} title={item.title} text={item.text} alt={item.title} key={i}/>
    });
    return (
      <div id={this.props.id}>
        {displayCards}
      </div>
    );
  }
}