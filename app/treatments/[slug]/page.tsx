import type { Metadata } from "next";
import "@/styles/treatment.css";
import type { ComponentType } from "react";
import { notFound } from "next/navigation";
import { pageMeta } from "@/lib/meta";
import { abs } from "@/lib/site";
import { JsonLd } from "@/components/json-ld";
import {
  clinicSchema,
  physicianSchema,
  websiteSchema,
  breadcrumbSchema,
  faqSchema,
  pageNode,
  treatmentSchema,
  jsonLd,
} from "@/lib/schema";
import { contentFileForUrl, loadContent, loadTreatments } from "@/lib/content";
import { TreatmentBypassSurgeryPage } from "@/components/pages/tt-bypass-surgery";
import { TreatmentAngioplastyPage } from "@/components/pages/tt-angioplasty";
import { TreatmentValveSurgeryPage } from "@/components/pages/tt-valve-surgery";
import { TreatmentChildrensHeartSurgeryPage } from "@/components/pages/tt-childrens-heart-surgery";
import { TreatmentMinimallyInvasiveSurgeryPage } from "@/components/pages/tt-minimally-invasive-surgery";
import { TreatmentVascularSurgeryPage } from "@/components/pages/tt-vascular-surgery";
import { TreatmentLungAndChestSurgeryPage } from "@/components/pages/tt-lung-and-chest-surgery";
import { TreatmentCheckUpsSecondOpinionPage } from "@/components/pages/tt-check-ups-second-opinion";
import { TreatmentFollowUpCarePage } from "@/components/pages/tt-follow-up-care";
import { FxBypassSurgery } from "@/components/fx/tt-bypass-surgery";
import { FxAngioplasty } from "@/components/fx/tt-angioplasty";
import { FxValveSurgery } from "@/components/fx/tt-valve-surgery";
import { FxChildrensHeartSurgery } from "@/components/fx/tt-childrens-heart-surgery";
import { FxMinimallyInvasiveSurgery } from "@/components/fx/tt-minimally-invasive-surgery";
import { FxVascularSurgery } from "@/components/fx/tt-vascular-surgery";
import { FxLungAndChestSurgery } from "@/components/fx/tt-lung-and-chest-surgery";
import { FxCheckUpsSecondOpinion } from "@/components/fx/tt-check-ups-second-opinion";
import { FxFollowUpCare } from "@/components/fx/tt-follow-up-care";

const PAGES: Record<string, ComponentType> = {
  "bypass-surgery": TreatmentBypassSurgeryPage,
  angioplasty: TreatmentAngioplastyPage,
  "valve-surgery": TreatmentValveSurgeryPage,
  "childrens-heart-surgery": TreatmentChildrensHeartSurgeryPage,
  "minimally-invasive-surgery": TreatmentMinimallyInvasiveSurgeryPage,
  "vascular-surgery": TreatmentVascularSurgeryPage,
  "lung-and-chest-surgery": TreatmentLungAndChestSurgeryPage,
  "check-ups-second-opinion": TreatmentCheckUpsSecondOpinionPage,
  "follow-up-care": TreatmentFollowUpCarePage,
};

const FX: Record<string, ComponentType> = {
  "bypass-surgery": FxBypassSurgery,
  angioplasty: FxAngioplasty,
  "valve-surgery": FxValveSurgery,
  "childrens-heart-surgery": FxChildrensHeartSurgery,
  "minimally-invasive-surgery": FxMinimallyInvasiveSurgery,
  "vascular-surgery": FxVascularSurgery,
  "lung-and-chest-surgery": FxLungAndChestSurgery,
  "check-ups-second-opinion": FxCheckUpsSecondOpinion,
  "follow-up-care": FxFollowUpCare,
};

export function generateStaticParams() {
  return loadTreatments().map((t) => ({ slug: t.slug }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  return params.then(({ slug }) => {
    const t = loadTreatments().find((t) => t.slug === slug);
    if (!t) return {};
    return pageMeta(t.url, contentFileForUrl(t.url), true);
  });
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const t = loadTreatments().find((t) => t.slug === slug);
  const Body = PAGES[slug];
  const Fx = FX[slug];
  if (!t || !Body) notFound();
  const c = loadContent(contentFileForUrl(t.url));
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
            { name: t.name, url: t.url },
          ]),
          pageNode({ url: t.url, title: t.name, description: t.description, type: "MedicalWebPage", medical: true, mainEntity: `${abs(t.url)}#procedure` }),
          treatmentSchema(t),
          faqSchema(c.faqs),
        ])}
      />
      <Body />
      <Fx />
    </>
  );
}
