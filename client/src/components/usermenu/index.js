import React, { Component } from 'react';

import GuestNav from './guestNav';
import UserNav from './userNav';

class UserMenu extends Component {
  render() {
    if (this.props.isAuthenticated) {
      return (
        <UserNav 
          username={this.props.username}
          logout={this.props.logout}
          isFetching={this.props.isFetching}
        />
      );
    } else {
      return (
        <GuestNav />
      );
    }
  }
}

export default UserMenu;