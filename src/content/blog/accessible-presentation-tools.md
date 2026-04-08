---
title: "Accessible Presentation Tools"
description: "Simple textual markup and well-crafted templates can be far more effective than PowerPoint for visually impaired users. Some tools that help."
pubDate: 2014-03-24
updatedDate: 2026-04-08
tags: ["accessibility", "presentations"]
---

As a blind person myself, I have encountered some difficulties making pretty slide presentations using the usual Powerpoint/keynote tools. Although a visual impaired user can read and interact with these, and most try to do that, simple textual markup and well crafted templates can be far more effective. Developers and power users are specially at home in this regard. Some tools that can be used for easily producing slideshows in a accessible way:

- [Reveal.js](https://revealjs.com/) is probably the most popular HTML presentation framework today. It produces accessible, keyboard-navigable slideshows from HTML or Markdown. Pandoc can output Reveal.js presentations directly, so you can write in Markdown and get a polished result.
- [S5](http://meyerweb.com/eric/tools/s5/) and [Slidy](http://www.w3.org/Talks/Tools/Slidy2/Overview.html#(1)) are older but still functional options for HTML-based presentations. They are accessible to create and to read with a screen reader, as they render in a browser like any other web page.
- [Pandoc](http://johnmacfarlane.net/pandoc/) is a universal document converter. You can use this to write slideshows in Markdown and convert them to Reveal.js, S5, or Slidy presentations, which is far more efficient than writing HTML by hand.
- If using LaTeX, the [Beamer](http://www.ctan.org/pkg/beamer) package can be used to create pretty PDF presentations. Although the PDF output is less accessible for a screen reader user (comparing to HTML), it is a very nice option, specially in academic contexts or stuff that requires complex math formulas.

Hope this is useful for someone.
