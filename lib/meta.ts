import type { Metadata } from "next";
import { abs, isIndexable } from "./site";
import { loadContent } from "./content";

const OG_IMAGE = "/img/og-card.png";

export function pageMeta(url: string, file: string): Metadata {
  const c = loadContent(file);
  const canonical = abs(url);
  const og = abs(OG_IMAGE);
  return {
    title: { absolute: c.title },
    description: c.description,
    alternates: { canonical },
    robots: isIndexable ? { index: true, follow: true } : { index: false, follow: false },
    openGraph: {
      type: "website",
      url: canonical,
      siteName: "Anand Heart Center Bhopal",
      title: c.title,
      description: c.description,
      locale: "en_IN",
      images: [{ url: og, width: 1200, height: 630, alt: c.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: c.title,
      description: c.description,
      images: [og],
    },
  };
}
