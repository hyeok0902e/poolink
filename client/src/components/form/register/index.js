import React, { Component } from 'react';
import { connect } from 'react-redux';
import { register } from '../../../actions/auth'

class RegisterForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    
    const email = e.target.elements.email.value;
    const username = e.target.elements.username.value;
    const password = e.target.elements.password.value;

    return this.props.register(email, username, password);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>회원가입</h1>
        <input placeholder="email" type="text" name="email" required="" />
        <input placeholder="username" type="text" name="username" required="" />
        <input placeholder="password" type="password" name="password" required="" />
        <button>회원가입</button>
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  register: (email, username, password) => {
    dispatch(register(email, username, password))
  }
});

export default connect(
  null,
  mapDispatchToProps,
)(RegisterForm);