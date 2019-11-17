import React, { Component } from 'react';
import { connect } from 'react-redux';
import { register } from '../../../actions/auth'

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.goHome = this.goHome.bind(this);
  }

  goHome() {
    this.props.history.goBack();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    
    const email = e.target.elements.email.value;
    const username = e.target.elements.username.value;
    const password = e.target.elements.password.value;
    this.props.register(email, username, password)
    return this.goHome();
  }

  render() {
    const form = this.props.isAuthenticated !== false ? (
      <div>
        <p>이미 로그인 되어 있습니다.</p>
      </div>
    ) : (
      <form onSubmit={this.handleSubmit}>
        <h1>회원가입</h1>
        <input placeholder="email" type="text" name="email" required="" />
        <input placeholder="username" type="text" name="username" required="" />
        <input placeholder="password" type="password" name="password" required="" />
        <button>회원가입</button>
      </form>
    )
    return (
      <div>
        {form}
      </div>
      
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.user.isAuthenticated
  }
};

const mapDispatchToProps = dispatch => ({
  register: (email, username, password) => {
    dispatch(register(email, username, password))
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RegisterForm);