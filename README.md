# Kyle.Chamberl.in

https://kyle.chamberl.in/

# ❤️‍🔥 Features

- [x] super fast performance (top scores on ligthhouse)
- [x] SEO friendly
- [x] responsive
- [x] accesible
- [x] light and dark mode with customizable theme
- [x] filters
- [x] sitemap & rss feed
- [x] customizable (edit variables in `Layout`)

# 🤖 Tech stack

Main Framework - Astro
Type Checking - TypeScript
JS framework - Vanilla JS
Styling - TailwindCSS
Icons - Iconoir
Code Formatting - Rustwind & Prettier (`pnpm format`)
Deployment - Vercel
Illustrations & Content - Midjourney & ChatGPT

# 🖥️ Running locally

```sh
pnpm install
pnpm dev
```

# Adding blog posts

Add markdown files similar to the ones in [blog/\*.md](src/pages/blog/), they need to have the following format:

```yaml
---
layout: ../../layout/MarkdownLayout.astro
title: My markdown capabilities
description: "This is everything I know about markdown"
pubDate: 2022-07-15
tags: ["astro", "learning in public", "setbacks", "community"]
---
```

# Navigating this repo

I suggest going through [src/pages/](src/pages/) first then through [src/components/](src/components/), you can easily see where to make edits.
