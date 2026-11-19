import { SITE_URL, isIndexable, site } from "@/lib/site";

export const dynamic = "force-static";

const BOTS = [
  "Googlebot",
  "Googlebot-Image",
  "Google-Extended",
  "Bingbot",
  "Applebot",
  "Applebot-Extended",
  "DuckDuckBot",
  "YandexBot",
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "anthropic-ai",
  "PerplexityBot",
  "Perplexity-User",
  "Meta-ExternalAgent",
  "Amazonbot",
  "CCBot",
  "cohere-ai",
  "MistralAI-User",
  "YouBot",
  "Diffbot",
  "Bytespider",
];

export function GET() {
  if (!isIndexable) {
    return new Response("User-agent: *\nDisallow: /\n", {
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
  }
  const lines = [
    `# ${site.agencyCredit}`,
    "User-agent: *",
    "Allow: /",
    "Disallow: /api/",
    "",
    ...BOTS.map((b) => `User-agent: ${b}\nAllow: /`),
    "",
    `Sitemap: ${SITE_URL}/sitemap.xml`,
    `# LLM guide: ${SITE_URL}/llms.txt`,
    `# Full content: ${SITE_URL}/llms-full.txt`,
    "",
  ];
  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
