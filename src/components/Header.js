import React, { Component } from "react";
import List from './List';
import Logo from '../assets/img/logo.png';

export default class Header extends Component {
  render(){
    const listItems=['About','Works','Contacts'];
    return (
      <header>
        <img id='logo' src={Logo} alt='Logo'/>
        <nav className='Header-Nav'>
          <List items={listItems}/>
        </nav>
      </header>
    );
  }
}