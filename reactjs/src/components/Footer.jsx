import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className='footer'>
      <p>By Azazy ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
