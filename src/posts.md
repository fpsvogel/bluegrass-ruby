---
layout: page
title: Posts
---

<div>
  {% for post in collections.posts.resources %}
  <hr>
    <span>
      <h3><a href="{{ post.relative_url }}">{{ post.data.title }}</a></h3> Posted on {{ post.data.date | date: "%a, %b %d, %Y" }}
    </span>
  <hr>
  {% endfor %}
</div>
