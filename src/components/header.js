import React, { Component } from 'react';

import style from '../style';
import crest from '../images/aranor-logo.png';

class Header extends Component {
  render() {
    return <header style={style.welcomeWrapper}>
      <div>
        <img style={style.welcomeCrest} src={crest}/>
        <h1 style={style.welcomeh1}>WELCOME TO ARANOR</h1>
      </div>
    </header>;
  }
}

export default Header;
