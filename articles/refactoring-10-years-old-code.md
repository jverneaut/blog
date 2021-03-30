---
title: 'Refactoring 10 years old code'
date: '2021-03-30 16:30'
---

At the time of writing this article, it has already been 10 years since I first dabbled into programming.

I still remember vividly how exalted I was when I ran my very first program after spending countless hours reading every ressources I was able to find on the subject.

To this day, I still take great pleasure in designing programs, but I much more prefer taking something good and making it even better.

## colors.bat

## Plan

- Introduction, histoire de ma découverte du code il y a 10 ans
- Présentation des fonctionnalités du programme
- Critique rigolote du code
- Axes d'amélioration
- Code final
- Conclusion

---

Au moment d'écrire cette article, cela fait déjà 10 ans que j'ai écrit du code pour la première fois.

Je me rappelle encore de la joie que j'ai ressentie lorsque, après des heures et des heures de recherche, j'ai enfin réussi à écrire un petit programme qui faisait exactement ce que je lui disais de faire.

Aujourd'hui, je ressens toujours un plaisir immense lorsque [je fais un truc qui fonctionne]. Mais ce que je préfère par dessus tout, c'est [de faire qqch de propre une fois le premier jet terminé].

## colors.bat

Ce petit programme s'appelle colors.bat. Il n'a qu'une seule et unique fonction : demander à l'utilisateur de choisir une couleur, puis changer la couleur du terminal Windows pour refléter ce choix.

Lorsque je me suis intéressé au code, il n'était pas question d'installer quoique ce soit sur l'ordinateur familial [peur virus ou blague comme ça]. Je m'étais donc dirigé vers les applications console et donc vers le scripting batch.

Alors, prêts à voir cette abomination ? 😧

`gist:jverneaut/5fd33e958430c054adda279408d76b37#colors_old.bat`

## Analyse

Par où commencer ?

Ignorons les fautes d'orthographe pour un instant et penchons-nous ligne par ligne sur ce que fait ce morceau de code.

`gist:jverneaut/5fd33e958430c054adda279408d76b37#colors_old.bat?highlights=4&lines=1-4`

Ces 4 lignes réalisent chacune des tâches bien distinctes :

- La première ligne `@echo off` est une particularité des scripts batchs Windows. Elle signale simplement à la console de ne pas afficher à l'utilisateur les commandes exécutées mais seulement leur résultat.
- La seconde instruction `:debut` définie une région du programme qui sera accessible plus tard avec l'instruction `goto debut`, modifiant ainsi le flux d'éxécution du programme de haut en bas.
- La troisième instruction permet d'effacer le contenu de la console.
- La 4ème définie une variable `lol` qui contient le résultat d'une entrée utilisateur après avoir affiché la phrase « Quel est ta couleur prefere ? ». Je tenais encore une fois à m'excuser pour cette orthographe désastreuse, si seulement j'avais su que je me relirai un jour...

Déjà, nous voyons que certains points posent problème. En effet, point de vue expérience utilisateur, aucune indication n'est donnée quant au format de l'entrée utilisateur attendu. Sans indication, un utilisateur pourrait très bien entrer _bleu_, _bleu très clair virant un petit peu sur le vert_ ou encore _#0000ff_ par exemple.

Nous aborderons également le sujet du nommage des variables dans la prochaine section de cet article.

`gist:jverneaut/5fd33e958430c054adda279408d76b37#colors_old.bat?highlights=4&lines=1-4`

## Axes d'amélioration

<!-- `gist:jverneaut/a327edb02774d2e3d44112f2a5f76db9#colors_new.bat` -->
