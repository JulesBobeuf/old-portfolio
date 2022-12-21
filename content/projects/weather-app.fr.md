---
title: "Application températures "
weight: 90
date: 2022-05-04T17:12:30+02:00
draft: false
categories: ["Website"]
image: "/images/msi.png"
technology1: "Python"
technology2: "Flask"
technology3: "HTML"
technology4: "CSS"
technologyImage: "/images/web96.png"
summary: "Dévelopement d'un site web utilisant une API pour afficher des données atmosphériques"
---

### Contexte

Thomas Santoro, Aymeric Jakobowski et moi même ont développé une application web qui affiche les données atmosphérique d'une ville sur une période donnée. Le but était de récupérer les données, de les stocker via une base de données SQLite et de les afficher sur une page web au format texte ainsi qu'avec des graphiques, à l'aide du framework Python Flask.


### Récupération des données

La prémière étape était donc de récupérer les données. Pour ce faire, nous avons utilisé une API (http://wttr.in) qui collecte les données pour nous. Nous les récupérons dans une liste, qui après être traité, entre les informations dans la base de données.


### Base de donnée

La base de donnée à été développé entièrement en Python. Il y a des fonctions permettant de créer et de supprimer les tables, d'insérer des données, et de récupérer les données. Nous avons traité cette partie en créant le shéma de la base de donnée, et en implémentant les fonctions permettant de l'utiliser.


### Affichage des données

Pour afficher les données, nous devions premièrement récupérer les données de la base de donnée. Pour ce faire, nous utilisions des requêtes SQL adaptée à ce que le client souhaite. Ensuite, nous avons utilisé des templates HTML avec du CSS pour pouvoir rendre l'affichage plus clément à l'oeil humain. De plus, nous avons inséré des graphiques à l'aide de Matplotlib, un module Python, pour rendre le tout plus visuel.


### Automatisation

Toutes les heures, le programme récupère les données atmosphérique demandé et les rentres dans la base de données. De plus, le programme entrera dans un logger toutes les requête qu'il effectue. Cela permet de vérifier que tout fonctionne, et de détecter les problèmes plus rapidement.


### Fonctionnement

Dès lors que le programme est lancé, il s'occupe de tout. Le client n'a qu'à aller sur la page web pour consulter les données.
Lorsque celui-ci arrive sur la page web, il devra sélectionné une ville ainsi qu'indiquer une période de temps. Ainsi, le programme n'affichera que les données récuperé entre cet interval.




