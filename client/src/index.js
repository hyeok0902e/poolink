import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import store from './store';
import * as serviceWorker from './serviceWorker';

import HeaderContainer from './containers/header';
import Register from './components/register';
import Login from './containers/user/login';

ReactDOM.render(
  <Provider store={store}>
    <App />
    <BrowserRouter>
      <div className="container">
        <HeaderContainer />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/" component={App} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root')
);

serviceWorker.register();