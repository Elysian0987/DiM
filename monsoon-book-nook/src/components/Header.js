import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="site-header">
      <h1>Monsoon Book Nook 🌧️📖</h1>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/reviews">Reviews</NavLink>
        <NavLink to="/recommendations">Top Lists</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
    </header>
  );
}

export default Header;