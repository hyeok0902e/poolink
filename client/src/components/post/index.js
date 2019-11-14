import React from 'react';
import moment from 'moment';
import { Table } from 'react-bootstrap';

import HomeContainer from '../../containers/home';

const Post = (props) => {
  return (
    <HomeContainer>
      <Table responsive className="post-list">
        <thead>
          <tr>
            <th>제목</th>
            <th>작성자</th>
            <th>날짜</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((post, index) => (
            <tr key={index}>
              <td><a href={`posts/${post.id}`}>{post.title}</a></td>
              <td>{post.user.username}</td>
              <td>{moment(post.created_at).fromNow()}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </HomeContainer>
  );
}

export default Post;