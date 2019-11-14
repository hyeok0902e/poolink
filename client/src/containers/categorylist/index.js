import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/category';

import Category from '../../components/category';

class CategoryList extends Component {
  state = {
    categories: []
  }

  componentDidMount() {
    this.props.getCategory()
      .then(res => {
        this.setState({
          categories: res
        });
      });
  }

  render() {
    return (
      <Category data={this.state.categories} />
    )
  }
}


const mapStateToProps = state => {
  return {
    loading: state.loading,
    error: state.error,
  };
};

const mapDispatchToProps = dispatch => ({
  getCategory: () => dispatch(actions.getCategory())
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);
