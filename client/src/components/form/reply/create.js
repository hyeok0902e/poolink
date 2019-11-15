import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createReply } from '../../../actions/comment';

class CreateReplyForm extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    const post_id = this.props.post_id
    const comment_id = this.props.comment_id
    const newReply = {
      content: e.target.elements.content.value
    }
    return this.props.createReply(post_id, comment_id, newReply);
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
  createReply: (post_id, comment_id, newComment) => {
    dispatch(createReply(post_id, comment_id, newComment))
  }
});

export default connect(
  null,
  mapDispatchToProps,
)(CreateReplyForm);