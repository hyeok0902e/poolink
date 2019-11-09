import React, { Component } from 'react';

import Button from '../button';

class UserNav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const test_username = 'baro'
    return (
      <div className="userMenu">
        <Button>
          <p>{this.props.username || test_username}</p>
        </Button>
        <div className='userMenu_content'>
          <a href="#">Logout</a> 
        </div>
      </div>
    );
  }
}

export default UserNav