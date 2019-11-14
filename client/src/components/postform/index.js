import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import * as actions from '../../actions/post';

class PostForm extends Component {
  handleSubmit = (e, requestType, postId) => {
    e.preventDefault();
    const newPost = {
      title: e.target.elements.title.value,
      content: e.target.elements.content.value
    }
    switch (requestType) {
      case 'POST':
        return this.props.createPost(newPost);
      case 'PUT':
        return this.props.updatePost(postId, newPost)
      default:
    }
  }

  render() {
    return (
      <form onSubmit={(event) => this.handleSubmit(
          event,
          this.props.requestType,
          this.props.postId )}>
        <label>제목:
          <input type='text' name='title' />
        </label>
        <br />
        <label>내용:
          <input type='text' name='content' />
        </label>
        <br />
        <input type='submit' value={this.props.btnText} />
      </form>
    )
  }
}

const mapStateToProps = state => {
  return {
    loading: state.loading,
    error: state.error,
    token: state.token
  };
};

const mapDispatchToProps = dispatch => ({
  createPost: newPost => {
    dispatch(actions.createPost(newPost))
  },
  updatePost: (postId, newPost) => {
    dispatch(actions.updatePost(postId, newPost))
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);