---
layout: post
title:  "cms webhooks with contentful & express"
date:   2018-8-13
categories: react
---

## background

i work on the [yogaglo](https://www.yogaglo.com/) team as a web developer, and there's few things i love more than automating processes. amongst many other features, yogaglo offers programs, which allow users to take classes of a certain difficulty in a progressive order. for a long time, program classes had to be manually inputted into our database by an engineer. programs could have anywhere between 3 and 54 classes, so this got tedious fast. moreover, we wanted to shift this responsibility from our devs to our content team. i saw this as a great opportunity to automate a tedious process. the services team and i decided a [cms](https://en.wikipedia.org/wiki/Content_management_system) was our best option. i spearheaded this project and, after a bit of research, i encouraged us to use [contentful](https://www.contentful.com/).

## implementing contentful

contentful has a concept of [content models](https://www.contentful.com/r/knowledgebase/content-modelling-basics/), which act as a blueprint for a type of content (go figure). we started with a program content model that would allow our content team to input all the specifics of a program with a user-friendly interface. no command tools here. contentful would eventually be talking to our database by way of an express service, so there were data models from our database that we had to translate into contentful content models. to this point, the program content model had relationships to props (fit blocks, chairs, yoga mats, etc) and tags (used for filtering on all programs), as well as a link to a recommended next program.

it was at this point i started working on validation.

