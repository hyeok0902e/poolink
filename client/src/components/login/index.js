import React, { Component } from 'react';
import Button from '../button';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleClick() {
    this.props.handleLogin(this.state.email, this.state.password);
  }

  render() {
    return (
      <div className="login-container">
        <form>
          <div className="form-group">
            <h4>Login</h4>
            <input className="form-control"
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              required />
          </div>
          <div className="form-group">
            <input className="form-control"
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              required />
          </div>
          <Button
            loading={this.props.loading}
            onClick={() => this.handleClick()}>Login
          </Button>
        </form>
      </div>
    );
  }
}

export default LoginForm;