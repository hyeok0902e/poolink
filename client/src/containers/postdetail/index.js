import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

import PostForm from '../../components/postform';
import HomeContainer from '../../containers/home';

class PostDetail extends Component {
  state = {
    post: {},
    btnState: false
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

    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Jwt ${this.props.token}`
    };
    axios.delete(`http://127.0.0.1:8000/api/posts/${postId}/delete/`);
    this.props.history.push('/');
  }

  handleBtn = (e) => {
    if (this.state.btnState !== false) {
      this.setState({
        btnState: false
      })
    } else {
      this.setState({
        btnState: true
      })
    }

    console.log('btn state : ', this.state.btnState)
  }

  render() {
    return (
      <HomeContainer>

        {
          this.state.btnState !== true ?

            <NavLink to="#" className="post-update-link">
              <button onClick={this.handleBtn}>수정하기</button>
            </NavLink>
            :
            <PostForm
              {...this.props}
              token={this.props.token}
              requestType="PUT"
              postId={this.props.match.params.postId}
              btnText="Update"
            />
        }
        <div>
          <p>title : {this.state.post.title}</p>
          <p>content : {this.state.post.content}</p>
        </div>
        <NavLink to="#" className="post-delete-link">
          <button onClick={this.handleDelete}>삭제하기</button>
        </NavLink>
      </HomeContainer>
    )
  }
}

const mapStateToProps = state => {
  return {
    token: state.token
  };
};

export default connect(mapStateToProps)(PostDetail);