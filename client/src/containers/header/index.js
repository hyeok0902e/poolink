import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions/auth';

import Logo from '../../components/logo';
import Usermenu from '../../components/usermenu';

class Header extends Component {
  handleLogout() {
    this.props.dispatch(actions.logout());
  }

  render() {
    return (
      <header className="header">
        <Logo />
        <Usermenu 
          isAuthenticated={this.props.isAuthenticated}
          username={this.props.username}
          email={this.props.email}
          logout={() => this.handleLogout}
          isFetching={this.props.isFetching}
        />
      </header>
    );
  }
}

const mapStateToProps = state => ({
  username: state.auth.username,
  eamil: state.auth.email,
  isAuthenticated: state.auth.isAuthenticated,
  isFetching: state.auth.isFetching
});

const HeaderContainer = connect(mapStateToProps)(Header);
export default HeaderContainer;