import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css'

export default function Header() {
  return (
    <header className='Header'>
      <h3 className="Brand-text">Bookstore CMS</h3>
      <nav className="Navbar">
        <ul className="Nav-link">
          <li>
            <Link to="/">Books</Link>
          </li>
          <li>
            <Link to="/categories">Categories</Link>
          </li>
        </ul>
      </nav>
      <h1 className="Avater">Avater</h1>
    </header>
  );
}
