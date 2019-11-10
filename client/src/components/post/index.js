import React from 'react';

const Post = (props) => {
  return (
    <div className="post-list">
      <p>Post List</p>
      {props.data.map((post, index) => (
        <div key={index}>
          <a href={`posts/${post.id}`}><p>제목 : {post.title}</p></a>
          <p>내용 : {post.content}</p>
        </div>
      ))}
    </div>
  );
}

export default Post;