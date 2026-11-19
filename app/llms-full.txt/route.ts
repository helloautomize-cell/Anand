import { site } from "@/lib/site";
import { factsParagraph, keyFacts, fullBlocks, REVIEWER_LINE, REG_CONFIRMED } from "@/lib/llms";

export const dynamic = "force-static";

export function GET() {
  const body = `# ${site.brand}: full content

> ${factsParagraph()}
> ${REVIEWER_LINE}${REG_CONFIRMED ? ` Registration: ${site.doctor.registration}.` : ""}

${keyFacts()
  .map((f) => `- ${f}`)
  .join("\n")}

${fullBlocks()}

${"=".repeat(60)}
${REVIEWER_LINE}${REG_CONFIRMED ? `\nRegistration: ${site.doctor.registration}.` : ""}
Booking: WhatsApp only, https://wa.me/${site.whatsapp}
`;
  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
