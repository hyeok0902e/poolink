import React, { Component } from 'react';
import { connect } from 'react-redux';
import { register } from '../../../actions/auth'
import { Container, Typography, TextField, Button } from '@material-ui/core';

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.goHome = this.goHome.bind(this);
  }

  goHome() {
    this.props.history.goBack();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    
    const email = e.target.elements.email.value;
    const username = e.target.elements.username.value;
    const password = e.target.elements.password.value;
    this.props.register(email, username, password)
    return this.goHome();
  }

  render() {
    const currentUser = localStorage.getItem('username')

    const form = (this.props.isAuthenticated !== false || currentUser)? (
      <Typography 
        variant='subtitle1'
        align='center'
        color='textSecondary'
        component='p'
        >
          이미 로그인 되어 있습니다.
      </Typography>
    ) : (
      <Container maxWidth='sm'>
        <Typography
          component='h2'
          variant='h5'
          color='inherit'
          align='center'
          className='toolbarTitle'
          >
          REGISTER
        </Typography>
        <form onSubmit={this.handleSubmit} autoComplete='off' align='center' >
          <TextField
            className='textField'
            label='Email'
            name='email'
            margin='normal'
            />
          <br />
          <TextField
            className='textField'
            label='Username'
            name='username'
            margin='normal'
            />
          <br />
          <TextField
            className='textField'
            label="Password"
            name='password'
            type='password'
            margin="normal"
            />
          <br />
          <Button
            type='submit'
            variant='outlined'
            size='small'
            >
            REGISTER
          </Button>
        </form>
      </Container>
    )
    
    return (
      <Container maxWidth='sm'>
        {form}
      </Container>
      
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.user.isAuthenticated
  }
};

const mapDispatchToProps = dispatch => ({
  register: (email, username, password) => {
    dispatch(register(email, username, password))
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RegisterForm);