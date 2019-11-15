import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createPost } from '../../../actions/post'

class PostCreateForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      title: e.target.elements.title.value,
      content: e.target.elements.content.value
    }
    console.log(newPost)
    return this.props.createPost(newPost);
  }

  render() {
    return (
      <form onSubmit={(event) => this.handleSubmit(event)}>
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

const mapDispatchToProps = dispatch => ({
  createPost: newPost => {
    dispatch(createPost(newPost))
  }
});

export default connect(
  null,
  mapDispatchToProps,
)(PostCreateForm);