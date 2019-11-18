import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import moment from 'moment';


class PostList extends Component {
  btnHandle = () => {
    this.props.history.push('/create');
  }

  render() {
    const {
      posts,
      isAuthenticated
    } = this.props;

    
    const postCreateBtn = isAuthenticated !== false ? (
      <button onClick={this.btnHandle}>글쓰기</button>
    ) : (
      <p>로그인 한 후 글을 쓸 수 있습니다.</p>
    )


    const postList = posts.length ? (
      posts.map(post => {
        return (
          <div className="post" key={post.id}>
            <div className="post-content">
              <Link to={'/' + post.id}>
              <h1 className="post-title">{post.title}</h1>
              </Link>
              <p>{post.content}</p>
              <p>{moment(post.created_at).fromNow()}</p>
            </div>
          </div>
        )
      })
    ) : (
      <div className="center">No posts yet</div>
    )
    
    return (
      <div>
        {postCreateBtn}
        {postList}
      </div>
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
