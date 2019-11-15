import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './components/navbar/index';
import Home from './components/home/index';
import LoginForm from './components/form/login/index';
import RegisterForm from './components/form/register/index';
import PostList from './containers/post';
import PostDetail from './containers/post/detail';
import PostCreateForm from './components/form/post/create';
import PostEditForm from './components/form/post/edit';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <NavBar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/login' component={LoginForm} />
            <Route exact path='/create' component={PostCreateForm} />
            <Route exact path='/register' component={RegisterForm} />
            <Route path='/posts' component={PostList} />
            <Route exact path='/:post_id' component={PostDetail} />
            <Route exact path='/:post_id/edit' component={PostEditForm} />
            
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;