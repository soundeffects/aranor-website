import React, { Component } from 'react';
import AnimateHeight from 'react-animate-height';

import style from '../../style';

import Button from '../basic/button';

class AuthWelcome extends Component {
  render() {
    const { loaded } = this.props;

    return <div style={ loaded ?
      style.welcomeAuthAnim : style.welcomeAuth }>
      <AnimateHeight duration={2000} height={ loaded ? 'auto' : 0 }>
        <section style={ style.glass }>
          <Button color='white'>Login</Button>
          <Button color='white'>Guest</Button>
          <Button color='white'>Register</Button>
        </section>
      </AnimateHeight>
    </div>;
  }
}

export default AuthWelcome;
