import React, { Component } from 'react';

import style from '../style.js';

import Background from './background';

class App extends Component {
  render() {
    return (
      <div style={style.appWrapper} className='app-wrapper'>
        <Background>
          <main style={style.main}>
            testing
          </main>
        </Background>
      </div>
    );
  }
}

export default App;
