import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { z } from "zod";

const faqSchema = z.object({ q: z.string(), a: z.string() });

const frontmatterSchema = z.object({
  title: z.string(),
  url: z.string(),
  template: z.string(),
  description: z.string(),
  reviewer: z.string().optional(),
  lastReviewed: z.string().optional(),
  faqs: z.array(faqSchema).default([]),
});

export type Faq = z.infer<typeof faqSchema>;
export type PageContent = z.infer<typeof frontmatterSchema> & {
  body: string;
  file: string;
};

const CONTENT_DIR = path.join(process.cwd(), "content");

const cache = new Map<string, PageContent>();

export function loadContent(file: string): PageContent {
  const hit = cache.get(file);
  if (hit) return hit;
  const full = path.join(CONTENT_DIR, file);
  const { data, content } = matter.read(full);
  const fm = frontmatterSchema.parse(data);
  const page: PageContent = { ...fm, body: content, file };
  cache.set(file, page);
  return page;
}

export function contentFileForUrl(url: string): string {
  if (url === "/") return "home.md";
  const clean = url.replace(/^\/+|\/+$/g, "");
  return clean.replace(/\//g, "--") + ".md";
}

const treatmentSchema = z.object({
  slug: z.string(),
  url: z.string(),
  name: z.string(),
  title: z.string(),
  description: z.string(),
  faqs: z.array(faqSchema),
});

export type Treatment = z.infer<typeof treatmentSchema>;

export function loadTreatments(): Treatment[] {
  const raw = JSON.parse(
    fs.readFileSync(
      path.join(process.cwd(), "data", "treatments.json"),
      "utf-8"
    )
  );
  return z.array(treatmentSchema).parse(raw);
}

export function loadTreatment(slug: string): Treatment {
  const t = loadTreatments().find((t) => t.slug === slug);
  if (!t) throw new Error(`unknown treatment: ${slug}`);
  return t;
}

export function loadPages(): { url: string; template: string; description: string }[] {
  return JSON.parse(
    fs.readFileSync(path.join(process.cwd(), "data", "pages.json"), "utf-8")
  );
}

// [CONFIRM] helpers
const CONFIRM_RE = /\[CONFIRM(?::\s*([^\]]+))?\]/g;

export function hasConfirm(text: string): boolean {
  return /\[CONFIRM/.test(text);
}

/** Split text into parts; [CONFIRM: x] becomes {chip: "x"} markers. */
export function splitConfirm(text: string): (string | { chip: string | null })[] {
  const out: (string | { chip: string | null })[] = [];
  let last = 0;
  for (const m of text.matchAll(CONFIRM_RE)) {
    if (m.index > last) out.push(text.slice(last, m.index));
    out.push({ chip: m[1] ? m[1].trim() : null });
    last = m.index + m[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}
