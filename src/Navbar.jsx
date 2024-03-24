// NavBar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Api from './Api';

function NavBar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/api">Star-Wars Character</Link></li>
        <li><Link to="/picture">Character Image</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;