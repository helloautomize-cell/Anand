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
import { ContactPage } from "@/components/pages/contact";
import { ContactFx } from "@/components/fx/contact";

export function generateMetadata(): Metadata {
  return pageMeta("/contact/", "contact.md");
}

export default function Page() {
  const c = loadContent("contact.md");
  return (
    <>
      <JsonLd
        json={jsonLd([
          clinicSchema(),
          physicianSchema(),
          websiteSchema(),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Contact", url: "/contact/" },
          ]),
          faqSchema(c.faqs),
        ])}
      />
      <ContactPage />
      <ContactFx />
    </>
  );
}
