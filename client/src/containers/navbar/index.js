import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Link,  withRouter } from 'react-router-dom'
import { logout } from '../../actions/auth';
import { userCheck } from '../../actions/user';
import { Container, Typography, Button, Toolbar } from '@material-ui/core';

import './styles.css';

class NavBar extends Component {
  componentDidMount() {
    this.props.userCheck();
  }

  btnLogout = () => {
    this.props.logout();
    window.location.reload();
  }

  render () {
    const currentUser = localStorage.getItem('username');

    const userMenu = (this.props.isAuthenticated !== false || currentUser) ? (
      <Button
        variant='outlined'
        size='small'
        onClick={this.btnLogout}
        >
          Logout
        </Button>
    ) : (
      <div>
        <Link to='/login' className='toolbarLink'>
          <Button
            variant='outlined'
            size='small'
            >
            Login
          </Button>
        </Link>
        <Link to='/register' className='toolbarLink'>
          <Button
            variant='outlined'
            size='small'
            >
            Register
          </Button>
        </Link>
      </div>
    )

    return (
      <Container maxWidth='lg'>
        <Toolbar className='toolbar'>
          <Link to='/' className='toolbarLink'>
            <Button variant='outlined' size='small'>Home</Button>
          </Link>
          <Typography
            component='h2'
            variant='h5'
            color='inherit'
            align='center'
            className='toolbarTitle'
            >
              POOLINK
            </Typography>
            {userMenu}
        </Toolbar>
        <Toolbar
          component='nav'
          variant='dense'
          className='toolbarSecondary'
          >
            <Link 
              to='/posts'
              color='inherit'
              variant='body2'
              className='toolbarLink'
              >
              POSTLIST
            </Link>
          </Toolbar>
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.user.isAuthenticated
  }
}

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  userCheck: () => dispatch(userCheck())
})

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps)
)(NavBar)
