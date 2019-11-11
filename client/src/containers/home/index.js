import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HomeContainer extends Component {
  render() {
    return (
      <div>
        <Link to="/posts/">게시글 보러가기</Link>
      </div>
    )
  }
}

export default HomeContainer;