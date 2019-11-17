import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createComment } from '../../../actions/comment'

class CommentCreateForm extends Component {
  constructor(props) {
    super(props);
    this.refreshPage = this.refreshPage.bind(this);
  }

  refreshPage() {
    setTimeout(() => {
      window.location.reload();
    }, 300)
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const post_id = this.props.match.params.post_id
    const newComment = {
      content: e.target.elements.content.value
    }
    this.props.createComment(post_id, newComment);
    return this.refreshPage();
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