import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './NotFound.css';

export default function NotFound() {
  const { pathname } = useLocation();

  return (
    <section className="not-found">
      <p>404</p>
      <h1>Page introuvable</h1>
      <p>
        Aucune route ne correspond à <code>{pathname}</code>.
      </p>
      <Link to="/">Retour à l&apos;accueil</Link>
    </section>
  );
}