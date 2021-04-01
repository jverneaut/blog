---
title: Améliorer le comportement du scroll des appareils iOS
date: '2019-09-08 17:22'
path: 'ameliorer-scroll-ios'
---

Pour qui travaille régulièrement sur des applications web, un type de layout apparaît de manière récurrente : un écran avec une barre de menu en haut, une barre d'actions en bas et un menu sur un côté de l'écran.

Avec les modèles css Flex ou Grid rien de plus simple me direz-vous ! Il suffit de fixer la fenêtre à la hauteur de l'écran, de la découper en sections puis d'appliquer un overflow scroll/auto à la section principale.

Seulement voilà, une fois passé sur une tablette ou un téléphone Apple quelque chose ne va pas : le scroll se comporte bizarrement et ne semble pas naturel.[^1]

[^1]: [Exemple à cette adresse](https://lab.julienverneaut.com/scroll/)

## La propriété -webkit-overflow-scrolling: touch

Qu'est-ce qui cloche exactement ? Le scroll fonctionne mais il n'a pas d'inertie et l'effet de _bounce_ caractéristique des appareils à la pomme manque à l'appel.

Une propriété css non standard permet toutefois de récupérer ces effets : [-webkit-overflow-scrolling](https://developer.mozilla.org/fr/docs/Web/CSS/-webkit-overflow-scrolling)

```css
.main-layout {
  overflow-y: auto;

  /* Ajouter cette propriété à la zone problématique */
  -webkit-overflow-scrolling: touch;
}
```

Avec cette seule ligne, le scroll se comportera correctement et votre application semblera d'autant plus qualitative auprès de vos utilisateurs.

Pour voir cet effet de vous-mêmes, j'ai assemblé [une petite démo que vous pouvez essayer en cliquant ici](https://fervent-allen-3654dd.netlify.app/scroll/).
