import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Toolbar } from '@material-ui/core';
import './styles.css';

export default class Category extends Component {
  render() {
    const categories = this.props.categories.map(category => {
      return(
        <Link 
          // to={'category?' + category.slug}
          to='/'
          key={category.id}
          color='inherit'
          variant='body2'
          className='toolbarLink'
          >
          {category.title}
        </Link>
      )
    })

    return (
      <Toolbar
        component='nav'
        variant='dense'
        className='toolbarSecondary'
        >
        {categories}
        <Link 
          to='/posts'
          color='inherit'
          variant='body2'
          className='toolbarLink'
          >
          POSTLIST
        </Link>
      </Toolbar>
    );
  }
}