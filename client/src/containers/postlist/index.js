import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import * as actions from '../../actions/post';
import Post from '../../components/post';
import PostForm from '../../components/postform';


class PostList extends Component {
  state = {
    posts: [],
    btnState: false
  }


  componentDidMount() {
    this._getPost();
  }

  _getPost() {
    this.props.getPost()
      .then(res => {
        this.setState({
          posts: res
        })
      })
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
      <div>
        {
          this.state.btnState !== true ?

            <NavLink to="#" className="post-create-link">
              <button onClick={this.handleBtn}>글쓰기</button>
            </NavLink>
            :
            <PostForm
              requestType="POST"
              postId={null}
              btnText="Create"
            />
        }

        <Post data={this.state.posts} />


      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    error: state.error,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getPost: () => dispatch(actions.getPost())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostList)