---
title: simple, responsive page - no frameworks, no libraries
date: 2020-3-12
categories: [javascript, html, css]
tags: [javascript, html, css]
toc: false
seo:
  date_modified: 2020-03-15 14:38:45 -0700
---

## i just want to see the thing

you can see the final page [here](https://gabriel-activision-assessment.firebaseapp.com/), and the code that powers it [here](https://github.com/AKingDebased/activision-take-home). if you want to understand what went into creating this, read on!

## the task

95% of my professional experience has involved work with single page applications using frameworks & libraries like Ember, Vue, and React. don't get me wrong; i absolutely love the power a solid JS library/framework will give you. these days, if you're developing a progressive web app, you're almost always going to want to employ a framework or library. that said, every now and then, it pays to revisit the basics, and see what you can do with just the fundamental tools.

i was recently given a take home project from a company i was interviewing with. they wanted me to take the following mocks — one for deskop, one for mobile — and produce a responsive page. the `Learn more` button, when clicked, needed to pop open a modal with a video in it. they also _specifically_ requested this use only html, css, and vanilla js. they were particularly adamant about "not relying on bootstrap", a challenge i was eager to rise to.

<style>
.post-content a.img-link {
    border-bottom: none !important;
    display: block;
}
</style>
<a class="img-link" target="_blank"  href="https://i.imgur.com/7nCCeH1.jpg">
    <img src="https://i.imgur.com/7nCCeH1.jpg" width="500"/>
</a>
<a class="img-link" target="_blank" href="https://i.imgur.com/BvJIt6p.jpg">
    <img src="https://i.imgur.com/BvJIt6p.jpg" width="200"/>
</a>

while not the most challenging task in the world, i relished the opportunity to, just for a moment, cast aside all the new and shiny tools of modern web development, and bring it back to basics. let's dig into the code.

## implementing responsiveness

{% raw %}

```html
<!DOCTYPE html>
<html class="no-js" lang="">
  <head>
    <meta charset="utf-8" />
    <title></title>
    <meta name="description" content="" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <link rel="manifest" href="site.webmanifest" />
    <link rel="apple-touch-icon" href="icon.png" />
    <!-- Place favicon.ico in the root directory -->

    <link rel="stylesheet" href="css/normalize.css" />
    <link rel="stylesheet" href="css/styles.css" />

    <meta name="theme-color" content="#fafafa" />
  </head>

  <body>
    <div class="responsive-wrapper">
      <div class="main-content">
        <div class="copy">
          The world's first independent developer and distributor of video
          console games & one of the largest third party video game publishers
          in the world.
        </div>
        <a class="button"> Learn more </a>
      </div>

      <div class="modal-window invisible">
        <iframe
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          width="560"
          height="315"
          type="text/html"
          src="https://www.youtube.com/embed/bH1lHCirCGI?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=https://youtubeembedcode.com"
          ><div>
            <small
              ><a href="https://youtubeembedcode.com/de/"
                >youtubeembedcode de</a
              ></small
            >
          </div>
          <div>
            <small
              ><a href="http://add-link-exchange.com"
                >add-link-Exchange</a
              ></small
            >
          </div></iframe
        >
      </div>

      <div class="modal-shade invisible">
        <div class="modal-close">X</div>
      </div>
    </div>

    <script src="js/index.js"></script>
  </body>
</html>
```

{% endraw %}

before anything else, i made sure to include the viewport `meta` tag, to ensure this renders correctly on mobile devices. an important inclusion, as i'm sure we've all accidentally forgotten that tag, loaded our pages on our phones, and commenced 10 minutes of hair pulling as we wondered, plaintively, why all our very clever media queries weren't applying.

{% raw %}

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

{% endraw %}

the mock asks for a full page background. `background-size: cover` and `background-repeat: no-repeat` will ensure the image stretches to fill the whole page, and doesn't "tile".

```css
body {
  background-image: url("../img/hero_img_01.jpg");
  background-size: cover;
  background-repeat: no-repeat;
}
```

on mobile devices (in this case, any screen `600px` or less in width), i swapped out the background to a mobile specific background image.

```css
@media screen and (max-width: 600px) {
  body {
    background-image: url("../img/hero_img_mobile_01.jpg");
  }
}
```

marking up the copy and button was nothing special, but i wanted to ensure that they'd stay centered both vertically and horizontally, which is one of those classic CSS puzzles.

{% raw %}

```html
<div class="main-content">
  <div class="copy">
    The world's first independent developer and distributor of video console
    games & one of the largest third party video game publishers in the world.
  </div>
  <a class="button"> Learn more </a>
</div>
```

{% endraw %}

```css
.main-content {
  align-items: center;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 680px;
  margin: 0 auto;
  padding: 0 20px;
}
```

`flexbox` to the rescue. i know i joked up there about momentarily leaving behind the modern tricks of the trade, but `flexbox` is just too useful. the combination of `align-items: center`, `flex-direction: column`, and `justify-content: center` gives us vertically & horizontally elements, essentially, for free. `max-width: 680px` and `height: 100vh` will preserve the height/width ratio of the content as the page shrinks and grows. specifically, using the `vh` unit ensures that the `main-content` element will always be as tall as the viewport, which makes positioning elements with `flexbox` properties more predictable.

once shrunk to a mobile viewport, the copy & button do need to shift towards the bottom of the page. i wanted to make sure there was zero chance of, say, the button running off the bottom of the page.

```css
@media screen and (max-width: 600px) {
  .main-content {
    height: 82vh;
    justify-content: flex-end;
  }
}
```

shrinking the `height` of the `main-content` class with the `vh` unit "pulls" the bottom of the element up and away from the bottom of the page, and does so proportionate to the height of the viewport (that is, the browser window). `justify-content` forces all the elements within (in this case, the copy and the button) to the bottom of the `main-content` element. this way, regardless of the height of the mobile device, the copy & buttom elements always stay perfectly positioned along the bottom of the viewport, with some small "padding" at the bottom.

## creating a modal

there's many modal snippets and libraries out in the world. however, since i was explicitly asked not to use bootstrap, i figured i'd go the extra mile and roll my own modal from scratch. i wasn't given a design for the modal, so i took some creative liberties. i wanted to have an overlay behid the modal, meaning we'd see the modal overlaid on a transluscent "shade" covering the main content of the page. this is an overexplanation, and is much more easily demonstrated with an image:

![modal demonstration](https://i.imgur.com/UaSm1Kv.png)

but we're getting ahead of ourselves. the modal, itself, is nothing more than a `div` with a class of `modal-window`.

{% raw %}

```html
<div class="modal-window invisible"></div>
```

{% endraw %}

note tha `modal-window` also starts that off with an `invisible` class, which looks like this:

```css
.invisible {
  opacity: 0;
  z-index: -20;
}
```

why, `opacity` and `z-index`, you ask? this makes more sense if you see what `modal-window` looks like under the hood:

```css
.modal-window {
  z-index: 10;
  position: fixed;
  top: 14vh;
  left: 16vw;
  padding-bottom: 36.25%;
  width: 70vw;
  opacity: 1;
  transition: opacity 0.3s;
}
```

having a `transition` on opacity means that the modal will appear to fade in and fade out when opened and closed. one downside to this is that `opacity` does not remove the element from the flow of the page like, say, `display: none` does. however, because `modal-window` uses `position: fixed`, it is already removed from the flow of elements on the page. additionally, you can't transition the `display` property, as the `transition` property only has an effect on properties with scalar values, i.e. properties that have numerical values, much like `opacity`.

in order to create the overlay, i created a `div` as a sibling to the `modal-window`.

{% raw %}

```html
<div class="modal-window invisible"></div>

<div class="modal-shade invisible">
  <div class="modal-close">X</div>
</div>
{% endraw %}
```

```css
.modal-shade {
  height: 100vh;
  width: 100vw;
  position: fixed;
  background-color: rgba(255, 255, 255, 0.3);
  z-index: 2;
  top: 0;
  left: 0;
  opacity: 1;
  transition: opacity 0.3s;
}
```

setting `height: 100vh` and `width: 100vw` ensures that the `modal-shade` always covers the entire viewport. the `z-index` ensures that `modal-shade` always cover the main content of the page, but is always under the `modal-window`, which has `z-index: 10`. the `modal-shade` also starts with the `invisible` class, allowing it to fade in and fade out. you may also have noticed that the `invisible` class sets `z-index: -20`. although `modal-shade` and `modal-window` have `position: fixed` and are thus removed from the flow of the page, they still take up space, even when "invisible". this could lead to a UX problem where clicks seem to not respond, when in actuality they're being captured by the "invisible" modal elements. setting a high negative `z-index` value pushes the `modal-shade` and `modal-window` behind the main content, ensuring no invisible elements are catching any clicks. and, as you might expect, `modal-close` will, eventually, allow the user to close the modal (go figure), though we'll get to how that works in a bit.

## making the modal work

what good is a modal if you can't show and hide it? no good at all, that's what. for starters, the modal needs to show when the `Learn More` button is clicked:

```js
var modalButton = document.querySelector(".button"),
  modalWindow = document.querySelector(".modal-window"),
  modalShade = document.querySelector(".modal-shade");

modalButton.addEventListener("click", function () {
  modalShade.classList.remove("invisible");
  modalWindow.classList.remove("invisible");
});
```

standard event listener. simple and clean. as mentioned above, removing the `invisible` class and using a `transition` property on `modal-window` and `modal-shade` will give the modal elements a fade in & fade out effect. that does it for showing the modal, now we also need to close the modal. i wanted to be able to close the modal whenever a user hit the `ESC` key, or if they clicked/tapped anywhere that wasn't on the modal window:

```js
var modalButton = document.querySelector(".button"),
  modalWindow = document.querySelector(".modal-window"),
  modalShade = document.querySelector(".modal-shade"),
  modalClose = document.querySelector(".modal-close"); // Let's grab the modal-close element

// Keep the code DRY by abstracting the logic to hide the modal
function hideModal() {
  modalShade.classList.add("invisible");
  modalWindow.classList.add("invisible");
}
modalButton.addEventListener("click", function () {
  modalShade.classList.remove("invisible");
  modalWindow.classList.remove("invisible");
});

document.addEventListener("keydown", function (e) {
  if (e.keyCode === 27 && !modalWindow.classList.contains("invisible")) {
    hideModal();
  }
});

modalShade.addEventListener("click", function () {
  hideModal();
});
```

the clever observer will notice that i did not bind an event handler to the `modal-close` element. we trigger `hideModal` when the user clicks anywhere that isn't on the modal, and since `modal-close` is technically not on the modal, it's already "bound.". to improve the UX, we can add a color change on click.

```css
.modal-close:active {
  color: white;
}
```

the modal also needs to contain an embedded youtube video, so let's pop an `iframe` in:

{% raw %}

```html
<div class="modal-window invisible">
  <iframe
    frameborder="0"
    scrolling="no"
    marginheight="0"
    marginwidth="0"
    width="560"
    height="315"
    type="text/html"
    src="https://www.youtube.com/embed/bH1lHCirCGI?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=https://youtubeembedcode.com"
    ><div>
      <small
        ><a href="https://youtubeembedcode.com/de/"
          >youtubeembedcode de</a
        ></small
      >
    </div>
    <div>
      <small
        ><a href="http://add-link-exchange.com">add-link-Exchange</a></small
      >
    </div></iframe
  >
</div>
```

{% endraw %}

one thing to consider is that if the user closes the modal and they have the video playing, the video should stop. this can be handled with a one line addition to our `hideModal` function:

```js
function hideModal() {
  modalShade.classList.add("invisible");
  modalWindow.classList.add("invisible");
  videoPlayer.src = videoPlayer.src;
}
```

an interesting function of the youtube iframe is that whenever its `src` property is set, the currently playing video stops and rewinds back to the start, which is perfect for our use case.

## a final word

for the sake of my pride, it bears repeating that this page was not exactly the most difficult thing to implement. i was able to whip up all of the above inside of an hour. that said, i firmly believe there's value in developing the occasional something with bare minimum of frills. raw JavaScript, HTML, and CSS can get you pretty damn far, especially if all you need to build is a single, static page. don't worry, i'll be getting back to more inspired projects real soon.
