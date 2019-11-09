import React, { Component } from 'react';

import Button from '../button';

export default class GuestNav extends Component {
  render() {
    return (
      <div className="guest_menu">
        <Button
          className='btn-signUp'
          type='button'
        >
          SignUp
                </Button>
        <br />
        <Button
          className='btn-register'
          type='button'
        >
          Register
                </Button>
      </div>
    );
  }
}