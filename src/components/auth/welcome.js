import React, { Component } from 'react';
import Button from '../basic/button';


class AuthWelcome extends Component {
  render() {
    return [
      <Button color='white'>Login</Button>,
      <Button color='white'>About</Button>,
      <Button color='white'>Apply</Button>
    ];
  }
}

export default AuthWelcome;
