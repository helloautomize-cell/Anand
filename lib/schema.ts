import { abs, seo, site } from "./site";
import type { Faq, Treatment } from "./content";
import { lastmod, publishedDate } from "./lastmod";

const CLINIC_ID = `${abs("/")}#clinic`;
export const DOCTOR_ID = `${abs("/about/")}#physician`;
const WEBSITE_ID = `${abs("/")}#website`;

export function clinicSchema() {
  return {
    "@type": ["MedicalClinic", "LocalBusiness", "Organization"],
    "@id": CLINIC_ID,
    name: site.brand,
    url: abs("/"),
    image: abs("/img/signboard.webp"),
    logo: abs("/img/logo.png"),
    telephone: site.phones.primary,
    email: site.email,
    priceRange: site.fees,
    currenciesAccepted: "INR",
    medicalSpecialty: seo.medicalSpecialty,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${site.address.line1}, ${site.address.line2}`,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.lat,
      longitude: site.geo.lng,
    },
    hasMap: site.maps.link,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "10:00",
        closes: "19:30",
      },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "appointments",
      telephone: site.phones.primary,
      url: `https://wa.me/${site.whatsapp}`,
      availableLanguage: ["en", "hi"],
    },
    areaServed: [
      {
        "@type": "City",
        name: "Bhopal",
        containedInPlace: {
          "@type": "State",
          name: "Madhya Pradesh",
          containedInPlace: {
            "@type": "Country",
            name: "India",
            identifier: "IN",
          },
        },
      },
      { "@type": "State", name: "Madhya Pradesh" },
    ],
    sameAs: seo.sameAs,
    employee: { "@id": DOCTOR_ID },
  };
}

export function physicianSchema() {
  return {
    "@type": "Physician",
    "@id": DOCTOR_ID,
    name: site.doctor.name,
    jobTitle: site.doctor.role,
    url: abs("/about/"),
    image: abs(site.doctor.photo),
    telephone: site.phones.primary,
    medicalSpecialty: seo.medicalSpecialty,
    qualification: site.doctor.qualifications.join(", "),
    alumniOf: seo.alumniOf.map((name) => ({ "@type": "CollegeOrUniversity", name })),
    hasCredential: site.doctor.qualifications.map((q) => ({
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "degree",
      name: q,
    })),
    knowsAbout: [
      "Cardiac surgery",
      "Cardiothoracic surgery",
      "Vascular surgery",
      "Coronary artery bypass grafting",
      "Angioplasty",
      "Heart valve surgery",
    ],
    knowsLanguage: site.doctor.languages,
    worksFor: { "@id": CLINIC_ID },
  };
}

export function websiteSchema() {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: site.brand,
    url: abs("/"),
    inLanguage: "en-IN",
    publisher: { "@id": CLINIC_ID },
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@type": "BreadcrumbList",
    "@id": `${abs(items[items.length - 1].url)}#breadcrumb`,
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: abs(it.url),
    })),
  };
}

export function faqSchema(faqs: Faq[]) {
  if (!faqs.length) return null;
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q.replace(/\[CONFIRM[^\]]*\]/g, "").trim(),
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a.replace(/\[CONFIRM[^\]]*\]/g, "").trim(),
      },
    })),
  };
}

const PROCEDURE_TYPES: Record<string, string> = {
  "bypass-surgery": "MedicalProcedure",
  angioplasty: "MedicalProcedure",
  "valve-surgery": "MedicalProcedure",
  "childrens-heart-surgery": "MedicalProcedure",
  "minimally-invasive-surgery": "MedicalProcedure",
  "vascular-surgery": "MedicalProcedure",
  "lung-and-chest-surgery": "MedicalProcedure",
  "check-ups-second-opinion": "MedicalTherapy",
  "follow-up-care": "MedicalTherapy",
};

export function treatmentSchema(t: Treatment) {
  return {
    "@type": PROCEDURE_TYPES[t.slug] ?? "MedicalProcedure",
    "@id": `${abs(t.url)}#procedure`,
    name: t.name,
    url: abs(t.url),
    description: t.description,
    procedureType: "Surgical procedure",
    bodyLocation: "Heart, chest and blood vessels",
    provider: { "@id": CLINIC_ID },
  };
}

type PageType =
  | "WebPage"
  | "ContactPage"
  | "ProfilePage"
  | "CollectionPage"
  | "MedicalWebPage";

export function pageNode(opts: {
  url: string;
  title: string;
  description?: string;
  type?: PageType;
  medical?: boolean;
  mainEntity?: string;
}) {
  const u = abs(opts.url);
  return {
    "@type": opts.type ?? "WebPage",
    "@id": `${u}#webpage`,
    url: u,
    name: opts.title.split("|")[0].trim(),
    ...(opts.description ? { description: opts.description } : {}),
    inLanguage: "en-IN",
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": CLINIC_ID },
    breadcrumb: { "@id": `${u}#breadcrumb` },
    datePublished: publishedDate(opts.url),
    dateModified: lastmod(opts.url),
    reviewedBy: { "@id": DOCTOR_ID },
    ...(opts.medical
      ? {
          lastReviewed: lastmod(opts.url),
          audience: { "@type": "MedicalAudience", audienceType: "Patient" },
          specialty: seo.medicalSpecialty[0],
        }
      : {}),
    ...(opts.mainEntity ? { mainEntity: { "@id": opts.mainEntity } } : {}),
  };
}

export function itemListSchema(url: string, items: { name: string; url: string }[]) {
  return {
    "@type": "ItemList",
    "@id": `${abs(url)}#list`,
    numberOfItems: items.length,
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      url: abs(it.url),
    })),
  };
}

/** Serialize a list of graph nodes into a JSON-LD script tag body. */
export function jsonLd(nodes: (object | null)[]): string {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@graph": nodes.filter((n): n is object => n !== null),
  });
}
