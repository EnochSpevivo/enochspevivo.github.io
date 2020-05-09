---
title: online multiplayer with react & firebase - part 1
date: 2020-4-22
categories: [javascript, react, firebase]
tags: [javascript, react, firebase]
toc: false
seo:
  date_modified: 2020-04-22 11:37:45 -0700
---

* firebase is based on documents & collections. it seems to intuitive to store collections as fields on documents. until recently, it was not possible to query using `.where()` by document properties in a sub collection (e.g. return all players who are in a game with a particular id). firebase only recently implemented collection group queries to solve this problem (tutorial here: https://www.youtube.com/watch?v=fQ4u1J717ys)

* bulma for the ui