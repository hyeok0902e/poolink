import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from './actions/auth';
import Main from './containers/layout/main';
import Header from './containers/layout/header';
import HomeContainer from './containers/home';
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
        <Header />
        <Main />
        <Switch>
          <Route exact path="/" component={HomeContainer} />
          <Route path="/posts" component={PostList} />
          <Route path="/:post_id" component={PostDetail} />
          <Route path="/categories" component={CategoryList} />
          
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