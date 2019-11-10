import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import PostList from './containers/postlist';
import PostDetail from './containers/postdetail';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/posts/" component={PostList} />
      <Route exact path="/posts/:post_id/" component={PostDetail} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'));

serviceWorker.unregister();