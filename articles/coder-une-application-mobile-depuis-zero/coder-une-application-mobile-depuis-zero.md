---
title: 'Coder une application mobile depuis zéro en 2020'
date: '2020-09-02 13:33'
---

Lorsque je fais de nouvelles connaissances et que je leur dis que je suis un développeur, j'obtiens souvent ce genre type de réponse :

> Oh, super ! J'ai justement un projet d'application. Est-ce que tu pourrais me montrer comment faire ?

Tout d'abord, je m'estime extrêmement chanceux d'exercer un métier qui puisse susciter ce genre de réactions. Ce post n'est pas du tout une plainte, au contraire ! Seulement, il faut se rendre à l'évidence, être capable de développer ses propres projets demande un investissement personnel conséquent et certainement plusieurs mois de travail.

Même si je prends beaucoup de plaisir à répondre aux questions qu'on me pose et à démystifier ce que je fais, j'ai décidé d'écrire ce billet pour aiguiller mes futures rencontres vers une ressource qui reflète ce que moi, si j'étais à leur place, j'emprunterai comme voie pour développer une application en partant de zéro.

![Un bureau de développeur suspicieusement bien rangé...](screen.jpg)

## Le voyage d'une vie

Tout d'abord, il me paraît essentiel de vous prévenir que ce voyage peu être long. Très long. Au moment où je vous parle, [mon tout premier programme](https://github.com/jverneaut/refactoring-14-year-old-me-code) souffle déjà sa neuvième bougie ! 🎂 Pourtant, semaine après semaine, je découvre encore de nouveaux horizons inexplorés et je prends toujours autant de plaisir à mener à bien des projets qui me paraissaient auparavant inachevables.

Apprendre à coder, c'est mettre la pas dans un monde si vaste qu'il est impossible pour une seule personne d'en explorer toutes les facettes dans une seule vie.

---

Si ce voyage peut être long, il est toutefois possible d'en récolter les premiers fruits rapidement et c'est ce vers quoi je veux vous guider aujourd'hui.

> Le meilleur moment pour apprendre à coder était il y a 20 ans. Le deuxième meilleur moment est maintenant. <br>**– Sun Tzu** <small>_(probablement)_</small>

## Un petit peu de terminologie

Avant d'entrer dans le vif du sujet, laissez-moi éclaircir quelques termes qui j'utiliserai par la suite dans cet article :

- **langage de programmation :** il s'agit de la notation conventionnelle que le développeur utilise pour donner des instructions à un ordinateur. Il en existe une multitude avec chacun ses avantages et ses inconvénients. Nous verrons lesquels nous avons besoin de connaître un peu plus loin.
- **technologie :** j'utilise ce terme générique pour parler d'un ensemble de composants permettant de créer un logiciel mais aussi plus généralement des langages et/ou des pratiques étant reconnues comme faisant parti d'un ensemble cohérent. Je parlerai ainsi plus loin des technologies web pour désigner le trio HTML/CSS/JS.
- **HTML/CSS/JS :** ce sont les trois langages que comprennent la majorité des navigateurs. Ils sont utilisés pour modéliser du contenu (HTML), le mettre en forme (CSS) et ajouter des interactions dans la navigateur (JavaScript).
- **serveur :** il s'agit d'une machine qui offre des services à des clients. Ces services peuvent inclure l'accès à des ressources web, l'hébergement d'une boîte mail, la gestion d'une base de données, etc. Un serveur, c'est simplement un ordinateur qui héberge des programmes qui, lorsqu'il sont appelés, effectuent des actions et renvoient la plupart du temps un résultat au client qui les a appelés.

## Les deux composants d'une application mobile

Si vous parlez application mobile avec un inconnu au hasard dans la rue, il va probablement penser à ce qu'il voit sur son téléphone lorsqu'il ouvre Twitter par exemple. Dans le jargon, nous appelons cette partie visible le **frontend** (Je viens d'apprendre qu'on dit aussi développement frontal en français mais ce terme est peu usité en pratique).

