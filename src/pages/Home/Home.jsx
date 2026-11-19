import React from 'react';
import './Home.css';

export default function Home() {
  return (
    <div className="home">
      <span className="home__tag">React • Vite • Router</span>

      <h1>
        Template créé par <span>Studio 111</span>
      </h1>

      <p className="home__lead">
        Base de démarrage légère et prête à l&apos;emploi conçue par Studio 111 pour
        structurer rapidement de nouveaux sites web.
      </p>

      <div className="home-links">
        <a
          href="https://cent-onze.xyz"
          target="_blank"
          rel="noopener noreferrer"
          className="primary"
        >
          Site Studio 111
        </a>
        <a
          href="https://portfolio.cent-onze.xyz"
          target="_blank"
          rel="noopener noreferrer"
        >
          Portfolio
        </a>
      </div>

      <div className="home-guide">
        <div>
          <h2>Architecture du projet</h2>
          <ul>
            <li><code>src/pages/</code> — Pages du site (ex. Home).</li>
            <li><code>src/components/</code> — Composants du site (ex. Header et Footer).</li>
            <li><code>src/utils/</code> — Outils du site.</li>
            <li><code>src/Routeur.jsx</code> — Déclaration des routes.</li>
          </ul>
        </div>

        <div>
          <h2>À modifier pour démarrer</h2>
          <ul>
            <li>Remplacer le contenu de <code>pages/Home/Home.jsx</code></li>
            <li>Adapter les liens dans <code>components/Header</code> et <code>Footer</code></li>
            <li>Ajouter tes nouvelles routes dans <code>src/Routeur.jsx</code></li>
            <li>Ajuster les variables CSS dans <code>src/index.css</code></li>
          </ul>
        </div>
      </div>
    </div>
  );
}