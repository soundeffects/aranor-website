import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Background from './components/background';
import AuthRoot from './components/auth/root';
import AuthWelcome from './components/auth/welcome';
import registerServiceWorker from './registerServiceWorker';
import reducers from './reducers/root';

const createStoreWithMiddleware = applyMiddleware()(
  compose((window.devToolsExtension ?
    window.devToolsExtension() : f => f)(createStore)));


function main() {
  ReactDOM.render(
    <Provider store={ createStoreWithMiddleware(reducers) }>
      <BrowserRouter>
        <Switch>
          <Background>
            <AuthRoot>
              <Route path='/' exact component={AuthWelcome}/>
            </AuthRoot>
          </Background>
        </Switch>
      </BrowserRouter>
    </Provider>,
  document.getElementById('root'));
}

document.addEventListener('DOMContentLoaded', main);
registerServiceWorker();
