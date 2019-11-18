import React, { Component } from 'react';
import { Container, Typography } from '@material-ui/core';
import './styles.css';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      TIGERMEAL
      {' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default class Footer extends Component {
  render() {
    return (
      <footer className='footer'>
        <Container maxWidth='sm'>
          <Typography
            variant='h6'
            align='center'
            gutterBottom
            >
              POOLINK
          </Typography>
          <Typography
            variant='subtitle1'
            align='center'
            color='textSecondary'
            component='p'
            >
            POOLINK links person to each other
          </Typography>
          <Copyright />
          </Container>
      </footer>
    )
  }
}