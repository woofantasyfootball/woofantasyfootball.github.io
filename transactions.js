/* 2026 league transactions from ESPN's activity feed (adds, drops, waiver claims, trades), pulled Nov 11 2026.
   Format per line: date|kind|manager|addName|addPos|dropName|dropPos   kind: F free agent, W waiver claim, D drop only
   Trades: date|T|from>to>Player|POS~from>to>Player|POS... */
const TX_RAW = `2026-08-10|F|sop|Jaguars D/ST|DST|Browns D/ST|DST
2026-08-10|F|sop|Denzel Boston|WR|Xavier Worthy|WR
2026-08-10|F|kurt|Tank Dell|WR|Stefon Diggs|WR
2026-08-17|F|dom|Bears D/ST|DST|Chiefs D/ST|DST
2026-08-19|D|sebas||Jayden Higgins|WR
2026-08-19|F|sebas|Xavier Worthy|WR|
2026-08-20|F|sop|Juwan Johnson|TE|Travis Hunter|WR
2026-08-23|F|sop|Mike Washington Jr.|RB|Juwan Johnson|TE
2026-08-26|F|kurt|Stefon Diggs|WR|Zachariah Branch|WR
2026-08-30|F|sop|MarShawn Lloyd|RB|Denzel Boston|WR
2026-09-12|F|sop|Michael Mayer|TE|Quentin Johnston|WR
2026-09-12|F|ron|Baker Mayfield|QB|Alvin Kamara|RB
2026-09-12|F|ron|Kyler Murray|QB|Josh Downs|WR
2026-09-12|T|sop>ron>MarShawn Lloyd|RB~sop>ron>Jonathon Brooks|RB~sop>ron>Travis Kelce|TE~ron>sop>Harold Fannin Jr.|TE~ron>sop>Tony Pollard|RB
2026-09-12|F|sop|Tyler Shough|QB|
2026-09-16|W|rob|49ers D/ST|DST|Lions D/ST|DST
2026-09-16|W|dom|Buccaneers D/ST|DST|Bears D/ST|DST
2026-09-16|W|sop|Kaelon Black|RB|Michael Mayer|TE
2026-09-16|W|sebas|Alvin Kamara|RB|Xavier Worthy|WR
2026-09-16|W|rob|Cairo Santos|K|Ben Sauls|K
2026-09-16|W|dom|Jalen Coker|WR|Tyrone Tracy Jr.|RB
2026-09-16|F|sop|Chiefs D/ST|DST|Jaguars D/ST|DST
2026-09-16|F|sebas|Jayden Reed|WR|Alvin Kamara|RB
2026-09-16|F|rob|Caleb Douglas|WR|
2026-09-17|F|sam|Pat Freiermuth|TE|
2026-09-17|F|dom|Chase McLaughlin|K|Eddy Pineiro|K
2026-09-18|F|sebas|Quentin Johnston|WR|Jayden Reed|WR
2026-09-23|W|sop|Josh Downs|WR|Mike Washington Jr.|RB
2026-09-23|W|sebas|Denzel Boston|WR|Kenny Gainwell|RB
2026-09-23|W|rob|Bryce Young|QB|Jordan Mason|RB
2026-09-23|F|dom|Panthers D/ST|DST|Buccaneers D/ST|DST
2026-09-24|F|ron|Jordan Love|QB|Jonathon Brooks|RB
2026-09-24|F|sebas|Devaughn Vele|WR|Makai Lemon|WR
2026-09-25|F|sop|Adonai Mitchell|WR|
2026-09-26|F|sop|Alvin Kamara|RB|Adonai Mitchell|WR
2026-09-29|T|kurt>sebas>Bhayshul Tuten|RB~kurt>sebas>Brock Bowers|TE~sebas>kurt>Bijan Robinson|RB
2026-09-29|D|sop||Rico Dowdle|RB
2026-09-29|T|paul>sebas>Chase Brown|RB~sebas>paul>Lamar Jackson|QB~paul>sebas>Jalen Hurts|QB~sebas>paul>Brock Bowers|TE~paul>sebas>Ja'Marr Chase|WR
2026-09-30|W|sebas|Vikings D/ST|DST|Eagles D/ST|DST
2026-09-30|W|kurt|Juwan Johnson|TE|
2026-09-30|W|rob|Braelon Allen|RB|Jaxson Dart|QB
2026-09-30|W|dom|Ollie Gordon II|RB|Chris Godwin Jr.|WR
2026-09-30|F|kurt|Keenan Allen|WR|
2026-09-30|F|kurt|Tyreek Hill|WR|De'Von Achane|RB
2026-09-30|F|sop|Spencer Shrader|K|Cam Little|K
2026-10-01|F|dom|Bears D/ST|DST|Panthers D/ST|DST
2026-10-04|D|sam||Woody Marks|RB
2026-10-04|F|sam|Courtland Sutton|WR|
2026-10-07|W|jaxon|Will Shipley|RB|Tank Bigsby|RB
2026-10-07|W|rob|Cowboys D/ST|DST|49ers D/ST|DST
2026-10-07|W|jaxon|Keon Coleman|WR|Zach Charbonnet|RB
2026-10-07|W|sop|Rome Odunze|WR|
2026-10-07|W|rob|Aaron Rodgers|QB|Caleb Douglas|WR
2026-10-07|W|paul|Jacoby Brissett|QB|Brian Thomas Jr.|WR
2026-10-07|F|ron|Emanuel Wilson|RB|Baker Mayfield|QB
2026-10-07|F|ron|Commanders D/ST|DST|MarShawn Lloyd|RB
2026-10-07|F|sop|Jets D/ST|DST|Chiefs D/ST|DST
2026-10-07|F|kurt|Jake Bates|K|Tank Dell|WR
2026-10-07|F|sebas|Jaguars D/ST|DST|Vikings D/ST|DST
2026-10-07|F|sebas|Kirk Cousins|QB|Quentin Johnston|WR
2026-10-07|F|sebas|Dohnte Meyers|WR|Kirk Cousins|QB
2026-10-08|F|sop|Mike Washington Jr.|RB|Kaelon Black|RB
2026-10-14|W|dom|Patriots D/ST|DST|Bears D/ST|DST
2026-10-14|W|jaxon|Dameon Pierce|RB|Keon Coleman|WR
2026-10-14|W|dom|Tyler Loop|K|Chase McLaughlin|K
2026-10-14|W|sebas|C.J. Stroud|QB|Blake Corum|RB
2026-10-14|D|sop||Mike Washington Jr.|RB
2026-10-14|F|sop|Germie Bernard|WR|Rome Odunze|WR
2026-10-14|F|sop|Chiefs D/ST|DST|Jets D/ST|DST
2026-10-14|F|sebas|MarShawn Lloyd|RB|Dohnte Meyers|WR
2026-10-14|F|sop|Woody Marks|RB|David Montgomery|RB
2026-10-14|F|dom|Sam Darnold|QB|Justin Herbert|QB
2026-10-14|F|rob|Colts D/ST|DST|Cowboys D/ST|DST
2026-10-14|D|rob||Kenyon Sadiq|TE
2026-10-14|F|rob|Jameis Winston|QB|
2026-10-14|T|dom>rob>Jalen Coker|WR~dom>rob>Isaiah Likely|TE~rob>dom>Zay Flowers|WR
2026-10-14|F|dom|Brenton Strange|TE|
2026-10-14|F|paul|Xavier Worthy|WR|
2026-10-15|F|sebas|Kirk Cousins|QB|C.J. Stroud|QB
2026-10-15|F|kurt|Blake Corum|RB|Jake Bates|K
2026-10-15|F|jaxon|Dominic Zvada|K|Harrison Mevis|K
2026-10-16|F|sebas|Tyler Allgeier|RB|MarShawn Lloyd|RB
2026-10-18|F|dom|MarShawn Lloyd|RB|TreVeyon Henderson|RB
2026-10-18|D|sam||Pat Freiermuth|TE
2026-10-18|F|jp|Rome Odunze|WR|Michael Pittman Jr.|WR
2026-10-18|F|dom|Pat Freiermuth|TE|
2026-10-21|W|dom|DeMario Douglas|WR|Brenton Strange|TE
2026-10-21|W|dom|C.J. Stroud|QB|Sam Darnold|QB
2026-10-21|W|dom|David Montgomery|RB|MarShawn Lloyd|RB
2026-10-21|F|sop|Tre Tucker|WR|
2026-10-21|D|sop||Tre Tucker|WR
2026-10-21|F|sop|Jordan Mason|RB|
2026-10-21|F|sop|Zach Charbonnet|RB|Terry McLaurin|WR
2026-10-21|F|sop|Vikings D/ST|DST|Chiefs D/ST|DST
2026-10-21|F|sebas|Aaron Rodgers|QB|
2026-10-21|D|sebas||Jalen Hurts|QB
2026-10-21|F|paul|Tre Tucker|WR|Romeo Doubs|WR
2026-10-21|F|sebas|Malik Washington|WR|Tyler Allgeier|RB
2026-10-21|F|sebas|Browns D/ST|DST|Jaguars D/ST|DST
2026-10-23|F|sebas|Baker Mayfield|QB|Kirk Cousins|QB
2026-10-25|F|jp|Will Reichard|K|Cameron Dicker|K
2026-10-25|F|paul|Tyler Allgeier|RB|Jacory Croskey-Merritt|RB
2026-10-28|W|ron|Jonah Coleman|RB|Emanuel Wilson|RB
2026-10-28|F|sebas|Omar Cooper Jr.|WR|Baker Mayfield|QB
2026-10-28|F|paul|Jaguars D/ST|DST|Texans D/ST|DST
2026-10-28|F|paul|Caleb Douglas|WR|Xavier Worthy|WR
2026-10-28|F|sebas|Tyler Bass|K|Omar Cooper Jr.|WR
2026-10-28|F|dom|Bengals D/ST|DST|Patriots D/ST|DST
2026-10-29|F|jaxon|Matt Gay|K|Dameon Pierce|RB
2026-10-30|D|dom||DeMario Douglas|WR
2026-10-30|F|sebas|Patriots D/ST|DST|Browns D/ST|DST
2026-10-31|F|sebas|Rico Dowdle|RB|
2026-11-01|W|sebas|DeMario Douglas|WR|Malik Washington|WR
2026-11-01|F|rob|Chiefs D/ST|DST|Colts D/ST|DST
2026-11-03|D|sop||Marvin Harrison Jr.|WR
2026-11-04|W|kurt|Cam Little|K|Harrison Butker|K
2026-11-04|W|rob|Seth McGowan|RB|Jameis Winston|QB
2026-11-04|W|dom|Jake Bates|K|Tyler Loop|K
2026-11-04|W|sebas|J.J. McCarthy|QB|Aaron Rodgers|QB
2026-11-04|F|sebas|Chris Rodriguez Jr.|RB|Rico Dowdle|RB
2026-11-04|F|dom|Makai Lemon|WR|
2026-11-04|F|sop|Adonai Mitchell|WR|Josh Downs|WR
2026-11-04|F|paul|Shedeur Sanders|QB|Jacoby Brissett|QB
2026-11-05|F|sop|Texans D/ST|DST|Vikings D/ST|DST
2026-11-05|F|jaxon|Giants D/ST|DST|Matt Gay|K
2026-11-05|F|dom|Bears D/ST|DST|Bengals D/ST|DST
2026-11-05|F|sebas|Bills D/ST|DST|Patriots D/ST|DST
2026-11-05|F|sam|Chad Ryland|K|
2026-11-06|F|sop|Kaelon Black|RB|
2026-11-06|F|sop|Antonio Williams|WR|Jordan Mason|RB
2026-11-06|F|sop|Devin Singletary|RB|Antonio Williams|WR
2026-11-10|D|sop||Adonai Mitchell|WR
2026-11-11|W|paul|Rico Dowdle|RB|Tyler Allgeier|RB
2026-11-11|W|sebas|Fernando Mendoza|QB|Devaughn Vele|WR
2026-11-11|W|dom|Reggie Virgil|WR|Michael Wilson|WR
2026-11-11|W|paul|Aaron Rodgers|QB|Shedeur Sanders|QB
2026-11-11|F|sop|Tutu Atwell|WR|Devin Singletary|RB
2026-11-11|F|dom|Josh Downs|WR|Reggie Virgil|WR
2026-11-11|F|jaxon|Tank Dell|WR|Will Shipley|RB`;
const TX = TX_RAW.split("\n").map((l) => {
  const f = l.split("|"), date = f[0], kind = f[1];
  if (kind === "T") {
    const legs = l.slice(13).split("~").map((s) => { const [from, to, rest] = s.split(">"); const [name, pos] = rest.split("|"); return { from, to, name, pos }; });
    return { date, kind, legs, teams: [...new Set(legs.flatMap((x) => [x.from, x.to]))] };
  }
  return { date, kind, m: f[2], add: f[3] ? { name: f[3], pos: f[4] } : null, drop: kind === "D" ? { name: f[4], pos: f[5] } : f[5] ? { name: f[5], pos: f[6] } : null };
}).reverse();
