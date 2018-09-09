import React, { Component } from 'react';

import style from '../style';
import image from '../images/background.jpg';

class Background extends Component {
  render() {
    return <img style={this.props.loaded ?
      style.backgroundImageAnim :
      style.backgroundImage}
    src={image} alt=""/>;
  }
}

export default Background;
