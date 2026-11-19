import type { Metadata } from "next";
import Link from "next/link";
import { waLink, DEFAULT_MESSAGE } from "@/lib/whatsapp";
import { TEL_PRIMARY } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Page not found | Anand Heart Center Bhopal" },
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="nf" data-hdr="l">
      <div className="wrap">
        <h1>
          4<em>0</em>4.
        </h1>
        <p>
          This page does not exist, or it moved. The clinic itself is easy to reach, on
          WhatsApp or by phone during OPD hours.
        </p>
        <div className="row">
          <Link className="btn b-line" href="/">
            Back to home
          </Link>
          <a className="btn b-line" href={TEL_PRIMARY}>
            Call 091119 50821
          </a>
          <a
            className="btn b-red"
            href={waLink(DEFAULT_MESSAGE)}
            target="_blank"
            rel="noopener"
          >
            Book on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
