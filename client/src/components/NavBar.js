import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="nav-wrapper">
      <div className="container">
        <a className="brand-logo">
          POOLINK
        </a>
        <ul className="right">
          <li><Link to="/">Home</Link></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}

export default withRouter(NavBar);