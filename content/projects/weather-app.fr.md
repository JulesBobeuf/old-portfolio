---
title: "Application températures "
weight: 90
date: 2022-05-04T17:12:30+02:00
draft: false
categories: "Website"
summary: "Dévelopement d'un site web utilisant une API pour afficher des données atmosphériques"
image: "/images/msi.png"
image1: "/images/MSIDiagram.png"
image2: "/images/msi.png"

technology1: "Python"
technology2: "Flask"
technology3: "HTML"
technology4: "CSS"
technologyImage: "/images/web96.png"

projectType: "Projet Universitaire"
nbContributors: "3"
endDate: "7/11/2022"
link: "https://github.com/JulesBobeuf/weather-app"

context: "Contexte"

contextParagraph: "Thomas Santoro, Aymeric Jakobowski et moi-même avons développé une application web qui affiche les données atmosphériques d'une ville sur une période donnée. Le but était de récupérer les données, de les stocker via une base de données SQLite et de les afficher sur une page web au format texte ainsi qu'avec des graphiques, à l'aide du framework Python Flask."

p1: "Récupération des données"

p1Text: "La première étape était donc de récupérer les données. Pour ce faire, nous avons utilisé une API (http://wttr.in) qui collecte les données pour nous. Nous les récupérons dans une liste, qui entre ensuite les informations dans la base de données
La base de données a été développée entièrement en Python. Il y a des fonctions permettant de créer et de supprimer les tables, d'insérer des données, et de récupérer les données. Nous avons traité cette partie en créant le schéma de la base de données, et en implémentant les fonctions permettant de l'utiliser."

p2: "Affichage des données et automatisation"

p2Text: "Pour afficher les données, nous devions premièrement récupérer les données de la base de données. Pour ce faire, nous utilisions des requêtes SQL adaptée à ce que le client souhaite. Ensuite, nous avons utilisé des templates HTML avec du CSS pour pouvoir rendre l'affichage plus clément à l'œil humain. De plus, nous avons inséré des graphiques à l'aide de Matplotlib, un module Python, pour rendre le tout plus visuel.
Toutes les heures, le programme récupère les données atmosphériques demandées et les rentres dans la base de données. De plus, le programme entrera dans un logger toutes les requêtes qu'il effectue. Cela permet de vérifier que tout fonctionne, et de détecter les problèmes plus rapidement."

p3: "Résultat final"

p3Text: "Dès lors que le programme est lancé, il s'occupe de tout. Le client n'a qu'à aller sur la page web pour consulter les données.
Lorsque celui-ci arrive sur la page web, il devra sélectionner une ville ainsi qu'indiquer une période de temps. Ainsi, le programme n'affichera que les données récupérées dans cet intervalle.
"
---

##### Membres du projet :
&nbsp;
- Aymeric Jakobowski : [LinkedIn](https://www.linkedin.com/in/aymeric-jakobowski/)
- Thomas Santoro : [LinkedIn](https://www.linkedin.com/in/thomas-santoro/)



