import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Background from './components/basic/background';
import WelcomeRoot from './components/welcome/root';
import registerServiceWorker from './registerServiceWorker';
import reducers from './reducers/root';
import './style/grommet.min.css';


const createStoreWithMiddleware = applyMiddleware()(
  compose((window.devToolsExtension ?
    window.devToolsExtension() : f => f)(createStore)));


function main() {
  ReactDOM.render(
    <Provider store={ createStoreWithMiddleware(reducers) }>
      <BrowserRouter>
        <Switch>
          <Background>
            <WelcomeRoot/>
          </Background>
        </Switch>
      </BrowserRouter>
    </Provider>,
  document.getElementById('root'));
}

document.addEventListener('DOMContentLoaded', main);
registerServiceWorker();
