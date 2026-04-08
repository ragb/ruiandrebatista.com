---
title: "Contributions to NVDA"
description: "Long-term contributor to the NVDA open source screen reader for Windows — braille input, add-on infrastructure, display drivers, and Portuguese translation."
pubDate: 2007-01-01
tags: ["python", "c", "c++", "accessibility", "open-source", "braille"]
repoUrl: "https://github.com/nvaccess/nvda"
featured: true
status: "active"
---

I've been contributing to [NVDA](https://www.nvaccess.org/) (NonVisual Desktop Access) since 2006, when I discovered the project as an early-stage free screen reader for Windows. NVDA is now one of the most widely used screen readers in the world, with tens of thousands of daily users.

## Key contributions

### Braille input support

Designed and implemented the initial prototype of braille input using liblouis translation tables, enabling users to type via braille keyboards on their displays. Added braille input table selection to settings and expanded support across multiple display drivers. Shipped in **NVDA 2013.1**.

### Add-on infrastructure

Participated in the design of the [add-on packaging system](https://github.com/nvaccess/nvda/issues/213) (NVDA 2012.2). Implemented the `.nvda-addon` file extension handler so users can double-click add-on files to install them (NVDA 2012.3). Created the [SCons add-on build template](https://github.com/ragb/nvda-addon-scons-template) that became the community standard for packaging add-ons.

### Braille display drivers

Developed the BrailleNote driver (later merged into NVDA core in 2013.1). Added extended key support for Freedom Scientific Focus displays with firmware v3+, including rocker bar and chord input.

### Add-ons

- **[SysTrayList](https://github.com/ragb/nvda-systrayList)** (with Rui Fontes) — view and interact with system tray icons via a list dialog
- **[Virtual Revision](https://github.com/ragb/nvda-virtualRevision)** — review window content in a text box, similar to JAWS virtualization

### Portuguese translation

Co-maintained the Portuguese (Portugal) translation of NVDA, including the interface, user documentation, gesture configuration, and symbol dictionaries.

## Timeline

- **2006** — Discovered NVDA, started contributing
- **2008** — First code contribution: the battery status report function
- **2009–2012** — Managed the [Portuguese users mailing list](https://groups.google.com/g/nvdaemportugues) (nvdaemportugues)
- **2012** — Add-on file handler, SCons build template, Freedom Scientific display patches, BrailleNote driver. Began work on the [Vocalizer for NVDA](https://vocalizer-nvda.com/old/) speech synthesiser integration with Tiflotecnia (commercial Nuance Vocalizer voices packaged as an NVDA add-on)
- **2013** — Braille input support shipped in NVDA 2013.1, BrailleNote driver merged to core. Continued Vocalizer integration work.
- **2014** — Various bug fixes and maintenance
- Ongoing — Portuguese translation maintenance
