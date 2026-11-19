/**
 * Launch gate. Fails (exit 1) while blockers remain. Checks, with file:line:
 *  - [CONFIRM ...] markers in content/data/app
 *  - em dash / en dash in visible copy
 *  - forbidden claims: best, 100%, No. 1, guarantee(d), lorem, rankings, success rate
 *  - every content/*.md has a non-empty description
 *  - every <img> in components has an alt attribute
 */
import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
// [CONFIRM] markers live in content and rendered components, not lib/scripts code.
const SCAN_DIRS = ["content", "data", "app", "components"];
const EXT = /\.(md|json|tsx|ts|css)$/;

const rules = [
  { name: "[CONFIRM] marker", re: /\[CONFIRM/i },
  { name: "em dash", re: /—/ },
  { name: "en dash", re: /–/ },
  { name: 'claim "best"', re: /\bbest\b/i },
  { name: 'claim "100%"', re: /100%/, skip: /\.css$/ },
  { name: 'claim "No. 1"', re: /\bNo\.?\s*1\b/i },
  { name: 'claim "guarantee"', re: /guarantee/i },
  { name: "lorem ipsum", re: /lorem ipsum/i },
  { name: "testimonial", re: /testimonial/i },
  { name: "success rate", re: /success rate/i },
];

// Approved idioms, not claims: "do our best", "not the best option",
// "no guarantee of results", "does not publish patient testimonials".
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

function clean(line) {
  let t = line;
  for (const b of BENIGN) t = t.replace(b, "");
  return t;
}

let failures = 0;
const report = [];

function* walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) yield* walk(p);
    else if (EXT.test(e.name)) yield p;
  }
}

for (const d of SCAN_DIRS) {
  const abs = path.join(ROOT, d);
  if (!fs.existsSync(abs)) continue;
  for (const file of walk(abs)) {
    const rel = path.relative(ROOT, file);
    const lines = fs.readFileSync(file, "utf-8").split("\n");
    lines.forEach((line, i) => {
      line = clean(line);
      for (const r of rules) {
        if (r.skip && r.skip.test(file)) continue;
        if (r.re.test(line)) {
          failures++;
          report.push(`${rel}:${i + 1}  ${r.name}  -> ${line.trim().slice(0, 120)}`);
        }
      }
    });
    // images without alt
    if (/\.tsx$/.test(file)) {
      lines.forEach((line, i) => {
        for (const m of line.matchAll(/<img\b[^>]*>/g)) {
          if (!/\balt=/.test(m[0])) {
            failures++;
            report.push(`${rel}:${i + 1}  <img> without alt  -> ${m[0].slice(0, 100)}`);
          }
        }
      });
    }
  }
}

// descriptions
const cdir = path.join(ROOT, "content");
for (const f of fs.readdirSync(cdir).filter((f) => f.endsWith(".md"))) {
  const text = fs.readFileSync(path.join(cdir, f), "utf-8");
  const fm = text.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!fm || !/^description:\s*["']?.+["']?$/m.test(fm[1])) {
    failures++;
    report.push(`content/${f}:1  missing description`);
  }
}

if (failures) {
  console.error(`\nLAUNCH BLOCKED: ${failures} issue(s)\n`);
  report.forEach((r) => console.error("  " + r));
  process.exit(1);
}
console.log("launch-check: clean");
