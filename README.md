# Cyphermita

## From Zero to Cybersecurity

*A structured learning roadmap for aspiring cybersecurity professionals, ethical hackers, and CTF players.*

**Learn · Explore · Practice · Build**

Created by Guillermo Torre, Alec Tholkes, and Braylen Miltead.

## Website

[Visit Cyphermita](https://thechili10.github.io/Cyphermita/)

## Built with

- Jekyll
- HTML and CSS
- JavaScript for client-side search and interface enhancements
- GitHub Pages and GitHub Actions

## Project structure

- `index.md`, `roadmap.md`: Markdown content
- `_layouts/`: shared HTML page layouts
- `_data/navigation.yml`: site navigation
- `assets/css/`: website styles
- `assets/js/`: client-side behavior
- `_config.yml`: Jekyll configuration

## Run locally

Requirements: Ruby, Bundler, and Git.

```bash
bundle install
bundle exec jekyll serve --baseurl /Cyphermita
```

Then open http://127.0.0.1:4000/Cyphermita/.

## Deployment

The GitHub Actions workflow in `.github/workflows/deploy.yml` builds the Jekyll site and deploys it to GitHub Pages when changes are pushed to `main`.

In repository Settings → Pages, select **GitHub Actions** as the build and deployment source.

## Philosophy

Don't just learn what tools to use. Learn what to learn, why it matters, when to use those tools, and how to solve complex problems.
