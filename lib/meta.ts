import type { Metadata } from "next";
import { abs, isIndexable } from "./site";
import { loadContent } from "./content";

const OG_IMAGE = "/img/og-card.png";

const robotsMeta = isIndexable
  ? {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large" as const,
      "max-video-preview": -1,
    }
  : { index: false, follow: false };

export function pageMeta(url: string, file: string, generatedOg = false): Metadata {
  const c = loadContent(file);
  const canonical = abs(url);
  const og = abs(OG_IMAGE);
  return {
    title: { absolute: c.title },
    description: c.description,
    alternates: {
      canonical,
      types: { "text/markdown": abs(url === "/" ? "/index.md" : `${url.slice(0, -1)}.md`) },
    },
    robots: robotsMeta,
    openGraph: {
      type: "website",
      url: canonical,
      siteName: "Anand Heart Center Bhopal",
      title: c.title,
      description: c.description,
      locale: "en_IN",
      ...(generatedOg
        ? {}
        : { images: [{ url: og, width: 1200, height: 630, alt: c.title }] }),
    },
    twitter: {
      card: "summary_large_image",
      title: c.title,
      description: c.description,
      ...(generatedOg ? {} : { images: [og] }),
    },
  };
}
