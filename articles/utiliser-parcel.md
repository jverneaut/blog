---
title: 'Développer plus rapidement avec Parcel'
date: '2019-09-06 19:30'
---

Une des critique récurrente du développement frontend moderne est l'abondance d'outils à maîtriser pour créer une simple application web avec quelques fonctionnalités.

En effet, si vous souhaitez développer une application web qui tienne la route, vous avez certainement entendu parler de ces technologies :

- Webpack,
- SASS/LESS,
- React/Vue/Angular,
- EsLint,
- Babel,
- Etc.

Mais lorsque vous voulez créer une application rapidement pour prototyper une idée, avez-vous vraiment envie de passer une demie-heure à paramétrer Webpack et ses différents plugins, à installer un framework, à paramétrer le style, etc. ?

Si ces technologies permettent certainement de gagner en puissance et de développer des projets frontend de plus en plus avancés, ils nécessitent une période d'apprentissage et prennent du temps à configurer.

## La révolution Parcel

C'est là qu'intervient Parcel. A l'inverse de Webpack qui expose un fichier de configuration, Parcel analyse votre code, découvre les technologies que vous souhaitez utiliser puis se charge de reste.

Il suffit de l'installer avec `npm install parcel-bundler`, de créer un fichier HTML pointant vers vos sources puis de lancer Parcel avec `parcel index.html`.

## Exemple avec React et SASS

Créer un fichier HTML pointant vers votre style .scss et le fichier javascript contenant votre application React.

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Parcel</title>
    <link rel="stylesheet" href="main.scss" />
  </head>
  <body>
    <div id="app"></div>
    <script src="index.js"></script>
  </body>
</html>
```

```js
// index.js
import React from 'react';
import ReactDOM from 'react-dom';

const App = () => <div className="title">Hello, Parcel!</div>;

ReactDOM.render(<App />, document.querySelector('#app'));
```

```scss
// main.scss
$primary: #ff0000;

.title {
  color: $primary;
}
```

Si vous lancez maintenant `parcel index.html`, vous verrez que Parcel se charge d'insaller toutes les dépendences nécessaires et de lancer votre projet. Si tout se passe bien, `Hello, Parcel!` devrait s'afficher en rouge à l'écran.

Magique n'est-ce pas ?

En plus de lancer correctement votre projet (ce qui est déjà exceptionnel), Parcel offre de nombreux avantages comme le Hot Reloading par défaut, la gestion des polyfills et bien d'autres choses encore.

## Et en production, ça marche ?

**Oui !** Et même plutôt bien !

Pour compiler votre application et minifier vos assets, il suffit de faire un `parcel build --no-content-hash index.html`. Pourquoi ce `--no-content-hash` ? Par défaut, Parcel génère les noms de fichiers à partir de leur contenu pour éviter les conflits. Ainsi, dès que leur contenu change, leur nom change également. Avec cette balise, le hash n'est plus calculé en fonction du contenu et reste donc fixe. Il suffit alors de le linker dans votre html de production pour l'utiliser.

---

Est-ce donc la mort de Webpack ? Le software est-il en train de manger le monde au point de nous retirer ce petit plaisir de voir fonctionner une configuration Webpack gagnée au prix de longues heures de labeur ? Je vous rassure (ou pas), nous n'en sommes pas encore là.

Sur des projets de petite et moyenne taille je recommande fortement l'utilisation de Parcel tant il est facile à mettre en place. Pire encore, je ferai même l'argument qu'utiliser Webpack sur ce type de projet est une perte de temps.

En revanche, si votre applicatin est assez grande pour nécessiter l'utilisation du code-splitting, que votre fichier de configuration dépasse la centaine de ligne et que vous générez de nombreux artefacts, alors Webpack a encore tout à fait la place dans votre projet.
