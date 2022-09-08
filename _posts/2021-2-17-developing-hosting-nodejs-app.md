---
title: developing & hosting a node.js app
date: 2021-02-17
categories: [javascript, node, express, firebase]
tags: [javascript, node, firebase]
toc: false
seo:
  date_modified: 2021-02-17 2:30:00 -0700
---

![proficiency test](/assets/img/posts/proficiency-test.png)

## i just want to see the thing

you can see the proficiency test app [here](https://fls-international.web.app/). here's the [github repo](https://github.com/EnochSpevivo/fls-proficiency-test).

## the background

back in 2020, i was contracted by [FLS International](https://www.flsinternationalonline.net/) to develop a web app to transition their ESL services online (for those of you reading this in the future, [some context](https://en.wikipedia.org/wiki/Coronavirus_disease_2019)). one of their needs was an update to their proficiency test. said test was given to prospective students such that they could be sorted into the appropriate educational difficulty level, as well as direct them towards other FLS International products. the requirements were as follows:

- user form that accepts basic info (name, email, country of origin, etc)
- the actual proficiency test
  - all multiple choice questions
  - need to be able to implement requested changes as easily, quickly, and accurately as possible (it would be _very_ bad if a typo led to an error in grading)
  - speaking of grading, a grading system
- email service to report user info & proficiency test results to the test taker as well as the FLS admins
- hosting, as cheaply as possible.
  - the budget was limited, and the current hosting system wasn't ideal for something that needed server side logic
- the fastest implementation possible
  - their previous proficiency test had been taken offline during the on-location-to-remote transition. this was particularly bad because, for many of their applicants, the proficiency test was the first point of contact with their services (and, thus, integral to their revenue)

## creating a node app

based on my experience, and the requirements, i decided that a Node app using the [Express](https://expressjs.com/) framework would be the quickest, most reliable, way to get this app into production. the full logic can be viewed [here](https://github.com/EnochSpevivo/fls-proficiency-test/blob/main/functions/index.js), but let's break down some specific design considerations.

- i knew that what i essentially wanted was a small web app that could support rendering pages with regular old `GET` requests, and also handle `POST` requests for server side logic (in this case, submitting the user form, grading the test, and sending out email). this pointed me at Express, which is tailor made for creating the kinds of endpoints i'd need
- there was data i wanted to be able to store & load statically. to wit, the list of countries for the country multiselect, the proficieny test questions, and the proficiency test answers. the solution in this case was to store the above data as `JSON`s, and read the files from Node.

{% raw %}

```js
// Read a JSON of country names
jsonfile.readFile(
  path.join(__dirname, "assets/js/countries.json"),
  (err, obj) => {
    // eslint-disable-line
    if (err) {
      console.log("error retrieving countries json", err);
      return cb(err);
    }

    cb(null, obj);
  }
);
```

{% endraw %}

{% raw %}

```js
// Read a JSON of proficiency test questions
jsonfile.readFile(
  path.join(__dirname, "assets/js/proficiency-test.json"),
  (err, obj) => {
    // eslint-disable-line
    if (err) {
      console.log("error retrieving proficiency-test json", err);
      return cb(err);
    }

    cb(null, obj);
  }
);
```

{% endraw %}

- additionally, mostly as a favor to myself, i wanted to use an HTML templating engine. in this case, i chose [Handlebars](https://handlebarsjs.com/). this choice was made primarily so i could break apart my HTML into partials that could separate my front end concerns, as well as allow for easily reusable HTML components.

{% raw %}

```js
// Snippet that bundles together previously read JSON files, as well as the Handlebars partials, and pipes them into the context of the rendered 'index'page
const pageProperties = {
  title: "FLS International Proficiency Test",
  countries: results.countriesJson || null,
  ptQuestions: results.testJson || null,
  numTestQuestions: globals.numTestQuestions,
  // TODO: Investigate a better method for importing partials
  partials: {
    preArrivalTest: path.join(__dirname, "assets/partials/preArrivalTest"),
    proficiencyTest: path.join(__dirname, "assets/partials/proficiencyTest"),
    completed: path.join(__dirname, "assets/partials/completed"),
    footer: path.join(__dirname, "assets/partials/footer"),
    loader: path.join(__dirname, "assets/partials/loader"),
    scripts: path.join(__dirname, "assets/partials/scripts"),
  },
};

return res.render("index", pageProperties);
```

{% endraw %}

- another reason for using a Node app was so that the actual grading of the proficiency test could be done server side. although it's unlikely that the average user would be able to muck about with grading results if the logic was handled client side, it is undeniably much safer to keep it out of the hands of nosey end users, especially considering how important accurate grading is to a student's placement in the program.
  - grading a proficiency test is a relatively simple process that is started by the client sending a `POST` to my `/grade-test` endpoint. the meat of that endpoint is the following snippet:

{% raw %}

```js
const gradeTest = (testResponseData, testAnswers) => {
  let numCorrect = 0;

  for (let i = 0; i < testResponseData.length; i++) {
    if (testResponseData[i].selectedOptionId == testAnswers[i].correctOptionId)
      numCorrect++; // eslint-disable-line
  }

  return numCorrect;
};
```

- the grading function is unadorned, by design. the important part is that `testResponseData` and `testAnswers` would be passed in as args from the result of reading static JSON files (as seen above).

{% endraw %}

## hosting on firebase

- Coming soon!
