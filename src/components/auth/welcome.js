import React, { Component } from 'react';
import Button from '../basic/button';


class AuthWelcome extends Component {
  render() {
    return [
      <Button color='white' to='#'>Login</Button>,
      <Button color='white' to='about'>About</Button>,
      <Button color='white' to='#'>Apply</Button>
    ];
  }
}

export default AuthWelcome;
