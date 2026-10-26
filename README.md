# Bazi Time Audit Kit

Small reusable fixtures and a dependency-free command-line checker for inspecting ambiguous or nonexistent civil birth times before interpreting a Four Pillars chart.

## Included

- `dst-cases.csv`: synthetic New York spring-gap, autumn-fold and ordinary-time cases, with provenance per row.
- `resolve-local-time.mjs`: resolves a local minute to zero, one or multiple UTC candidates using Node's installed IANA/Intl data.
- `test.mjs`: regression checks for a skipped time, repeated time, ordinary time and invalid inputs.
- `calculation-checklist.md`: an audit checklist for comparing chart calculation conventions.
- `sources.md`: original timekeeping references and scope of the observations.
- `dst-fold.svg`: an original diagram of the paired autumn-hour experiment.

## Run

Requires Node.js 20 or newer with Intl time-zone data. No packages, credentials, network calls or real birth details are required.

```sh
node test.mjs
node resolve-local-time.mjs 2024-11-03T01:30 America/New_York
```

The repeated-hour example returns UTC candidates `2024-11-03T05:30:00.000Z` and `2024-11-03T06:30:00.000Z`. A gap returns no candidates rather than inventing a time.

## What this is and is not

This is a time-input audit utility, not a Bazi engine, a scientific validation of divination or an independent ephemeris. The CSV's pillar outputs are observed software results with true solar time enabled, New York city-centre longitude −74.00597°, a midnight day boundary and lunar-javascript 1.7.7 in the source calculator. The small checker verifies civil-time candidates only; it does **not** verify pillar outputs, solar-term timestamps, solar corrections or interpretive claims.

Its brute-force minute search is intended for modern, minute-aligned offsets in the supported 1970–2100 input range. It does not support historical second-level offsets, leap seconds, calendars other than Gregorian or geographic zone lookup. The runtime's time-zone database determines the answer; this repository does not freeze its version. A repeated-hour default cannot establish the actual birth instant. Use documented records or retain both candidates.

The worked chart example and browser calculator are at [Clear Bazi Chart](https://clearbazichart.com/guides/bazi-calculator-daylight-saving-time/).

## Reuse

Code, documentation, synthetic fixtures and original diagram are released under the included MIT license. No third-party calendar engine or city database is redistributed here. Preserve provenance and stated conventions when citing the fixtures. Improvements should include a reproducible test and a primary timekeeping source.
