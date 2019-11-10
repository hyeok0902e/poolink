import React from 'react';

const Category = (props) => {
  return (
    <div className="category-menu">
      <p>Category List</p>
      {props.data.map((category, index) => (
        <div key={index}>
          <p>{category.title}</p>
        </div>
      ))}
    </div>
  );
}

export default Category;