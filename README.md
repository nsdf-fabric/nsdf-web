# NSDF Website

The website for the [National Science Data Fabric (NSDF)](https://nationalsciencedatafabric.org), built with Jekyll and hosted on GitHub Pages.

## Prerequisites

- [Ruby](https://www.ruby-lang.org/)

## Run locally

```bash
gem install bundler
bundle
bundle exec jekyll serve
```

And open `http://127.0.0.1:4000`.

## Project structure

- `index.html`, `about/`, `news/`, `technology/`, `community/`, etc. — site pages
- `assets/` — images, logos, and static assets
- `astro/` — compiled CSS
- `Gemfile` — Jekyll dependencies
