import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="site-header">
      <div className="logo">
        <NavLink to="/">COFFEE & COZY</NavLink>
      </div>
      <nav className="main-nav">
        <NavLink to="/reviews">REVIEWS</NavLink>
        <NavLink to="/recommendations">LISTS</NavLink>
        <NavLink to="/about">ABOUT</NavLink>
      </nav>
    </header>
  );
}

export default Header;