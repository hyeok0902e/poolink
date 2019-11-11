import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import PostForm from '../../components/postform';

class PostDetail extends Component {
  state = {
    post: {}
  }

  componentDidMount() {
    const postId = this.props.match.params.postId;
    axios.get(`http://127.0.0.1:8000/api/posts/${postId}/`)
      .then(res => {
        this.setState({
          post: res.data
        });
      })
      .catch(error => {
        console.error(error);
      })
  }

  handleDelete = (e) => {
    const postId = this.props.match.params.postId;
    axios.delete(`http://127.0.0.1:8000/api/posts/${postId}/delete/`);
    this.props.history.push('/');
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
          postId={this.props.match.params.postId}
          btnText="Update"
        />
        <form onSubmit={this.handleDelete}>
          <button>Delete</button>
        </form>
        <Link to="/posts/">목록으로</Link>
      </div>
    )
  }
}

export default PostDetail;