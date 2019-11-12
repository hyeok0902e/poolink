import React from 'react';

import HomeContainer from '../../containers/home';

const Post = (props) => {
  return (
    <HomeContainer>
      <div className="post-list">
        <p>Post List</p>
        {props.data.map((post, index) => (
          <div key={index}>
            <a href={`${post.id}`}><p>제목 : {post.title}</p></a>
            <p>내용 : {post.content}</p>
          </div>
        ))}
      </div>
    </HomeContainer>
  );
}

export default Post;