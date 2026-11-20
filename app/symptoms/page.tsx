import type { Metadata } from "next";
import "@/styles/shared.css";
import "@/styles/symptoms.css";
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
import { SymptomsPage } from "@/components/pages/symptoms";
import { SymptomsFx } from "@/components/fx/symptoms";

export function generateMetadata(): Metadata {
  return pageMeta("/symptoms/", "symptoms.md");
}

export default function Page() {
  const c = loadContent("symptoms.md");
  return (
    <>
      <JsonLd
        json={jsonLd([
          clinicSchema(),
          physicianSchema(),
          websiteSchema(),
          pageNode({ url: "/symptoms/", title: c.title, description: c.description, type: "MedicalWebPage", medical: true }),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Symptoms", url: "/symptoms/" },
          ]),
          faqSchema(c.faqs),
        ])}
      />
      <SymptomsPage />
      <SymptomsFx />
    </>
  );
}
