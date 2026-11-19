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
import { TermsPage } from "@/components/pages/terms";
import { LegalFx } from "@/components/fx/terms";

export function generateMetadata(): Metadata {
  return pageMeta("/terms-of-use/", "terms-of-use.md");
}

export default function Page() {
  const c = loadContent("terms-of-use.md");
  return (
    <>
      <JsonLd
        json={jsonLd([
          clinicSchema(),
          physicianSchema(),
          websiteSchema(),
          pageNode({ url: "/terms-of-use/", title: c.title, description: c.description }),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Terms of use", url: "/terms-of-use/" },
          ]),
          faqSchema(c.faqs),
        ])}
      />
      <TermsPage />
      <LegalFx />
    </>
  );
}
