import { z } from "zod";
import raw from "@/data/site.json";

const siteSchema = z.object({
  brand: z.string(),
  shortName: z.string(),
  siteUrl: z.string(),
  agencyCredit: z.string(),
  doctor: z.object({
    name: z.string(),
    role: z.string(),
    experienceYears: z.number(),
    qualifications: z.array(z.string()),
    registration: z.string(),
    languages: z.array(z.string()),
    photo: z.string(),
  }),
  address: z.object({
    line1: z.string(),
    line2: z.string(),
    city: z.string(),
    region: z.string(),
    postalCode: z.string(),
    country: z.string(),
  }),
  phones: z.object({ primary: z.string(), secondary: z.string() }),
  whatsapp: z.string(),
  email: z.string(),
  hours: z.array(
    z.object({ days: z.array(z.string()), opens: z.string(), closes: z.string() })
  ),
  closed: z.array(z.string()),
  timezone: z.string(),
  walkIns: z.string(),
  testsAtClinic: z.string(),
  fees: z.string(),
  surgeryCost: z.string(),
  insurance: z.string(),
  emergency: z.string(),
  maps: z.object({
    link: z.string(),
    embed: z.string(),
    behaviour: z.string(),
  }),
  social: z.object({ instagram: z.string() }),
  booking: z.object({
    channel: z.string(),
    number: z.string(),
    note: z.string(),
  }),
  palette: z.record(z.string(), z.string()),
  fonts: z.record(z.string(), z.string()),
});

export const site = siteSchema.parse(raw);
export type Site = z.infer<typeof siteSchema>;

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? site.siteUrl).replace(
  /\/+$/,
  ""
);

export function abs(path: string): string {
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${p}`;
}

export const isIndexable =
  process.env.VERCEL_ENV === "production" ||
  process.env.NEXT_PUBLIC_ALLOW_INDEXING === "true";

export const isDev = process.env.NODE_ENV === "development" || !isIndexable;

// Display helpers
export const phonesDisplay = {
  primary: "091119 50821",
  secondary: "078982 86906",
};

export const TEL_PRIMARY = `tel:${site.phones.primary}`;
export const TEL_SECONDARY = `tel:${site.phones.secondary}`;
export const MAIL_PRIMARY = `mailto:${site.email}`;

export const hoursDisplay = "Mon to Sat, 10 am to 7:30 pm";
export const legalLastUpdated = "19 November 2026";

const DAY_MIN = { opens: 10 * 60, closes: 19 * 60 + 30 }; // 10:00 to 19:30

export function istNow(): Date {
  return new Date(Date.now() + (330 + new Date().getTimezoneOffset()) * 60000);
}

export function isOpenNow(d: Date = istNow()): boolean {
  const dow = d.getDay();
  const mins = d.getHours() * 60 + d.getMinutes();
  return dow >= 1 && dow <= 6 && mins >= DAY_MIN.opens && mins < DAY_MIN.closes;
}

export function openText(d: Date = istNow()): string {
  const dow = d.getDay();
  const mins = d.getHours() * 60 + d.getMinutes();
  if (isOpenNow(d)) return "Open now, until 7:30 pm";
  if (dow === 0) return "Closed today, opens Monday 10 am";
  if (mins < DAY_MIN.opens) return "Opens today at 10 am";
  if (dow === 6) return "Closed now, opens Monday 10 am";
  return "Closed now, opens 10 am";
}

export const openItems = [
  "Medical Council registration number (MPMC MP729?)",
  "Year FACC was awarded",
  "Name of the hospital in Australia",
  "Names of the five other hospitals he has worked at",
  "Exact hospital wording for where surgery happens",
  "Years at Max hospital",
  "Insurance and government schemes accepted",
  "Fees and payment methods",
  "Lift and parking at Vindhya Retreat",
  "How fast the clinic replies on WhatsApp",
  "Domain: www or apex as the canonical host",
  "Legal review of privacy, terms and disclaimer",
  "Google Business Profile access",
  "Angiography and CT location",
] as const;

// SEO extras
export const seo = {
  medicalSpecialty: ["CardiovascularSurgery", "ThoracicSurgery", "VascularSurgery"],
  alumniOf: [
    "Gandhi Medical College, Bhopal",
    "Grant Medical College and JJ Hospital, Mumbai",
    "SMS Medical College, Jaipur",
  ],
  areasServed: ["Bhopal", "Madhya Pradesh"],
  serviceArea: { city: "Bhopal", region: "Madhya Pradesh", radiusKm: 100 },
  indexNowKey: "ahc-bhopal-indexnow-key-2026",
  ogImage: "/img/signboard.webp",
  sameAs: [
    "https://www.instagram.com/anandheartcenterbhopal/",
    "https://maps.app.goo.gl/tNvRcRyR8Bai2jP29",
  ],
};
