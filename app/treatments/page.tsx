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
import { TreatmentsPage } from "@/components/pages/treatments";
import { TreatmentsFx } from "@/components/fx/treatments";

export function generateMetadata(): Metadata {
  return pageMeta("/treatments/", "treatments.md");
}

export default function Page() {
  const c = loadContent("treatments.md");
  return (
    <>
      <JsonLd
        json={jsonLd([
          clinicSchema(),
          physicianSchema(),
          websiteSchema(),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Treatments", url: "/treatments/" },
          ]),
          faqSchema(c.faqs),
        ])}
      />
      <TreatmentsPage />
      <TreatmentsFx />
    </>
  );
}
