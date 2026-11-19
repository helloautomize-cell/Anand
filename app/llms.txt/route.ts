import { site, abs } from "@/lib/site";
import { loadPages } from "@/lib/content";

export const dynamic = "force-static";

export function GET() {
  const pages = loadPages()
    .map((p) => `- ${abs(p.url)} : ${p.description}`)
    .join("\n");
  const body = `# ${site.brand}

> ${site.doctor.name}, ${site.doctor.role} in Bhopal with ${site.doctor.experienceYears} years of experience. OPD: Mon to Sat, 10 am to 7:30 pm, Sunday closed. Booking is on WhatsApp only: https://wa.me/${site.whatsapp}. Phone ${site.phones.primary}. ${site.emergency}

Address: ${site.address.line1}, ${site.address.line2}, ${site.address.city}, ${site.address.region} ${site.address.postalCode}, India.

## Pages
${pages}
`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
