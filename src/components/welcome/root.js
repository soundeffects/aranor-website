import React, { Component } from 'react';
import AnimateHeight from 'react-animate-height';
import Scrollbars from 'react-custom-scrollbars';
import { Route } from 'react-router-dom';
import WelcomeMenu from './menu';
import WelcomeAbout from './about';
import WelcomeLogin from './login';
import styles from '../../style/style';
import crest from '../../images/aranor-logo.png';


class WelcomeRoot extends Component {
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

  renderThumb({ style, ...props }) {
    return <div style={{ ...style, ...styles.scrollGlassThumb }} {...props}/>;
  }

  render() {
    const { loaded } = this.state;

    return [
      <img style={ loaded ? styles.crestAnim : styles.crest }
        src={ crest } alt=''/>,
      <h1 style={ loaded ?
        styles.welcomeTitleAnim : styles.welcomeTitle }>
        WELCOME TO ARANOR
      </h1>,
      <div style={ loaded ?
        styles.welcomeAuthAnim : styles.welcomeAuth }>
        <AnimateHeight duration={2000} height={ loaded ? 'auto' : 0 }>
          <Scrollbars
            renderThumbVertical={this.renderThumb}
            autoHeight
            autoHeightMax={400}
            style={ styles.scrollGlass }>
            <section style={ styles.glass }>
              <Route path='/' exact component={WelcomeMenu}/>
              <Route path='/about' component={WelcomeAbout}/>
              <Route path='/login' component={WelcomeLogin}/>
            </section>
          </Scrollbars>
        </AnimateHeight>
      </div>
    ];
  }
}

export default WelcomeRoot;
