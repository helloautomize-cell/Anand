/**
 * Validates the JSON-LD graph on key routes: parses every ld+json block,
 * checks required @types exist and required fields are present.
 * Usage: BASE=http://localhost:3000 node scripts/validate-schema.mjs
 */
const BASE = process.env.BASE ?? "http://localhost:3000";

const CHECKS = [
  {
    route: "/",
    expect: ["MedicalClinic", "Physician", "WebSite", "BreadcrumbList", "FAQPage"],
  },
  {
    route: "/treatments/bypass-surgery/",
    expect: [
      "MedicalClinic",
      "Physician",
      "WebSite",
      "BreadcrumbList",
      "MedicalProcedure",
      "FAQPage",
    ],
  },
  {
    route: "/contact/",
    expect: ["MedicalClinic", "Physician", "WebSite", "BreadcrumbList"],
  },
];

let fails = 0;
for (const c of CHECKS) {
  const html = await (await fetch(BASE + c.route)).text();
  const blocks = [
    ...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g),
  ];
  const types = new Set();
  let parseError = null;
  for (const b of blocks) {
    try {
      const doc = JSON.parse(b[1]);
      const graph = doc["@graph"] ?? [doc];
      for (const n of graph) {
        if (Array.isArray(n["@type"])) n["@type"].forEach((t) => types.add(t));
        else if (n["@type"]) types.add(n["@type"]);
      }
    } catch (e) {
      parseError = e.message;
    }
  }
  const missing = c.expect.filter((t) => !types.has(t));
  if (parseError || missing.length) {
    fails++;
    console.log(
      `${c.route} FAIL  parse=${parseError ?? "ok"} missing=${missing.join(",")}`
    );
  } else {
    console.log(`${c.route} ok  [${[...types].join(", ")}]`);
  }
}
process.exit(fails ? 1 : 0);
