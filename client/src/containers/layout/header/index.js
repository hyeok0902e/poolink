import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

import * as actions from '../../../actions/auth';
import './styles.css';

import CategoryList from '../../categorylist';

class Header extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" className="nav-bar-wrapper" variant="dark">
        <Navbar.Brand as={Link} to="/">POOLINK</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <CategoryList />
          </Nav>
          <Nav>
            {
              this.props.isAuthenticated ?
              <Nav.Link onClick={this.props.logout}>Logout</Nav.Link>
              :
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
            }
            
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(actions.logout())
  }
}


export default connect(null, mapDispatchToProps)(Header);