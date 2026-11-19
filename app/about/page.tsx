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
  DOCTOR_ID,
  jsonLd,
} from "@/lib/schema";
import { loadContent } from "@/lib/content";
import { AboutPage } from "@/components/pages/about";
import { AboutFx } from "@/components/fx/about";

export function generateMetadata(): Metadata {
  return pageMeta("/about/", "about.md");
}

export default function Page() {
  const c = loadContent("about.md");
  return (
    <>
      <JsonLd
        json={jsonLd([
          clinicSchema(),
          physicianSchema(),
          websiteSchema(),
          pageNode({ url: "/about/", title: c.title, description: c.description, type: "ProfilePage", medical: true, mainEntity: DOCTOR_ID }),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "About", url: "/about/" },
          ]),
          faqSchema(c.faqs),
        ])}
      />
      <AboutPage />
      <AboutFx />
    </>
  );
}
