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
  itemListSchema,
  jsonLd,
} from "@/lib/schema";
import { loadContent, loadTreatments } from "@/lib/content";
import { TreatmentsPage } from "@/components/pages/treatments";
import { TreatmentsFx } from "@/components/fx/treatments";

export function generateMetadata(): Metadata {
  return pageMeta("/treatments/", "treatments.md");
}

export default function Page() {
  const c = loadContent("treatments.md");
  const items = loadTreatments().map((t) => ({ name: t.name, url: t.url }));
  return (
    <>
      <JsonLd
        json={jsonLd([
          clinicSchema(),
          physicianSchema(),
          websiteSchema(),
          pageNode({ url: "/treatments/", title: c.title, description: c.description, type: "CollectionPage" }),
          itemListSchema("/treatments/", items),
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
