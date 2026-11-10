/* ===== Woo Fantasy League data. ESPN league 848216391, pulled Nov 10 2026, plus the league history doc. ===== */
const MANAGERS = {
  sop:   { name: "Sop",   full: "Michael Sopko",      aka: "" ,   div: "East" },
  kurt:  { name: "Kurt",  full: "Kurt Sommerfeld",    aka: "",    div: "West" },
  sam:   { name: "Sam",   full: "Sam Ball",           aka: "",    div: "East" },
  paul:  { name: "Paul",  full: "Paul Litrenta",      aka: "",    div: "West" },
  rob:   { name: "Rob",   full: "Robert Glies",       aka: "Roj", div: "East" },
  jaxon: { name: "Jaxon", full: "Jaxon Mozzocio",     aka: "Doug",div: "West" },
  jp:    { name: "JP",    full: "Johnpaul Mozzocio",  aka: "",    div: "East" },
  dom:   { name: "Dom",   full: "Dom Rocca",          aka: "",    div: "West" },
  sebas: { name: "Sebas", full: "Sebas Cour",         aka: "Bass",div: "East" },
  ron:   { name: "Ron",   full: "Ronnie DeMase",      aka: "",    div: "West" }
};
const ORDER = ["sop","kurt","sam","paul","rob","jaxon","jp","dom","sebas","ron"];

/* Season standings from ESPN: [manager, team name, W, L, PF, PA, playoff seed, final rank] */
const STANDINGS = {
  2021: [["sop","Sops RaftusBeerNelk",8,6,1764.66,1708.92,4,5],["kurt","Fat Hairy Prick",11,3,1820.5,1632.5,1,4],["sam","Team Ball",5,9,1653.92,1721.62,8,8],["paul","Vern Cinameet",9,5,1704.8,1619.76,3,3],["rob","Get Swifty",6,8,1784.16,1833.32,6,6],["jaxon","DK's Large Tasty Stromboli",5,9,1576.68,1618.7,10,9],["jp","The Gaunlet",8,6,1598.8,1651.58,5,1],["dom","Two girls one kupp",5,9,1747.1,1835.7,7,7],["sebas","Baslords Fartpoops",8,6,1783.58,1648.94,2,2],["ron","Hill Be Stopped",5,9,1582.74,1745.9,9,10]],
  2022: [["sop","Sop's RaftusBeerNelk",5,9,1592.92,1621.24,9,9],["kurt","Fat Hairy Chubb",7,7,1683.56,1655.64,6,5],["sam","Team Ball",5,9,1603.76,1707.18,8,8],["paul","Rock Solid Coćk",4,10,1561.34,1686.18,10,7],["rob","Team Boog Schlizeti",6,8,1510.6,1636.94,7,10],["jaxon","spil yssup taf",11,3,1749.82,1546.82,1,4],["sebas","Ba$$Mans FartPoops",8,6,1665.04,1659.38,4,6],["ron","Hurts Doesnt It",7,7,1697.14,1713.26,5,2],["dom","King of the hill",8,6,1709.98,1710,3,3],["jp","King's Gaunlet",9,5,1705.82,1543.34,2,1]],
  2023: [["sop","Sop's RaftusBeerNelk",4,10,1456.24,1691.82,8,7],["kurt","Stroke my Chubb",10,4,1608.12,1513.3,2,3],["sam","Team PAPA",3,11,1534.76,1814.28,10,8],["paul","Your Ass Hurts",7,7,1731.04,1702.12,5,1],["rob","Bijan Mustard",3,11,1605.8,1758.24,9,9],["jaxon","Jerryatric MFs",7,7,1671.06,1603.82,6,2],["sebas","Amon a Mission",10,4,1876.24,1709.76,3,6],["ron","Fanta Claus is Coming 2 Town",9,5,1762.62,1600.14,4,5],["dom","Easy pickens",6,8,1688.58,1720.4,7,10],["jp","The Infinity Stone Feelers",11,3,1749.3,1569.88,1,4]],
  2024: [["sop","Sop's RaftusBeerNelk",8,6,1684,1694.3,4,5],["kurt","Just Cage Me",6,8,1788.84,1709.76,7,9],["sam","Team PAPA",7,7,1685.82,1703.48,5,4],["paul","Your Ass Hurts",7,7,1824.98,1678.28,2,3],["rob","Bijan Mustard",5,9,1670.12,1656.78,8,8],["jaxon","Dugg Slug",5,9,1642.06,1702.86,9,10],["sebas","Amon a Mission",11,3,1913.66,1668.7,1,2],["ron","Fanta Claus is Coming 2 Town",7,7,1504.46,1643.7,6,6],["dom","Easy pickens",5,9,1487.42,1823.1,10,7],["jp","The Infinity Stone Feelers",9,5,1680.8,1601.2,3,1]],
  2025: [["sop","Sop's RaftusBeerNelk",11,3,1809.94,1574.52,1,1],["kurt","LAMBO",5,9,1527.1,1634.66,9,9],["sam","Team PAPA",6,8,1517.96,1609.8,8,10],["paul","Your Ass Hurts",6,8,1663.96,1644.1,6,2],["rob","Do it for Skat",10,4,1938.4,1634.16,3,5],["jaxon","Jack Me Goff",7,7,1554.46,1716.3,5,6],["sebas","Amon a Mission (kinda)",7,7,1653.5,1755.68,4,3],["ron","Fanta Claus Coming 2 Town",8,6,1653.22,1611.4,2,4],["dom","King of the hill",4,10,1527.4,1610.1,10,8],["jp","3Time",6,8,1618.38,1673.6,7,7]],
  2026: [["sop","Ohio State University",5,4,1141.1,1100.8,3,0],["kurt","Bada Bing",5,4,1096.42,1043.3,4,0],["sam","Team PAPA",5,4,1063.4,996,5,0],["paul","WHEN THEY GO?",0,9,916.34,1213.18,10,0],["rob","Do it for Roj",4,5,1065.76,1077.26,7,0],["jaxon","#GILLMODE",6,3,1208.14,1048.26,2,0],["sebas","Bomb Squad",4,5,1110.68,1106.82,6,0],["ron","Fantsgiving",4,5,1042.72,1143.08,8,0],["dom","Likely to lose",4,5,961.68,1098.26,9,0],["jp","3Time",8,1,1230.1,1009.38,1,0]]
};

/* Head to head, rows/cols in ORDER. "regW.regL.playoffW.playoffL" (playoffs = championship bracket only) */
const H2H = {
  sop:["0.0.0.0","2.3.0.0","9.2.0.1","7.2.1.0","5.6.0.0","2.4.0.0","4.7.0.1","4.4.0.0","5.7.1.0","3.3.0.0"],
  kurt:["3.2.0.0","0.0.0.0","4.2.0.0","7.5.0.0","3.3.0.0","6.5.0.1","3.4.0.1","8.3.0.1","5.5.0.0","5.6.0.0"],
  sam:["2.9.1.0","2.4.0.0","0.0.0.0","4.2.0.0","3.8.0.0","2.5.0.0","4.7.0.0","5.4.0.0","5.6.0.1","4.3.0.0"],
  paul:["2.7.0.1","5.7.0.0","2.4.0.0","0.0.0.0","3.4.2.0","5.6.1.0","2.4.1.1","7.4.0.0","2.4.0.1","5.6.2.0"],
  rob:["6.5.0.0","3.3.0.0","8.3.0.0","4.3.0.2","0.0.0.0","5.4.0.0","3.9.0.0","1.5.0.0","2.9.0.0","2.4.0.0"],
  jaxon:["4.2.0.0","5.6.1.0","5.2.0.0","6.5.0.1","4.5.0.0","0.0.0.0","0.6.0.0","6.5.0.0","3.3.1.1","8.4.0.1"],
  jp:["7.4.1.0","4.3.1.0","7.4.0.0","4.2.1.1","9.3.0.0","6.0.0.0","0.0.0.0","5.1.1.0","6.5.2.0","3.6.2.0"],
  dom:["4.4.0.0","3.8.1.0","4.5.0.0","4.7.0.0","5.1.0.0","5.6.0.0","1.5.0.1","0.0.0.0","1.5.0.0","5.6.0.0"],
  sebas:["7.5.0.1","5.5.0.0","6.5.1.0","4.2.1.0","9.2.0.0","3.3.1.1","5.6.0.2","5.1.0.0","0.0.0.0","4.2.0.1"],
  ron:["3.3.0.0","6.5.0.0","3.4.0.0","6.5.0.2","4.2.0.0","4.8.1.0","6.3.0.2","6.5.0.0","2.4.1.0","0.0.0.0"]
};
/* Championship bracket record [W, L] 2021-2025 */
const PLAYOFFS = { sop:[2,2], kurt:[0,3], sam:[1,1], paul:[6,3], rob:[0,2], jaxon:[2,3], jp:[8,1], dom:[1,1], sebas:[3,5], ron:[2,4] };
/* All-play record (vs every team, every week), regular season 2021 through 2026 wk 9 */
const ALLPLAY = { sop:[353,358], kurt:[364,347], sam:[302,409], paul:[358,353], rob:[359,352], jaxon:[351,360], jp:[381,330], dom:[323,388], sebas:[427,284], ron:[337,374] };
/* Weekly highest and lowest score counts, regular season */
const WEEK_HIGH = { sop:7, kurt:5, sam:6, paul:10, rob:8, jaxon:7, jp:11, dom:5, sebas:13, ron:7 };
const WEEK_LOW  = { sop:9, kurt:4, sam:10, paul:6, rob:8, jaxon:9, jp:6, dom:8, sebas:4, ron:15 };

/* Game lists: [year, week, R/P/C (regular, playoff, consolation), manager, team, points, opponent, opp points] */
const TOP_SCORES = [[2021,14,"R","dom","Two girls one kupp",212.32,"sop",159.72],[2023,5,"R","rob","Bijan Mustard",193.28,"sebas",82.46],[2024,15,"P","sam","Team PAPA",192.38,"sop",144.62],[2024,9,"R","kurt","Just Cage Me",191.74,"dom",85.1],[2023,3,"R","ron","Fanta Claus is Coming 2 Town",181.38,"paul",166.78],[2024,14,"R","sam","Team PAPA",181.38,"dom",98.64],[2023,12,"R","sebas","Amon a Mission",179.56,"dom",145.24],[2024,16,"P","sebas","Amon a Mission",175.28,"sam",136.46],[2022,9,"R","sop","Sop's RaftusBeerNelk",174.22,"sam",106],[2025,10,"R","sop","Sop's RaftusBeerNelk",172.84,"jaxon",104.9]];
const LOW_SCORES = [[2025,17,"C","sam","Team PAPA",38.8,"kurt",93],[2025,8,"R","jaxon","Jack Me Goff",52.48,"jp",98.58],[2022,17,"C","jaxon","spil yssup taf",55.4,"dom",120.18],[2023,9,"R","ron","Fanta Claus is Coming 2 Town",60.18,"jaxon",97.4],[2023,11,"R","sop","Sop's RaftusBeerNelk",60.3,"sebas",136.5],[2025,11,"R","ron","Fanta Claus Coming 2 Town",64,"paul",111.3],[2024,7,"R","ron","Fanta Claus is Coming 2 Town",65.66,"rob",132.94],[2022,11,"R","sop","Sop's RaftusBeerNelk",67.52,"rob",120.1],[2021,9,"R","paul","Vern Cinameet",67.74,"dom",106.04],[2024,11,"R","ron","Fanta Claus is Coming 2 Town",67.84,"paul",100.14]];
const HIGH_LOSSES = [[2023,3,"R","paul","Your Ass Hurts",166.78,"ron",181.38],[2021,11,"R","sop","Sops RaftusBeerNelk",162.86,"rob",168.08],[2023,15,"P","sebas","Amon a Mission",161.26,"jaxon",163.3],[2021,14,"R","sop","Sops RaftusBeerNelk",159.72,"dom",212.32],[2022,2,"R","kurt","Fat Hairy Chubb",157.18,"sebas",161.08]];
const LOW_WINS = [[2021,10,"R","jp","The Gaunlet",79.38,"jaxon",71.64],[2025,12,"R","kurt","LAMBO",87.92,"ron",87.62],[2025,1,"R","dom","King of the hill",88.24,"kurt",83.96],[2021,15,"P","paul","Vern Cinameet",89.2,"rob",84.34],[2023,17,"P","paul","Your Ass Hurts",89.58,"jaxon",80.6]];
/* Margins: [year, week, type, winner, winner pts, loser, loser pts, margin] */
const BLOWOUTS = [[2023,5,"R","rob",193.28,"sebas",82.46,110.82],[2024,9,"R","kurt",191.74,"dom",85.1,106.64],[2024,12,"R","sebas",158.98,"dom",72.92,86.06],[2024,14,"R","sam",181.38,"dom",98.64,82.74],[2026,8,"R","sebas",153.48,"dom",71.5,81.98],[2026,9,"R","jaxon",163.22,"ron",82.76,80.46],[2023,11,"R","sebas",136.5,"sop",60.3,76.2],[2023,4,"R","dom",147.9,"sam",73.58,74.32],[2023,13,"R","ron",172.26,"sam",98.38,73.88],[2021,16,"P","sebas",168.06,"paul",94.22,73.84]];
const NAILBITERS = [[2024,3,"R","ron",152.58,"paul",152.54,0.04],[2025,17,"C","jp",101.3,"dom",101.14,0.16],[2025,2,"R","jp",124,"sam",123.78,0.22],[2022,17,"P","jp",129.52,"ron",129.26,0.26],[2021,10,"R","sop",98.14,"sebas",97.84,0.3],[2025,12,"R","kurt",87.92,"ron",87.62,0.3],[2021,7,"R","jp",117.72,"dom",117.24,0.48],[2023,16,"C","sop",135.72,"rob",134.8,0.92],[2021,2,"R","sop",115.3,"rob",114.32,0.98],[2021,10,"R","sam",114.08,"rob",113.1,0.98]];

/* 2026 weekly results: [week, points, opponent, opp points] */
const W26 = {
  sop:[[1,157.42,"dom",111.6],[2,103.02,"rob",77.5],[3,146,"sam",130.78],[4,109.14,"jp",156.72],[5,147.56,"sebas",130.8],[6,125.5,"paul",77.22],[7,120.04,"ron",134.22],[8,119.06,"jaxon",152.68],[9,113.36,"sebas",129.28]],
  kurt:[[1,155.86,"paul",97.02],[2,103.64,"jp",152.62],[3,95.74,"ron",99.88],[4,115.7,"dom",100.08],[5,166.86,"jaxon",137.2],[6,103.78,"rob",137.54],[7,114.9,"sebas",116.18],[8,100.68,"sam",98.1],[9,139.26,"paul",104.68]],
  sam:[[1,100.9,"jp",129.96],[2,127.48,"sebas",90.1],[3,130.78,"sop",146],[4,97.82,"rob",102.96],[5,142.46,"paul",121.48],[6,127.06,"ron",104.74],[7,113.62,"jaxon",83.6],[8,98.1,"kurt",100.68],[9,125.18,"dom",116.48]],
  paul:[[1,97.02,"kurt",155.86],[2,108.56,"ron",136.52],[3,108.72,"dom",113.78],[4,112.68,"jaxon",142.72],[5,121.48,"sam",142.46],[6,77.22,"sop",125.5],[7,94.28,"jp",130.52],[8,91.7,"rob",126.56],[9,104.68,"kurt",139.26]],
  rob:[[1,135,"sebas",154.16],[2,77.5,"sop",103.02],[3,138.54,"jaxon",122.6],[4,102.96,"sam",97.82],[5,119,"jp",146.9],[6,137.54,"kurt",103.78],[7,112.12,"dom",116.12],[8,126.56,"paul",91.7],[9,116.54,"jp",141.16]],
  jaxon:[[1,141.56,"ron",112.56],[2,138.48,"dom",106.06],[3,122.6,"rob",138.54],[4,142.72,"paul",112.68],[5,137.2,"kurt",166.86],[6,126.08,"sebas",96.12],[7,83.6,"sam",113.62],[8,152.68,"sop",119.06],[9,163.22,"ron",82.76]],
  jp:[[1,129.96,"sam",100.9],[2,152.62,"kurt",103.64],[3,133.46,"sebas",116.64],[4,156.72,"sop",109.14],[5,146.9,"rob",119],[6,92.9,"dom",108.94],[7,130.52,"paul",94.28],[8,145.86,"ron",140.3],[9,141.16,"rob",116.54]],
  dom:[[1,111.6,"sop",157.42],[2,106.06,"jaxon",138.48],[3,113.78,"paul",108.72],[4,100.08,"kurt",115.7],[5,117.12,"ron",94.26],[6,108.94,"jp",92.9],[7,116.12,"rob",112.12],[8,71.5,"sebas",153.48],[9,116.48,"sam",125.18]],
  sebas:[[1,154.16,"rob",135],[2,90.1,"sam",127.48],[3,116.64,"jp",133.46],[4,123.92,"ron",137.48],[5,130.8,"sop",147.56],[6,96.12,"jaxon",126.08],[7,116.18,"kurt",114.9],[8,153.48,"dom",71.5],[9,129.28,"sop",113.36]],
  ron:[[1,112.56,"jaxon",141.56],[2,136.52,"paul",108.56],[3,99.88,"kurt",95.74],[4,137.48,"sebas",123.92],[5,94.26,"dom",117.12],[6,104.74,"sam",127.06],[7,134.22,"sop",120.04],[8,140.3,"jp",145.86],[9,82.76,"jaxon",163.22]]
};
/* Remaining 2026 schedule: [week, home, away] */
const SCHEDULE_26 = [[10,"sop","kurt"],[10,"jp","sam"],[10,"dom","jaxon"],[10,"rob","sebas"],[10,"paul","ron"],[11,"jp","jaxon"],[11,"sop","rob"],[11,"ron","kurt"],[11,"sam","sebas"],[11,"paul","dom"],[12,"rob","ron"],[12,"sebas","jp"],[12,"jaxon","paul"],[12,"sam","sop"],[12,"kurt","dom"],[13,"sebas","paul"],[13,"rob","sam"],[13,"dom","ron"],[13,"jp","sop"],[13,"kurt","jaxon"],[14,"dom","sop"],[14,"kurt","jp"],[14,"jaxon","rob"],[14,"ron","sebas"],[14,"paul","sam"]];
const CURRENT_WEEK = 10;
const TRADE_DEADLINE = "2026-11-18T12:00:00-05:00"; /* Wed Nov 18 at 12:00 PM ET, before Week 11 */
const TRADE_DEADLINE_LABEL = "Wed, Nov 18 at noon";

