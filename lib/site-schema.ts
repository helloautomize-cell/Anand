import { z } from "zod";
import raw from "@/data/site.json";

export const siteSchema = z.object({
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
  geo: z.object({ lat: z.number(), lng: z.number() }),
  profiles: z.record(z.string(), z.string()),
  localWords: z.record(z.string(), z.string()),
  privateFacts: z.record(z.string(), z.string()),
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
  verification: z.object({ google: z.string(), bing: z.string() }),
  indexNowKey: z.string(),
  booking: z.object({
    channel: z.string(),
    number: z.string(),
    note: z.string(),
  }),
  palette: z.record(z.string(), z.string()),
  fonts: z.record(z.string(), z.string()),
});

export type Site = z.infer<typeof siteSchema>;

/** Build-time check of data/site.json. Server-only: keeps zod out of the client bundle. */
export function validateSite(): Site {
  return siteSchema.parse(raw);
}
