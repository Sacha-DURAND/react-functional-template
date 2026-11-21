# React Functional Template — Studio 111

Un template de démarrage léger et réutilisable basé sur **React** et **Vite**, conçu pour lancer rapidement de nouveaux projets web avec une structure claire, organisée et facile à maintenir.

Développé par **Studio 111**, ce template fournit une base simple et fonctionnelle pour créer des sites web et des applications modernes, sans dépendances superflues.

<p align="center">
  <a href="https://cent-onze.xyz">Site officiel</a> ·
  <a href="https://portfolio.cent-onze.xyz">Portfolio</a>
</p>

---

## Technologies utilisées

| Technologie | Description |
|---|---|
| [React](https://react.dev/) | Bibliothèque JavaScript pour la création d'interfaces |
| [Vite](https://vite.dev/) | Outil de développement et de compilation rapide |
| [React Router DOM](https://reactrouter.com/) | Gestion de la navigation et des routes |
| CSS3 | Feuilles de style natives avec variables CSS |
| JavaScript | JavaScript moderne avec JSX (sans TypeScript) |

## Structure du projet

```text
src/
├── assets/                  # Ressources statiques (images, icônes...)
│
├── components/              # Composants réutilisables
│   ├── Footer/
│   │   ├── Footer.css
│   │   └── Footer.jsx
│   └── Header/
│       ├── Header.css
│       └── Header.jsx
│
├── pages/                   # Pages de l'application
│   ├── Home/
│   │   ├── Home.css
│   │   └── Home.jsx
│   ├── MentionsLegales/
│   │   └── MentionsLegales.jsx
│   └── NotFound/
│       └── NotFound.jsx
│
├── utils/                   # Composants utilitaires
│   ├── ScrollToTop.jsx
│   └── StudioFooter.jsx
│
├── App.css
├── App.jsx
├── index.css                # Styles globaux et variables CSS
├── main.jsx                 # Point d'entrée de l'application
└── Routeur.jsx              # Configuration des routes
```

## Installation et utilisation

### Prérequis

Avant de commencer, assurez-vous de disposer des éléments suivants :

- [Node.js](https://nodejs.org/) (version LTS recommandée)
- npm (fourni avec Node.js)
- Git

### 1. Cloner le dépôt

```bash
git clone <repository-url>
cd React_Functional_Template
```

### 2. Installer les dépendances

```bash
npm install
```

Installer React Router DOM si nécessaire :

```bash
npm install react-router-dom
```

### 3. Lancer le serveur de développement

```bash
npm run dev
```

Vite affichera une URL locale permettant d'accéder à l'application depuis votre navigateur.

### 4. Générer une version de production

```bash
npm run build
```

Pour prévisualiser le résultat de la compilation :

```bash
npm run preview
```

---

## Personnalisation

Avant d'utiliser ce template pour un nouveau projet, plusieurs éléments peuvent être adaptés :

| Fichier / Dossier | Utilisation |
|---|---|
| `src/pages/Home/` | Remplacer la page d'accueil par le contenu du nouveau projet. |
| `src/components/Header/` | Modifier la navigation, les liens et l'identité visuelle. |
| `src/components/Footer/` | Adapter le contenu et les liens du pied de page. |
| `src/Routeur.jsx` | Ajouter, supprimer ou modifier les routes de l'application. |
| `src/index.css` | Personnaliser le thème et les variables CSS globales. |
| `src/pages/MentionsLegales/` | Renseigner les informations légales et d'hébergement du projet. |

### Personnalisation du thème

Les styles globaux sont centralisés dans `src/index.css`.

Les principales variables CSS permettent de modifier rapidement l'identité visuelle du projet :

```css
:root {
  --bg: /* Couleur de fond */;
  --surface: /* Couleur des surfaces */;
  --text: /* Couleur du texte principal */;
  --muted: /* Couleur du texte secondaire */;
  --accent: /* Couleur d'accentuation */;
  --border: /* Couleur des bordures */;
}
```

Cette organisation permet de conserver une identité visuelle cohérente sur l'ensemble de l'application et facilite les modifications ultérieures.

---

## Fonctionnalités

- **Installation légère** — Une configuration simple avec un minimum de dépendances.
- **Architecture modulaire** — Des composants React réutilisables et bien organisés.
- **Navigation intégrée** — Gestion des pages avec React Router DOM.
- **Styles centralisés** — CSS natif et variables globales personnalisables.
- **Structure évolutive** — Une base facilement adaptable à différents types de projets.
- **Prêt à personnaliser** — Une organisation pensée pour démarrer rapidement le développement.

---

## Auteur

**Studio 111**

- Site officiel : https://cent-onze.xyz
- Portfolio : https://portfolio.cent-onze.xyz

Conçu et maintenu par Studio 111.

---

<p align="center">
  <sub>© Studio 111 — React Functional Template</sub>
</p>