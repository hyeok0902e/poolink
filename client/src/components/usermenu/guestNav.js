import React, { Component } from 'react';
import { withRouter } from 'react-router';

import Button from '../button';

class GuestNav extends Component {
  render() {
    return (
      <div className="guest_menu">
        <Button
          className='btn-signIn'
          type='button'
          onClick={() => this.props.history.push('/login')}
        >
          Login
        </Button>
        <br />
        <Button
          className='btn-register'
          type='button'
          onClick={() => this.props.history.push('/register')}
        >
          Register
        </Button>
      </div>
    );
  }
}

export default withRouter(GuestNav);