/* From the league history doc */
const BOWLS = [
  { n:"I",   year:2021, w:{m:"jp",team:"Team Mozzocio",rec:"8-6",pts:128.22},           l:{m:"sebas",team:"Baslords Fartpoops",rec:"8-6",pts:115.9} },
  { n:"II",  year:2022, w:{m:"jp",team:"King's Gauntlet",rec:"9-5",pts:129.52},         l:{m:"ron",team:"Hurts Doesn't It",rec:"7-7",pts:129.26} },
  { n:"III", year:2023, w:{m:"paul",team:"Your Ass Hurts",rec:"7-7",pts:89.58},         l:{m:"jaxon",team:"Jerryatric MFs",rec:"7-7",pts:80.6} },
  { n:"IV",  year:2024, w:{m:"jp",team:"The Infinity Stone Feelers",rec:"9-5",pts:131.74}, l:{m:"sebas",team:"Amon a Mission",rec:"11-3",pts:121.62} },
  { n:"V",   year:2025, w:{m:"sop",team:"Sop's RaftusBeerNelk",rec:"11-3",pts:139.38},  l:{m:"paul",team:"Your Ass Hurts",rec:"6-8",pts:78.0} }
];
const MVPS = { 2021:"Cooper Kupp", 2022:"Jalen Hurts", 2023:"Christian McCaffrey", 2024:"Jahmyr Gibbs", 2025:"Josh Allen" };
const DIV_CHAMPS = { 2021:["sebas","kurt"], 2022:["jp","jaxon"], 2023:["jp","kurt"], 2024:["sebas","paul"], 2025:["sop","ron"] };
const LAST_PLACE = [
  { year:2021, m:"jaxon", team:"DK's Large Tasty Stromboli", by:"Dom",                    punishment:"TikToks",      done:true },
  { year:2022, m:"sop",   team:"Sop's RaftusBeerNelk",       by:"Team Ball (Sam)",        punishment:"Milk Mile",    done:true },
  { year:2023, m:"rob",   team:"Bijan Mustard",              by:"Sop's RaftusBeerNelk",   punishment:"7/11",         done:true },
  { year:2024, m:"kurt",  team:"Just Cage Me",               by:"Easy Pickens (Dom)",     punishment:"Waffle House", done:true },
  { year:2025, m:"sam",   team:"Team PAPA",                  by:"King of the Hill (Dom)", punishment:"Loko Hands",   done:true }
];
/* This season's last-place punishment, and the league rule */
const PUNISHMENT_NOW = "24 Hour Bar Challenge";
const SHAME_RULE = "Finish last, do the punishment. Skip it and you're kicked out of the league.";
const WHALE = [[1,"paul",97.02],[2,"rob",77.5],[3,"kurt",95.74],[4,"sam",97.82],[5,"ron",84.32],[6,"ron",94.26],[7,"jaxon",83.6],[8,"dom",71.5],[9,"ron",82.76]];
/* [player, odds, result] */
const SIGNS = [
  { wk:4, tnf:["Roman Wilson",460,"hit"],      snf:["Darren Waller",270,"miss"],   mnf:["Devaughn Vele",230,"hit"] },
  { wk:5, tnf:["Ryan Flournoy",270,"miss"],    snf:["Rashod Bateman",475,"miss"],  mnf:["Dalton Kincaid",175,"miss"] },
  { wk:6, tnf:["Seahawks -2.5",-110,"miss","spread"], snf:["Ryan Flournoy",330,"hit"], mnf:["George Kittle",105,"hit"] },
  { wk:7, tnf:["Demario Douglas",320,"miss"],  snf:["Travis Kelce",220,"miss"],    mnf:["CeeDee Lamb",125,"hit"] },
  { wk:8, tnf:["Tetairoa McMillan",175,"miss"],snf:["Saquon Barkley",142,"hit"],   mnf:["Luther Burden III",225,"hit"] },
  { wk:9, tnf:["Jakobi Meyers",325,"miss"],    snf:["Luther Burden III",145,"hit"],mnf:["DJ Moore",290,"miss"] }
];
const TRENDS = [ { wk:9, tnf:["Bucky Irving",150,"hit"], mnf:["Dalton Kincaid",550,"miss"], snf:null } ];

/* ===== Headlines + weekly recaps. Rewritten every week by the Tuesday update. =====
   {sop} style tokens become manager links. Casual voice, no em dashes, facts only. */
const HEADLINES = {
  week: 10,
  lead: { title: "#GILLMODE drops 163.22 on Ron, who benched", em: "36.18 from Jordan Love.",
          text: "{jaxon} beat {ron} by 80.46, the 6th biggest blowout in league history, behind Kenneth Walker III (36.3) and Puka Nacua (35.0). Ron started Caleb Williams (12.76) over Love and still loses by 57.04 even if he flips it. Jaxon is 6-3, alone in 2nd, and has scored 315.90 the last two weeks." },
  side: [
    { t: "{dom} benched 35.36 from C.J. Stroud", s: "Started Trevor Lawrence (13.58) and lost to {sam} by 8.70. That one swap wins it." },
    { t: "{sebas} has won three straight", s: "Bomb Squad went from 1-5 to 4-5 and holds the 6th seed. {rob} is next, also 4-5." },
    { t: "Defending champ {sop} drops three in a row", s: "Was 5-1, now 5-4. {kurt} is up next at 5-4 too." },
    { t: "{paul} is 0-9", s: "Five weeks left to find a win. {ron} is up next, fresh off an 82.76 and the whale parlay." }
  ]
};
/* RECAPS[year][week] = [{ a, b, t: headline, x: write-up }]. a/b match the game's managers in any order. */
const RECAPS = { 2026: {
  9: [
    { a: "jaxon", b: "ron", t: "#GILLMODE 163.22, Fantsgiving 82.76",
      x: "Kenneth Walker III (36.3), Puka Nacua (35.0) and Joe Burrow (29.54) turned this into the 6th biggest blowout in league history. Ron started Caleb Williams (12.76) while Jordan Love put up 36.18 on his bench, and Jonah Coleman (18.8) sat for the second straight week while Josh Jacobs gave him 0.5. Fix both and Ron still loses by 38.74. Jaxon goes to 6-3, Ron falls to 4-5 and owns the whale parlay." },
    { a: "sam", b: "dom", t: "Dom benches Stroud's 35.36, loses by 8.70",
      x: "Brock Purdy (25.28) and Javonte Williams (22.4) carried Sam to 125.18. Dom is going to stare at this one. C.J. Stroud dropped 35.36 on his bench while Trevor Lawrence started and got 13.58. That swap alone wins it by 13.08. Matthew Golden (32.4) did his part. Sam is 5-4 and holds the 5th seed, Dom slides to 4-5." },
    { a: "sebas", b: "sop", t: "Chase does it again, Sop's skid hits three",
      x: "Ja'Marr Chase put up 31.5, his second straight 30-point week, and Sebas won by 15.92 with J.J. McCarthy giving him 7.28 at QB. Sop got 22.7 from Christian McCaffrey but a zero from Adonai Mitchell at WR, and no bench move gets close to 15.92. Bomb Squad has won three straight and climbs to 4-5 and the 6th seed. The defending champ was 5-1 and is now 5-4." },
    { a: "jp", b: "rob", t: "CeeDee and Watson push 3Time to 8-1",
      x: "CeeDee Lamb (33.5) and Christian Watson (30.1) combined for 63.6, so a 12.86 from Josh Allen didn't matter. Rob got 20.7 from Luther Burden III and 20.34 from Bryce Young, but D'Andre Swift gave him 3.1. Seth McGowan (11.2) on the bench wouldn't have saved it. JP has won three straight and leads the league in points. Rob drops to 4-5." },
    { a: "kurt", b: "paul", t: "Bucky and Bijan keep Paul winless",
      x: "Bucky Irving (28.5) and Bijan Robinson (26.7) gave Kurt 55.2 out of the backfield and a 34.58 win. Kurt sat Patrick Mahomes (16.48) again and it didn't matter. Paul got 22.68 from Shedeur Sanders and 22.3 from Brock Bowers, but Ladd McConkey started and scored a zero with Caleb Douglas (13.0) on the bench. Kurt is 5-4 with two straight wins. Paul is 0-9." }
  ],
  8: [
    { a: "sebas", b: "dom", t: "Bomb Squad flattens Dom by 81.98",
      x: "Ja'Marr Chase (31.1) and Bhayshul Tuten (29.9) did most of the damage, and Sebas still won by 81.98 with Aaron Rodgers putting up 4.9 at QB. Dom's whole lineup managed 71.50. Zay Flowers, the guy Dom traded for, gave him a zero at FLEX while Michael Wilson dropped 26.8 on the bench. 5th biggest blowout in league history, and the whale parlay is on Dom." },
    { a: "kurt", b: "sam", t: "Bada Bing survives by 2.58",
      x: "Bucky Irving led Kurt with 21.0, and he won this one with Patrick Mahomes (25.4) sitting on his bench. Sam is going to hate this one. Courtland Sutton scored 9.3 on his bench while KC Concepcion started and put up 6.7. That swap alone flips the result. Kurt gets back to .500 at 4-4." },
    { a: "jaxon", b: "sop", t: "#GILLMODE hangs 152.68 on the defending champ",
      x: "Joe Burrow went for 39.5 and Puka Nacua added 25.0. That's too much for anybody. Sop's trade haul showed up with Tony Pollard (28.7) and Harold Fannin Jr. (23.4), but a 1.0 from the kicker didn't help. Second straight loss for Sop, who falls to 5-3. Jaxon moves to 5-3 with the second-most points in the league." },
    { a: "jp", b: "ron", t: "Tee Higgins carries 3Time to 7-1",
      x: "Tee Higgins put up 37.5 from the FLEX spot and JP squeaked by 5.56. Ron will be thinking about this one all week. Jonah Coleman scored 20.4 on his bench while Quinshon Judkins started and got 6.9. Start Coleman and Ron wins. Instead JP keeps rolling at 7-1." },
    { a: "rob", b: "paul", t: "Do it for Roj, and Paul stays winless",
      x: "D'Andre Swift (27.9), Jahmyr Gibbs (24.8) and Braelon Allen (23.3) gave Rob a 126.56 bounce back. Paul started Lamar Jackson and got a zero, and Tyler Allgeier scored 36.1 on his bench. Brock Bowers (28.2) and the Jaguars D/ST (21.0) tried. Paul is 0-8 and the 24 Hour Bar Challenge is getting closer." }
  ]
} };

