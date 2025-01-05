import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaCode } from 'react-icons/fa';  // Importing icons from React Icons

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li>
          <Link to="/">
            <FaHome size={20} style={{ marginRight: '8px' }} /> Home
          </Link>
        </li>
        <li>
          <Link to="/About">
            <FaInfoCircle size={20} style={{ marginRight: '8px' }} /> About
          </Link>
        </li>
        <li>
          <Link to="/Projects">
            <FaCode size={20} style={{ marginRight: '8px' }} /> Projects
          </Link>
        </li>
      </ul>
    </nav>
  );
}
