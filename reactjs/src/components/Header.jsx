import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className='header'>
      <div className='brandName'>
        <Link to='/'>SHOP</Link>
      </div>
      <div className='headerLinks'>
        <Link to='/'>Home</Link>
        <Link to='/basket'>Cart</Link>
      </div>
    </header>
  );
}

export default Header;
