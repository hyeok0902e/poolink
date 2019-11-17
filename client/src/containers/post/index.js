import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPost } from '../../actions/post';
import PostList from '../../components/postlist/index';

class PostContainer extends Component {
  componentDidMount() {
    this.props.getPost();
  }

  render() {
    return (
      <PostList {...this.props} />
    );
  }
}

const mapStateToProps = state => ({
  posts: state.post.posts,
  isAuthenticated: state.user.isAuthenticated
});

const mapDispatchToProps = dispatch => {
  return {
    getPost: () => {
      dispatch(getPost())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostContainer);