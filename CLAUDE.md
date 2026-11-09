# Woo Fantasy League site: weekly update guide

Static site served by GitHub Pages at https://woofantasyfootball.github.io from the `main` branch (root). Push to `main` and it goes live in a minute or two.

## Ground rules
- ESPN league ID **848216391** (Woo Fantasy League) is the ONLY league to read. Never query or open "Behrend Basketball" (league 317101653) or any other league.
- Read-only on ESPN. Never change lineups, settings, or anything in the league.
- Writing style for any text on the site: casual, short, no em dashes.
- Do not add copyrighted logos or images.

## Getting data
Use the built-in browser pane (Claude_Browser tools). Call `request_access` for fantasy.espn.com, open
`https://fantasy.espn.com/football/league?leagueId=848216391`, then run fetch() calls from that page with the javascript tool:

`https://lm-api-reads.fantasy.espn.com/apis/v3/games/ffl/seasons/2026/segments/0/leagues/848216391?view=mTeam&view=mMatchupScore&view=mSettings`

Add `&view=mRoster` for rosters. Map ESPN teams to manager keys by owner name using `MANAGERS[].full` in data.js
(sop, kurt, sam, paul, rob, jaxon, jp, dom, sebas, ron). Team names can change week to week, so take them from ESPN.

A week counts as final only when every matchup in it has a winner set (not "UNDECIDED") and Monday night is over.

## Files to update after each completed week
1. **games.js** `GAMES_RAW[2026]`: fill in the blank points for the finished week (`wk,R,home,homePts,away,awayPts`). Keep home/away order as is.
2. **data.js**
   - `STANDINGS[2026]`: `[m, teamName, W, L, PF, PA, currentSeed, 0]` from ESPN (seed = ESPN playoffSeed / standings rank).
   - `W26[m]`: append `[week, pts, opp, oppPts]`.
   - `SCHEDULE_26`: drop the finished week's rows.
   - `CURRENT_WEEK`: the new week number (the week now in progress).
   - `H2H`, `PLAYOFFS` untouched during the regular season, but H2H regular-season counts must include the new game (check how H2H is structured before editing; keep totals consistent with games.js).
   - `WEEK_HIGH` / `WEEK_LOW`: +1 to the week's highest and lowest scorer.
   - `TOP_SCORES`, `LOW_SCORES`, `HIGH_LOSSES`, `LOW_WINS`, `BLOWOUTS`, `NAILBITERS`: insert the new game if it makes the list, keep sort order and length.
   - `WHALE`: append `[week, lowestScorer, pts]`.
   - `PLAYOFF_SEEDS` / `BRACKETS[2026]`: refresh "if it ended today" seeds to match standings.
   - `BLURBS`: rewrite each manager's one or two sentence power-ranking blurb from the new numbers. Fun, light trash talk, accurate facts only.
   - Header comment date: "pulled <date>".
3. **rosters.js** `ROSTER_RAW[2026]`: refresh current rosters (same pipe format as the existing lines).
4. **transactions.js** `TX_RAW`: replace with the full 2026 activity feed (it's small, just rebuild it). Fetch
   `.../leagues/848216391/communication/?view=kona_league_communication` with header `x-fantasy-filter`
   `{"topics":{"filterType":{"value":["ACTIVITY_TRANSACTIONS"]},"limit":500,"limitPerMessageSet":{"value":25},"offset":0,"sortMessageDate":{"sortPriority":1,"sortAsc":false},"sortFor":{"sortPriority":2,"sortAsc":false},"filterIncludeMessageTypeIds":{"value":[178,180,179,239,181,244]}}}`.
   messageTypeId 178 = free agent add, 180 = waiver add, 179/181 = drop that goes with the add, 239 = drop only (team = topic author's team), 244 = trade leg (`from` team to `to` team).
   For adds/drops the team is `messages[0].to` (ESPN team id, map via mTeam owners). Look up player names with
   `/apis/v3/games/ffl/seasons/2026/players?view=players_wl` and header `x-fantasy-filter: {"filterIds":{"value":[ids]}}`.
   Keep the line format documented at the top of transactions.js, oldest first.
5. **index.html**: update any hard-coded week text (lead story, "Week N Matchups", Rosters subtitle, footer "through Week N of 2026"). Grep for the old week number.

SIGNS and TRENDS: any pick marked "open" from the finished week gets settled. "hit" if that player scored a touchdown in that game (anytime TD), "miss" if not. Check the box score on a sports site. Leave LAST_PLACE, punishments and side bets alone unless the user asked.

## Before pushing
- `node -e` check: every team's W-L, PF, PA computed from GAMES[2026] matches STANDINGS[2026].
- Open index.html in headless Chrome (`/usr/bin/google-chrome`, playwright) on #home, #scores, #schedule, #playoffs and confirm no page errors.
- Commit with a message like "Week N results" and push to main.

## Playoffs (Weeks 15 to 17)
6 teams. Week 15: 3v6, 4v5, seeds 1 and 2 on bye. Week 16: 1 vs 4/5 winner, 2 vs 3/6 winner. Week 17: Super Bowl VI.
Consolation: Week 15 7v8 and 9v10. Week 16 winners play for 7th, losers play the last-place game. Fill BRACKETS[2026] and CONSOLATION[2026] like past years, and add a BOX[2026] box score after Week 17.
