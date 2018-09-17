import React, { Component } from 'react';
import style from '../../style/style';
import image from '../../images/background.jpg';


class Background extends Component {
  render() {
    return [<img style={this.props.loaded ?
      style.backgroundImageAnim : style.backgroundImage}
    src={image} alt=""/>,
    <main style={ style.main }>{ this.props.children }</main>];
  }
}

export default Background;