Que se passe-t-il lorsque vous envoyez un Tweet depuis le frontend (c.-à-d. encore une fois l'application que l'utilisateur a installé sur son smartphone) ? La plupart des applications sont fondées sur le modèle [client–serveur](https://fr.wikipedia.org/wiki/Client-serveur). Dans notre cas, l'application Twitter est le client. Quand vous cliquez sur Publier, une requête est faite vers un serveur qui s'occupe ensuite de stocker le Tweet et d'effectuer d'autres actions telles que d'avertir vos followers, générer de nouveaux fils d'actualités, etc. On appelle cette partie le **backend**.

![Un rack de serveurs](servers.jpg)

Sur le marché du développement, on appelle les développeurs qui pratiquent les 2 disciplines des développeurs **fullstack**. En pratique, les 2 champs ne sont pas exclusifs et la plupart des développeurs expérimentés sont capables d'endosser les 2 rôles selon les besoins du projet sur lequel ils travaillent. C'est là un de mes aspects préféré de ce métier.

Dans un premier temps et si vous débutez la programmation, il va probablement falloir choisir parmi ces 2 aspects de développement. En effet, chacun demande une expertise et des connaissances bien spécifiques ce qui rend leur apprentissage simultané compliqué pour un débutant. Je vous rassure, il existe des ressources permettant dans certains cas de se passer d'un backend et d'utiliser des services tiers pour répondre à ce besoin.

### Le frontend en détails

Le frontend, c'est donc tout ce qui concerne ce que l'utilisateur voit sur son écran. En tant que développeur front, votre rôle est d'afficher du contenu, de le mettre en forme, d'animer les éléments, de gérer les actions au toucher, etc.

Dis simplement, tout ce qui à consiste à faire bouger les pixels d'un écran, c'est votre boulot !

Le principal défi du développement mobile vient de la multitude d'appareils, de tailles d'écrans et de systèmes d'opérations disponibles sur le marché. À l'heure actuelle, les iPhones et les Androids se partagent le marché. Rien que ça, c'est déjà 2 systèmes d'exploitation complètement différents.

Pour les **iPhones**, le système d'exploitation s'appelle **iOS** et les applications qu'il fait tourner peuvent être écrites en **Swift** ou en **Objective-C**.

Pour les autres appareils de type **Samsung, Huawei, Xiaomi, etc.** le système d'exploitation s'appelle **Android** et les applications qu'il fait tourner peuvent être écrites en **Kotlin** ou en **Java**.

Développer une application pour ces 2 environnements très différents en utilisant un langage spécifique à chacun peut s'avérer très fastidieux pour une seule personne. Heureusement, je vais vous présenter un peu plus bas les solutions dites **multi-plateformes** qui permettent de pallier à ce problème.

### Le backend en détails

Le backend, c'est tout ce qu'il se passe en dehors de l'application installée sur le smartphone.

Pour reprendre notre exemple précédent, il s'agit de la couche applicative qui fonctionne sur des serveurs et qui permet à votre Tweet de parvenir sur les smartphones de vos followers.

Généralement, le backend est composé d'au moins 2 parties :

- **une base de données** qui se charge de garder en mémoire... des données. Pour dire les choses simplement, une base de données agit comme un disque dur sur lequel vous pouvez ranger des données de manière ordonnée. Vous pouvez par exemple ranger vos utilisateurs dans le compartiment `users`, ranger les tweets dans le compartiment `posts`, etc. Par la suite, vous pouvez lui demander de récupérer les données avec des requêtes du type _« Hey base de donnée, donne-moi tous les posts qui ont été publiés par l'utilisateur ayant comme identifiant 1234 s'il te plaît. »_.
- **un serveur d'application** qui se charge de recevoir les requêtes depuis le frontend, d'effectuer des opérations, d'ajouter, de modifier ou de supprimer des données dans la base et de retourner un résultat à l'utilisateur.

Pour communiquer avec cet ensemble, on doit exposer ce qu'on appelle une **API** au monde extérieur. Une API – ou [interface de programmation](https://fr.wikipedia.org/wiki/Interface_de_programmation) en français – se présente souvent sous la forme d'une URL que le client va _consommer_.<br>
Par exemple, Twitter expose cette URL qui permet de récupérer la liste des tweets d'un ou plusieurs utilisateurs : `https://api.twitter.com/2/tweets/?ids=xxxxxxxxx`.

<small>Bien sûr je prends beaucoup de raccourcis dans mes explications et notamment dans ma définition d'une API. Ce que je souhaite ici c'est que vous sentiez le plus simplement possible comment fonctionne une application classique de type client-serveur.</small>

---

Disons-le tout de suite, si vous débutez la programmation il est préférable de laisser de côté cet aspect pour le moment. Avec le frontend, vous pouvez faire à peu près n'importe quoi sans réelles répercutions autres que faire crasher l'application sur votre smartphone. Avec le backend, si vous ne faites pas attention, un tiers mal intentionné n'aura aucun mal à trouver les failles de votre système et compromettre vos serveurs et les données de vos utilisateurs.

![Un dangereux h4ck3r en train de h4ck3r](hacker.jpg)

Heureusement, des solutions existent pour vous faciliter la vie. Elles permettent de _provisionner_ une base de donnée et d'y effectuer des requêtes sans aucune ligne de code ou presque. C'est notamment la promesse de [Firebase](https://firebase.google.com/), une solution développée par Google. [AWS Amplify](https://aws.amazon.com/fr/amplify/) développé par Amazon Web Services est assez similaire dans son approche mais s'adresse à un public légèrement plus expérimenté.

En résumé, préférez laisser cette partie à un professionnel ou attendez d'être sûr de vos compétences avant de vous attaquer au backend. Les enjeux sont significativement plus importants et personne n'a envie de voir son application piratée. En attendant, préférez des solutions tierces comme Firebase pour développer vos prototypes et vous familiariser avec les autres aspects du développement mobile.

## Application native ou application multi-plateforme ?

J'en parlais un peu plus haut, la multitude d'appareils, de système d'exploitations et de langages à connaître peut vite décourager même les plus téméraires d'entre vous.

Créer une application en utilisant les technologies propre à chaque système, c'est ce qu'on appelle créer une application **native**. Par exemple, une application native pour Android utilisera Java alors qu'une application native pour iOS utilisera Swift.

Heureusement, des solutions qu'on appelle **cross-plateformes** (ou multi-plateformes) sont apparues récemment avec une promesse : **une seule et même base de code pour iOS et pour Android**.

Globalement, le monde du développement mobile semble s'orienter vers le développement d'applications multi-plateformes depuis quelques années et cette tendance ne fera que s'affirmer avec l'arrivée sur le marché de nouvelles technologies.

Le principe est simple : utiliser les technologies du web pour créer des applications mobiles. C'est l'approche que j'ai prise et je ne peux que la recommander pour plusieurs de raisons :

- **Le web est là pour durer.** En apprenant à coder des applications avec les langages du web, vous allez développer des compétences qui seront utiles toute votre vie. La première version d'HTML date de 1993, celle de CSS de 1996 et celle de JavaScript de 1995 ! Une chose est sûre, ces langages ne sont pas près de passer de mode et sont une valeur sûre pour une initiation au développement.
- **Time to market.** Même si chaque plateforme demande une attention particulière, le temps de développement est diminue significativement avec l'utilisation d'une technologie multi-plateforme.
- **Beginner friendly.** Si vous êtes débutant, mieux vaut se concentrer sur une seule technologie. Pour cette raison, le **cross-plateforme** est idéal car il vous permet de vous concentrer sur un seul set de langages.

Vous l'aurez compris, je recommande donc fortement de passer par ces technologies pour mener à bien votre projet.

Comme elles sont basées sur le trio légendaire HTML/CSS/JS, je pense qu'il est préférable d'y consacrer un peu de temps en amont. C'est pourquoi je ne vous parlerai des technologies en question qu'après vous avoir guidé dans votre apprentissage du web.

![Des développeurs en herbe en train d'apprendre les bases du HTML](enfants.jpeg)

## Apprendre les bases de la programmation web

Une des raisons qui rendent ce métier si formidable c'est l'esprit de communauté qui y règne. Au fur et à mesure des années, le nombre de ressources gratuites pour apprendre le développement a explosé. Aujourd'hui, malgré la relative complexification du domaine, il est plus simple que jamais de mettre le pieds à l'étrier.

Sans réel ordre de préfèrence, voici les ressources que je recommande pour entamer votre apprentissage :

### OpenClassrooms 🇫🇷 – <small>[openclassrooms.com/fr](https://openclassrooms.com/fr/)</small>

Impossible de ne pas parler de l'ex SiteDuZéro. Véritable **pilier du paysage éducatif français**, ce site a permis à toute une génération de développeurs – _et j'en fais parti !_ – d'apprendre les bases de la programmation et de se lancer dans une carrière enrichissante par la suite. Son fondateur, [Mathieu Nebra](https://www.youtube.com/watch?v=FVTX2RsJgmI), a eu une influence directe sur des milliers de curieux qui, un jour, se sont demandés comment fonctionnait un ordinateur puis ont attrapé le virus de la programmation par la suite.

Aujourd'hui, l'entreprise a grandit et propose même des formations diplômantes reconnues par l'état. Pour moi, c'est la meilleure ressource en français pour apprendre les bases de la programmation ou les renforcer.

[Le cours sur le HTML](https://openclassrooms.com/fr/courses/1603881-apprenez-a-creer-votre-site-web-avec-html5-et-css3) que j'ai suivi il y a presque 10 ans est régulièrement mis à jour et est toujours une valeur sûre pour vous familiariser avec les concepts de base de ce langage.

### freeCodeCamp 🇺🇸 – <small>[freecodecamp.org](https://www.freecodecamp.org/)</small>

Lorsque j'ai voulu me spécialiser dans le développement Web, c'est ce site qui m'a permis d'apprendre le JavaScript moderne et de toucher aux bases de React.

Il se présente sous la forme d'une liste d'exercices de difficulté graduelle. Vous devez vous débrouiller pour trouver la solution avec ce que vous savez déjà, les petits cours qu'il propose et ce que vous pouvez trouver en lisant de la documentation sur internet.

Pour peu que vous vous soyez un minimum à l'aise avec l'anglais, ce site est un excellent moyen de mettre les mains dans la cambouis et d'apprendre à vous débrouiller sur le web par vous-même.

### Udemy 🇫🇷🇺🇸 - <small>[udemy.com](https://www.udemy.com/)</small>

Même si cette plateforme n'est pas spécialisée dans le développement, elle propose des cours sous format vidéo à bas prix permettant de se familiariser avec une technologie rapidement. Lorsque j'ai besoin de monter en compétence sur un nouveau framework, c'est généralement un de mes premiers choix. Pour une vingtaine d'euros par cours et quelques heures de mon temps, je trouve ce format efficace pour obtenir une vue d'ensemble d'une technologie particulière.

Personnellement, je préfère les cours en anglais sur cette plateforme car ils sont souvent très complets et je trouve les instructeurs pédagogues et agréables à écouter. Il existe également de nombreux cours en français qui, j'en suis sûr, doivent être très bons eux aussi.

Parmi les cours que j'ai pu suivre je conseille tout particulièrement ceux de [Stephen Grider](https://www.udemy.com/user/sgslo/) et de [Maximilian Schwarzmüller](https://www.udemy.com/user/maximilian-schwarzmuller/). Lorsque j'ai voulu apprendre React, le premier m'a été d'une aide inestimable et je recommande chaudement tous les cours qu'il a sorti depuis. Lorsque pour les besoins d'un projet l'équipe avec laquelle je travaillais a du se former à Vue.js, le second nous a permis d'être opérationnels en quelques jours seulement.

<small>**Attention :** cette plateforme aime beaucoup jouer avec les prix barrés pour vous faire croire à un prix exceptionnellement bas sur un cours. En pratique, ces offres sont monnaie courante et même si la plupart des cours se vendent autour de 200 €, ne payez **jamais** ce prix et patientez quelques jours que son prix passe sous la barre des 20 € sous prétexte que nous soyons le 24 décembre, un lundi ou qu'il fasse beau aujourd'hui... (ne rigolez pas, ces offres sont parfois réellement farfelues)</small>

### Autres ressources

Il existe infiniment plus de ressources que celles que je viens d'énoncer. YouTube, les blogs, les documentations officielles, les bootcamp, les MOOCs, etc.

Elles sont évidemment toutes valables et lorsque vous aurez grandi en tant que développeur, il vous suffira parfois de vous plonger dans de la documentation pour être suffisamment à l'aise avec un framework pour pouvoir l'utiliser. En revanche, pour débuter, je pense que l'approche du cours en ligne est la plus efficace car elle vous offre un chemin déjà tracé et permet à chacun d'évoluer à son rythme.

Si c'était à refaire je pense que je choisirais les mêmes ressources que celles que j'ai choisies à l'époque. D'abord me familiariser avec les différents languages avec OpenClassrooms, ensuite renforcer mes connaissances avec freeCodeCamp puis, selon mes besoins, alterner entre Udemy et les documentations officielles pour monter en compétence sur des technologies particulières.

---

Maintenant que nous en savons un peu plus sur HTML/CSS/JS, venons-en à ce que vous devez apprendre pour développer votre propre application mobile.

## Quelles technologies choisir ?

Vous l'aurez compris, je trouve les solutions cross-plateformes particulièrement efficaces de par la vélocité de développement qu'elles permettent et l'universalité des technologies qui les constituent.

Je vais d'abord vous parler de mon coup de cœur que j'utilise dans mon travail et pour mes projets personnels depuis plusieurs années : **React Native 😍**.

### React Native

[React Native](https://reactnative.dev/) est basé sur le framework [React](https://fr.reactjs.org/) créé par Facebook. Ce dernier permet la création d'applications pour le web en utilisant JavaScript.

C'est cette technologie que je vous conseille d'utiliser. Comme mise en bouche, voici un exemple d'un composant qui affiche un compteur et un bouton pour l'incrémenter :

```React
import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count => count + 1);

  return (
    <View>
      <Text>{count}</Text>
      <Button title="Increment" onPress={increment} />
    </View>
  );
};
```

Je ne suis pas là pour donner un cours de programmation mais j'aimerai vous en donner le goût en détaillant rapidement ce que fais le programme ci-dessus :

- `import { ... } from 'xxxx'` : comme nous utilisons des librairies _(du code déjà écrit par quelqu'un d'autre)_, nous devons importer ce dont nous avons besoin dans notre programme. Ici, nous cherchons les éléments `Bouton`, `Text` et `View` qui permettent d'afficher un bouton, du texte et une zone de contenu dans le cadre d'une application mobile. Le reste n'est pas très important pour le moment.
- `const [count, setCount] = useState(0)` : encore une fois, la syntaxe n'est vraiment pas importante pour le moment. Tout ce que nous faisons ici c'est de déclarer la variable `count` qui fait partie de _l'état_ de notre composant. L'état, c'est simplement une représentation des données que contrôle le composant à un moment T. Si l'état change, l'apparence du composant change généralement.
- `const increment = () => setCount(count => count + 1)` : ici, nous créons une _fonction_ qui, lorsqu'elle est appelée, augmente la valeur de `count` d'une unité.
- `<Text>{count}</Text>` : nous affichons comme texte ce que contient actuellement la variable `count`.
- `<Button title="Increment" onPress={increment} />` : lors d'une pression sur le bouton, on appelle la fonction `increment` qui va augmenter la valeur de `count` d'une unité. La magie de React fait qu'une fois la valeur modifiée, tous les composants qui font référence à cette variable vont être à nouveau rendu à l'écran.

Vous voyez qu'en quelques lignes, nous avons un morceau d'application qui pourrait fonctionner sur **la quasi-totalité des appareils iOS et Android !** Si vous ne comprenez rien à ce morceau de code, ne vous inquiétez pas c'est tout à fait normal. Je voulais simplement montrer cet exemple relativement simple pour montrer la puissance de cette technologie et le peu de nombres lignes de code qu'elle permet d'écrire comparativement à 2 applications iOS et Android pour peu que vous soyez à l'aise avec React.

Il existe néanmoins quelques inconvénients à ces technologies. AirBNB a quelques peu chamboulé le monde du développement mobile lorsqu'ils ont [annoncé en 2018 qu'ils n'utiliseraient plus React Native](https://medium.com/airbnb-engineering/react-native-at-airbnb-f95aa460be1c) après avoir en avoir été des fervent défenseurs pendant plusieurs années. En revanche, les problèmes qu'ils ont rencontré ne risquent pas de vous concerner à moins que vous ayez une équipe de plusieurs centaines de développeurs à diriger.

### PhoneGap, Cordova & Co.

Contrairement à React Native qui se base sur le framework React, d'autres technologies comme PhoneGap ou Cordova permettent d'écrire directement du HTML pour créer votre application.

En revanche, là où React Native effectue un mapping des composants `Bouton`, `Text`, etc. vers leurs contreparties _natives_, ces technologies se contentent d'encapsuler un navigateur web au sein de votre application et d'y afficher le contenu de vos pages web. Concrètement, les performances s'en trouvent dégradées et l'expérience utilisateur en pâtit sur les appareils les moins puissants.

En revanche, cette approche peut être suffisante pour convertir rapidement un site web en application mobile ou simplement pour s'initier au développement.

### Flutter

[Flutter](https://flutter.dev/) joue sur le même terrain que React Native. Développée par Google, cette solution utilise le langage Dart. Pour cette raison et parce que Dart n'est à l'heure actuelle que très peu utilisé en dehors de Flutter, je ne conseille cette technologie qu'à ceux étant sûr de ne vouloir faire que du mobile.

Pour les autres qui souhaitent s'aventurer sur le web, je pense que React Native est une bonne solution tant les connaissances sont transférables entre les 2 plateformes.

### Les PWA (Progressive Web Applications)

Les [PWA (Progressive Web Applications)](https://fr.wikipedia.org/wiki/Progressive_web_app) sont des applications web (des sites internet) qui peuvent, si l'utilisateur le souhaite, être installées comme des applications natives sur de multiples supports.

Même si ces applications peuvent sembler simples à créer de prime abord, je pense qu'un développeur débutant peut rapidement se perdre dans la configuration nécessaire au bon fonctionnement de ce genre d'applications.

Si toutefois l'envie vous prenais de vous y aventurer, je conseille tout particulièrement le framework [Ionic](https://ionicframework.com/) qui propose une solution élégante pour la création de ce type d'applications.

## Conclusion

Je souhaitais répondre à cette question en quelques lignes mais je me suis vite rendu compte que le sujet était bien plus vaste que je ne le pensais initialement. Pourtant, j'ai l'impression de n'avoir fait qu'aborder certains éléments.

Cette quête n'est pas des plus simples. En revanche, ce qui fait la beauté de ce domaine c'est que même si vous vous perdez, vous accumulerez quand même des compétences que vous pourrez transférer vers d'autres technologies plus tard.

En revanche, si vous souhaitez suivre un chemin un peu plus tracé de peur de vous égarer, je pense humblement que celui que j'ai emprunté et que je détail ici fonctionne et qu'il pourra vous aider à atteindre vos objectifs.

### TL;DR

La route est longue pour apprendre le développement mobile. Toutefois, avec de la rigueur et du temps devant soi il est possible d'obtenir rapidement des résultats satisfaisants.

Pour ceci, voici la route que je conseille :

- **se familiariser avec les technologies du web** avec des plateformes telles que freeCodeCamp ou OpenClassrooms,
- **choisir une solution cross-plateformes** pour développer des applications iOS et Android en utilisant les technologies du web (React Native),
- **utiliser un backend existant** le temps d'apprendre le fonctionnement de la partie frontend puis passer à l'apprentissage backend une fois ces étapes maîtrisées (Firebase ou équivalent).
