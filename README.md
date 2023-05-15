# Hackrva.org

This is a static site generator for the hackrva.org website.
[demo](https://hackrva.github.io/hackrva.org/)

### Installation

```
$ npm ci
```

### Local Development

```
$ npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Adding a page
You can create new pages in the `./src/pages/` dir.  
The pages can either be in `.md`, `.mdx`, or `.tsx`.

The routing will basically trim the extension off of the file.  So if you made a page called `./src/pages/woodshop` the page will be created at `hackrva.org/woodshop`.  You would still need to link to that page or add it to the `navbar`.

You can add to the `navbar` by editing the `./docusaurus.config.js` file.

### Adding a blog post

Create a markdown file in the `./blog` dir.

The title, date, and author can be set in the front matter (which is just some metadata that you put at the top of the file).

e.g.
```md
---
title: "Stop The Bleed"
date: "2023-02-02"
author: "Kent D."
---

<!-- content of the file below -->
```

### Reference
* [Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
* [Markdown Live Preview](https://markdownlivepreview.com/)
* [Docusaurus Documentation](https://docusaurus.io/docs)
