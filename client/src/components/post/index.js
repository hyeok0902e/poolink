import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Post extends Component {
  render() {
    const post_id = this.props.match.params.post_id;
    const currentUser = this.props.currentUser === this.props.username;
    
    return (
      <div>
        
        <h1>{this.props.title}</h1>
        <p>작성자 - {this.props.username}</p>
        <p>내용 - {this.props.content}</p>
        {currentUser &&
          <Link to={'/' + post_id + '/edit'}>수정하기</Link>
        }
      </div>
    )
  }
}


const mapStateToProps = state => ({
  currentUser: state.auth.username
});

export default connect(
  mapStateToProps,
  null
)(Post);