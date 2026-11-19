import { site } from "@/lib/site";

export const WA_HOME = `https://wa.me/${site.whatsapp}`;

/** Prefix with `?text=` — append encodeURIComponent(message). Used by page scripts. */
export const WA_PREFIX = `${WA_HOME}?text=`;

export function waLink(message: string): string {
  return `${WA_HOME}?text=${encodeURIComponent(message)}`;
}

export const DEFAULT_MESSAGE =
  "Hello, I would like to book a consultation with Dr. Anand Yadav.";

export function pageMessage(context: string): string {
  return `Hello, I am reading about ${context} on your website. I would like to book a consultation with Dr. Anand Yadav.`;
}

export function symptomMessage(symptom: string): string {
  return `Hello, I have ${symptom} and would like to consult Dr. Anand Yadav.`;
}

export function checklistMessage(treatment: string, ticks: string[]): string {
  const list = ticks.length ? ` These apply to me: ${ticks.join("; ")}.` : "";
  return `Hello, I am reading about ${treatment} on your website.${list} I would like to book a consultation with Dr. Anand Yadav.`;
}
