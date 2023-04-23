# Athena-PWA

Athena-PWA est une Progressive Web App qui a pour but de désengorger les canaux discord de notre communauté pour plus de lisibilité et de confort.

## Pour lancer le projet

```
- npm install
- npm run sass
- npm start
```

## Structure du projet

Le projet se découpe ainsi :

```
├── .gitignore
├── LICENSE.md
├── package-lock.json
├── package.json
├── README.md
│
├── node_modules
│   └── [...node-modules files]
│
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── manifest.json
│   ├── offline.html
│   ├── robots.txt
│   ├── service-worker.js
│   ├── style.css
│   │
│   ├── fonts
│   │   └── [...polices files]
│   │
│   ├── icons
│   │   └── [...icones files]
│   │
│   ├── images
│   │   └── [...avatars.png files]
│   │
│   └── planets
│       └── [...planets.png files]
│
└── src
    ├── App.js
    ├── index.js
    ├── main.scss
    │
    ├── Components
    │   ├── Buttons
    │   │   ├── buttons.scss
    │   │   ├── CancelButton.jsx
    │   │   ├── LinkButton.jsx
    │   │   └── ValidButton.jsx
    │   │
    │   ├── Cards
    │   │   ├── DefaultCard
    │   │   │   ├── DefaultCard.jsx
    │   │   │   └── defaultCard.scss
    │   │   │
    │   │   ├── ImageCard
    │   │   │   ├── ImageCard.jsx
    │   │   │   └── imageCard.scss
    │   │   │
    │   │   └── ModalCard
    │   │       ├── ModalCard.jsx
    │   │       ├── modalCard.scss
    │   │       └── UseModal.jsx
    │   │
    │   ├── Layout
    │   │   ├── Background
    │   │   │   ├── Background.jsx
    │   │   │   └── background.scss
    │   │   │
    │   │   ├── Footer
    │   │   │   ├── Footer.jsx
    │   │   │   └── footer.scss
    │   │   │
    │   │   ├── Header
    │   │   │   ├── Header.jsx
    │   │   │   └── header.scss
    │   │   │
    │   │   └── Loader
    │   │       ├── Loader.jsx
    │   │       └── loader.scss
    │   │
    │   ├── SvgMaps
    │   │   ├── CentauriSVG.jsx
    │   │   └── svgMaps.scss
    │   │
    │   └── Widgets
    │       ├── DiscordWidget
    │       │   └── DiscordWidget.jsx
    │       │
    │       └── TwitchWidget
    │           └── TwitchWidget.jsx
    │
    ├── Pages
    │   ├── About
    │   │   ├── About.jsx
    │   │   └── About.scss
    │   │
    │   ├── Error
    │   │   ├── NoMatch.jsx
    │   │   └── noMatch.scss
    │   │
    │   ├── Home
    │   │   ├── Home.jsx
    │   │   └── home.scss
    │   │
    │   ├── Join-us
    │   │   ├── join-us.scss
    │   │   └── JoinUs.jsx
    │   │
    │   ├── Login
    │   │   ├── Login.jsx
    │   │   └── login.scss
    │   │
    │   └── Maps
    │       ├── Maps.jsx
    │       ├── maps.scss
    │       │
    │       └── Centauri
    │           └── CentauriMap.jsx
    │
    ├── style
    │   ├── colors.scss
    │   └── fonts.scss
    │
    └── translations
    ├── about.json
    ├── home.json
    ├── maps.json
    └── ui.json
```

## Description de la structure

- **node_modules** : Contient tous les modules et dépendances du projet.
- **public** : Contient les fichiers statiques accessibles par le navigateur.
- **fonts** : Contient les fichiers de polices.
- **icons** : Contient les fichiers d'icônes.
- **images** : Contient les fichiers d'images des avatars.
- **planets** : Contient les fichiers d'images des planètes.
- **src** : Contient le code source de l'application.
- **Components** : Contient les composants réutilisables de l'application.
- **Buttons** : Contient les boutons personnalisés.
- **Cards** : Contient les cartes pour l'affichage des données.
- **Layout** : Contient les composants pour la structure de la page (Header, Footer, Background, Loader).
- **SvgMaps** : Contient les cartes SVG pour les différentes planètes.
- **Widgets** : Contient les widgets pour les intégrations (Discord, Twitch).
- **Pages** : Contient les pages individuelles de l'application (About, Error, Home, Join-us, Login, Maps).
- **style** : Contient les fichiers de style globaux (couleurs, polices).
- **translations** : Contient les fichiers de traduction pour l'internationalisation de l'application.

## Principes et bonnes pratiques

Dans le développement de notre application Athena-PWA, nous adhérons aux bonnes pratiques et principes suivants pour garantir un code propre, maintenable et évolutif :

### YAGNI (You Ain't Gonna Need It)

Ce principe consiste à éviter d'ajouter des fonctionnalités ou du code en prévision de besoins futurs.
Nous nous concentrons uniquement sur les fonctionnalités et les exigences actuelles du projet pour éviter la complexité et le gaspillage de temps inutiles.

### DRY (Don't Repeat Yourself)

DRY est un principe fondamental de développement qui vise à réduire la répétition du code.
Nous nous efforçons de créer des composants et des fonctions réutilisables pour éviter de dupliquer des parties similaires du code dans différentes parties de l'application.

### KISS (Keep It Simple, Stupid)

Ce principe encourage à garder les choses simples et à éviter les solutions complexes ou inutiles.
Nous cherchons à rendre notre code clair et facile à comprendre pour les autres développeurs qui travaillent sur le projet.

## Technologies et méthodologies (Front)

Athena-PWA utilise les technologies et méthodologies suivantes pour assurer un développement efficace et maintenable :

### React.js (Functional Components)

Nous utilisons React.js avec des composants fonctionnels pour développer l'interface utilisateur de notre application.
Les composants fonctionnels nous permettent de simplifier notre code, d'améliorer la lisibilité et de faciliter la gestion des états et des effets avec les Hooks de React.

### Sass

Sass est un préprocesseur CSS qui nous permet d'utiliser des fonctionnalités avancées telles que les variables, les mixins et les fonctions pour améliorer la lisibilité et la maintenabilité de nos fichiers de style.

### BEM (Block, Element, Modifier)

Nous utilisons la méthodologie BEM pour structurer et organiser notre code SCSS. BEM nous aide à garder notre code SCSS modulaire et facile à comprendre en suivant une convention de nommage claire pour les classes.
Cette méthodologie facilite également la collaboration entre les membres de l'équipe et rend notre projet lisible et maintenable aussi bien pour la vue que le style.
