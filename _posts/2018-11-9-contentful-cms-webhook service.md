---
title: webhook microservice with express, contentful, and objection
date: 2018-8-13
categories: [node, express, contentful, orm, javascript]
tags: [node, express, contentful, orm, javascript]
toc: false
seo:
  date_modified: 2020-03-15 14:38:45 -0700
---

there's few things i love more than automating processes. i used to work on the [glo](https://www.glo.com/) team as a web developer, and amongst many other features, glo offers programs, which allow users to take thematically linked classes of a certain difficulty in a progressive order. for a long time, program classes had to be manually inputted into our database by an engineer. programs could have anywhere between 3 and 54 classes, so this got tedious fast. we wanted to shift this responsibility from our devs to our content team, such that there would be no need for a dev to upload new programs. i saw this as a great opportunity to automate a tedious process. the services team and i decided a [cms](https://en.wikipedia.org/wiki/Content_management_system) was our best option. i spearheaded this project and, after a bit of research, i encouraged us to use [contentful](https://www.contentful.com/).

## implementing contentful

contentful has a concept of [content models](https://www.contentful.com/r/knowledgebase/content-modelling-basics/), which act as a blueprint for a type of content (go figure). i started with a `program` content model that would allow our content team to input all the specifics of a program with a user-friendly interface; no CLI tools here. contentful would eventually be talking to our database by way of a node based service combined with express.js, so there were data models from our postgres database that i had to translate into contentful content models. within our database, the `program` model came with title, teachers, duration, difficulty, etc, relationships to props (fit blocks, chairs, yoga mats, etc) and tags (used for filtering on all programs), and all of this needed to be reflected in contentful.

## listening to webhooks

contentful comes with the ability to set up webhooks that can `POST` to provided endpoints. to that effect, i created a [dockerized](https://www.docker.com/), node based, microservice that i maintained through the [rancher GUI](https://rancher.com/). using express.js, i set up a `POST /cms-listener` end point, and fed that to contentful through its webhook gui. anytime a change to a contentful model is detected, contentful fires off a `POST` to my `/cms-listener` endpoint, providing a JSON snapshot of the model at the time of publication. from there, the flow is as follows:

* verify that the fired event is of type `publish` and the received content of type `program` (for all its features, contentful does not provide a way to limit the types of events it fires off)
* serialize the program data into a format the `objection.js` orm library understands. this data would eventually be [upserted](https://wiki.postgresql.org/wiki/UPSERT) into our database. roughly speaking, that logic looks as follows:

```js
// the fields in the contentful json are all camelCased, and need to be snake cased in order to upsert properly into our database.
// here, i used lodash's 'reduce' method to perform these string conversions.
let programClassIds,
    props;

const dataToUpsert = _.reduce(contentfulPayload.programFields, (upsertionObj, data, fieldName) => {
    switch (fieldName) {
        case 'programLevel':
            fieldName = 'program_level_id';
            // elsewhere in the file is a 'helpers' namespace that contains, funnily enough, helper methods that assist in serialization
            data['en-US'] = helpers.convertLevel(data['en-US']);
            break;
        case 'classIds':
            programClassIds = data['en-US'];
            return upsertionObj;
        case 'props':
            props = data['en-US'];
            return upsertionObj;
    }

    upsertionObj[_.snakeCase(fieldName)] = data['en-US'];

    return upsertionObj;
}, {});
```

* upsert the serialized program into our database.
* get all program classes associated with this program by their unique IDs, then serialize and upsert these program classes into the already upserted program's `programClasses` row. serializiation for program classe looks similar to the following:

```js
// all i needed to do here was convert a string to an int, and also bump the index of the 'sort_order`, since our database is 1-indexed
_.map(classIds, (classId, index) => ({
    program_id: _.parseInt(programId),
    class_id: _.parseInt(classId),
    sort_order: _.parseInt(index + 1)
}));
```
**note:** i intentionally upserted the program before serializing program classes. for this iteration of the webhook, we, as a team, decided that it was fine if, say a `program` was successfully serialized and upserted, but its `programClasses` failed upsertion.

and that's it! well, generally speaking. once the above steps are finished, an instance of a `program` contentful model is successfully serialized & upserted into our own database, and ready for production deployment.

## final thoughts

this was one of my favorite projects at glo. i find it very satisfying creating services that will benefit other members of my team. also, i was the creater and admin of the github repo for this project, as well as the maintainer of the docker service. though other people ended up working on this project, i was the very first commit in the repo, and i laid the groundwork for further iterations. everything about the service, from the usage of contentful, to the reliance on `objection.js`, to the architecture of the express app, was all by my design. this project was my baby, and is a proud memory from my days at glo.