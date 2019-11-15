import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getDetailPost } from '../../../actions/post';
import Post from '../../../components/post/index';

class PostDetail extends Component {
  componentDidMount() {
    let post_id = this.props.match.params.post_id;
    this.props.getDetailPost(post_id);
  }

  render() {
    return (
      <Post {...this.props} />
    );
  }
}

const mapStateToProps = state => ({
  title: state.post.title,
  content: state.post.content,
  category: state.post.category,
  username: state.post.username
});

const mapDispatchToProps = dispatch => {
  return {
    getDetailPost: post_id => {
      dispatch(getDetailPost(post_id))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostDetail);