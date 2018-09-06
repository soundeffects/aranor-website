import React, { Component } from 'react';

import style from '../style';
import image from '../images/castle-background.jpg';

class Background extends Component {
  render() {
    return <img style={style.backgroundImage} src={image}/>
  }
}

export default Background;
