import React, { Component } from 'react';
import axios from 'axios';

import Post from '../../components/post';
import PostForm from '../../components/postform';

class PostList extends Component {
  state = {
    posts: []
  }

  componentDidMount() {
    axios.get('http://127.0.0.1:8000/api/posts/')
      .then(res => {
        this.setState({
          posts: res.data.results
        });
        console.log(res.data.results);
      })
  }

  render() {
    return (
      <div>
        <Post data={this.state.posts}/>
        <h2>글쓰기</h2>
        <PostForm 
          requestType="POST"
          post_id={null}
          btnText="Create"
        />
      </div>
    )
  }
}

export default PostList;