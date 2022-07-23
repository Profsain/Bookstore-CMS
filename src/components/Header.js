import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import '../styles/Header.css';

export default function Header() {
  return (
    <header className="Header">
      <h3 className="Brand-text">Bookstore CMS</h3>
      <nav className="Navbar">
        <ul className="Nav-link">
          <li>
            <Link to="/" className='active'>Books</Link>
          </li>
          <li>
            <Link to="/categories">Categories</Link>
          </li>
        </ul>
      </nav>
      <div className="Avater"><FaUser /></div>
    </header>
  );
}
