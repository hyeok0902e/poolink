import React, { Component } from 'react';
import axios from 'axios';

import Post from '../../components/post';

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
      <Post data={this.state.posts}/>
    )
  }
}

export default PostList;