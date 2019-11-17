import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userCheck } from '../../actions/auth';

class BaseContainer extends Component {
  componentDidMount() {
    this.props.userCheck();
  }

  render() {
    console.log('로그인 되어있나?', this.props.isAuthenticated)
    return (
      <div />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  }
};

const mapDispatchToProps = dispatch => {
  return {
    userCheck: () => dispatch(userCheck())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BaseContainer);