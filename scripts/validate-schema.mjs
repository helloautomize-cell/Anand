/**
 * Crawls every sitemap URL and validates each JSON-LD block:
 * parses, bare {"@id"} refs resolve, no empty/TODO/CONFIRM values,
 * dateModified >= datePublished, FAQPage questions appear in the HTML.
 * Usage: BASE=http://localhost:3000 node scripts/validate-schema.mjs
 */
const BASE = process.env.BASE ?? "http://localhost:3000";
const MAX = 500;

function expectFor(route) {
  const base = ["MedicalClinic", "Physician", "WebSite", "BreadcrumbList"];
  if (route === "/") return [...base, "WebPage", "FAQPage"];
  if (route === "/about/") return [...base, "ProfilePage"];
  if (route === "/contact/") return [...base, "ContactPage"];
  if (route === "/treatments/") return [...base, "CollectionPage", "ItemList"];
  if (route.startsWith("/treatments/")) {
    const therapy = ["check-ups-second-opinion", "follow-up-care"].some((s) =>
      route.includes(s)
    );
    return [
      ...base,
      "MedicalWebPage",
      therapy ? "MedicalTherapy" : "MedicalProcedure",
      "FAQPage",
    ];
  }
  if (route === "/symptoms/" || route === "/your-first-visit/")
    return [...base, "MedicalWebPage"];
  return [...base, "WebPage"];
}

function* walk(node, path = "$") {
  yield [node, path];
  if (node && typeof node === "object") {
    for (const [k, v] of Object.entries(node)) yield* walk(v, `${path}.${k}`);
  }
}

const sm = await (await fetch(`${BASE}/sitemap.xml`)).text();
const urls = [...sm.matchAll(/<loc>([^<]+)<\/loc>/g)]
  .map((m) => new URL(m[1]).pathname)
  .filter((u) => !u.includes("/img/"));
const routes = [...new Set(urls)].slice(0, MAX);

let fails = 0;
for (const route of routes) {
  const html = await (await fetch(BASE + route)).text();
  const errs = [];
  const blocks = [
    ...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g),
  ];
  const types = new Set();
  const ids = new Set();
  const faqNames = [];
  const graphs = [];

  for (const b of blocks) {
    try {
      const doc = JSON.parse(b[1]);
      graphs.push(doc["@graph"] ?? [doc]);
    } catch (e) {
      errs.push(`unparseable JSON-LD: ${e.message}`);
    }
  }

  for (const g of graphs)
    for (const n of g) {
      for (const t of Array.isArray(n["@type"]) ? n["@type"] : [n["@type"]])
        if (t) types.add(t);
      if (n["@id"]) ids.add(n["@id"]);
      for (const [v, p] of walk(n)) {
        if (v === "" || v === null || (Array.isArray(v) && !v.length))
          errs.push(`empty value at ${p}`);
        if (typeof v === "string" && /{{|\[CONFIRM|TODO|undefined|NaN/.test(v))
          errs.push(`placeholder leak at ${p}: ${v.slice(0, 60)}`);
      }
      if (n["@type"] === "FAQPage")
        for (const q of n.mainEntity ?? []) faqNames.push(q.name);
      if (
        n.datePublished &&
        n.dateModified &&
        n.dateModified < n.datePublished
      )
        errs.push(`dateModified ${n.dateModified} < datePublished ${n.datePublished}`);
    }

  for (const g of graphs)
    for (const n of g)
      for (const [v] of walk(n))
        if (
          v &&
          typeof v === "object" &&
          Object.keys(v).length === 1 &&
          v["@id"] &&
          !ids.has(v["@id"])
        )
          errs.push(`unresolved @id ref ${v["@id"]}`);

  const text = html.replace(/<[^>]+>/g, " ");
  for (const q of faqNames)
    if (!text.includes(q.replace(/&amp;/g, "&").slice(0, 40)))
      errs.push(`FAQ question not visible: ${q.slice(0, 60)}`);

  const missing = expectFor(route).filter((t) => !types.has(t));
  if (missing.length) errs.push(`missing types: ${missing.join(",")}`);

  if (errs.length) {
    fails++;
    console.log(`${route} FAIL`);
    for (const e of [...new Set(errs)].slice(0, 6)) console.log(`   - ${e}`);
  } else {
    console.log(`${route} ok  [${[...types].join(", ")}]`);
  }
}
console.log(fails ? `\n${fails} route(s) failed` : "\nall routes valid");
process.exit(fails ? 1 : 0);
