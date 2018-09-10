import React, { Component } from 'react';
import style from '../style';
import image from '../images/background.jpg';


class Background extends Component {
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
    return [<img style={this.state.loaded ?
      style.backgroundImageAnim : style.backgroundImage}
    src={image} alt=""/>,
    <main style={ style.main }>{ this.props.children }</main>];
  }
}

export default Background;
