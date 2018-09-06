import React, { Component } from 'react';

import style from '../style.js';

import Background from './background';
import Header from './header';

class App extends Component {
  render() {
    return (
      <div style={style.appWrapper} className='app-wrapper'>
        <Background/>
        <main style={style.main}>
          <Header/>
        </main>
      </div>
    );
  }
}

export default App;
