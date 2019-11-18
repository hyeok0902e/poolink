import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../../../actions/auth'
import { Link } from 'react-router-dom';
import { Button, Container, Typography, TextField } from '@material-ui/core';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
  }

  goBack() {
    setTimeout(() => {
      this.props.history.goBack();
    }, 300)
  }

  handleSubmit = (e) => {
    e.preventDefault();
    
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    this.props.login(email, password);
    return this.goBack();
  }

  render() {
    return (
      <Container maxWidth='sm'>
        <Typography
            component='h2'
            variant='h5'
            color='inherit'
            align='center'
            className='toolbarTitle'
            >
            LOGIN
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
            Login
          </Button>
        </form>
        <br/>
        <Container maxWidth='sm' align='center'>
          <Typography 
            variant='subtitle1'
            align='center'
            color='textSecondary'
            component='p'
            >
              회원이 아니신가요?
          </Typography>
          <Link to='/register' className='toolbarLink'>
            <Button
              variant='outlined'
              size='small'
              >
              Register
            </Button>
          </Link>
        </Container>
      </Container>
      
    )
  }
}

const mapDispatchToProps = dispatch => ({
  login: (email, password) => {
    dispatch(login(email, password))
  }
});

export default connect(
  null,
  mapDispatchToProps,
)(LoginForm);