# Birth-time and chart calculation audit

- [ ] Label the input calendar. For Chinese lunar input, record the leap-month flag and the converted Gregorian date.
- [ ] Record the original civil date and time without silently subtracting DST.
- [ ] Identify the historical IANA zone for the birthplace, not the user's current location or today's UTC offset.
- [ ] Resolve nonexistent and repeated times explicitly. Record the UTC candidates and the source of any occurrence selection.
- [ ] Record the actual or approximate longitude and its source; a city centre is not an exact hospital coordinate.
- [ ] State whether true solar time is enabled. Show equation-of-time and longitude/UTC-offset components separately.
- [ ] Specify the day rollover convention, including late Zi-hour treatment.
- [ ] Record the engine/version and the solar-term instant used for a year or month boundary, in an explicit time basis.
- [ ] Keep unknown birth time unknown. Label provisional pillars, onset times and uncertainty coverage.
- [ ] Separate visible-element counts, hidden stems and a weighted strength model. Disclose the formula and thresholds.
- [ ] Specify luck-cycle direction, onset algorithm, time basis and nominal-versus-birthday age convention.
- [ ] Reproduce with synthetic inputs; never publish a person's birth data without permission.
- [ ] Distinguish civil-time verification from traditional interpretations; no software result proves a life-event prediction.
