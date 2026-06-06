---
title: "skunk-sharp"
description: "A Scala 3 library for compile-time-checked Postgres queries on top of skunk. Column names, types, nullability, and INSERT completeness are all verified by the compiler."
pubDate: 2026-06-06
tags: ["scala", "postgres", "skunk", "type-safety", "dsl", "open-source"]
repoUrl: "https://github.com/ragb/skunk-sharp"
featured: true
status: "wip"
---

skunk-sharp is a Scala 3 library that adds a *type-safer* layer on top of [skunk](https://typelevel.org/skunk) for writing Postgres queries. You describe a table once, then write SELECT / INSERT / UPDATE / DELETE / JOIN statements where column names, operator and value types, nullability, INSERT completeness, and mutability (table vs view) are all verified by the compiler. Declared table descriptions can also be validated against a live database at service init via `information_schema`.

It is deliberately *not* a SQL replacement or an ORM — the DSL targets the common, repetitive subset of SQL where typos and type mismatches hurt the most. Anything beyond that belongs in skunk's raw `sql"…"` interpolator, and mixed use is expected.

## Scope

- Compile-time checking of column names, types, nullability, INSERT completeness, and table-vs-view mutability.
- Schema validation against a live database at service init (report-only or fail-fast).
- Scala 3 only — leans into match types, opaque tags, extension methods, `inline`, named tuples.
- Postgres-only, skunk-only — no pretence of multi-backend support.

## Modules

- `skunk-sharp-core` — the DSL: WHERE / ORDER BY / GROUP BY / HAVING, N-way joins (INNER / LEFT / RIGHT / FULL / CROSS / LATERAL), row locking, `ON CONFLICT`, `RETURNING`, `UPDATE … FROM` / `DELETE … USING`, `INSERT … FROM SELECT`, aggregates with `ROLLUP` / `CUBE` / `GROUPING SETS`, window functions, CTEs, set operations, set-returning functions, subqueries, in-core extension contribs (citext, ltree, hstore, pg_trgm, pgcrypto, fuzzystrmatch), and the schema validator.
- `skunk-sharp-iron` and `skunk-sharp-refined` — optional refinement type support.
- `skunk-sharp-circe` — Postgres `json` / `jsonb` with typed round-tripping.
- `skunk-sharp-postgis` — [PostGIS](https://postgis.net/) spatial types and `ST_*` operators.

## AI-assisted delivery

Function catalogues, operator sets, and mechanical rewrites across modules are exactly the kind of work an LLM is good at and a human is slow at. The design decisions stay with the human; the busywork doesn't. This is an experiment in how far that division of labour scales on a non-trivial library.

## Status

Early development — APIs will change. Apache-2.0 licensed. Published to GitHub Packages.
