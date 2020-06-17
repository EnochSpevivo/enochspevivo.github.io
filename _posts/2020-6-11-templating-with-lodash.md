---
title: templating with lodash
date: 2020-6-11
categories: [javascript]
tags: [javascript]
toc: false
seo:
  date_modified: 2020-06-11 11:37:45 -0700
---

often, while working on static sites, i find myself longing for the component systems you find in libraries like vue or react. more likely than not, you, too, have found yourself implementing a design that include sa series of nearly identical series of elements. these elements are usually identical but for their titles, copy, or images. recently, i was working on a landing page for [iFit](https://www.ifit.com/), and there was just such a situation. one section of the page called for a grid of content cards, like so:


<a href="/assets/img/posts/ifit-cards.png" target="_blank">
![ifit content cards](/assets/img/posts/ifit-cards.png)
</a>

were i using something like react, i'd create a new component and be off to the races. however, these cards did not live inside an app. i didn't want to repeat the same HTML over and over, with only minor variations. what's a dev to do? this is where [lodash](https://lodash.com/) comes in. for those of you not already familiar, lodash is, as their site describes, a "modern JavaScript utility library delivering modularity, performance & extras." one of those utilities is a handy function for creating HTML templates, appropriately called [`_.template`](https://lodash.com/docs/4.17.15#template).

the `_.template` function works in two stages. first, a string containing HTML is passed as an argument to `_.template`. this HTML string will contain "tags" that are used, later, to slot in variable information. this will return _another_ function that represents the "compiled" template. this "compiled" function can now be invoked, passing in an object whose keys are the variables you specified in the initial template, and whose values are, well, the values you want to render in the variable spots in your template. 

## creating a template

this process can be dense to the unfamiliar. by way of example, here's the HTML i wrote for one of the above content cards:

{% raw %}
```html
<div class="grid-card">
	<div class="grid-card__image-section grid-card__image-section--1>">
	</div>
	<div class="grid-card__copy-container">
		<div class="grid-card__copy-title-container">
			<div class="grid-card__copy-title">Lake Inniscarra, Ireland — Pyramid</div>
			<img src="thumbnail1.png" alt="Lake Inniscarra, Ireland — Pyramid" class="grid-card__icon" height="28" width="28">
		</div>
		<div class="grid-card__copy-details">
			<div class="grid-card__time"><img src="img/icons/time.png" alt="time icon">30:53</div>
			<div class="grid-card__miles"><img src="img/icons/miles.png" alt="time icon">6,248</div>
		</div>
		<div class="grid-card__view-details">View Details</div>
	</div>
</div>
```
{% endraw %}

now, this works just fine for the `Lake Inniscarra, Ireland — Pyramid` content card. however, this quickly falls apart as we look at the content cards. some have a section for workout information, some don't. some have info on mileage and time, some don't. some have a `View Details` section, some don't, and so on. so, our above template needs both a) spots for variable information b) conditional logic to hide & show certain sections. consider the following updates:

{% raw %}
```html
<div class="grid-card">
	<div class="grid-card__image-section grid-card__image-section--<%= bgImgId %>">
		<% if (workoutsNum) { %>
		<div class="grid-card__workouts-section">
			<span class="grid-card__workouts-amount"><%= workoutsNum %></span>
			<span class="grid-card__workouts-copy">Workouts</span>
			<img src="img/icons/workouts.png" alt="workouts icon" width="24" height="24">
		</div>
		<% } %>
	</div>
	<div class="grid-card__copy-container">
		<div class="grid-card__copy-title-container">
			<div class="grid-card__copy-title"><%= title %></div>
			<img src="<%= thumbnailSrc %>" alt="" class="grid-card__icon" height="28" width="28">
		</div>
		<div class="grid-card__copy-details">
			<div class="grid-card__time"><% if (time) { %><img src="img/icons/time.png" alt="time icon"> <% } %><%= time %></div>
			<div class="grid-card__miles"><% if (miles) { %><img src="img/icons/miles.png" alt="time icon"> <% } %><%= miles %></div>
		</div>
		<div class="grid-card__view-details"><% if (hasDetails) { %>View Details<% } %></div>
	</div>
</div>
```
{% endraw %}

you'll note two major changes: 
* the introduction of the `<%= varName %>` tag. this is `lodash`'s version of something like handlebars style templating. anything between the `<%= %>` symbols will be interpreted as a variable, to be filled in later. 
* the `<% %>` tags, which more generally allow for anything between them to be evaluated as JS. this can be used to wrap JS conditional logic, and thus only render certain parts of the template if particular conditions are met. e.g. `<% if (miles) { %><img src="img/icons/miles.png" alt="time icon"> <% } %>` will ensure that the `img` tag only renders if the `miles` variable has a truthy value. if you've used JSX, you'll likely be familiar with this sort of logic.

## compiling the template

let's recall that, in order to compile a template, we need to take all of our HTML and pack it into one string. there are a few ways to do this, but, my personal favorite is to store our HTML template in a `<script>` tag, then use something like `document.querySelector` to get a reference to the `script` tag, then extract the text within using the `innerHTML` property. wrapping the HTML in a `script` tag prevents it from rendering on the page. we can get more specific by applying an `id` to the `script` tag, such as `<script id="content-card-template">`. consider the following:

```html
<script id="content-card-template">
	// Content card HTML here
</script>

<script>
	const rawContentCardTemplate = document.querySelector('#content-card-template').innerHTML,
		compiledContentCardTemplate = _.template(rawContentCardTemplate); 
</script>
```

remember that `_.template` will return to us another function that we can then invoke, passing in an object containing values for the variables we specified in our template.

```js
const rawContentCardTemplate = document.querySelector('#content-card-template').innerHTML,
		compiledContentCardTemplate = _.template(rawContentCardTemplate); 

const renderedContentCardTemplate = compiledContentCardTemplate({
	workoutsNum: 9,
	title: 'Performance Series',
	bgImgId: 'performace',
	thumbnailSrc: '/img/thumbnails/performance'
});
```

the above code will produce the following content card:

![content card](/assets/img/posts/ifit-content-card.png)

from this point, it falls to you as to what you want to do with your fully realized HTML. in my case, i needed to render a grid of these cards. for me, the implementation looked like this:

```js
function generateCardGrid (cardsData, rawTemplate, itemsPerRow, numRows, rowClasses, columnClasses, properties) {
	const rowNodes = [];

	for (let i = 0; i < numRows; i++) {
		let rowNode = document.createElement('div');
		
		rowNode.classList.add('columns', ...rowClasses);
		rowNodes.push(rowNode);
	}

	let currentRow = 0;
	const compiledGridCardTemplate = _.template(rawTemplate);

	cardsData.forEach((card, index) => {
		let column = document.createElement('div');
			
		column.classList.add('column', ...columnClasses);

		const templateVariables = properties.reduce((accumulator, currentVal) => {
			accumulator[currentVal] = card[currentVal];

			return accumulator;
		}, {});

		column.innerHTML = compiledGridCardTemplate(templateVariables);

		rowNodes[currentRow].appendChild(column);

		if ((index + 1) / itemsPerRow === 1) currentRow++;
	});

	return rowNodes;
}
```

this implementation also accounts for my personal usage of the [Bulma](https://bulma.io/) css library, hence the addition of some new parameters. this implementation takes in `cardsData`, being an array of objects representing the cards, as well as a `rawTemplate`, which is the HTML string to be passed into the `_.template` function. all the other parameters are specific to the page's styling needs. 

## wrapping it up

lodash's `_.template` function is a powerful tool to have on your belt. whenever you find yourself wanting to DRY up your HTML without importing a full on UI library, keep this little guy in mind. additionally, the `_.template` function, as well as the lodash library, is a nifty, practical introduction to the [functional programming paradigm](https://medium.com/the-renaissance-developer/concepts-of-functional-programming-in-javascript-6bc84220d2aa), which is another massive topic in its own right, and one well worth your time. i hope you find use some use for this powerful function in the future!