# Athena-PWA

Athena-PWA est une Progressive Web App qui a pour but de désengorger les canaux discord de notre communauté pour plus de lisibilité et de confort.

## Pour lancer le projet :

Pour le front :
```
- cd front
- npm install
- npm run sass
- npm start
```

## Structure du projet

Le projet se découpe ainsi :

```
├── back
│   ├── [...fichiers Django]             # Fichiers Django pour le backend
│
├── front
│   ├── node_modules                      # Dépendances du projet front
│   ├── package.json                      # Informations et dépendances du projet front
│   ├── package-lock.json                 # Versions exactes des dépendances
│   ├── public
│   │   ├── favicon.ico                   # Icône du site
│   │   ├── index.html                    # Fichier HTML principal, la <div id="root"></div> rend l'application côté front
│   │   ├── fonts                         # Polices du projet
│   │   └── icons                         # Icones du projet
│   │
│   ├── src
│   │   ├── App.js                        # Composant racine de l'application
│   │   ├── index.js                      # Point d'entrée de l'application
│   │   ├── main.scss                     # Styles globaux
│   │   ├── Components                    # Composants réutilisables
│   │   ├── Pages                         # Composants des pages
│   │   │   ├── About                     # Page 'À propos'
│   │   │   ├── Error                     # Page d'erreur
│   │   │   ├── Home                      # Page d'accueil
│   │   │   ├── Join-us                   # Page 'Rejoignez-nous'
│   │   │   ├── Login                     # Page de connexion
│   │   │   └── Maps                      # Page des cartes
│   │   ├── style                         # Styles partagés
│   │   └── translations                  # Fichiers de traduction
│
├── .gitignore                             # Fichiers à ignorer par Git
├── LICENSE.md                             # Licence du projet
└── README.md                              # Description du projet et instructions <- You are Here
```

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


## Routine & Conventions Github 


### Avant de faire une branche ou un commit

Avant de créer une branche ou un commit sur un projet existant, **toujours** faire un `git fetch` puis un `git pull` depuis la branche de développement. 
Cela permettra de vous assurer de travailler sur la version la plus récente du projet.


### Faire et nommer des branches et commits sur le projet Github Athena

Pour commencer à travailler sur un nouveau sujet, créez une nouvelle branche pour votre premier commit. 
Cela vous permettra de travailler sur ce sujet de manière isolée et de facilement revenir en arrière si nécessaire.


#### Pour créer une nouvelle branche :

```
git checkout -b feat/name-of-the-branch
```

Le nom de la branche doit être en anglais, sans espace, et en minuscule.

Le `type` de branche/commit est `feat` pour une nouvelle fonctionnalité. 
Vous pouvez également utiliser `fix` pour une correction de bug, `refactor` pour une modification de code qui ne rajoute pas de fonctionnalité ou ne corrige pas de bug, et `test` pour l'ajout de tests.

Ensuite, vous pouvez travailler sur votre sujet et créer des commits.


#### Pour créer un commit : 

Vous devez d'abord ajouter le ou les fichiers modifiés à l'index de Git. 
Vous pouvez le faire en utilisant la commande `git add <nom-du-fichier>`.

*Par exemple, si vous avez modifié le fichier `file.txt` et souhaitez l'ajouter à votre commit :*
```
git add file.txt
```

Vous pouvez également ajouter tous les fichiers modifiés en une seule fois en utilisant la commande `git add .`.


Une fois que vous avez ajouté le fichier modifié à l'index, vous pouvez créer un commit en utilisant la commande `git commit` :
```
git commit -m "feat(sujet): ajouter une nouvelle fonctionnalité"
```

Le nom du commit doit être en anglais, sans espace, et peut être en camelCase dans la mesure du raisonnable.


Ensuite, vous pouvez pousser vos modifications sur la branche distante en utilisant la commande `git push`.
```
git push
```

Quelques liens utiles :

*git-commitizen peut vous aider à faire vos commits bien nommés :* https://github.com/commitizen/cz-cli

*Pour tout savoir sur Git :* http://git-scm.com/book/fr/v2

*Pour visualiser ce que font les différentes commandes git* : https://ndpsoftware.com/git-cheatsheet.html
