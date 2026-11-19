/**
 * Markdown mirrors: writes public/<route>.md for every page in data/pages.json.
 * Served statically (noindex via next.config headers) so AI crawlers can fetch
 * clean text without running JavaScript.
 */
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const pages = JSON.parse(fs.readFileSync("data/pages.json", "utf-8"));

function fileFor(url) {
  if (url === "/") return "home.md";
  return url.replace(/^\/+|\/+$/g, "").replace(/\//g, "--") + ".md";
}

let n = 0;
for (const p of pages) {
  const raw = fs.readFileSync(path.join("content", fileFor(p.url)), "utf-8");
  const { data, content } = matter(raw);
  const out = `# ${data.title}\n\nCanonical: ${data.url}\n\n${content.trim()}\n`;
  const rel = p.url === "/" ? "index.md" : `${p.url.replace(/^\/|\/$/g, "")}.md`;
  const dest = path.join("public", rel);
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.writeFileSync(dest, out);
  n++;
}
console.log(`wrote ${n} markdown mirrors`);
