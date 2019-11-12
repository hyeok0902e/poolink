import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './styles.scss';

import * as actions from '../../actions/auth';
import HomeContainer from '../home';

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
      <HomeContainer>
        <form onSubmit={this.handleSubmit}>
          <h1>로그인</h1>
          <input placeholder="email" type="text" name="email" required="" />
          <input placeholder="password" type="password" name="password" required="" />
          <button>로그인</button>
        </form>
        <NavLink to="/signup" className="signup-link">
          <button>회원가입</button>
        </NavLink>
      </HomeContainer>
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