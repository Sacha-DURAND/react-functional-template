import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <span>© {new Date().getFullYear()} — Template React</span>

        <div className="footer__links">
          <Link to="/mentions-legales">Mentions Légales</Link>
          <Link to="/what-link-did-you-expect?">404 Not Found</Link>
          <a
            href="https://cent-onze.xyz"
            target="_blank"
            rel="noopener noreferrer"
          >
            cent-onze.xyz
          </a>
        </div>
      </div>
    </footer>
  );
}