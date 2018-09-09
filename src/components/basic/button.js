import React, { Component } from 'react';

import style from '../../style';

class Button extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mode: false
    };

    this.handleStartHover = this.handleStartHover.bind(this);
    this.handleEndHover = this.handleEndHover.bind(this);
    this.handleStartPressed = this.handleStartPressed.bind(this);
    this.handleEndPressed = this.handleEndPressed.bind(this);
  }

  handleStartHover(e) {
    this.setState({ mode: 'hover' });
  }

  handleEndHover(e) {
    this.setState({ mode: null });
  }

  handleStartPressed(e) {
    this.setState({ mode: 'pressed' });
  }

  handleEndPressed(e) {
    this.setState({ mode: 'hover' });
  }

  render() {
    return <button
      onMouseEnter={ this.handleStartHover }
      onMouseLeave={ this.handleEndHover }
      onMouseDown={ this.handleStartPressed }
      onMouseUp={ this.handleEndPressed }
      style={style.button(this.props.color, this.state.mode)}>
      {this.props.children}
    </button>;
  }
}

export default Button;
