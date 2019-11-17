import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userCheck } from '../../actions/user';

class BaseContainer extends Component {
  componentDidMount() {
    this.props.userCheck();
  }

  render() {
    return (
      <div />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.user.isAuthenticated
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