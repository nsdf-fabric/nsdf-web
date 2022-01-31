---
layout: page
title: National Science Data Fabric
tagline: News
ref: news
order: 0
---

[Go to the Home Page]({{ '/' | absolute_url }})

# Latest News

<ul class="post-list">
  {% for post in site.posts %}
	 <li>

		{% assign date_format = site.cayman-blog.date_format | default: "%b %-d, %Y" %}
		<span class="post-meta">{{ post.date | date: date_format }}</span>

		<h2>
		  <a class="post-link" href="{{ post.url | absolute_url }}" title="{{ post.title }}">{{ post.title | escape }}</a>
		</h2>

		{{ post.excerpt | markdownify | truncatewords: 30 }}

	 </li>
  {% endfor %}
</ul>
