import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <div className='logo_container'>
      <div className='logo_title'>
        <Link to="/">POOLINK</Link>
      </div>
    </div>
  );
};

export default Logo;