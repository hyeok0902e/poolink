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
          <li><NavLink to="/posts">Post List</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}

export default withRouter(NavBar);