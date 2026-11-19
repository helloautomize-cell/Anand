import { execSync } from "node:child_process";
import path from "node:path";
import { contentFileForUrl } from "./content";

const FALLBACK = "2026-11-19";
const cache = new Map<string, string>();

export function lastmod(url: string): string {
  const hit = cache.get(url);
  if (hit) return hit;
  const file = path.join("content", contentFileForUrl(url));
  let date = FALLBACK;
  try {
    date =
      execSync(`git log -1 --format=%cs -- "${file}"`, { encoding: "utf-8" }).trim() ||
      FALLBACK;
  } catch {
    /* git unavailable (CI without history): fallback date */
  }
  cache.set(url, date);
  return date;
}

export function publishedDate(url: string): string {
  const key = "pub:" + url;
  const hit = cache.get(key);
  if (hit) return hit;
  const file = path.join("content", contentFileForUrl(url));
  let date = FALLBACK;
  try {
    date =
      execSync(`git log --diff-filter=A --follow -1 --format=%cs -- "${file}"`, {
        encoding: "utf-8",
      }).trim() || FALLBACK;
  } catch {
    /* git unavailable: fallback date */
  }
  cache.set(key, date);
  return date;
}
