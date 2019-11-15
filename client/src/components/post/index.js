import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Post extends Component {
  render() {
    const post_id = this.props.match.params.post_id;
    
    return (
      <div>
        <p>{this.props.username}</p>
        <h1>{this.props.title}</h1>
        <p>{this.props.content}</p>
        <Link to={'/' + post_id + '/edit'}>수정하기</Link>
      </div>
    )
  }
}