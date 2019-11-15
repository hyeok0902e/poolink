import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getComment } from '../../actions/comment';
import Comment from '../../components/comment';

class CommentContainer extends Component {
  componentDidMount() {
    
    this.props.getComment(this.props.match.params.post_id);
  }

  render() {
    return (
      <Comment {...this.props} />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  let post_id = ownProps.match.params.post_id;
  return {
    comments: state.comment.comments.filter(comment => comment.object_id == post_id)
  }
  
};

const mapDispatchToProps = dispatch => {
  return {
    getComment: (post_id) => {
      dispatch(getComment(post_id))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CommentContainer);