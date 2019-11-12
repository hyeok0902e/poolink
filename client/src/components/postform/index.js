import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class PostForm extends Component {
  handleSubmit = (e, requestType, postId) => {
    e.preventDefault();
    
    const title = e.target.elements.title.value;
    const content = e.target.elements.content.value;
    
    console.log('token - postForm : ', this.props.token)
    axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
    axios.defaults.xsrfCookieName = "csrftoken";
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Jwt ${this.props.token}`,
    };

    switch (requestType) {
      case 'POST':
        return axios.post('http://127.0.0.1:8000/api/posts/create/', {
          title: title,
          content: content
        })
          .then(res => console.log(res))
          .catch(error => console.error(error));
      case 'PUT':
        return axios.put(`http://127.0.0.1:8000/api/posts/${postId}/edit/`, {
          title: title,
          content: content
        })
          .then(res => console.log(res))
          .catch(error => console.error(error));
      default:
        
    }
  }

  render() {
    return (
      <form onSubmit={(event) => this.handleSubmit(
          event,
          this.props.requestType,
          this.props.postId )}>
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

const mapStateToProps = state => {
  return {
    token: state.token
  };
};

export default connect(mapStateToProps)(PostForm);