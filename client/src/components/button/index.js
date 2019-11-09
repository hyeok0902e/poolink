import React, { Component } from 'react';

export default class Button extends Component {
  render() {
    let className = this.props.className || 'btn';
    let disable = this.props.disable;

    if (this.props.loading) {
      disable = true;
    }

    return (
      <button
        className={className}
        disabled={disable}
        onClick={this.props.onClick}
        type={this.props.onClick ? 'button' : 'submit'}
      >
        {this.props.children}
        {this.props.loading ? <p>Loading...</p> : null}
      </button>
    );
  }
}

Button.defaultProps = {
  className: 'btn',
  type: 'submit',
  loading: false,
  disable: false,
  onClick: null
};