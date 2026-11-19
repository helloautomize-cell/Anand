import { abs, site, phonesDisplay, hoursDisplay } from "./site";
import { loadContent, loadPages, contentFileForUrl } from "./content";

const CONFIRM = /\[CONFIRM(?::[^\]]*)?\]/g;

const reg = site.doctor.registration.replace(CONFIRM, "").trim();
export const REG_CONFIRMED = !/\[CONFIRM/.test(site.doctor.registration) && reg.length > 0;

export const REVIEWER_LINE = `Medically reviewed by ${site.doctor.name}, ${site.doctor.qualifications[3]}, ${site.brand}, ${site.address.city}.`;

export function factsParagraph(): string {
  return `${site.doctor.name}, ${site.doctor.role} in ${site.address.city} with ${site.doctor.experienceYears} years of experience. OPD: ${hoursDisplay}, Sunday closed. Booking is on WhatsApp only: https://wa.me/${site.whatsapp}. Phone ${site.phones.primary}. ${site.emergency}`;
}

export function keyFacts(): string[] {
  const a = site.address;
  const facts = [
    `${site.brand}: heart, lung and vascular surgery in ${a.city}, India.`,
    `Doctor: ${site.doctor.name}, ${site.doctor.role}, ${site.doctor.experienceYears} years of experience.`,
    `Qualifications: ${site.doctor.qualifications.join("; ")}.`,
  ];
  if (REG_CONFIRMED) facts.push(`Registration: ${reg}.`);
  facts.push(
    `Address: ${a.line1}, ${a.line2}, ${a.city}, ${a.region} ${a.postalCode}, India.`,
    `Phones: ${phonesDisplay.primary} and ${phonesDisplay.secondary}. WhatsApp: ${site.whatsapp}.`,
    `Hours: ${hoursDisplay}; Sunday closed.`,
    `Languages: English and Hindi.`,
    `Consultation fee: ${site.privateFacts.consultation_fee}.`,
    `Surgery cost: ${site.privateFacts.surgery_cost}.`,
    `Directions: ${site.maps.link}`
  );
  return facts;
}

const QUESTIONS: [string, string][] = [
  ["Do I need a referral to see a heart surgeon?", "/"],
  ["Is bypass surgery better than a stent?", "/treatments/bypass-surgery/"],
  ["When is angioplasty advised?", "/treatments/angioplasty/"],
  ["Can a leaky heart valve be repaired?", "/treatments/valve-surgery/"],
  ["What is minimally invasive heart surgery?", "/treatments/minimally-invasive-surgery/"],
  ["Can children have heart surgery safely?", "/treatments/childrens-heart-surgery/"],
  ["What is vascular surgery?", "/treatments/vascular-surgery/"],
  ["What does lung and chest surgery cover?", "/treatments/lung-and-chest-surgery/"],
  ["Should I get a second opinion before heart surgery?", "/treatments/check-ups-second-opinion/"],
  ["What happens at a follow-up visit after surgery?", "/treatments/follow-up-care/"],
  ["Which heart symptoms need urgent care?", "/symptoms/"],
  ["What should I bring to my first visit?", "/your-first-visit/"],
  ["How do I book a consultation?", "/contact/"],
  ["How much does a consultation cost?", "/contact/"],
];

export function questionsSection(): string {
  return QUESTIONS.map(([q, u]) => `- ${q}: ${abs(u)}`).join("\n");
}

/** Markdown body -> plain text: strip markup, comments, [CONFIRM] markers. */
export function toPlainText(md: string): string {
  return md
    .replace(/<!--[\s\S]*?-->/g, " ")
    .replace(CONFIRM, "")
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/[*_`>#-]+/g, " ")
    .replace(/\s+/g, " ")
    .replace(/\s+([,.;:!?])/g, "$1")
    .trim();
}

/** Every indexable page as a llms-full block. */
export function fullBlocks(): string {
  const pages = loadPages();
  const blocks = pages.map((p) => {
    const c = loadContent(contentFileForUrl(p.url));
    const t = toPlainText(c.body);
    const reviewed = c.lastReviewed ? `Last reviewed: ${c.lastReviewed}` : "";
    return [
      "=".repeat(60),
      `PAGE: ${c.title}`,
      `URL: ${abs(p.url)}`,
      reviewed,
      t,
    ]
      .filter(Boolean)
      .join("\n");
  });
  return blocks.join("\n\n");
}
