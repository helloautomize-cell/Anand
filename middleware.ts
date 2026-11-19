import { NextResponse, type NextRequest } from "next/server";
import { SITE_URL } from "@/lib/site";

const CANONICAL_HOST = new URL(SITE_URL).host;

const GONE = [
  /^\/feed\/?$/i,
  /^\/wp-json(\/|$)/i,
  /^\/xmlrpc\.php/i,
  /^\/wp-content(\/|$)/i,
  /^\/wp-includes(\/|$)/i,
  /^\/wp-admin(\/|$)/i,
];

export function middleware(req: NextRequest) {
  const host = req.headers.get("host") ?? "";

  if (
    host &&
    host !== CANONICAL_HOST &&
    !host.startsWith("localhost") &&
    !host.startsWith("127.0.0.1")
  ) {
    const url = req.nextUrl.clone();
    url.host = CANONICAL_HOST;
    url.protocol = "https";
    url.port = "";
    return NextResponse.redirect(url, 308);
  }

  if (GONE.some((re) => re.test(req.nextUrl.pathname))) {
    return new NextResponse("410 Gone\n", {
      status: 410,
      headers: { "Content-Type": "text/plain; charset=utf-8", "X-Robots-Tag": "noindex" },
    });
  }
  return NextResponse.next();
}

export const config = {
  matcher: "/((?!_next/static|_next/image|img/|icon|apple-icon|favicon).*)",
};
