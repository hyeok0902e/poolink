import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from './actions/auth';
import Header from './containers/layout/header';
import Footer from './containers/layout/footer';
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
        <Switch>
          <Route exact path="/" component={HomeContainer} />
          <Route exact path="/posts/:postId" component={PostDetail} />
          <Route exact path="/posts" component={PostList} />
          <Route exact path="/categories" component={CategoryList} />
        </Switch>
        <Footer />
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