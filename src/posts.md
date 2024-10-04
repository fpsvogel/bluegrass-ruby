---
layout: page
title: Meeting recaps
---

Some (not all) of our meetings are recapped here.

<div>
  {% for post in collections.posts.resources %}
  <hr>
    <span>
      <h2><a href="{{ post.relative_url }}">{{ post.data.title }}</a></h2>
      <h3>{{ post.data.date | date: "%B %-d, %Y" }}</h3>
      {{ post.content }}
    </span>
  <hr>
  {% endfor %}
</div>
