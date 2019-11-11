import React from 'react';
import { Link } from 'react-router-dom';
import CategoryList from '../../categorylist';

const Header = (props) => {
  return (
    <div className="layout-header">
      <Link to="/">POOLINK</Link>
      <CategoryList />
      <p>----------------</p>
    </div>
  );
}

export default Header;