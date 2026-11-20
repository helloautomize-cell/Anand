/**
 * Postbuild: inline every <link rel="stylesheet"> into a <style> tag in each
 * prerendered HTML file, so no render-blocking CSS requests remain.
 *
 * The .css chunk files are left on disk untouched — client-side navigations
 * that lazy-load a route's stylesheet still work.
 *
 * Runs automatically via the `postbuild` npm script after `next build`.
 */
import { readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";

const root = resolve(process.cwd());
const appDir = join(root, ".next/server/app");
const staticDir = join(root, ".next/static");

function* htmlFiles(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) yield* htmlFiles(p);
    else if (name.endsWith(".html")) yield p;
  }
}

const LINK_RE = /<link\b[^>]*\brel="stylesheet"[^>]*>/g;
const HREF_RE = /\bhref="([^"]+)"/;

let inlined = 0;
for (const file of htmlFiles(appDir)) {
  let html = readFileSync(file, "utf8");
  if (!LINK_RE.test(html)) continue;
  LINK_RE.lastIndex = 0;
  html = html.replace(LINK_RE, (tag) => {
    const href = tag.match(HREF_RE)?.[1];
    if (!href || !href.startsWith("/_next/static/")) return tag;
    const cssPath = join(staticDir, href.slice("/_next/static/".length));
    let css;
    try {
      css = readFileSync(cssPath, "utf8");
    } catch {
      console.warn(`[inline-css] missing ${href} (referenced by ${file})`);
      return tag;
    }
    // Guard against prematurely closing the <style> element.
    if (css.includes("</style") || css.includes("<!--")) {
      console.warn(`[inline-css] unsafe content in ${href}, keeping link`);
      return tag;
    }
    // url() references inside the stylesheet are relative to the CSS file's
    // URL (e.g. ../media/x.woff2). Once inlined into the document they would
    // resolve against the page URL — rewrite them to absolute paths so fonts
    // and background images keep working.
    const cssDir = href.slice(0, href.lastIndexOf("/") + 1);
    css = css.replace(/url\((['"]?)([^'")]+)\1\)/g, (m, q, u) => {
      if (u.startsWith("/") || /^[a-z]+:/i.test(u) || u.startsWith("#"))
        return m;
      return `url(${q}${new URL(u, `http://x${cssDir}`).pathname}${q})`;
    });
    inlined++;
    return `<style data-inlined="${href}">${css}</style>`;
  });
  writeFileSync(file, html);
}
console.log(`[inline-css] inlined ${inlined} stylesheet link(s)`);
