import type { Metadata } from "next";
import { pageMeta } from "@/lib/meta";
import { JsonLd } from "@/components/json-ld";
import {
  clinicSchema,
  physicianSchema,
  websiteSchema,
  breadcrumbSchema,
  faqSchema,
  jsonLd,
} from "@/lib/schema";
import { loadContent } from "@/lib/content";
import { HomePage } from "@/components/pages/home";
import { HomeFx } from "@/components/fx/home";

export function generateMetadata(): Metadata {
  return pageMeta("/", "home.md");
}

export default function Page() {
  const c = loadContent("home.md");
  return (
    <>
      <JsonLd
        json={jsonLd([
          clinicSchema(),
          physicianSchema(),
          websiteSchema(),
          breadcrumbSchema([{ name: "Home", url: "/" }]),
          faqSchema(c.faqs),
        ])}
      />
      <HomePage />
      <HomeFx />
    </>
  );
}
