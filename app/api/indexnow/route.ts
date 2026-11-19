import { NextResponse, type NextRequest } from "next/server";
import { SITE_URL, seo } from "@/lib/site";
import { loadPages } from "@/lib/content";

export const dynamic = "force-dynamic";

const ENGINE = "https://api.indexnow.org/indexnow";

export async function POST(req: NextRequest) {
  const auth = req.headers.get("authorization") ?? "";
  const secret = process.env.CRON_SECRET;
  if (!secret || auth !== `Bearer ${secret}`) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  const all = req.nextUrl.searchParams.get("all") === "1";
  const urls = loadPages().map((p) => `${SITE_URL}${p.url}`);

  // Without per-URL lastmod from the live sitemap, submit everything on the
  // weekly cron run or when ?all=1 is passed; otherwise submit nothing new.
  const submit = all || new Date().getDay() === 0 ? urls : [];

  if (!submit.length) {
    return NextResponse.json({ submitted: 0, reason: "no recent changes" });
  }

  const res = await fetch(ENGINE, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({
      host: new URL(SITE_URL).host,
      key: seo.indexNowKey,
      keyLocation: `${SITE_URL}/${seo.indexNowKey}.txt`,
      urlList: submit,
    }),
  });

  return NextResponse.json(
    { submitted: submit.length, engine: res.status },
    { status: res.ok ? 200 : 502 }
  );
}
