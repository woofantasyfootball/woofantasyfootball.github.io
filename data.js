/* ===== Woo Fantasy League data. ESPN league 848216391, pulled Nov 24 2026, plus the league history doc. ===== */
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
  2026: [["sop","Ohio State University",6,5,1381,1356.58,5,0],["kurt","Bada Bing",7,4,1385.54,1296.8,3,0],["sam","Team PAPA",7,4,1318.66,1192.48,4,0],["paul","WHEN THEY GO?",1,10,1106.14,1405.72,10,0],["rob","Do it for Roj",4,7,1308.58,1348.34,8,0],["jaxon","#GILLMODE",7,4,1450.7,1291.5,2,0],["sebas","Bomb Squad",5,6,1352.42,1366.22,7,0],["ron","Fantsgiving",4,7,1259.1,1375.26,9,0],["dom","Likely to lose",6,5,1206,1317.4,6,0],["jp","3Time",8,3,1444.6,1262.44,1,0]]
};

/* Head to head, rows/cols in ORDER. "regW.regL.playoffW.playoffL" (playoffs = championship bracket only) */
const H2H = {
  sop:["0.0.0.0","2.4.0.0","9.2.0.1","7.2.1.0","6.6.0.0","2.4.0.0","4.7.0.1","4.4.0.0","5.7.1.0","3.3.0.0"],
  kurt:["4.2.0.0","0.0.0.0","4.2.0.0","7.5.0.0","3.3.0.0","6.5.0.1","3.4.0.1","8.3.0.1","5.5.0.0","6.6.0.0"],
  sam:["2.9.1.0","2.4.0.0","0.0.0.0","4.2.0.0","3.8.0.0","2.5.0.0","5.7.0.0","5.4.0.0","6.6.0.1","4.3.0.0"],
  paul:["2.7.0.1","5.7.0.0","2.4.0.0","0.0.0.0","3.4.2.0","5.6.1.0","2.4.1.1","7.5.0.0","2.4.0.1","6.6.2.0"],
  rob:["6.6.0.0","3.3.0.0","8.3.0.0","4.3.0.2","0.0.0.0","5.4.0.0","3.9.0.0","1.5.0.0","2.10.0.0","2.4.0.0"],
  jaxon:["4.2.0.0","5.6.1.0","5.2.0.0","6.5.0.1","4.5.0.0","0.0.0.0","1.6.0.0","6.6.0.0","3.3.1.1","8.4.0.1"],
  jp:["7.4.1.0","4.3.1.0","7.5.0.0","4.2.1.1","9.3.0.0","6.1.0.0","0.0.0.0","5.1.1.0","6.5.2.0","3.6.2.0"],
  dom:["4.4.0.0","3.8.1.0","4.5.0.0","5.7.0.0","5.1.0.0","6.6.0.0","1.5.0.1","0.0.0.0","1.5.0.0","5.6.0.0"],
  sebas:["7.5.0.1","5.5.0.0","6.6.1.0","4.2.1.0","10.2.0.0","3.3.1.1","5.6.0.2","5.1.0.0","0.0.0.0","4.2.0.1"],
  ron:["3.3.0.0","6.6.0.0","3.4.0.0","6.6.0.2","4.2.0.0","4.8.1.0","6.3.0.2","6.5.0.0","2.4.1.0","0.0.0.0"]
};
/* Championship bracket record [W, L] 2021-2025 */
const PLAYOFFS = { sop:[2,2], kurt:[0,3], sam:[1,1], paul:[6,3], rob:[0,2], jaxon:[2,3], jp:[8,1], dom:[1,1], sebas:[3,5], ron:[2,4] };
/* All-play record (vs every team, every week), regular season 2021 through 2026 wk 11 */
const ALLPLAY = { sop:[361,368], kurt:[381,348], sam:[314,415], paul:[360,369], rob:[368,361], jaxon:[361,368], jp:[386,343], dom:[333,396], sebas:[436,293], ron:[345,384] };
/* Weekly highest and lowest score counts, regular season */
const WEEK_HIGH = { sop:7, kurt:6, sam:6, paul:10, rob:8, jaxon:7, jp:11, dom:5, sebas:14, ron:7 };
const WEEK_LOW  = { sop:9, kurt:4, sam:10, paul:6, rob:8, jaxon:9, jp:6, dom:8, sebas:5, ron:16 };

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
  sop:[[1,157.42,"dom",111.6],[2,103.02,"rob",77.5],[3,146,"sam",130.78],[4,109.14,"jp",156.72],[5,147.56,"sebas",130.8],[6,125.5,"paul",77.22],[7,120.04,"ron",134.22],[8,119.06,"jaxon",152.68],[9,113.36,"sebas",129.28],[10,119.82,"kurt",147.76],[11,120.08,"rob",108.02]],
  kurt:[[1,155.86,"paul",97.02],[2,103.64,"jp",152.62],[3,95.74,"ron",99.88],[4,115.7,"dom",100.08],[5,166.86,"jaxon",137.2],[6,103.78,"rob",137.54],[7,114.9,"sebas",116.18],[8,100.68,"sam",98.1],[9,139.26,"paul",104.68],[10,147.76,"sop",119.82],[11,141.36,"ron",133.68]],
  sam:[[1,100.9,"jp",129.96],[2,127.48,"sebas",90.1],[3,130.78,"sop",146],[4,97.82,"rob",102.96],[5,142.46,"paul",121.48],[6,127.06,"ron",104.74],[7,113.62,"jaxon",83.6],[8,98.1,"kurt",100.68],[9,125.18,"dom",116.48],[10,130.66,"jp",105.74],[11,124.6,"sebas",90.74]],
  paul:[[1,97.02,"kurt",155.86],[2,108.56,"ron",136.52],[3,108.72,"dom",113.78],[4,112.68,"jaxon",142.72],[5,121.48,"sam",142.46],[6,77.22,"sop",125.5],[7,94.28,"jp",130.52],[8,91.7,"rob",126.56],[9,104.68,"kurt",139.26],[10,90.82,"ron",82.7],[11,98.98,"dom",109.84]],
  rob:[[1,135,"sebas",154.16],[2,77.5,"sop",103.02],[3,138.54,"jaxon",122.6],[4,102.96,"sam",97.82],[5,119,"jp",146.9],[6,137.54,"kurt",103.78],[7,112.12,"dom",116.12],[8,126.56,"paul",91.7],[9,116.54,"jp",141.16],[10,134.8,"sebas",151],[11,108.02,"sop",120.08]],
  jaxon:[[1,141.56,"ron",112.56],[2,138.48,"dom",106.06],[3,122.6,"rob",138.54],[4,142.72,"paul",112.68],[5,137.2,"kurt",166.86],[6,126.08,"sebas",96.12],[7,83.6,"sam",113.62],[8,152.68,"sop",119.06],[9,163.22,"ron",82.76],[10,120.16,"dom",134.48],[11,122.4,"jp",108.76]],
  jp:[[1,129.96,"sam",100.9],[2,152.62,"kurt",103.64],[3,133.46,"sebas",116.64],[4,156.72,"sop",109.14],[5,146.9,"rob",119],[6,92.9,"dom",108.94],[7,130.52,"paul",94.28],[8,145.86,"ron",140.3],[9,141.16,"rob",116.54],[10,105.74,"sam",130.66],[11,108.76,"jaxon",122.4]],
  dom:[[1,111.6,"sop",157.42],[2,106.06,"jaxon",138.48],[3,113.78,"paul",108.72],[4,100.08,"kurt",115.7],[5,117.12,"ron",94.26],[6,108.94,"jp",92.9],[7,116.12,"rob",112.12],[8,71.5,"sebas",153.48],[9,116.48,"sam",125.18],[10,134.48,"jaxon",120.16],[11,109.84,"paul",98.98]],
  sebas:[[1,154.16,"rob",135],[2,90.1,"sam",127.48],[3,116.64,"jp",133.46],[4,123.92,"ron",137.48],[5,130.8,"sop",147.56],[6,96.12,"jaxon",126.08],[7,116.18,"kurt",114.9],[8,153.48,"dom",71.5],[9,129.28,"sop",113.36],[10,151,"rob",134.8],[11,90.74,"sam",124.6]],
  ron:[[1,112.56,"jaxon",141.56],[2,136.52,"paul",108.56],[3,99.88,"kurt",95.74],[4,137.48,"sebas",123.92],[5,94.26,"dom",117.12],[6,104.74,"sam",127.06],[7,134.22,"sop",120.04],[8,140.3,"jp",145.86],[9,82.76,"jaxon",163.22],[10,82.7,"paul",90.82],[11,133.68,"kurt",141.36]]
};
/* Remaining 2026 schedule: [week, home, away] */
const SCHEDULE_26 = [[12,"rob","ron"],[12,"sebas","jp"],[12,"jaxon","paul"],[12,"sam","sop"],[12,"kurt","dom"],[13,"sebas","paul"],[13,"rob","sam"],[13,"dom","ron"],[13,"jp","sop"],[13,"kurt","jaxon"],[14,"dom","sop"],[14,"kurt","jp"],[14,"jaxon","rob"],[14,"ron","sebas"],[14,"paul","sam"]];
const CURRENT_WEEK = 12;
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
const WHALE = [[1,"paul",97.02],[2,"rob",77.5],[3,"kurt",95.74],[4,"sam",97.82],[5,"ron",84.32],[6,"ron",94.26],[7,"jaxon",83.6],[8,"dom",71.5],[9,"ron",82.76],[10,"ron",82.7],[11,"sebas",90.74]];
/* [player, odds, result] */
const SIGNS = [
  { wk:4, tnf:["Roman Wilson",460,"hit"],      snf:["Darren Waller",270,"miss"],   mnf:["Devaughn Vele",230,"hit"] },
  { wk:5, tnf:["Ryan Flournoy",270,"miss"],    snf:["Rashod Bateman",475,"miss"],  mnf:["Dalton Kincaid",175,"miss"] },
  { wk:6, tnf:["Seahawks -2.5",-110,"miss","spread"], snf:["Ryan Flournoy",330,"hit"], mnf:["George Kittle",105,"hit"] },
  { wk:7, tnf:["Demario Douglas",320,"miss"],  snf:["Travis Kelce",220,"miss"],    mnf:["CeeDee Lamb",125,"hit"] },
  { wk:8, tnf:["Tetairoa McMillan",175,"miss"],snf:["Saquon Barkley",142,"hit"],   mnf:["Luther Burden III",225,"hit"] },
  { wk:9, tnf:["Jakobi Meyers",325,"miss"],    snf:["Luther Burden III",145,"hit"],mnf:["DJ Moore",290,"miss"] },
  { wk:10, tnf:["Isaiah Likely",195,"hit"],   snf:["Germie Bernard",295,"miss"],                          mnf:["Oronde Gadsden II",500,"miss"] }
];
const TRENDS = [ { wk:9, tnf:["Bucky Irving",150,"hit"], mnf:["Dalton Kincaid",550,"miss"], snf:null },
  { wk:10, tnf:["Malik Nabers",660,"miss"], mnf:["Mark Andrews",460,"miss"], snf:null } ];

