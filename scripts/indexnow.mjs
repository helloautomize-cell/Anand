/**
 * Manual IndexNow submit (Bing, Yandex, Seznam, Naver).
 * Usage: node scripts/indexnow.mjs [all]
 * Reads SITE_URL + key from data/site.json via env.
 */
import fs from "node:fs";

const site = JSON.parse(fs.readFileSync("data/site.json", "utf-8"));
const pages = JSON.parse(fs.readFileSync("data/pages.json", "utf-8"));

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? site.siteUrl).replace(/\/+$/, "");
const KEY = site.indexNowKey;

const urlList = pages.map((p) => `${SITE_URL}${p.url}`);

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({
    host: new URL(SITE_URL).host,
    key: KEY,
    keyLocation: `${SITE_URL}/${KEY}.txt`,
    urlList,
  }),
});

console.log(`IndexNow: submitted ${urlList.length} urls -> HTTP ${res.status}`);
console.log(res.ok ? "ok" : await res.text());
