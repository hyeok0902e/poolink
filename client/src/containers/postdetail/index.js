import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';

import * as actions from '../../actions/post';

import PostForm from '../../components/postform';
import HomeContainer from '../../containers/home';

class PostDetail extends Component {
  state = {
    post: {},
    category: {},
    btnState: false
  }

  componentDidMount() {
    const postId = this.props.match.params.postId;
    axios.get('http://127.0.0.1:8000/api/posts/' + postId + '/')
      .then(res => {
        this.setState({
          post: res.data,
          category: res.data.category
        })
      })
    
    
  }


  handleDelete = (e) => {
    const postId = this.props.match.params.postId;
    this.props.deletePost(postId);
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
          <p>category : {this.state.category.title}</p>
          <p>created_at : {moment(this.state.post.created_at).format('YYYY.MM.DD h.mm.ss')}</p>
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
    loading: state.loading,
    error: state.error,
    token: state.token,
    post: state.post,
  };
};

const mapDispatchToProps = dispatch => ({
  deletePost: postId => {
    dispatch(actions.deletePost(postId))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);