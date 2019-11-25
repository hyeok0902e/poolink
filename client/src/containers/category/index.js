import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCategory } from '../../actions/category';
import Category from '../../components/category/index';

class CategoryContainer extends Component {
  componentDidMount() {
    this.props.getCategory();
  }

  render() {
    return (
      <Category {...this.props} />
    );
  }
}

const mapStateToProps = state => ({
  categories: state.category.categories,
});

const mapDispatchToProps = dispatch => {
  return {
    getCategory: () => {
      dispatch(getCategory())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CategoryContainer);