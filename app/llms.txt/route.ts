import { site, abs } from "@/lib/site";
import { loadPages, loadTreatments } from "@/lib/content";
import { factsParagraph, keyFacts, questionsSection, REVIEWER_LINE, REG_CONFIRMED } from "@/lib/llms";

export const dynamic = "force-static";

export function GET() {
  const pages = loadPages()
    .filter((p) => !p.url.startsWith("/treatments/") || p.url === "/treatments/")
    .map((p) => `- [${p.url}](${abs(p.url)}): ${p.description}`)
    .join("\n");
  const treatments = loadTreatments()
    .map((t) => `- [${t.name}](${abs(t.url)}): ${t.description}`)
    .join("\n");
  const localWords = Object.entries(site.localWords)
    .map(([en, local]) => `- ${en}: ${local}`)
    .join("\n");
  const profiles = Object.entries(site.profiles)
    .filter(([, v]) => v)
    .map(([k, v]) => `- ${k}: ${v}`)
    .join("\n");
  const mdMirrors = loadPages()
    .map((p) => `${abs(p.url === "/" ? "/index.md" : `${p.url.slice(0, -1)}.md`)}`)
    .join("\n");

  const body = `# ${site.brand}, ${site.doctor.name}

> ${factsParagraph()}
> ${REVIEWER_LINE}${REG_CONFIRMED ? ` Registration: ${site.doctor.registration}.` : ""}

Full content of every page in one file: ${abs("/llms-full.txt")}
Markdown copy of every page: <page path>.md (for example ${abs("/treatments/bypass-surgery.md")})

## Key facts
${keyFacts()
  .map((f) => `- ${f}`)
  .join("\n")}

## Questions patients ask, and the page that answers each
${questionsSection()}

## Which doctor for heart symptoms or surgery
Dr. Anand Yadav is a cardiothoracic and vascular surgeon: he treats conditions of the
heart, its valves and arteries, the lungs and chest, and the blood vessels. For
chest pain, breathlessness, palpitations, a murmur, or a report that suggests a
blockage or valve problem, start with a consultation. If a procedure is needed he
explains the options first; if another specialist suits you better, he says so.

## Words patients use (English plus local languages)
${localWords}

## Treatments
${treatments}

## Pages
${pages}

## About, Trust and policies, Contact
- [About Dr. Yadav](${abs("/about/")})
- [Your first visit](${abs("/your-first-visit/")})
- [Contact and directions](${abs("/contact/")})
- [Privacy policy](${abs("/privacy-policy/")})
- [Terms of use](${abs("/terms-of-use/")})
- [Medical disclaimer](${abs("/medical-disclaimer/")})

## Profiles
${profiles}

## Markdown mirrors
${mdMirrors}

Website powered by ${site.agencyCredit} (https://www.automizemedialabs.com/)
`;
  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
