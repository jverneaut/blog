---
title: "Positionner une background-image par rapport à la droite en css"
date: "2019-08-17 17:30"
---

# Positionner une background-image par rapport à la droite en css

Il est souvent utile de positionner une image de fond relativement à la droite d'un élément HTML. Exemple, positionner un [chevron](https://www.inline-svg.com) dans un dropdown, une loupe dans un champ recherche, etc.

La solution consiste à se servir de la propriété [background-position](https://developer.mozilla.org/fr/docs/Web/CSS/background-position) de manière un peu inhabituelle.

En effet, en lisant les specs, on se rend compte qu'il est possible de lui fournir jusqu'à 4 arguments permettant d'exprimer un décalage relatif aux 4 côtés de l'élément HTML en question.

Pour positionner un élément centré verticalement à 8px de la droite d'un input, il suffit donc de faire :

```css
input {
  background-position: right center 8px;
  /* Il n'est pas utile de spécifier le dernier paramètre */
}
```