/* Power ranking blurbs, 2026 */
const BLURBS = {
  jp: "8-1, three straight wins, most points in the league. 3Time is not hiding what it wants.",
  jaxon: "#GILLMODE just hung 163.22, the second-best score of the season. 315.90 in two weeks and alone in 2nd at 6-3.",
  sop: "Defending champ started 5-1. Three straight losses later he's 5-4 and clinging to the 3 seed on points.",
  kurt: "Bada Bing has won two straight and sits 5-4. Keeps benching Mahomes and winning anyway.",
  sam: "Fewest points allowed in the league, again. 5-4 and in the 5 seed. Schedule luck is a skill, right?",
  sebas: "Started 1-5, now three straight wins and the 6 seed. Ja'Marr Chase has 62.6 the last two weeks.",
  rob: "Do it for Roj is 4-5 and out on points right now. Swift gave him 3.1 in a 24.62 loss to JP.",
  ron: "Fantsgiving benched 36.18 from Jordan Love and got blown out by 80.46. 4-5 and owns the whale parlay.",
  dom: "Likely to lose, and the lineup calls aren't helping. Benched 35.36 from Stroud in an 8.70 loss.",
  paul: "WHEN THEY GO? 0-9. Most points allowed in the league by 70. The 24 Hour Bar Challenge is warming up."
};

