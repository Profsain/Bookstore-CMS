import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className='Header'>
      <header>
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
          <h1 className="Avater">Logo</h1>
        </nav>
      </header>
    </div>
  )
}
