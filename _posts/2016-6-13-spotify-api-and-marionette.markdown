---
title:  "spotify api and marionette"
date:   2016-06-13
categories: [backbone, marionette]
tags: [backbone, marionette]
toc: false
---

~~you can find the final application [here](https://project-2181696919058931612.firebaseapp.com/)~~ **author's note:** though this link still works, spotify has long since changed its api such that this app no longer works as originally designed. you can still look at it, though!

spotify has a great [api](https://developer.spotify.com/web-api/) that allows you to, among other things, search song, artist, and album information. one of the end points they supply gives a listing of a given artist's top 10 tracks by country (according to spotify). with that in mind, let me take you back to the frontier days of 2006. back then, there was this great little website called "i just want to listen to the best of..." that allowed you to search up an artist and listen to their most popular tracks (according to grooveshark). turns out that site no longer exists. so, i'm here to fill the void.

## querying the server

searching a given artist is a two step promise. first, an artist's unique ID number must be acquired. this can be found at the `/search` endpoint. for example, a request to  `https://api.spotify.com/v1/search?q=mountain%20goats&type=artist` will return an object containing all information for artists matching "Mountain Goats". from there, the `items` array can be iterated over, and the correct `id` property extracted.

here's a code sample using jQuery's ajax method and the returned [deferred object](https://api.jquery.com/category/deferred-object/)

```js
$.ajax({
  method:"GET",
  url:"https://api.spotify.com/v1/search",
  data:{
    q:"mountain goats",
    type:"artist"
  }
}).then(function(artistData){
  /* for simplicity's sake, we'll assume the first element of
  the items array is the closest artist match */
  console.log("artist's id is",artistData.artists.items[0].id)
},function(err){
  console.log(err);
})
```

from there, we can use the artist id to make another query to the `/artists` end point.

```js
$.ajax({
  method:"GET",
  url:"https://api.spotify.com/v1/search",
  data:{
    q:"mountain goats",
    type:"artist"
  }
}).then(function(artistData){
  //assuming first result is the searched artist
  return $.ajax({
    method:"GET",
    url:"https://api.spotify.com/v1/artists/" + artistData.artists.items[0].id + "/top-tracks",
    data:{
      //defaults to top US tracks
      country:"US"
    }
  });
},function(err){
  console.log(err);
}).then(function(topTracks){
  console.log("the mountain goats' top tracks",topTracks);
});
```

## displaying the data

truth be told, an application this simple could be easily done with raw javascript and plain html & css. that said, i wanted to get some practice with [marionette](http://marionettejs.com/). to keep things simple, i organized the entire design within one `LayoutView`, split into two regions: `Search` and `Results`. each new search triggers a rerender of the `Results` region, which then uses underscore's `_.template()` function to create a `Track` view for each of the artist's top tracks.

