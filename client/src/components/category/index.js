import React, { Component } from 'react';

class Category extends Component {
  render() {
    const categories = this.props.categories.map(category => {
      return(
        <ul key={category.id}>
          <li>{category.title}</li>
        </ul>
      )
    })
    return (
      <div>
        {categories}
      </div>
    );
  }
}