import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'

const Nav = () => {
  return (
    <div id='nav'>
      <ul className='depth'>
        <li><Link to={'/'} className='navLink'>History</Link></li>
        <li><Link to={'/skills'} className='navLink'>Skills</Link></li>
        <li><Link to={'/portfolio'} className='navLink'>Portfolio</Link></li>
        <li><Link to={'/practice'} className='navLink'>Practice</Link></li>
      </ul>
    </div>
  );
};

export default Nav;