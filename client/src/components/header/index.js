import React from 'react';

import Logo from '../logo';
import Usermenu from '../usermenu';

const Header = (props) => {
  return (
    <header className="header">
      <Logo />
      <Usermenu />
    </header>
  );
};

export default Header;