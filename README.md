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
React_Functional_Template/
│
├── public/                         # Fichiers statiques accessibles directement
│                                   # depuis la racine du site (favicon, etc.)
│
├── src/                            # Code source principal de l'application
│   │
│   ├── assets/                     # Ressources utilisées dans le projet :
│   │                               # images, icônes, polices, illustrations...
│   │
│   ├── components/                 # Composants React réutilisables
│   │   │
│   │   ├── Footer/                 # Pied de page commun à l'application
│   │   │   ├── Footer.css          # Styles du composant Footer
│   │   │   └── Footer.jsx          # Structure et contenu du Footer
│   │   │
│   │   └── Header/                 # En-tête et navigation principale
│   │       ├── Header.css          # Styles du composant Header
│   │       └── Header.jsx          # Structure et contenu du Header
│   │
│   ├── pages/                      # Pages principales de l'application
│   │   │
│   │   ├── Home/                   # Page d'accueil
│   │   │   ├── Home.css            # Styles de la page d'accueil
│   │   │   └── Home.jsx            # Contenu de la page d'accueil
│   │   │
│   │   ├── MentionsLegales/        # Page des mentions légales
│   │   │   ├── MentionsLegales.css # Styles de la page
│   │   │   └── MentionsLegales.jsx # Contenu des mentions légales
│   │   │
│   │   └── NotFound/               # Page affichée lorsqu'une route
│   │       ├── NotFound.css        # demandée n'existe pas
│   │       └── NotFound.jsx        # Styles et contenu de la page 404
│   │
│   ├── utils/                      # Composants et fonctionnalités utilitaires
│   │   ├── ScrollToTop.jsx         # Remonte automatiquement en haut
│   │   │                           # de la page lors d'un changement de route
│   │   └── StudioFooter.jsx        # Signature / crédit Studio 111
│   │
│   ├── App.css                     # Styles du composant principal App
│   ├── App.jsx                     # Composant racine de l'application
│   ├── index.css                   # Styles globaux et variables CSS
│   ├── main.jsx                    # Point d'entrée React : montage de l'application
│   └── Routeur.jsx                 # Configuration de la navigation et des routes
│
├── .gitignore                      # Fichiers et dossiers exclus du suivi Git
├── .oxlintrc.json                  # Configuration de l'outil Oxlint
├── index.html                      # Page HTML principale chargée par Vite
├── package.json                    # Dépendances, métadonnées et scripts npm
├── package-lock.json               # Verrouillage des versions des dépendances
├── README.md                       # Documentation et présentation du projet
└── vite.config.js                  # Configuration de Vite
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