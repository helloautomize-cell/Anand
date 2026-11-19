import type { MetadataRoute } from "next";
import { abs } from "@/lib/site";
import { loadPages } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  return loadPages().map((p) => ({
    url: abs(p.url),
    lastModified: new Date("2026-11-19"),
    changeFrequency: "monthly",
    priority: p.url === "/" ? 1 : 0.8,
  }));
}
