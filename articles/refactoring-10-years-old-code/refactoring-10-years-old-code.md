---
title: 'Refactorisation de mon premier programme'
date: '2021-03-30 16:30'
path: 'refactoring-10-years-old-code'
---

Au moment d'écrire cette article, cela fait 10 ans déjà que j'ai écrit du code pour la première fois.

Je me rappelle encore de la joie que j'ai ressentie lorsque, après des heures de recherche, le petit programme que je venais d'écrire fonctionnait enfin comme je l'avais imaginé.

Que ce soit après la mise en ligne d'un site web, le développement d'un script ou la mise en place d'une architecture cloud, j'ai l'impression de redécouvrir à chaque fois cette sensation de satisfaction immense lorsque mon travaille _fonctionne_.

Passé cette phase, il vient un moment où le premier jet d'une solution commence à présenter ses faiblesses. Des bugs apparaissent, l'ajout de morceaux de code les uns après les autres dégradent la maintenabilité, il est temps de [refactoriser](https://fr.wikipedia.org/wiki/R%C3%A9usinage_de_code) le programme.

Après avoir retrouvé le code source du programme évoqué précédemment, c'est avec un brin de nostalgie que je vais me livrer à cet exercice aujourd'hui.

## colors.bat

Lorsque je me suis intéressé au code, il n'était pas question d'installer quoique ce soit sur l'ordinateur familial. Je m'étais donc dirigé vers la programmation d'applications en ligne de commande que j'écrivais alors avec le bloc-notes de Window XP.

Le programme qui en résulte s'appelle colors.bat. Il n'a qu'une seule et unique fonction : demander à l'utilisateur de choisir une couleur, puis changer la couleur de la console pour refléter ce choix.

Alors, prêts à voir cette abomination ? 🙃

`gist:jverneaut/5fd33e958430c054adda279408d76b37#colors_old.bat`

## Analyse

Par où commencer ?

Ignorons les fautes d'orthographe pour un instant et penchons-nous ligne par ligne sur ce que fait ce morceau de code.

`gist:jverneaut/5fd33e958430c054adda279408d76b37#colors_old.bat?highlights=4&lines=1-4`

Ces 4 lignes réalisent chacune une tâche bien distincte :

- La première ligne `@echo off` est une particularité des scripts Windows. Elle signale simplement à la console de ne pas afficher à l'utilisateur les commandes exécutées mais seulement leur résultat.
- La seconde instruction `:debut` définie une région du programme qui sera accessible plus tard avec l'instruction `goto debut`, modifiant ainsi le flux d'éxécution du programme de haut vers le bas.
- La troisième instruction permet d'effacer le contenu de la console.
- La 4ème instruction surlignée définie une variable `lol` qui contient le résultat d'une entrée utilisateur après avoir affiché la phrase « Quel est ta couleur prefere ? ». Si seulement j'avais su que je me relirais un jour...

Sans parler du nommage hasardeux des variables, nous voyons que plusieurs éléments posent problème.

En effet, d'un point de vue expérience utilisateur, aucune indication n'est donnée quant au format de l'entrée utilisateur attendu. Sans indication aucune, l'utilisateur à toute les raisons de penser qu'il pourrait aussi bien entrer _bleu_ que _bleu très clair virant un petit peu sur le vert_ ou encore _#0000ff_ par exemple.

`gist:jverneaut/5fd33e958430c054adda279408d76b37#colors_old.bat?lines=5-15`

Une fois la variable `lol` définie, ces quelques instructions se chargent de changer le flow d'éxécution du programme afin d'accéder à la bonne section selon l'entrée utilisateur fournie.

`gist:jverneaut/5fd33e958430c054adda279408d76b37#colors_old.bat?lines=20-29`

Pour certaines couleurs, le programme demande des précisions sur la teinte de la couleur puis l'assigne à une nouvelle variable `choi` pour le bleu et `lki` pour le vert dans cet exemple.

Cette fois encore, nous discuterons du nommage de ces variables dans la section suivante de cet article.

`gist:jverneaut/5fd33e958430c054adda279408d76b37#colors_old.bat?lines=58-73`

Chaque section définie par un label (ex: `:blanc`) fait 3 choses :

1. changer la couleur de l'affichage an accord avec le choix de l'utilisateur
2. mettre le programme sur pause, c'est à dire attendre que l'utilisateur appuie sur une touche de son clavier avant de poursuivre l'éxecution du programme
3. se rendre au bloc `fin`.

`gist:jverneaut/5fd33e958430c054adda279408d76b37#colors_old.bat?lines=94-103`

Une fois le contenu de l'écran effacé et le message de fin affiché, une nouvelle variable `encore` permet de rediriger l'utilisateur au début du programme, ou d'en interrompre l'éxecution selon que celui-ci ait entré oui ou non.

## Axes d'amélioration

Nous l'avons vu, même si ce programme fonctionne, il présente de nombreux axes d'amélioration.

### Expérience utilisateur

Comme évoqué précédemment, les instructions données à l'utilisateur ne sont pas claires.

Dans la nouvelle version, je propose ainsi d'aiguiller l'utilisateur en affichant clairement le type de donnée qu'il doit renseigner.

En lieu et place de l'actuel `Quel est ta couleur prefere ?`, j'ai donc fait le choix d'afficher un tableau contenant toutes les options acceptées par ce programme :

`gist:jverneaut/a327edb02774d2e3d44112f2a5f76db9#colors_new.bat?lines=7-16`

### Lisibilité du code

La première chose qui me saute aux yeux en lisant le code, c'est le manque de distinction entre les instructions système, les variables et les chaînes de caractères.

Même si le code embarqué dans cet article est proprement formaté, il faut garder à l'esprit qu'un développeur pourrait être amené à travailler sur ce fichier en utilisant un éditeur de texte de type vim ou nano ne présentant pas forcément de coloration syntaxique appropriée à ce format de fichier.

Ma proposition est donc la suivante : **toute instruction système doit être écrite en majuscules, toutes les variables en minuscules**.

J'ai également établi arbitrairement que les variables seraient écrites en [camel case](https://fr.wikipedia.org/wiki/Camel_case) dans un soucis d'uniformité.

Le script étant découpé en plusieurs étapes (choix de la couleur, affichage de celle-ci et écran de fin), il convient de refléter cette organisation dans le code en sautant des lignes quand nécessaire. Ainsi, d'un simple coup d'œil nous savons que chaque bloc réalise une opération distincte :

`gist:jverneaut/a327edb02774d2e3d44112f2a5f76db9#colors_new.bat?lines=38-49&highlights=40,47`

### Du bon nommage des variables

Faisons la liste des variables utilisées dans cette première version : `lol`, `choi`, `lki`, `lkj` et `encore`.

Si je vous demandais d'essayer de deviner ce qu'elles contiennent simplement d'après leur nom, je suis sûr que personne ne m'aurait dit que `lol` contient le nom d'une couleur ou que `lki` contient une teinte par exemple.

Dans ma version finale, j'ai réduit au strict minimum leur nombre avec pour chacune un nom explicite quant à leur contenu :

| Nom de la variable | Description                                                       |
| ------------------ | ----------------------------------------------------------------- |
| **color**          | La couleur entrée par l'utilisateur                               |
| **colorCode**      | Le code couleur déterminé par la couleur entrée par l'utilisateur |
| **retry**          | La réponse à la question "Do you want to try another one?"        |

### DRY - Dont Repeat Yourself

Le second problème qui saute aux yeux vient des lignes suivantes :

`gist:jverneaut/5fd33e958430c054adda279408d76b37#colors_old.bat?lines=46-65`

Comme décrit précédemment, celles-ci font peu ou prou la même chose à l'exception de l'instruction `color` qui change selon le choix de l'utilisateur.

Une meilleure solution consiste à effectuer cette logique plus bas dans le programme après avoir renseigné le code couleur dans une variable un peu plus haut :

`gist:jverneaut/a327edb02774d2e3d44112f2a5f76db9#colors_new.bat?lines=23-27&highlights=23-27`
`gist:jverneaut/a327edb02774d2e3d44112f2a5f76db9#colors_new.bat?lines=41-46&highlights=44`

De 20 lignes dans l'exemple précédent, nous passons désormais à 6 lignes une fois la répétition de logique évitée. La lisibilité du programme s'en trouve également fortement améliorée et un développeur n'aura aucun mal à ajouter une couleur à l'avenir sans avoir à toucher au cœur de la logique du programme.

## Version finale

Une fois ces quelques petites améliorations effectuées, le programme s'en retrouve significativement plus facile à lire, à comprendre et à utiliser.

Si un développeur souhaite ajouter une couleur, il n'a qu'à l'ajouter à liste des possibilités puis ajouter son code à la suite de ceux déjà en place.

`gist:jverneaut/a327edb02774d2e3d44112f2a5f76db9#colors_new.bat`
