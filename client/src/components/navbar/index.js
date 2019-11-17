import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Link, NavLink, withRouter } from 'react-router-dom'
import { logout } from '../../actions/auth';

class NavBar extends Component {
  btnLogout = () => {
    this.props.logout();
    window.location.reload();
  }

  render () {
    const userMenu = this.props.isAuthenticated !== false ? (
      <div>
        <button onClick={this.btnLogout}>로그아웃</button>
      </div>
    ) : (
      <div>
        <Link to='/login'>로그인</Link>
        <Link to='/register'>회원가입</Link>
      </div>
    )

    return (
      <nav className="nav-wrapper">
        <div className="container">
          <a href="/" className="brand-logo">
            POOLINK
          </a>
          <ul className="right">
            <li><Link to="/">Home</Link></li>
            <li><NavLink to="/posts">Post List</NavLink></li>
            {userMenu}
          </ul>
        </div>
      </nav>
    )
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => {
      dispatch(logout())
    }
  }
}

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps)
)(NavBar)
