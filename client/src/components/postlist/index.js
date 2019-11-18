import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import moment from 'moment';
import { Container, Button } from '@material-ui/core';


class PostList extends Component {
  btnHandle = () => {
    this.props.history.push('/create');
  }

  render() {
    const {
      posts,
      isAuthenticated
    } = this.props;

    const currentUser = localStorage.getItem('username')
    
    const postCreateBtn = (isAuthenticated !== false || currentUser) ? (
      <Button 
        variant='outlined'
        size='small'
        onClick={this.btnHandle}
        >
        ADD POST
      </Button>
    ) : (
      <p>로그인 한 후 글을 쓸 수 있습니다.</p>
    )


    const postList = posts.length ? (
      posts.map(post => {
        return (
          <Container maxWidth='lg' className="post" key={post.id}>
            <div className="post-content">
              <Link to={'/' + post.id}>
              <h1 className="post-title">{post.title}</h1>
              </Link>
              <p>{post.content}</p>
              <p>{moment(post.created_at).fromNow()}</p>
            </div>
          </Container>
        )
      })
    ) : (
      <div className="center">No posts yet</div>
    )
    
    return (
      <Container maxWidth='lg'>
        {postCreateBtn}
        {postList}
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.user.isAuthenticated
  }
}

export default connect(
  mapStateToProps,
  null,
)(PostList);
