import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getDetailPost } from '../../../actions/post';
import Post from '../../../components/post/index';
import CommentContainer from '../../../containers/comment/index';
import { Container } from '@material-ui/core';

class PostDetail extends Component {
  componentDidMount() {
    let post_id = this.props.match.params.post_id;
    this.props.getDetailPost(post_id);
  }

  render() {
    return (
      <Container maxWidth='lg'>
        <Post {...this.props} />
        <CommentContainer {...this.props}/>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  title: state.post.title,
  content: state.post.content,
  username: state.post.username,
  isAuthenticated: state.user.isAuthenticated
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