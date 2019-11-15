import React, { Component } from 'react';
import CommentForm from '../form/comment/create';

export default class Comment extends Component {
  render() {

    const comment = this.props.comments.length !== 0 ? (
      this.props.comments.map(comment => {
        return (
          <div key={comment.id}>
            <p>{comment.content} - 작성자 : {comment.user.username}</p>
          </div>
        )
      })
    ) : (
      <p>댓글이 아직 없어요.</p>
    )

    return (
      <div>
        {comment}
        <CommentForm {...this.props}/>
      </div>
    )
  }
}