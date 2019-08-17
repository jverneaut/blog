---
title: "Partager des variables entre SASS et Javascript avec Webpack"
date: "2019-08-16"
---

# Partager des variables entre SASS et Javascript avec Webpack

S'il vous arrive de vouloir accéder à des variables définies dans un fichier .scss depuis votre javascript, sachez que c'est tout à fait possible en utilisant Webpack.

Il suffit de les exporter comme-suit :

```scss
$primary: rgb(255, 0, 0);

:export {
  primary: $primary;
}
```

...puis de les récupérer :

```js
import variables from "./variables.scss"
console.log(variables["primary"])
// #ff0000
```

### Quelle utilité ?

Synchroniser les animations css et js, recalculer des dimensions sous un breakpoint, récupérer la taille d'un élément, etc.

Si vous cherchez une configuration Webpack permettant de réaliser cette astuce vous pouvez [en trouver une dans ce projet](https://github.com/jverneaut/wordpress-starter).
