import React, { Component } from 'react';
import axios from 'axios';

class PostForm extends Component {
  handleSubmit = (e, requestType, post_id) => {
    e.preventDefault();
    
    const title = e.target.elements.title.value;
    const content = e.target.elements.content.value;

    switch (requestType) {
      case 'POST':
        return axios.post('http://127.0.0.1:8000/api/posts/create/', {
          title: title,
          content: content
        })
          .then(res => console.log(res))
          .catch(error => console.error(error));
      case 'PUT':
        return axios.put(`http://127.0.0.1:8000/api/posts/${post_id}/edit/`, {
          title: title,
          content: content
        })
          .then(res => console.log(res))
          .catch(error => console.error(error));
    }
  }

  render() {
    return (
      <form onSubmit={(event) => this.handleSubmit(
          event,
          this.props.requestType,
          this.props.post_id )}>
        <label>제목:
          <input type='text' name='title' />
        </label>
        <br />
        <label>내용:
          <input type='text' name='content' />
        </label>
        <br />
        <input type='submit' value={this.props.btnText} />
      </form>
    )
  }
}

export default PostForm;