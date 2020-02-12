---
title: 'Git : Mettre à jour une branche avec master'
date: '2020-02-12 10:30'
---

Lors de la collaboration avec plusieurs développeurs sur un projet, des conflits peuvent se produire si la branche sur laquelle vous voulez merger a changé depuis la création de votre branche.

Plutôt que de constater et de résoudre ces problèmes dans l'interface GitHub ou Bitbucket, je préfère mettre à jour ma branche de travail avant de push mes modifications sur le repo distant et de résoudre les potentiels conflits en local par la même occasion.

Seulement voilà, cette démarche demande plusieurs commandes qu'il est long de taper à chaque fois. Aller sur master, récupérer les dernières modifications, retourner sur la branche de travail, merger master...

Voilà pourquoi je propose de **créer un alias** qui permet d'effectuer toutes ces commandes en quelques secondes seulement.

Éditez votre fichier `~/.bash_profile` et ajoutez-y cette ligne :

```bash
alias r="git checkout master && git pull && git checkout - && git merge master"
```

Ainsi, sur une branche de travail, vous pouvez désormais lancer la commande `r` qui va automatiquement effectuer toutes les opérations permettant de mettre votre branche à jour avec master.
