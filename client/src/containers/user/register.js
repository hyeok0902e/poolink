import React, { Component } from 'react';
import { connect } from 'react-redux';
import RegisterForm from '../../components/register';


class Register extends Component {
  handleRegister() {

  }

  render() {
    if (this.props.isAuthenticated) {
      return null;
    }
    return (
      <RegisterForm
      />
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Register);