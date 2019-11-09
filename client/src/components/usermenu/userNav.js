import React, { Component } from 'react';

import Button from '../button';


class UserNav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const test_username = 'baro'
    console.log('user logout', this.props.logout)
    return (
      <div className="userMenu">
        
        <p>{this.props.username || test_username}</p>
        
        <div className='userMenu-content'>
          <Button
            className="btn-logout"
            onClick={this.props.logout}
          >
          Logout
          </Button>
        </div>
      </div>
    );
  }
}

export default UserNav