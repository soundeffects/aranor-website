import React, { Component } from 'react';

import style from '../style.js';
import crest from '../images/aranor-logo.png';

import Background from './background';
import AuthWelcome from './auth/welcome';

class App extends Component {
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

    return [<Background loaded={ loaded }/>,
      <main style={ style.main } >
        <img style={ loaded ? style.crestAnim : style.crest }
          src={ crest } alt=''/>
        <h1 style={ loaded ?
          style.welcomeTitleAnim : style.welcomeTitle }>
          WELCOME TO ARANOR
        </h1>
        <AuthWelcome loaded={ loaded }/>
      </main>
    ];
  }
}

export default App;
