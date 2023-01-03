---
title: "Weather app"
weight: 90
date: 2022-05-04T17:12:30+02:00
draft: false
categories: "Website"
summary: "Development of a website that displays atmospheric data through an API"
image: "/images/msi.png"
image1: "/images/MSIDiagram.png"
image2: "/images/msi.png"

technology1: "Python"
technology2: "Flask"
technology3: "HTML"
technology4: "CSS"
technologyImage: "/images/web96.png"

projectType: "University Project"
nbContributors: "3"
endDate: "7/11/2022"
link: "https://github.com/JulesBobeuf/weather-app"

context: "Context"

contextParagraph: "Thomas Santoro, Aymeric Jakobowski and I developed a web application that displays atmospheric data for a selected town. The goal was to collect the data, to store them in a SQLite database and to display them through texts and graphics. In order to do that, we used Flash, a Python Framework."

p1: "Retrieving data"

p1Text: "The first thing we needed to do was to collect the data. For that, we used an API called wttr. (http://wttr.in) We received the data in a list, which after treatment, was sent into the database to store the informations.
We fully coded the database with Python. We developed functions that would create and delete the tables, that would insert data, or that would retrieve it. In order to do this, we first thought about how the database would work, before writing the Python code.
"

p2: "Displaying data and automatization"

p2Text: "In order to display the data, we first had to get it from the database. In order to do that, we used SQL queries that were adapted to what the user wanted. We then used HTML templates with a bit of CSS to display it nicely onto the website. For the graphics, we mainly used Matploblib, a python module.
To have a user-friendly app, we made the data collect automatic. Indeed, if the program is online, it will automatically retrieve the data for all requested towns every hour, and will store the queries it executes into a logger. This logger allows us to easily keep track about what the program does. It's also a help to find potential problems the application could have to retrieve the data."

p3: "Final result"

p3Text: "As said earlier, the application takes care about everything that's related to its back-end. All the user needs to do is to go on the website and to enter the town he wants to retrieve the data for and a time span. Then, the app will load a new template and will show the retrieved data."
---

##### Project members :
&nbsp;
- Aymeric Jakobowski : [LinkedIn](https://www.linkedin.com/in/aymeric-jakobowski/)
- Thomas Santoro  : [LinkedIn](https://www.linkedin.com/in/thomas-santoro/)