/* Playoffs: 6 teams. Week 15 quarterfinals (3v6, 4v5), seeds 1 and 2 on bye.
   Week 16 semifinals (1 vs 4/5 winner, 2 vs 3/6 winner). Week 17 is the championship.
   Games: [week, managerA, ptsA, managerB, ptsB] from ESPN's winners bracket. */
const PLAYOFF_SEEDS = {
  2021: ["kurt","sebas","paul","sop","jp","rob"],
  2022: ["jaxon","jp","dom","sebas","ron","kurt"],
  2023: ["jp","kurt","sebas","ron","paul","jaxon"],
  2024: ["sebas","paul","jp","sop","sam","ron"],
  2025: ["sop","ron","rob","sebas","jaxon","paul"]
};
const BRACKETS = {
  2021: [[15,"sop",109.78,"jp",144.32],[15,"paul",89.2,"rob",84.34],[16,"kurt",98.18,"jp",110.88],[16,"sebas",168.06,"paul",94.22],[17,"sebas",115.9,"jp",128.22]],
  2022: [[15,"sebas",115.58,"ron",132.4],[15,"dom",91.76,"kurt",86.42],[16,"jaxon",98.78,"ron",101.9],[16,"jp",154.76,"dom",90.94],[17,"jp",129.52,"ron",129.26]],
  2023: [[15,"ron",92.44,"paul",122.82],[15,"sebas",161.26,"jaxon",163.3],[16,"jp",134.1,"paul",159.34],[16,"kurt",96.86,"jaxon",153],[17,"paul",89.58,"jaxon",80.6]],
  2024: [[15,"sop",144.62,"sam",192.38],[15,"jp",142.9,"ron",106.86],[16,"sebas",175.28,"sam",136.46],[16,"paul",100.84,"jp",124.26],[17,"sebas",121.62,"jp",131.74]],
  2025: [[15,"sebas",113.44,"jaxon",112.3],[15,"rob",104.76,"paul",141.2],[16,"sop",146.1,"sebas",99.52],[16,"ron",110.68,"paul",121.3],[17,"sop",139.38,"paul",78]]
};
const SEASON_WEEKS = { regular: 14, quarterfinal: 15, semifinal: 16, championship: 17 };
/* Original team badge colors (not ESPN logos) */
const BADGE = { sop:"#e4572e", kurt:"#2e86de", sam:"#10a37f", paul:"#8e5bd6", rob:"#f0a202", jaxon:"#d6336c", jp:"#c9a227", dom:"#3aa0a8", sebas:"#5b6bff", ron:"#6c9a3c" };

/* Consolation bracket (seeds 7-10). Week 15: 7 vs 8 and 9 vs 10. Week 16: the two winners play for 7th,
   the two losers play the last-place game. Loser of that game finishes last and owes the punishment.
   [week, game, managerA, ptsA, managerB, ptsB] */
const CONSOLATION = {
  2021: [[15,"r1","dom",114.26,"sam",127.84],[15,"r1","ron",127.1,"jaxon",85.54],[16,"7th","sam",104.86,"ron",85.5],[16,"last","dom",144.38,"jaxon",96.14]],
  2022: [[15,"r1","rob",123.88,"sam",102.72],[15,"r1","sop",107.48,"paul",123.3],[16,"7th","rob",88.6,"paul",148.7],[16,"last","sam",142.8,"sop",99.36]],
  2023: [[15,"r1","dom",114.36,"sop",97.82],[15,"r1","rob",77.64,"sam",122.04],[16,"7th","dom",95.72,"sam",107.02],[16,"last","sop",135.72,"rob",134.8]],
  2024: [[15,"r1","kurt",96.14,"rob",106.34],[15,"r1","jaxon",112.56,"dom",100.86],[16,"7th","rob",152.72,"jaxon",146.98],[16,"last","kurt",105.98,"dom",138.44]],
  2025: [[15,"r1","jp",158.94,"sam",143.96],[15,"r1","kurt",151.6,"dom",96.8],[16,"7th","jp",113.58,"kurt",86.64],[16,"last","sam",101.9,"dom",127.6]]
};
