---
title: templating with lodash
date: 2020-11-6
categories: [javascript]
tags: [javascript]
toc: false
seo:
  date_modified: 2020-06-11 11:37:45 -0700
---

{% raw %}
```HTML
<script id="grid-card-template" type="template">
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
				<div class="grid-card__time"><% if (time) {%><img src="img/icons/time.png" alt="time icon"> <% } %><%= time %></div>
				<div class="grid-card__miles"><% if (miles) {%><img src="img/icons/miles.png" alt="time icon"> <% } %><%= miles %></div>
			</div>
			<div class="grid-card__view-details"><% if (hasDetails) {%>View Details<% } %></div>
		</div>
	</div>
</script>
```

```HTML
<script id="equipment-grid-template" type="template">
	<div class="equipment__grid-card">
		<img class="equipment__image" src="<%= imgSrc %>"> 
		<h4 class="equipment__copy"><%= name %></h4>
	</div>
</script>
```
{% endraw %}


```JS
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