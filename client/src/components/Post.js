import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/post'

class Post extends Component {
  componentDidMount() {
    let post_id = this.props.match.params.post_id;
    this.props.getDetailPost(post_id);
  }
  // handleClick = () => {
  //   this.props.deletePost(this.props.post.id);
  //   this.props.history.push('/');
  // }

  render() {
    console.log(this.props.title)
    const post = this.props.title ? (
      <div className="post">
        <h1 className="center">{this.props.title}</h1>
        <p>{this.props.content}</p>
        <button onClick={this.handleClick}>Delete</button>
      </div>
    ) : (
      <div className="center">Loading post...</div>
    )

    return (
      <div className="container">
        {post}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    title: state.title,
    content: state.content
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getDetailPost: post_id => {
      dispatch(actions.getDetailPost(post_id))
    }
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(Post);