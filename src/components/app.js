import React, { Component } from 'react';

import style from '../style.js';

import Header from './header';

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

    return (
      <div style={style.appWrapper} className='app-wrapper'>
        <main style={style.main} >
          <Header loaded={loaded}/>
        </main>
      </div>
    );
  }
}

export default App;
