---
title: 'Utiliser @at-root pour les variations de style'
date: '2020-03-23 15:34'
path: 'at-root-sass'
---

Imaginons que vous ayez du markup ressemblant à ceci :

```html
<div class="bg-white">
  <button class="button">Je suis un bouton sur fond blanc</button>
</div>

<div class="bg-dark">
  <button class="button">Je suis un bouton sur fond noir</button>
</div>
```

et que les classes `bg-dark` et `bg-white` représentent un fond noir et blanc respectivement.

Afin d'appliquer un style de police différent à nos boutons selon le fond sur lequel ils se trouvent, il faudrait générer le css suivant :

```css
.bg-white .button {
  color: black;
}

.bg-dark .button {
  color: white;
}
```

Jusque-là, rien de bien compliqué. Où est la nouveauté ?

En lisant la documentation de [sass](https://sass-lang.com/), je suis tombé sur la règle méconnue **[@at-root](https://sass-lang.com/documentation/at-rules/at-root)**.

Son principe est le suivant : tout ce que vous écrivez après @at-root se retrouve au niveau root de la feuille de style, c'est à dire au premier niveau de sélection.

Ainsi, il devient tout à fait possible d'écrire ceci : (même si cela brûle les yeux)

```scss
.parent {
  .enfant {
    .enfant-de-l-enfant {
      @at-root .je-suis-root {
        color: #123456;
      }
    }
  }
}
```

qui se transforme alors simplement en :

```css
.je-suis-root {
  color: #123456;
}
```

Qu'elle utilité ? Revenons à nos boutons.

Dans l'exemple en haut de cet article, ce que nous voulons styler ce sont les boutons. Il serait donc intéressant de partir de notre classe `.button` pour pouvoir appliquer nos styles. Seulement, le style de ces boutons dépend d'un élément se situant un niveau au dessus d'eux.

Avec le sélecteur **@at-root** ce n'est plus un problème. Je peux désormais écrire :

```scss
.button {
  @at-root {
    .bg-white & {
      color-dark;
    }

    .bg-dark & {
      color: white;
    }
  }
}
```

Je l'admet, cet exemple n'est pas des plus démonstratif quant à l'intérêt de cette technique.

J'ai cependant régulièrement besoin d'écrire ce genre de code :

```scss
.menu {
  ...
  &--dark {
    ...
  }
  &--white {
    ...
  }
}

.menu__item {
  ...
}

.menu--dark .menu__item {
  // Style lorsque un parent a la classe `menu--dark`
}

.menu--white .menu__item {
  // Style lorsque un parent a la classe `menu--white`
}

```

Je pourrais bien sûr éviter cette redondance en imbriquant mes déclarations mais comme règle générale, je préfère aplatir mes styles par soucis de lisibilité et de maintenabilité. Les seules choses que je m'autorise à nester sont les états et les variations (`:hover`, `:focus`, `&--dark`, etc.).

Grâce à la directive `#at-root`, il est possible de répercuter les variations du parent sur son enfant en utilisant une syntaxe très similaire. Je peux ainsi écrire :

```scss
.menu {
  ...
  &--dark {
    ...
  }
  &--white {
    ...
  }
}

.menu__item {
  @at-root .menu--dark & {
    // Style lorsque un parent a la classe `menu--dark`
  }
  @at-root .menu--white & {
    // Style lorsque un parent a la classe `menu--white`
  }
}
```

Est-ce mieux, moins bien, utile ou disgracieux, à vous d'en juger ! Je pense personnellement que cette directive a sa place mais qu'il faut l'utiliser avec parcimonie et dans le cas limité des variations de style. Avec elle, il est par exemple possible d'écrire du style global même au plus profond de vos imbrications de style.

**Ne faites jamais ça**.

Et si par malheur vous le faites, ne dîtes pas que c'est moi qui vous ai montré comment faire 😄
