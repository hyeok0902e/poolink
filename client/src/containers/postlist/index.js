import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

import Post from '../../components/post';
import PostForm from '../../components/postform';

import './styles.scss';

class PostList extends Component {
  state = {
    posts: [],
    btnState: false
  }


  componentDidMount() {
    axios.get('http://127.0.0.1:8000/api/posts/')
      .then(res => {
        this.setState({
          posts: res.data.results
        });
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

export default PostList;