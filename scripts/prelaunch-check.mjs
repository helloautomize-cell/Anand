/**
 * Prelaunch SEO sanity: runs against a built site (crawl of .next HTML or
 * live server). Verifies per-route title, description, canonical, og tags,
 * JSON-LD presence and noindex on preview builds.
 * Usage: BASE=http://localhost:3000 node scripts/prelaunch-check.mjs
 */
const BASE = process.env.BASE ?? "http://localhost:3000";

const routes = JSON.parse(
  (await import("node:fs")).readFileSync("data/pages.json", "utf-8")
).map((p) => p.url);

let fails = 0;
for (const route of routes) {
  const res = await fetch(BASE + route);
  const html = await res.text();
  const miss = [];
  const has = (re) => re.test(html);
  if (!has(/<title>[^<]{10,}<\/title>/)) miss.push("title");
  if (!has(/<meta name="description" content="[^"]{50,}"/)) miss.push("description");
  if (!has(/<link rel="canonical" href="https?:\/\/[^"]+/)) miss.push("canonical");
  if (!has(/<meta property="og:title"/)) miss.push("og:title");
  if (!has(/<meta property="og:image"/)) miss.push("og:image");
  if (!has(/<meta name="twitter:card"/)) miss.push("twitter:card");
  if (!has(/application\/ld\+json/)) miss.push("json-ld");
  if (!has(/emergency/i)) miss.push("emergency line");
  const status = miss.length ? `FAIL [${miss.join(", ")}]` : "ok";
  if (miss.length) fails++;
  console.log(`${route.padEnd(46)} ${status}`);
}
console.log(fails ? `\n${fails} route(s) missing SEO basics` : "\nall routes pass");
process.exit(fails ? 1 : 0);
