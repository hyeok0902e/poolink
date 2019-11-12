import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import HomeContainer from '../home';

import * as actions from '../../actions/auth';
import './styles.scss';

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
      <HomeContainer>
      <form onSubmit={this.handleSubmit}>
        <h1>회원가입</h1>
        <input placeholder="email" type="text" name="email" required="" />
        <input placeholder="username" type="text" name="username" required="" />
        <input placeholder="password" type="password" name="password" required="" />
        <button>회원가입</button>
      </form>
      <NavLink to="/login" className="login-link">
        <button>로그인</button>
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
    onAuth: (email, username, password) => dispatch(actions.authSignup(email, username, password))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);