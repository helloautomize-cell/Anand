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
import { VisitPage } from "@/components/pages/visit";
import { VisitFx } from "@/components/fx/visit";

export function generateMetadata(): Metadata {
  return pageMeta("/your-first-visit/", "your-first-visit.md");
}

export default function Page() {
  const c = loadContent("your-first-visit.md");
  return (
    <>
      <JsonLd
        json={jsonLd([
          clinicSchema(),
          physicianSchema(),
          websiteSchema(),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Your first visit", url: "/your-first-visit/" },
          ]),
          faqSchema(c.faqs),
        ])}
      />
      <VisitPage />
      <VisitFx />
    </>
  );
}
