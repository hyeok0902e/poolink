import React from 'react';
import { NavDropdown } from 'react-bootstrap';

const Category = (props) => {
  return (
    <NavDropdown title="게시판" id="collasible-nav-dropdown">
      { props.data.map((category, index) => (
        <NavDropdown.Item key={index} href="/">{category.title}</NavDropdown.Item>
      ))}
    </NavDropdown>
  );
}

export default Category;