import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/auth';

import { Link } from 'react-router-dom';

class Signup extends Component {
  handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.elements.email.value;
    const username = e.target.elements.username.value;
    const password = e.target.elements.password.value;

    this.props.onAuth(email, username, password);
    this.props.history.push(`/`);
  } 

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="login-form">
        <input type="text" name="email" />
        <br/>
        <input type="text" name="username" />
        <br/>
        <input type="password" name="password" />
        <br/>
        <input type="submit" value="submit" />
        <br/>
        <Link to='/login'>
          로그인
        </Link>
      </form>
    )
  }
}

const mapStateToProps = (state) => {
  return {
      loading: state.loading,
      error: state.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAuth: (email, username, password) => dispatch(actions.authSignup(email, username, password))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);