/* ===== Headlines + weekly recaps. Rewritten every week by the Tuesday update. =====
   {sop} style tokens become manager links. Casual voice, no em dashes, facts only. */
const HEADLINES = {
  week: 12,
  lead: { title: "{jp} drops two straight,", em: "and three teams are one game back.",
          text: "JP is still the 1 seed at 8-3, but Jaxon, Kurt and Sam are all 7-4 now. Jaxon also passed him for the most points in the league, 1450.70 to 1444.60. Next up for JP is Sebas, whose lineup averages 128.8, the best of the week, to JP's 128.3. Three weeks left and only the top 2 get the bye." },
  side: [
    { t: "{sam} vs {sop} with seeds 4 and 5 on the line", s: "Sam is 7-4 and has won three straight. Sop snapped his four-game skid and climbed to 6-5. Sop's lineup averages 125.3 to Sam's 120.8, and Sam has benched 70.32 from Dak Prescott the last two weeks." },
    { t: "{kurt} goes for five straight vs {dom}", s: "Kurt has won four in a row and put up the top score of Week 11. Dom holds the last playoff spot at 6-5, one game up on Sebas. Kurt's lineup averages 124.7, Dom's is at 116.5." },
    { t: "{rob} vs {ron}, both 4-7", s: "Both are two games out of 6th with three to play, so the loser is hanging by a thread. Rob has lost three straight, Ron has lost four. Rob's lineup averages 127.2, Ron's is the lowest of the week at 100.6." },
    { t: "{paul} gets {jaxon} without Puka", s: "Paul is 1-10. Jaxon is 7-4 with Puka Nacua on IR and Kenneth Walker III questionable, and the lineups are close (120.4 to 118.1)." }
  ]
};
/* RECAPS[year][week] = [{ a, b, t: headline, x: write-up }]. a/b match the game's managers in any order. */
const RECAPS = { 2026: {
  11: [
    { a: "jaxon", b: "jp", t: "#GILLMODE wins without Puka, 3Time drops two straight",
      x: "No Puka Nacua and a zero from Kenneth Walker III on the bench, and Jaxon still won by 13.64 with balance: Joe Burrow (19.9), Derrick Henry (19.1), George Kittle (18.4) and Parker Washington (18.3). CeeDee Lamb put up 30.2 for JP, but Jaylen Warren gave him 4.9 and Josh Allen had 12.16 while Jared Goff scored 20.36 on the bench. Start Goff and JP still loses by 5.44. Jaxon goes to 7-4 and takes over the league lead in points. JP has lost two straight but holds the 1 seed at 8-3." },
    { a: "sop", b: "rob", t: "Rob flips the Coker/Tyson call and it flips on him",
      x: "Ashton Jeanty went for 27.9 and Chris Olave added 19.2, and Sop snapped his four-game losing streak with a 1.0 from his kicker. Rob had the pieces. Last week he started Jalen Coker over Jordyn Tyson and lost. This week he started Tyson (2.0) over Coker (8.7), and T.J. Hockenson scored 11.5 on the bench while Isaiah Likely gave him 4.5. Make both swaps and Rob wins by 1.64. Sop is 6-5 and up to the 5 seed, Rob has lost three straight and sits 8th at 4-7." },
    { a: "kurt", b: "ron", t: "Kurt finally starts Mahomes and wins anyway",
      x: "After three straight wins with Patrick Mahomes on the bench, Kurt started him and got 24.96. DJ Moore (23.1), Bucky Irving (19.0) and Malik Nabers (18.5) helped him to 141.36, the top score of the week. Ron put up the second-best score of the week and lost. Jonah Coleman went for 34.9 and Sunday pickup Fernando Mendoza gave him 22.88, but Dalton Kincaid scored a zero at TE and Courtland Sutton, also added Sunday, scored a zero at FLEX. Noah Fant's 3.9 off the bench still leaves him 3.78 short. Kurt has won four straight at 7-4, Ron has lost four straight at 4-7." },
    { a: "sam", b: "sebas", t: "Bomb Squad's streak ends at four, whale parlay goes to Sebas",
      x: "Travis Kelce (25.4), Brock Purdy (22.2) and Jameson Williams (19.3) did it for Sam, who left Dak Prescott's 35.9 on the bench for the second straight week and still won by 33.86. Ja'Marr Chase's run of 30-point weeks ended at three with an 8.1, and Sebas scored 90.74, the low of the week. Mike Evans put up 22.9 on his bench while Cam Skattebo got 5.8 at FLEX, but that only gets him within 16.76. Sam is 7-4 with three straight wins and still the fewest points allowed in the league. Sebas drops to 5-6 and out of the playoff spots in 7th." },
    { a: "dom", b: "paul", t: "Paul benches Ladd's 20.7 and stays at one win",
      x: "Emmett Johnson (24.3) and George Pickens (23.8, started this time) carried Dom to 109.84. Dom also benched C.J. Stroud's 20.46 for Trevor Lawrence's 12.74 again, and it didn't matter. Paul got 26.0 from Chuba Hubbard and 19.0 from Breece Hall, but Brock Bowers scored a zero at TE and Tre Tucker gave him 7.0 at WR while Ladd McConkey dropped 20.7 on the bench. That swap alone wins it by 2.84. Dom has won two straight and holds the 6 seed at 6-5. Paul is 1-10." }
  ],
  10: [
    { a: "kurt", b: "sop", t: "Sop's perfect lineup still loses by 0.48",
      x: "Amon-Ra St. Brown (25.8), Blake Corum (20.9) and Jayden Daniels (20.76) carried Kurt to 147.76, and Cam Little added 19 at kicker. Patrick Mahomes scored 35.42 on his bench, the third straight week Kurt has sat him and won. Christian McCaffrey dropped 46.3, but Drake Maye gave Sop 3.02 at QB. Start Tyler Shough, Tony Pollard (23.9) and Alvin Kamara (16.4) and Sop gets to 147.28, still 0.48 short. Kurt has won three straight at 6-4, Sop has lost four straight at 5-5." },
    { a: "sam", b: "jp", t: "JSN's Team PAPA debut hands 3Time its second loss",
      x: "Jaxon Smith-Njigba put up 31.1 in his first game for Sam, and Brock Purdy (31.66), James Cook III (21.7) and the Vikings D/ST (21) did the rest. Sam even left Dak Prescott's 34.42 on the bench. JP got 22.34 from Josh Allen and 20.2 from CeeDee Lamb, but Sam LaPorta (2.6), Kyren Williams (5.2) and Christian Watson (6.7) went quiet, and nothing on the bench closes a 24.92 gap. JP's three-game win streak ends and he's 8-2. Sam moves to 6-4 and the 4 seed." },
    { a: "dom", b: "jaxon", t: "Dom benches 43.5 from Pickens and wins anyway",
      x: "Friday pickup Emmett Johnson went for 35.1 at FLEX and Trevor Lawrence added 26.78, so Dom won by 14.32 with George Pickens' 43.5 sitting on his bench. That's the third-best score on any Woo roster this week. Joe Burrow (33.16) and Parker Washington (28.2) kept Jaxon close, but Tucker Kraft (2.9) and Dominic Zvada (2) didn't help. Dom gets back to 5-5. Jaxon drops to 6-4 but keeps the 2 seed on points." },
    { a: "sebas", b: "rob", t: "Rob sits Tyson's 19.0, Bomb Squad wins four straight",
      x: "Ja'Marr Chase put up 34.1, his third straight 30-point week, and Chase Brown (28.3), Nico Collins (24.4) and Bhayshul Tuten (20.3) pushed Sebas to 151.00, the top score of the week. Jahmyr Gibbs (44.2) and Isaiah Likely (27.7) kept Rob in it. Then the bad news: Jalen Coker started at WR and scored 0.3 while Jordyn Tyson put up 19.0 on the bench. That swap alone wins it by 2.50. Sebas is 5-5 with four straight wins and the 5 seed, Rob falls to 4-6." },
    { a: "paul", b: "ron", t: "WHEN THEY GO? Week 10.",
      x: "Chuba Hubbard went for 34.2 and Paul got his first win of the season, 90.82 to 82.70. It's the lowest winning score of 2026, and he did it with Deebo Samuel's 25.9 on his bench while Tre Tucker started and got 1.9. Ron's first game after the trades was rough. Justin Jefferson (16.4) and Javonte Williams (7.7) gave him 24.1, DeMario Douglas gave him 1.4 at FLEX, and Jaxon Smith-Njigba scored 31.1 for Sam. Ron has the week's low score for the second straight week and falls to 4-6, while Paul is 1-9." }
  ],
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
  jp: "8-3 and still the 1 seed, but two straight losses cut the lead to one game, and Jaxon took the points crown.",
  jaxon: "7-4 and now first in points at 1450.70. Beat JP without Puka Nacua and with Kenneth Walker III scoring a zero on the bench.",
  kurt: "Four straight wins and the top score of Week 11. Started Mahomes for once and got 24.96. 7-4, 3 seed.",
  sam: "Three straight wins, 7-4, fewest points allowed in the league. Has benched 70.32 from Dak the last two weeks and won both.",
  sop: "Losing streak over at four. Jeanty's 27.9 got the defending champ back to 6-5 and up to the 5 seed.",
  dom: "Two straight wins and the last playoff spot at 6-5. Still starting Lawrence over Stroud, still getting away with it.",
  sebas: "The four-game streak is over. Scored 90.74, the low of the week, and slid to 7th at 5-6. The whale parlay is his.",
  rob: "Started Tyson over Coker this time and got burned the other way. Two lineup swaps would have won it by 1.64. 4-7 and 8th.",
  ron: "Scored 133.68, the second-best of the week, and still lost. Four straight losses, 4-7. Two zeros in the lineup will do that.",
  paul: "Benched Ladd McConkey's 20.7 and lost by 10.86. 1-10 and three games back of 9th with three to play."
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
