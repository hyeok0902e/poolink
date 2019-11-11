import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import * as actions from '../../../actions/auth';

import CategoryList from '../../categorylist';

class Header extends Component {
  render() {
    return (
      <div className="layout-header">
        <Link to="/">POOLINK</Link>
        <CategoryList />
        
        {
          this.props.isAuthenticated ?
            <button onClick={this.props.logout}>logout</button>
            :
            <Link to ="/login">Login</Link> 
        }
        <p>----------------</p>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
      logout: () => dispatch(actions.logout()) 
  }
}


export default connect(null, mapDispatchToProps)(Header);