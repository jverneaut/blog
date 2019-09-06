---
title: 'Maitriser les espaces insécables'
date: '2019-09-04 19:30'
---

Si vous faites du développement Web depuis un certain temps, il vous est certainement déjà arrivé une de ces situations :

- Peu importe la classe que vous ajoutez à votre titre, un des mots dépasse de son container,
- Des mots sont collés en front alors qu'il apparaissent espacés normalement dans votre back-office,
- Un groupe de mot passe à la ligne alors qu'ils pourraient largement se séparer sur 2 lignes,
- _Etc, etc, etc._

La source commune de tous ces problèmes s'avère souvent être la même. J'ai nommé... l'entité HTML `&nbsp;`.

## Qu'est-ce que l'élément `&nbsp;`

De l'anglais _**N**on **B**reakable **SP**ace_, cet élément crée, comme son nom l'indique, un _espace non-cassable_ – **espace insécable** en bon français.

Cet élément permet de créer un espace entre deux mots garantissant que ces mots restent sur la même ligne coûte que coûte. Ainsi si j'écris `un&nbsp;deux` dans mon code source, je m'assure que je ne verrai jamais `un`, un retour à la ligne puis `deux` sur la ligne du dessous.

## Exemple d'usages fréquents des espaces insécables

Vous allez le voir, les usages de cet élément sont généralement étroitement liés aux règles de syntaxe.

### Données monétaires

Pour ma part, je suis régulièrement confronté à l'utilisation de données financiaires lors du développement d'applications web. Pour prendre l'euro comme exemple, la syntaxe impose d'écrire le montant avec un espace pour les milliers, de laisser un espace vide puis d'écrire le symbole €.

Cependant, si je ne fais pas attention et que j'écris simplement `10 000 €`, je risque de me retrouver dans ces cas non désirables :

```txt
Le solde de votre compte est de 10 000
€

ou

Le solde de votre compte est de 10
000 €
```

Si au contraire j'écris `10&nbsp;000&nbsp;` je suis certain de me retrouver avec un de ces 2 cas :

```txt
Le solde de votre compte est de 10 000 €

ou

Le solde de votre compte est de
10 000 €
```

### Éléments de syntaxe

La syntaxe française exige que chaque symbole composé de 2 parties (:, ;, «, etc.) soit entouré de deux espaces.

Ainis, cet exemple est correct :

```txt
Lequel choisir : celui-ci ou celui-là ?
« Je n'en sais rien » dit-elle.
```

... alors que celui-ci ne l'est pas :

```txt
Lequel choisir: celui-ci ou celui-là ?
«Je n'en sais rien» dit-elle.
```

Attention, je ne suis pas expert en la matière syntaxe et je suis certain que notre belle langue réserve plein de subtilités à ce sujet. Si vous êtes un poil perfectionniste je vous conseille fortement de perdre quelques heures dans les passionantes pages Wikipedia à ce sujet.

Pour revenir à nos moutons, l'élément `&nbsp;` s'applique très bien dans ces cas-là car il permet d'ajouter un espace tout en évitant les effets inhestétiques liés aux retour à la ligne inattendus.

### Autres usages

En dehors de ces usages plutôt courants, il existe une multitude d'autres cas d'utilisation de cet élément. Comme bon nombre de choses dans le développement, il suffit d'y être exposé une fois que le concept devienne disponible dans notre tête et utilisé le moment venu.

## Les inconvénients de cet éléments

En introduction de cet article, j'évoquais des cas plutôt embettants liés à l'utilisation du `&nbsp;`. Car si une de ses propriétés est de se faire passer pour un espace, il m'est arrivé plusieurs fois d'avoir à les chasser dans un texte d'apparence normale mais présentant des problèmes d'affichage.

En effet, de nombreux éditeurs de texte ajoutent ces éléments pour que le texte s'affiche correctement de leur côté. Les problèmes interviennent dès que le texte est copié-collé et utilisé directement dans le html. C'est le cas de Word, de Sketch et d'un tas d'autres softwares n'ayant par pour but premier l'édition de contentu html.

---

## Extension Chrome pour détecter les `&nbsp;` sur le web

A force de perdre du temps à fouiller le HTML pour trouver ces éléments, j'ai décidé de créer une extension Chrome pour les identifier rapidement.

Elle est Open Source, n'a pas encore de nom et [son code source est disponible ici](https://github.com/jverneaut/nbsp).

Je vous encourage à y jeter un coup d'œil si vous rencontrez fréquemment ce genre de problème.
