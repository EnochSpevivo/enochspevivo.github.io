---
layout: post
title:  "dashboard components with vue"
date:   2019-11-17
categories: javascript vue html css
---


while working at [recharge payments](https://rechargepayments.com/), i was part of the team tasked with updating a section of our app from static html/css/and vanilla js (with some jQuery here and there) to a progressive, single page, [vue.js app](https://vuejs.org/). the original page was a list of third party shopify integrations a user could install. every time you clicked into an integration, you were routed to a new page, complete with a whole slew of new HTTP requests. 

this was quickly proving to be unscaleable. as the amount of intergrations grew, the slowness of load times became more and more apparent. as such, we determined the best move was to convert the integrations page, and its various subpages, into a single page app. my job was to take redesigned assets (hosted on [InVision](https://www.invisionapp.com/)) and create components to encapsulate an integration's description and installation status.

## implementation notes
**note:** code snippets are not directly copied from the original source, and instead represent hypothetical implementations

### description component

the description component needed to take in a payload containing the following:
 
* a description
* an image
* a title

to that end, the component didn't require any computed properties. static values could simply be passed in and rendered.

**note:** code here is not directly copied from the codebase, and instead represents a hypothetical implementation approximating my original implementation'
{% raw %}
```js
// integration-description.vue

<template>
    <img v-bind:src="{{imgSrc}}" /> 
    <h1>{{title}}</h1>
    <p>{{description}}</p>
</template>

export default {    
    props: ['title', 'imgSrc', 'description']
}

// CSS has been omitted in this case, though obviously some styling is necessary to keep this looking spiffy
```
{% endraw %}
a simple, no frills component, designed to simply render data passed into it with little muss or fuss. the original integration page had a _lot_ of copy/pasted code, and a small component like this allowed us to instead iterate over a JSON representation of all that integrations, vastly shrinking the HTML file.

```HTML
<!-- The original page might have looked something like this -->

<div class="integration-description-container">
    <img class="integration-image"/>
    <h1 class="integration-title">Integration Title</h1>
    <p class="integration-description">Integration Description</p>
</div>

<!-- This block was then repeated, with only minor tweaks, for all of our 20+ integrations. Not the DRYest page in the world -->
```

now, with this new component, we could do something like this:

```js
var integrationsContainer = new Vue({
    el: '#integrations-container',
    data: {
        integrationData: [
            /* Imagine here a JSON containting all of our integration data */
        ]
    }
})
```

and now, using the `integration-description` component from above, the original page can be refactored to look something like this:

{% raw %}
```html
<div id="integrations-container" v-for="data in integrationData">
    <integration-description title="{{data.title}}" imgSrc="{{data.imgSrc}}" description="{{data.description}}" />
</div>
```
{% endraw %}

this considerably reduced page size, as well as provided an agreed upon standard for other devs when adding new integrations to the app.

## installation status component

there was also a need for a component which would show whether a particular integration was `Enabled` or `Disabled`. in the `Disabled` case, an `Uninstall` link needed to be rendered. to add an extra wrinkle into this problem, the status component also needed to be able to optionally render an arbitrary icon on some pages.

to that effect, a component as follows might be used:

```js
// integration-status.vue

<template>
    <div v-if="isEnabled">
        <span>Enabled</span>
        <span v-on:click="uninstallIntegration">Uninstall integration</span>
    </div>
    <div v-else>
        <span>Disabled</span>
    </div>
    <slot></slot>
</template>


export default {    
    props: ['title', 'imgSrc', 'description'],
    methods: {
        uninstallIntegration () {
            // code here would reveal a modal that would then prompt the user to confirm their uninstallation
        }
    }
}

// Imagine some clean CSS here that makes this all look clean
```

implementing this component might look as follows:

{% raw %}
```html
<!-- In this case, we can assume that the value for 'integration' will be provided in this context -->
<integration-status isEnabled="{{integration.isEnabled}}">

<!-- Additionally, if we decide we need an icon, we can use the block version of this component to take advantage of the slot within -->
<integration-status isEnabled="{{integration.isEnabled}}">
    <i class="integration-icon"></i>
</integration-status>
```
{% endraw %}

## final thoughts

in the eternal quest for the perfectly optimized, least repetitive, quickest loading page, vue.js is a valuable tool. the above components helped DRY up our integrations pages, which were in desperate need. additionally, agreeing on a component architecture also ensures that any future devs who will have to add to these pages now have a unified structure, keeping the page performant even as it scales.