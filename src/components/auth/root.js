import React, { Component } from 'react';
import AnimateHeight from 'react-animate-height';
import style from '../../style/style';
import crest from '../../images/aranor-logo.png';


class AuthRoot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    }
  }

  componentDidMount() {
    setTimeout(function()
      { this.setState({ loaded: true })
    }.bind(this), 1000);
  }

  render() {
    const { loaded } = this.state;

    return [
      <img style={ loaded ? style.crestAnim : style.crest }
        src={ crest } alt=''/>,
      <h1 style={ loaded ?
        style.welcomeTitleAnim : style.welcomeTitle }>
        WELCOME TO ARANOR
      </h1>,
      <div style={ loaded ?
        style.welcomeAuthAnim : style.welcomeAuth }>
        <AnimateHeight duration={2000} height={ loaded ? 'auto' : 0 }>
          <section style={ style.glass }>
            { this.props.children }
          </section>
        </AnimateHeight>
      </div>
    ];
  }
}

export default AuthRoot;
