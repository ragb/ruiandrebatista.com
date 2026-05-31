---
title: "able-midi"
description: "An accessible, browser-based editor for MIDI hardware — edit presets and settings on synths and effects units with a screen reader and keyboard."
pubDate: 2026-05-31
tags: ["midi", "accessibility", "music"]
liveUrl: "https://able-midi.ruiandrebatista.com"
featured: false
status: "wip"
---

able-midi is an accessible editor for MIDI hardware that runs in the browser. Most manufacturer editors for synthesisers and effects units are graphical and unusable with a screen reader; able-midi exposes the same device parameters as plain, keyboard-navigable controls, so a blind musician can edit presets and settings independently over Web MIDI.

Each supported device is backed by its own open-source codec:

- [re202-access-rs](https://github.com/ragb/re202-access-rs) — BOSS RE-202 Space Echo
- [ml10x-access-rs](https://github.com/ragb/ml10x-access-rs) — Morningstar ML10X loop switcher
- [gr55-access-rs](https://github.com/ragb/gr55-access-rs) — Roland GR-55 guitar synthesizer
- [minilogue-access-rs](https://github.com/ragb/minilogue-access-rs) — Korg minilogue analogue synthesiser

## Status

Work in progress. New devices get added over time.
