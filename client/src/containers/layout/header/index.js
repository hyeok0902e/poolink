import React from 'react';
import CategoryList from '../../categorylist';

const Header = (props) => {
  return (
    <div className="layout-header">
      <CategoryList />
      <h2>Header</h2>
      <p>----------------</p>
    </div>
  );
}

export default Header;