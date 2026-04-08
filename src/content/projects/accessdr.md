---
title: "AccessDR"
description: "Accessible software-defined radio application for blind and visually impaired users. An AI-assisted experiment in building a full desktop app."
pubDate: 2026-02-18
tags: ["python", "accessibility", "sdr", "radio", "ai-experiment"]
repoUrl: "https://github.com/ragb/accessdr"
featured: false
status: "wip"
---

AccessDR is an accessible software-defined radio (SDR) application for Windows, designed to be fully usable with a screen reader and keyboard. It receives radio signals via an RTL-SDR dongle and provides WFM, NFM, AM, SSB, and CW demodulation, spectrum sonification (mapping the RF spectrum to audio tones), RDS decoding, CTCSS detection, frequency scanning, and bookmarks.

Built with Python, wxPython, and pyrtlsdr.

## AI experiment

This project was built almost entirely with AI coding assistants as an experiment in how far that approach can go for building a real desktop application. The architecture, DSP pipeline, UI, and accessibility layer were all developed through AI-assisted coding. It's a proof of concept — rough edges included.

## Features

- Screen reader driven, fully keyboard operated
- Spectrum sonification — hear the RF spectrum as audio tones
- WFM/NFM/AM/SSB/CW demodulation
- RDS/RBDS decoding (station name, radio text, programme type)
- CTCSS tone detection
- Frequency scanner with signal detection
- Noise blanker
- Bookmark management
- Colour-blind safe spectrum display (Viridis, Magma, Grayscale)
- NSIS installer for Windows

## Status

Early alpha. Proof of concept. Expect rough edges.
