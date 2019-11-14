import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import { connect } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';

import * as actions from './actions/auth';
import Header from './containers/layout/header';
import Login from './containers/login';
import Signup from './containers/signup';
import PostList from './containers/postlist';
import CategoryList from './containers/categorylist';
import PostDetail from './containers/postdetail';

class App extends Component {
  componentDidMount() {
    this.props.onTryAutoSignup();
  }

  render() {
    return (
      <BrowserRouter>
        <Header {...this.props}/>
        <Switch>
          <Route exact path="/" component={PostList}/>
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/posts/:postId" component={PostDetail} />
          <Route exact path="/categories" component={CategoryList} />
        </Switch>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);