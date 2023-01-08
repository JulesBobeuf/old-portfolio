---
title: "Slime Jump"
weight: 69
date: 2022-05-04T17:12:30+02:00
draft: false
categories: "Video Game"
summary: "Made a small platform game using Z-Sharp, a fun made programming language."
image: "/images/SlimeJump-48x48.png"
image1: "/images/ZSharp.png"
image2: "/images/SlimeJump.png"

technology1: "Z#"
technology2: ""
technology3: ""
technology4: ""
technologyImage: "/images/game.png"

projectType: "Personal Project"
nbContributors: "1"
endDate: '07/01/2023'
link: "https://github.com/JulesBobeuf/SlimeJump"

context: "Context"
contextParagraph: "While I was watching videos on YouTube, I found a very uncommon video which quickly took my intention : 'Making My Own Programming Language and Coding a Game in It' by AstroSam. After watching the video, I knew I had to try this language and to do a small project with it. This is how I got the idea to make Slime Jump."

p1: "About Z-Sharp"

p1Text: "Z# Is, as said earlier, a language made my AstroSam during his free time, just for fun. The language is not finished at all and it does not seem like it will be updated at the moment. The language is very limiting which made it complicated to find a game to make. There is no for loops, no lists, it's not optimised and so on. Although it has a lot of negative aspects, it's very easy to make a graphic interface with it, which is it's main goal anyways. As a whole, it's a wonderful idea i think, which is mainly why I decided to do a project using Z#. However, it's quite hard to program anything with it. Also, Just for your information, Slime Jump is coded with Z-Sharp v2.1.3-alpha."

p2: "Difficulties Encountered"

p2Text: "There is barely any documentation about Z-Sharp which makes it hard to know what's possible to do or not. Also, there is no libraries for the language, which means you must go full native. My biggest issue was with the GUI : The way it works is as follow : You initialize it in the main method, using a command. Then, you must implement two functions Start() and Update(). Start will be called once after the initialization, then Update will be called every frame. Because of this, any Sprite you'd like to Display after a certain event will either not stay displayed for a long time or just not work. Which is why you must display everything at the beginning, which limits your choices a lot. I've tried to use other functions but it would not work. This limited my options a lot, but I still figured out how to make that game work."

p3: "About Slime Jump"

p3Text: "The game is very simple : The goal is to reach the top right of the screen, on the ladder. There is only 1 level because of the language restrictions. You get to move left with A, right with D, you sprint with L Control and jump with space. That's literally it, except that the slime block does some special things! Anyways, I loved to work on this project, which is why I thought I should share it here."
---

#### Useful Links 
&nbsp;
- AstroSam's video : [Youtube](https://youtu.be/JP9n5wHyemU)
- ZSharp : [GitHub](https://github.com/sam-astro/Z-Sharp)