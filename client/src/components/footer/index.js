import React, { Component } from 'react';
import { Container, Typography } from '@material-ui/core';

export default class Footer extends Component {
  render() {
    return (
      <footer className='footer'>
        <Container maxWidth='lg'>
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
              POOLINK EXPLAIN
          </Typography>
          </Container>
      </footer>
    )
  }
}