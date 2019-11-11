import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/auth';

import { Link } from 'react-router-dom';

class Login extends Component {
  handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    
    this.props.onAuth(email, password);
    this.props.history.push(`/`);
  } 

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="login-form">
        <input type="text" name="email" />
        <br/>
        <input type="password" name="password" />
        <br/>
        <input type="submit" value="submit" />
        <br/>
        <Link to='/signup'>
          회원가입
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
    onAuth: (email, password) => dispatch(actions.authLogin(email, password))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);