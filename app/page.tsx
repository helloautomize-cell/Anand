import type { Metadata } from "next";
import "@/styles/shared.css";
import "@/styles/home.css";
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
          pageNode({ url: "/", title: c.title, description: c.description, medical: true }),
          breadcrumbSchema([{ name: "Home", url: "/" }]),
          faqSchema(c.faqs),
        ])}
      />
      <HomePage />
      <HomeFx />
    </>
  );
}
