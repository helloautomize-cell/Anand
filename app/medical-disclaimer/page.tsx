import type { Metadata } from "next";
import { pageMeta } from "@/lib/meta";
import { JsonLd } from "@/components/json-ld";
import {
  clinicSchema,
  physicianSchema,
  websiteSchema,
  breadcrumbSchema,
  faqSchema,
  pageNode,
  jsonLd,
} from "@/lib/schema";
import { loadContent } from "@/lib/content";
import { DisclaimerPage } from "@/components/pages/disclaimer";
import { LegalFx } from "@/components/fx/disclaimer";

export function generateMetadata(): Metadata {
  return pageMeta("/medical-disclaimer/", "medical-disclaimer.md");
}

export default function Page() {
  const c = loadContent("medical-disclaimer.md");
  return (
    <>
      <JsonLd
        json={jsonLd([
          clinicSchema(),
          physicianSchema(),
          websiteSchema(),
          pageNode({ url: "/medical-disclaimer/", title: c.title, description: c.description }),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Medical disclaimer", url: "/medical-disclaimer/" },
          ]),
          faqSchema(c.faqs),
        ])}
      />
      <DisclaimerPage />
      <LegalFx />
    </>
  );
}
