import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../../../actions/auth'

class LoginForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    

    return this.props.login(email, password);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>로그인</h1>
        <input placeholder="email" type="text" name="email" required="" />
        <input placeholder="password" type="password" name="password" required="" />
        <button>로그인</button>
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  login: (email, password) => {
    dispatch(login(email, password))
  }
});

export default connect(
  null,
  mapDispatchToProps,
)(LoginForm);