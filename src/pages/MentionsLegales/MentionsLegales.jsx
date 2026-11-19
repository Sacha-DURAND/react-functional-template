import React from 'react';
import './MentionsLegales.css';
export default function MentionsLegales() {
  return (
    <section className="legal-page">
      <h1>Mentions légales</h1>

      <section>
        <h2>1. Éditeur du site</h2>
        <p>Nom / Raison sociale : [À compléter]</p>
        <p>Statut juridique : [À compléter]</p>
        <p>Adresse : [À compléter]</p>
        <p>Contact : [À compléter]</p>
        <p>Directeur de publication : [À compléter]</p>
      </section>

      <section>
        <h2>2. Hébergement</h2>
        <p>Hébergeur : [À compléter]</p>
        <p>Adresse : [À compléter]</p>
        <p>Site / Contact : [À compléter]</p>
      </section>

      <section>
        <h2>3. Propriété intellectuelle</h2>
        <p>
          L&apos;ensemble des contenus présents sur ce site (textes, images, visuels,
          code, marques) est protégé par le droit d&apos;auteur. Toute reproduction ou
          représentation, totale ou partielle, sans autorisation est interdite.
        </p>
      </section>

      <section>
        <h2>4. Données personnelles &amp; cookies</h2>
        <p>
          Les modalités de collecte, de traitement et de conservation des données
          personnelles ainsi que l&apos;usage éventuel de cookies sont à préciser selon
          les fonctionnalités du site.
        </p>
      </section>

      <section>
        <h2>5. Responsabilité</h2>
        <p>
          L&apos;éditeur s&apos;efforce de fournir des informations exactes et à jour, sans
          garantir l&apos;absence d&apos;erreurs ou d&apos;interruptions temporaires du
          service.
        </p>
      </section>
    </section>
  );
}