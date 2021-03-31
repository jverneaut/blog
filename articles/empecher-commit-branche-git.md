---
title: 'Git Hooks : Empêcher un commit dans une branche'
date: '2019-08-22 18:00'
path: 'empecher-commit-branche-git'
---

Créer un nouveau fichier nommé `pre-commit` dans le dossier caché `.git/hooks` et saisissez-y ce contenu :

```bash
#!/bin/sh

branch="$(git rev-parse --abbrev-ref HEAD)"

if [ "$branch" = "master" ]; then
  echo "Commit impossible sur la branche master"
  exit 1
fi
```

Ensuite rendez-le exécutable avec :

```bash
chmod +x .git/hooks/pre-commit
```

Ceci aura pour effet d'empêcher tout commit fait directement sur la branche master. Les merge seront, eux, toujours possibles.

Source : [Git: Prevent commits in master branch](https://stackoverflow.com/questions/40462111/git-prevent-commits-in-master-branch)
