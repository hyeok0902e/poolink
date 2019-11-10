import React, { Component } from 'react';
import axios from 'axios';

import Category from '../../components/category';

class CategoryList extends Component {
  state = {
    categories: []
  }

  componentDidMount() {
    axios.get('http://127.0.0.1:8000/api/categories/')
      .then(res => {
        this.setState({
          categories: res.data
        });
        console.log(res.data);
      })
  }

  render() {
    return (
      <Category data={this.state.categories}/>
    )
  }
}

export default CategoryList;