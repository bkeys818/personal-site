---
layout: '@layouts/BlogPost.astro'
title: Building a Personal Site
desc: After years of putting it off, I finally made a personal site. This the process and the tools I used to build it.
date: 2023-04-04
tag: programming
img:
  src: /images/wires-growing-from-tree.png
  alt: tree with wires growing out of it
---

After years of putting it off, I decided it was finally time to build myself a personal site. Here’s my process.

## Designing a Wireframe

I started by using Adobe DX to create a basic wireframe for what I wanted my site to look like. I’m a big fan of minimalism, so I tried to make the site simple. The thing is, if you’re going to do simple, you need to do it right.

I wanted my site to contain 3 things: a simple portfolio, a fun list of projects, and a blog. Initially, I was going to create a separate home page, but during development, I decided to make the portfolio the homepage.

![site wirefame](/images/personal-site-wireframe.png)

## Project Setup

When it goes well, this might be the most fun part of any project.

I knew I wanted to use [Astro](https://astro.build) because of all its benefits.

> - [Content-focused](https://docs.astro.build/en/concepts/why-astro/#content-focused): Astro was designed for content-rich websites.
> - [Server-first](https://docs.astro.build/en/concepts/why-astro/#server-first): Websites run faster when they render HTML on the server.
> - [Fast by default](https://docs.astro.build/en/concepts/why-astro/#fast-by-default): It should be impossible to build a slow website in Astro.
> - [Easy to use](https://docs.astro.build/en/concepts/why-astro/#easy-to-use): You don’t need to be an expert to build something with Astro.
> - [Fully-featured, but flexible](https://docs.astro.build/en/concepts/why-astro/#fully-featured-but-flexible): Over 100+ Astro integrations to choose from.
>
> <p class="attribution pl-6">Astro website</p>

[Typescript](http://typescriptlang.org/) types in super well with Astro, so using it was a no-brainer.

When it came to styling, I decided to use [Tailwind](http://tailwindcss.com). It’s not always the prettiest, but it speeds the developing process along. I later implemented [autoprefixer](https://github.com/postcss/autoprefixer) and [postcss-nested](https://github.com/postcss/postcss-nested) through [PostCSS](http://postcss.org/).

For styling, I always use [Prettier](https://prettier.io), and I decided to implement [ESLint](https://eslint.org) as well. I might decide to use [Husky](https://typicode.github.io/husky/#/) to enforce styling before committing.

## Development

Next came the grunt work. Working on it for about 10 hours a week, I cranked out the entire wireframe in about a month. I made a lot of changes to my initial design in this process, and I changed the typography at least three times. I put a lot of focus into having a robust, responsive design, and I’m pleased with how it turned out.

## Content

I tend to struggle here, but I wasn’t throwing in the towel. The portfolio was reasonably straightforward. I spent the most time wording my soft skills just right. The projects page was mostly empty, as I’ve only made a few tools public. I’m still considering whether or not to publish that page.

I spent a solid chunk of time writing my first few blog post. My workflow is relatively simple:

1. Write a post in [Notion](http://notion.so/)
2. Use [ChatGPT](http://chat.openai.com/) to improve language
3. Check-in with [Grammarly](https://grammarly.com)
4. Upload post

I’m currently uploading posts by committing the markdown file to my git repository, but I’d like to find a better way.

## Wrapping Up

After writing my blog post, I made some minor changes to the site. For example, I forgot to style links and block quotes. I have an issue with seeing projects through, so finishing this site was a big step for me. I’m thrilled with how it turned out, and I already have some changes in mind, so stay tuned!
