import type { MetadataRoute } from "next";
import { abs } from "@/lib/site";
import { loadPages } from "@/lib/content";
import { lastmod } from "@/lib/lastmod";

const PAGE_IMAGES: Record<string, string[]> = {
  "/": ["/img/dr-anand-yadav.webp", "/img/signboard.webp"],
  "/about/": ["/img/dr-anand-yadav.webp", "/img/consult-room.webp"],
  "/treatments/": ["/img/consult-room.webp", "/img/waiting-hall.webp"],
  "/symptoms/": ["/img/body.webp"],
  "/your-first-visit/": ["/img/reception-desk.webp"],
  "/contact/": ["/img/signboard.webp", "/img/clinic-door.webp"],
};

export default function sitemap(): MetadataRoute.Sitemap {
  return loadPages().map((p) => ({
    url: abs(p.url),
    lastModified: lastmod(p.url),
    changeFrequency: "monthly",
    priority: p.url === "/" ? 1 : 0.8,
    images: (PAGE_IMAGES[p.url] ?? []).map((i) => abs(i)),
  }));
}
