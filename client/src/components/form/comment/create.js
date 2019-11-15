import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createComment } from '../../../actions/comment'

class CommentCreateForm extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    const post_id = this.props.match.params.post_id
    const newComment = {
      content: e.target.elements.content.value
    }
    return this.props.createComment(post_id, newComment);
  }

  render() {
    return (
      <form onSubmit={(event) => this.handleSubmit(event)}>
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
  createComment: (post_id, newComment) => {
    dispatch(createComment(post_id, newComment))
  }
});

export default connect(
  null,
  mapDispatchToProps,
)(CommentCreateForm);