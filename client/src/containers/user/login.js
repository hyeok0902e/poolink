import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoginForm from '../../components/login';

import { login } from '../../actions/auth';

class Login extends Component {
  handleLogin(email, password) {
    this.props.dispatch(login(email, password));
  }

  render() {
    if (this.props.isAuthenticated) {
      return null;
    }
    return (
      <LoginForm
        handleLogin={(email, password) => this.handleLogin(email, password)}
        loading={this.props.isFetching}
        error={this.props.error}
      />
    );
  }
}

const mapStateToProps = state => ({
  isFetching: state.auth.isFetching,
  error: state.auth.error,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Login);