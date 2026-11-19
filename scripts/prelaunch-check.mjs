/**
 * Prelaunch SEO check against a running production build.
 * Usage: BASE=http://localhost:3000 node scripts/prelaunch-check.mjs
 *
 * Covers: crawl files, per-route SEO basics, sitemap integrity, redirects,
 * internal links + anchors, images + og:image, 404 behaviour, fact
 * consistency with data/site.json, reviewer line, copy hygiene, llms files.
 * [CONFIRM] markers warn (allowed pre-launch); everything else fails.
 */
import fs from "node:fs";

const BASE = process.env.BASE ?? "http://localhost:3000";
const site = JSON.parse(fs.readFileSync("data/site.json", "utf-8"));
const routes = JSON.parse(fs.readFileSync("data/pages.json", "utf-8")).map(
  (p) => p.url
);
const MEDICAL = new Set([
  "/",
  "/about/",
  "/symptoms/",
  "/your-first-visit/",
  ...routes.filter((u) => u.startsWith("/treatments/")),
]);

const REDIRECTS = [
  ["/services", "/treatments/"],
  ["/heath-info", "/symptoms/"],
  ["/privacy", "/privacy-policy/"],
  ["/legal-notice", "/medical-disclaimer/"],
  ["/digital-v-cards", "/contact/"],
  ["/blog-single-page-layout/advancements-in-cardiac-surgery", "/treatments/minimally-invasive-surgery/"],
  ["/blog-single-page-layout/complex-cardiac-surgeries-to-complete-recovery", "/treatments/bypass-surgery/"],
  ["/blog-single-page-layout/heart-health-counseling", "/treatments/check-ups-second-opinion/"],
  ["/blog-single-page-layout/how-lifestyle-choices-impact-your-heart-health", "/symptoms/"],
];

const bad = (r, m) => console.log(`  FAIL ${r} ${m}`);
let fails = 0,
  warns = 0;
const check = (ok, r, m) => {
  if (!ok) {
    fails++;
    bad(r, m);
  }
};
const warn = (ok, r, m) => {
  if (!ok) {
    warns++;
    console.log(`  warn ${r} ${m}`);
  }
};

// --- crawl files ---
console.log("— crawl files");
for (const [p, re] of [
  ["/robots.txt", /^text\/plain/],
  ["/llms.txt", /^text\/plain/],
  ["/llms-full.txt", /^text\/plain/],
]) {
  const r = await fetch(BASE + p);
  check(r.status === 200, p, `status ${r.status}`);
  check(re.test(r.headers.get("content-type") ?? ""), p, `content-type ${r.headers.get("content-type")}`);
}
const sm = await (await fetch(BASE + "/sitemap.xml")).text();
const smUrls = [...sm.matchAll(/<loc>([^<]+)<\/loc>/g)]
  .map((m) => m[1])
  .filter((u) => !u.includes("/img/"));
check(smUrls.length >= routes.length, "/sitemap.xml", `only ${smUrls.length} URLs`);

// --- per-route checks ---
console.log("— routes");
const linkSet = new Set();
const imgSet = new Set();
const canonicalHost = site.siteUrl.replace(/\/$/, "");
for (const route of routes) {
  const res = await fetch(BASE + route);
  const html = await res.text();
  check(res.status === 200, route, `status ${res.status}`);
  check(/<title>[^<]{10,}<\/title>/.test(html), route, "title");
  check(/<meta name="description" content="[^"]{50,}"/.test(html), route, "description");
  const canon = html.match(/<link rel="canonical" href="([^"]+)"/);
  check(canon?.[1] === canonicalHost + route, route, `canonical ${canon?.[1]}`);
  const h1s = html.match(/<h1[\s>]/g) ?? [];
  check(h1s.length === 1, route, `${h1s.length} h1 tags`);
  check(html.includes('type="application/ld+json"'), route, "json-ld");
  check(/<meta property="og:image" content="([^"]+)"/.test(html), route, "og:image");
  check(
    html.includes(
      `${MEDICAL.has(route) ? "Medically reviewed" : "Reviewed"} by ${site.doctor.name}`
    ),
    route,
    "reviewer line"
  );
  check(html.includes(site.phones.primary), route, "primary phone missing");
  check(html.includes("Bhopal"), route, "city missing");
  warn(!/\[CONFIRM/.test(html), route, "[CONFIRM] marker visible");
  const visible = html
    .replace(/<script[\s\S]*?<\/script>/g, " ")
    .replace(/<style[\s\S]*?<\/style>/g, " ");
  for (const re of [/—|–/, /\{\{/, /TODO/, /undefined/, /\bNaN\b/, /lorem/i, /\[object Object\]/])
    check(!re.test(visible), route, `copy leak: ${re}`);

  for (const m of html.matchAll(/href="(\/[^"#]*)#[^"]*"|href="(\/[^"#]*)"/g)) {
    const u = m[1] ?? m[2];
    if (
      u &&
      !u.startsWith("//") &&
      !u.startsWith("/_next/") &&
      !/\.(md|txt|xml|png|webp|avif|json|css|js|woff2?|ico|svg)$/i.test(u)
    )
      linkSet.add(u.endsWith("/") || u === "/" ? u : u + "/");
  }
  for (const m of html.matchAll(/(?:src|content)="(\/img\/[^"]+)"/g)) imgSet.add(m[1]);
}

// --- sitemap integrity ---
console.log("— sitemap urls");
for (const u of smUrls) {
  const path = new URL(u).pathname;
  const r = await fetch(BASE + path, { redirect: "manual" });
  check(r.status === 200, `sitemap ${path}`, `status ${r.status}`);
}

// --- redirects ---
console.log("— redirects");
for (const [src, dest] of REDIRECTS) {
  const r = await fetch(BASE + src + "/", { redirect: "manual" });
  const loc = r.headers.get("location") ?? "";
  check([301, 308].includes(r.status), src, `status ${r.status}`);
  check(loc.replace(/\/$/, "") === dest.replace(/\/$/, "") || loc === site.siteUrl.replace(/\/$/, "") + dest, src, `-> ${loc}`);
}

// --- internal links ---
console.log("— internal links");
for (const u of linkSet) {
  const r = await fetch(BASE + u, { redirect: "manual" });
  check(r.status === 200, `link ${u}`, `status ${r.status}`);
}

// --- images ---
console.log("— images");
for (const u of imgSet) {
  const r = await fetch(BASE + u, { method: "GET" });
  check(r.status === 200, `img ${u}`, `status ${r.status}`);
}

// --- 404 ---
console.log("— 404");
{
  const r = await fetch(BASE + "/definitely-not-a-page/", { redirect: "manual" });
  const html = await r.text();
  check(r.status === 404, "404 page", `status ${r.status}`);
  check(/noindex/.test(html), "404 page", "missing noindex");
}

// --- llms files ---
console.log("— llms files");
for (const p of ["/llms.txt", "/llms-full.txt"]) {
  const t = await (await fetch(BASE + p)).text();
  check(!/\[CONFIRM|{{|TODO/.test(t), p, "marker leak");
  check(!/^---$/m.test(t), p, "frontmatter leak");
  check(t.includes(site.doctor.name), p, "doctor name missing");
}

console.log(`\n${fails} failures, ${warns} warnings`);
process.exit(fails ? 1 : 0);
