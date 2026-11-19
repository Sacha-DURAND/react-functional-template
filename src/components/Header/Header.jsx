import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        <Link to="/" className="header__brand">
          Studio 111
        </Link>

        <nav className="header__nav">
          <NavLink to="/" end className="header__link">
            Accueil
          </NavLink>
          <a
            href="https://cent-onze.xyz"
            target="_blank"
            rel="noopener noreferrer"
            className="header__link"
          >
            Studio 111
          </a>
          <a
            href="https://portfolio.cent-onze.xyz"
            target="_blank"
            rel="noopener noreferrer"
            className="header__link"
          >
            Portfolio
          </a>
        </nav>
      </div>
    </header>
  );
}