---
layout: post
title:  "full stack react todo with node & graphql - pt 1"
date:   2019-12-8
categories: javascript react node html css
---

## Pt. 1 - Architecture & Process
*Or: How I Learned to Stop Worrying and Love the Future*

in my last 5 years as a web developer & web development educator, i've both taught about and built many, many features in MVC/MVVM/MV*/MV-whatever-you-like frameworks. most of my experience is in [Ember.js](https://emberjs.com/) and [Vue.js](https://vuejs.org/) (check out some of my [Ember](ember/javascript/html/css/2019/01/14/content-cards-with-ember/) and [Vue](javascript/vue/html/css/2019/11/17/dashboard-components-with-vue/) projects, when you get a second. i even made a Backbone project in the way back days ... yeesh). However, I've always felt I had a [React](https://reactjs.org/)-shaped hole in my tool belt. so, i've set out to do what any intrepid developer looking to immerse themselves in a new language would do: build a todo app. of course, a todo app alone lacks flair, so I figured, why not also build a back end using another cool new web tool, [GraphQL](https://graphql.org/)? And, hey, while we're at it, why not host the whole thing on [Heroku](https://dashboard.heroku.com/)?

## Architecting the App

i need this app to have enough features to justify using React and a fully fledged backend with a GraphQL api layer. speaking of a backend, i settled on MySQL. i'm not here to say what database is the best in the world, but for my relatively small use case, i figured i'd stick with a classic. though it's tempting to use a NoSQL database, like MongoDB, i know i'm going to have relational data types, and i want to keep it as simple as possible while also being robust enough for my needs. additionally, as noted in the title, this will all run within a node.js environment, using express as the router & HTTP request library of choice. why? because i'm familiar with node (ft express), i've used it in production environments before, and i know it'll be well suited to a CRUD app like this.

as for app functionality, i want the ability to, at minimum, do the following:

* CREATE a new todo, and CREATE a new todo list (which can contain many todos)
* `GET` (or READ, if you prefer) existing todos & todo lists from my back end
* UPDATE existing todos & todo lists. this might mean changing the name of a todo list, or the content of a specific todo.
* DELETE todos & todo lists. deleting a todo list should delete every todo within.

for additional zest, i also want the following features:
* user authentication & persistence. as a logged-in user, you should be able to save your todos & todo lists` such that they'll exist for you in perpetuity (or until you delete them).
* a user list view, where you can see all registered users and their public & private todo lists. speaking of ...
* public/private todo lists. public todo lists can be viewed in the user list, private can't.

## Scheming 'Bout Schemas (sigh)

before coding anything, i want to know what data types i'll be dealing with. at minimum, i'll be needing the following schemas:

```js
Todo {
    content,
    isDone,
    createdDate,
    completedDate,
    dateCompleteBy
}
```

```js
TodoList {
    todos, // A hasMany relationship to the Todo type
    createdDate,
    completedDate,
    dateCompleteBy,
    isPrivate
}
```

```js
User {
    todoLists, // A hasMany relationship to the TodoList type
    todos, // A hasMany relationship to the Todo type
    signUpDate,
    isPrivateAccount
}
```
## Feature Deployment

though i'm the only developer on this, i want feature development & deployment to closely mimic a production environment. to that end, i'm maintaing this project using `git` (command line), and hosting the repo on Github. `master` will always contain production code, new features will be developed on branches off of `master`, pull requests will be made for each new feature, and feature branches will be merged into `master`. this might be overkill, and i'll be the first to admit that it's strange making pull requests when i'm the only one there to approve them, but i've gotten used to working in enterprise environments and i see no reason to lose my good habits.

## Nice-to-Haves

* i used `create-react-app` to bootstrap this app, which means i can use all of ES6's shiny new features. plus, node natively supports most of the (relatively) new ES6 spec. a linter for enforcing code standards would be great.
* though my react code is set up to live reload, my server side code is not. it'd be nice to have that when developing locally, instead of having to tear down & spin up the local server over and over again.

## Let's Get Started

in my opinion, it's a good idea to have as much of your app planned out as possible before writing a line of code. while i certainly expect the unexpected as development progresses, this road map helps me think critically about the libraries and tools i'll be using. in the next episode, i'll bootstrap the app, and set up a basic server & front end.