import React, { Component } from 'react';
import Button from '../basic/button';


class WelcomeMenu extends Component {
  render() {
    return [
      <Button color='white' to='login'>Login</Button>,
      <Button color='white' to='about'>About</Button>,
      <Button color='white' to='apply'>Apply</Button>
    ];
  }
}

export default WelcomeMenu;
