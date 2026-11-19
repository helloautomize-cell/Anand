/**
 * Crawl text check: strips tags from each route's HTML and flags forbidden
 * claims and placeholder text that must never ship.
 * Usage: BASE=http://localhost:3000 node scripts/crawl-text-check.mjs
 */
const BASE = process.env.BASE ?? "http://localhost:3000";
const cheerio = await import("cheerio");

const routes = JSON.parse(
  (await import("node:fs")).readFileSync("data/pages.json", "utf-8")
).map((p) => p.url);

const rules = [
  { name: "em dash", re: /—/ },
  { name: "en dash", re: /–/ },
  { name: 'claim "best"', re: /\bbest\b/i },
  { name: 'claim "100%"', re: /100%/ },
  { name: 'claim "No. 1"', re: /\bNo\.?\s*1\b/i },
  { name: 'claim "guarantee"', re: /guarantee/i },
  { name: "testimonial", re: /testimonial/i },
  { name: "success rate", re: /success rate/i },
  { name: "lorem", re: /lorem ipsum/i },
];

// Approved idioms that are not claims: "do our best", "no guarantee",
// "does not publish patient testimonials".
const BENIGN = [
  /\b(our|your|its|their|his|her) best\b/gi,
  /\b(at|looks|feel) (its|your|their|his|her) best\b/gi,
  /\bnot (always )?(the )?best\b/gi,
  /\bisn'?t (the )?best\b/gi,
  /\bsuits? you best\b/gi,
  /(?<!\w)no\b[^.]{0,32}guaranteed?\b/gi,
  /(?<!\w)not\b[^.]{0,16}guaranteed?\b/gi,
  /(?<!\w)without\b[^.]{0,10}guaranteed?\b/gi,
  /(?<!\w)cannot\b[^.]{0,16}guaranteed?\b/gi,
  /(?<!\w)never\b[^.]{0,16}guaranteed?\b/gi,
  /(?<!\w)not\b[^.]{0,24}testimonials?\b/gi,
  /(?<!\w)without\b[^.]{0,16}testimonials?\b/gi,
];

function clean(text) {
  let t = text;
  for (const b of BENIGN) t = t.replace(b, "");
  return t;
}

let fails = 0;
for (const route of routes) {
  const html = await (await fetch(BASE + route)).text();
  const $ = cheerio.load(html);
  $("script,style,noscript").remove();
  // strip tags with a space so words don't concatenate across elements
  const raw = ($("body").html() ?? "").replace(/<[^>]+>/g, " ");
  const text = clean(cheerio.load(`<div>${raw}</div>`).text());
  const hits = rules.filter((r) => r.re.test(text)).map((r) => r.name);
  if (hits.length) {
    fails++;
    console.log(`${route.padEnd(46)} FAIL [${hits.join(", ")}]`);
  }
}
console.log(fails ? `\n${fails} route(s) flagged` : "crawl text clean");
process.exit(fails ? 1 : 0);
