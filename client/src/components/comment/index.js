import React, { Component } from 'react';
import CommentForm from '../form/comment/create';
import ReplyButton from '../button/reply/index';

export default class Comment extends Component {
  render() {
    
    const comment = this.props.comments.length !== 0 ? (
      this.props.comments.filter(comment => comment.parent === null)
        .map(comment => {
          return (
            <div key={comment.id}>
              <p>---------------------------------------------------------------</p>
              <p>{comment.content} - 작성자 : {comment.user.username}</p>
              <ReplyButton comment_id={comment.id} post_id={this.props.post_id}/>

              {comment.replies.map(reply => {
                return (
                  <div key={reply.id}>
                    <p>ㄴ{reply.content} - 작성자 : {reply.user.username}</p>
                  </div>
                )
              })}
            </div>
          )
        })
    ) : (
        <p>댓글이 아직 없어요.</p>
      )

    return (
      <div>
        {comment}
        <CommentForm {...this.props} />
      </div>
    )
  }
}
