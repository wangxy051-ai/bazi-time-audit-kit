# Sources and provenance

Checked 2026-10-26.

1. [IANA time-zone and daylight-saving data](https://data.iana.org/time-zones/tz-link.html): records and limitations of historical civil-time offsets. Runtime databases can differ and change.
2. [NOAA General Solar Position Calculations](https://gml.noaa.gov/grad/solcalc/solareqns.PDF): approximate equation of time and `time_offset = eqtime + 4 * longitude - 60 * timezone`, with east-positive longitude and UTC offset in hours.
3. [lunar-javascript source](https://github.com/6tail/lunar-javascript): traditional calendar engine used in the source browser calculator, version 1.7.7. Not bundled with this audit utility.
4. The three chart-related CSV rows were measured in the original website's browser interface on 2026-10-26. Synthetic inputs: New York 2024-03-10 02:30, and New York 2024-11-03 01:30 under first/second occurrence. Gregorian, male, true solar time on, midnight boundary, city-centre longitude −74.00597°. All input processing stayed in the browser.
5. The ordinary-time row and UTC candidates are also checked by `node test.mjs`; this confirms the installed runtime's time-zone behavior, not the truth of interpretations or an independent astronomical standard.

The fixtures were authored for this experiment and are not scraped competitor outputs or real personal records. They are a small regression set, not a representative dataset or accuracy percentage.
