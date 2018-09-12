import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import style from '../../style/style';


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
    return <Link
      onMouseEnter={ this.handleStartHover }
      onMouseLeave={ this.handleEndHover }
      onMouseDown={ this.handleStartPressed }
      onMouseUp={ this.handleEndPressed }
      style={style.button(this.props.color, this.state.mode)}
      to={ this.props.to }>
      {this.props.children}
    </Link>;
  }
}

export default Button;
