---
title: sha1 filter with jinja
date: 2019-10-15
categories: [jinja, python, sha1]
tags: [jinja, python, sha1]
toc: false
seo:
  date_modified: 2020-03-15 14:38:45 -0700
---


while working at [recharge payments](https://rechargepayments.com/), i often worked directly with the owners & devs of our third party integrations. for context, the recharge app provides the user with a text input for custom HTML & CSS. in one case, a third party dev was building functionality upon our app, and needed us to implement a [jinja](https://jinja.palletsprojects.com/en/2.10.x/) filter that would take an arbitrary string of text and encode it into an SHA1 hash value (in this case, this was specifically to encrpyt emails in the name of GDPR compliance).

## implementation notes
**note:** code snippets are not directly copied from the original source, and instead represent hypothetical implementations

the good news for me was that jinja already has a built in [hash filter](https://ansible-docs.readthedocs.io/zh/stable-2.0/rst/playbooks_filters.html#hashing-filters). the bad news was that the jinja parser tied to the custom HTML/CSS input was an older version, and didn't have that filter. i wasn't in a position to upgrade the jinja parser, so i needed to roll a custom solution. the good news, again, was that python has its own [hash library](https://docs.python.org/3/library/hashlib.html), so i didn't need to take a semester of cryptography.

```python
import hashlib

def custom_sha1(val):
    return hashlib.sha1(val.encode('utf-8')).hexdigest()
```
after creating the function, all that was required was to register it as a custom filter within our jinja instance. this could look something like this:

```python
jinja_instance.filters.update(hashed=sha1_hash_filter)
```

and voilà! from that point on, anyone using the custom HTML/CSS input could encrypt a string to an SHA1 hash by inputting something like {% raw %} `user email: {{ email_string|hashed }}` {% endraw %}






