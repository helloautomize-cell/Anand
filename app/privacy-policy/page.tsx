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
import { PrivacyPage } from "@/components/pages/privacy";
import { LegalFx } from "@/components/fx/privacy";

export function generateMetadata(): Metadata {
  return pageMeta("/privacy-policy/", "privacy-policy.md");
}

export default function Page() {
  const c = loadContent("privacy-policy.md");
  return (
    <>
      <JsonLd
        json={jsonLd([
          clinicSchema(),
          physicianSchema(),
          websiteSchema(),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Privacy policy", url: "/privacy-policy/" },
          ]),
          faqSchema(c.faqs),
        ])}
      />
      <PrivacyPage />
      <LegalFx />
    </>
  );
}
