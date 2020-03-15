---
title:  "playing with react"
date:   2016-05-18
categories: [react, javascript]
tags: [react, javascript]
toc: false
---

so, after a short stint with backbone and marionette, i've <strike>hopped on the bandwagon</strike> tried out the latest hotness on the scene, react.js.

## react
react offers up just the V part of the MVC. in other words, react has no opinion on how you should structure your raw data, nor does it offer any solutions for coordinating events between model or view. while this may sound sparse (who doesn't appreciate some structure?), i actually find the flexibility this offers quite refreshing. [backbone.js](http://backbonejs.org/) is my current favorite MV* framework, and it plays very nicely with react's unopinionated stance on models and controllers.

one of the really cool things about react is that it comes with a [virtual dom](https://facebook.github.io/react/docs/glossary.html). the virtual dom is, as the name suggests, a copy of the DOM that react maintains at all times. whenever you change a `reactElement` (most commonly done through `reactComponents`), react checks the changes between the "real" DOM and its virtual DOM, and only updates the delta. calls to `ReactDOM.render()` allow react to use its virtual DOM to rapidly update your view, especially in contrast to most varieties of query selection.

## code sample
react is cool, but it's even cooler seeing it in action. check out [this codepen](http://codepen.io/AKingDebased/pen/XdLbrw?editors=0010) that renders a simple user and friends list, and allows you to add or remove friends. there's also some other bells and whistles, like semi-persistent data through the `localStorage` object.
