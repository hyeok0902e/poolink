import React, { Component } from 'react';

import GuestNav from './guestNav';
import UserNav from './userNav';

class UserMenu extends Component {
  render() {
    //   TODO : test 끝나고 바꿀 것
    if (!this.props.isAuthenticated) {
      return (
        <UserNav 
          username={this.props.username}
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