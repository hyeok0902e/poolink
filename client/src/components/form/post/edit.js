import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updatePost } from '../../../actions/post'

class PostEditForm extends Component {
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
  }

  goBack() {
    setTimeout(() => {
      this.props.history.goBack();
    }, 500)
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      title: e.target.elements.title.value,
      content: e.target.elements.content.value
    }
    const post_id = this.props.match.params.post_id;
    this.props.updatePost(post_id, newPost);
    
    return this.goBack();
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
  updatePost: (post_id, newPost) => {
    dispatch(updatePost(post_id, newPost))
  }
});

export default connect(
  null,
  mapDispatchToProps,
)(PostEditForm);