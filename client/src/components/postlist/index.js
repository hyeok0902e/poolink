import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import moment from 'moment';


export default class PostList extends Component {
  render() {
    const { posts } = this.props;

    const postList = posts.length ? (
      posts.map(post => {
        return (
          <div className="post" key={post.id}>
            <div className="post-content">
              <Link to={'/' + post.id}>
              <h1 className="post-title">{post.title}</h1>
              </Link>
              <p>{post.content}</p>
              <p>{moment(post.created_at).fromNow()}</p>
            </div>
          </div>
        )
      })
    ) : (
      <div className="center">No posts yet</div>
    )
    
    return (
      <div>
        <Link to='/create'>글쓰기</Link>
        {postList}
      </div>
    )
  }
}