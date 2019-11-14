import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import { getPost } from '../actions/post';

class Home extends Component {
  componentDidMount() {
    this.props.getPost();
  }

  render() {
    const { posts } = this.props;

    const postList = posts.length ? (
      posts.map(post => {
        return (
          <div className="post" key={post.id}>
            <div className="post-content">
              <Link to={'/' + post.id}>
              <h1 className="post-title">{post.title}</h1>
              </Link>
              <p>{post.content}</p>
            </div>
          </div>
        )
      })
    ) : (
      <div className="center">No posts yet</div>
    )
    
    return (
      <div className="container">
        <h4 className="center">
          Home
        </h4>
        {postList}
      </div>
    )  
  } 
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getPost: () => {
      dispatch(getPost())
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);
