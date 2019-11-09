import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Button from '../button';

export default class GuestNav extends Component {
  render() {
    return (
      <div className="guest_menu">
        <Button
          className='btn-signIn'
          type='button'
        >
          <Link to="/login/">Login</Link>
        </Button>
        <br />
        <Button
          className='btn-register'
          type='button'
        >
          <Link to="/register/">Register</Link>
        </Button>
      </div>
    );
  }
}