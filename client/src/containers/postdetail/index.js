import React, { Component } from 'react';
import axios from 'axios';

import PostForm from '../../components/postform';

class PostDetail extends Component {
  state = {
    post: {}
  }

  componentDidMount() {
    const post_id = this.props.match.params.post_id;
    axios.get(`http://127.0.0.1:8000/api/posts/${post_id}`)
      .then(res => {
        this.setState({
          post: res.data
        });
      })
  }

  render() {
    return (
      <div>
        <div>
          <p>title : {this.state.post.title}</p>
          <p>content : {this.state.post.content}</p>
        </div>
        <PostForm 
          requestType="PUT"
          post_id={this.props.match.params.post_id}
          btnText="Update"
        />
      </div>
    )
  }
}

export default PostDetail;