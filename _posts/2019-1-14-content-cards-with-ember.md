---
title: content cards with ember
date: 2019-1-14
categories: [ember, javascript, html, css]
tags: [ember, javascript, html, css]
toc: false
seo:
  date_modified: 2020-03-15 14:38:45 -0700
---


while working at [glo](www.glo.com), i was tasked with creating a component for displaying the classes and programs we offered. the glo app is built on [Ember.js](https://www.emberjs.com/), so this feature would necessitate a new component, which would house all HTML & CSS, as well as the logic for rendering & functionality.

## content cards
![class content cards](https://i.imgur.com/rGyIUZ7.jpg)
![program content cards](https://i.imgur.com/Z5DaQ71.jpg)

see the [class](https://gfycat.com/UnripeAnimatedHart) and [program](https://gfycat.com/HospitableDelayedCicada) cards in action.

## implementation notes

* the content cards were meant to be standardized for multiple content types, and also included a slide-up-on-hover feature. to that effect, i created a generic `content-card.js` and accompanying `card-image.js` component. all content cards also needed a button that would allow a user to add/remove that class to a dashboard. in addition, when hovering, a description becomes visible, with a gradient at the bottom. below are some snippets of my work:

**note**: for NDA purposes, all code here is heavily edited, and may seem non-functional in some places. feel free to [ask me any questions](/contact) if you're concerned about the sensibility of these snippets.

{% raw %}
```hbs
{!-- content-card.hbs --}

{{card-image class=class isHovering=isHovering}}

<div class="content-card__copy-container">
	<div class="content-card__copy-header">
		<div class="content-card__content-type">{{contentType}}</div>

		{{#link-to 'levels'}}Level {{class.level.name}}{{/link-to}}

		<span class="content-card__stat content-card__stat--duration">{{class.video.duration}} min</span>
	</div>

	<div class="content-card__copy-body">
		{{#link-to 'class' class.id}}{{class.title}}{{/link-to}}

		<div class="content-card__content-subtitle">
			{{#link-to 'styles.style' class.style.slug active=false classNames='f-gray-6'}}{{class.style.name}}{{/link-to}}

			{{#if class.teachers.length}}
				with {{#each class.teachers as |teacher|}}
					{{#link-to 'teachers.teacher' teacher.slug classNames='f-gray-6'}}{{teacher.name}}{{/link-to}}
				{{/each}}
			{{/if}}
		</div>
	</div>

	{{add-class-button}}
</div>

<div class="content-card__description {{if isHovering 'content-card__description--hover'}}">{{{class.cleanDescription}}}</div>

<div class="content-card__gradient {{if (comparison isHovering '&&' showGradient) 'content-card__gradient--hover'}}"></div>
```
{% endraw %}

```js
// card-image.js
// components in ember are automatically associated with `div`, and i determined that this component would not need a custom template

import Component from '@ember/component';
import { get, computed } from '@ember/object';

export default Component.extend({
	tagName: 'img',
	attributeBindings: ['src', 'style'],
	classNameBindings: [
		':content-card__image',
		'isHovering:content-card__image--hide'
	],

	src: computed('class.{video.firstPreviewThumbnail,video.thumbnailImage}', function() {
		var highResThumb = get(this, 'class.video.firstPreviewThumbnail');

		return highResThumb ? highResThumb : get(this, 'class.video.thumbnailImage');
	})
});
```

* there was a need for a bit of jQuery to detect when to show & hide the gradient over the content's description.

```js
// snippet from content-card.js

didInsertElement() {
	this._super(...arguments)

	// Event handler to show/hide gradient when scrolled to bottom of description
	this.$('.content-card__description').on('scroll.description', (e) => {
		const $element = $(e.target),
			scrollPosition = $element[0].scrollHeight - $element.scrollTop(),
			divHeight = $element.outerHeight(),
			bottomOffset = 8,
			scrolledToBottom = scrollPosition <= (divHeight + bottomOffset);

		set(this, 'showGradient', !scrolledToBottom);
	});

	if (this.isTouch()) set(this, 'hideAddClassButton', false);
}
```

* in the case that a content card links to a program (a specialized piece of content that users can enroll in), there needed to be logic that routed the user either to the enrolled or unenrolled version of the program page.

```js
// snippet from content-card.js

click () {
	const transitionPage = get(this, 'transitionPage'),
		content = get(this, 'content'),
		contentId = get(content, 'id');

	if (get(this, 'isProgramCard')) {
		if (!get(this, 'userPrograms.firstObject')) {
			transitionPage('programs.program', contentId);
		} else if (get(this, 'userPrograms.firstObject')) {
			transitionPage('me.my-program', get(this, 'userPrograms.firstObject.id'));
		}
	} else if (get(this, 'isClassCard')) {
		transitionPage('class', contentId);
	}
}
```




