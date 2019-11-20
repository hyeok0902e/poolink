import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPost } from '../../actions/post';
import Home from '../../components/home';

class HomeContainer extends Component {
  componentDidMount() {
    this.props.getPost();
  }

  render() {
    return (
      <Home {...this.props} />
    );
  }
}

const mapStateToProps = state => ({
  posts: state.post.posts.slice(0, 4)
});

const mapDispatchToProps = dispatch => {
  return {
    getPost: () => {
      dispatch(getPost())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeContainer);