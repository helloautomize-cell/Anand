"use client";
import Link from "next/link";
import { waLink } from "@/lib/whatsapp";
import { TEL_PRIMARY } from "@/lib/site";

export function MobileMenu() {
  return (
    <div className="mm" id="mm" aria-label="Menu">
      <div className="mm-top">
        <Link href="/">
          <img src="/img/logo-white.png" alt="Anand Heart Center Bhopal" />
        </Link>
        <button className="mm-x" type="button" aria-label="Close menu">
          &times;
        </button>
      </div>
      <nav>
        <Link href="/" className="on">
          Home
        </Link>
        <button className="mm-tb" type="button" aria-expanded="false">
          Treatments
          <svg className="chev" viewBox="0 0 12 12" aria-hidden="true">
            <path d="M3 4.5 6 7.5 9 4.5" />
          </svg>
        </button>
        <div className="mm-tl">
          <Link className="mm-t" href="/treatments/bypass-surgery/">
            <span className="ic">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 20s-7-4.4-7-9.3A3.8 3.8 0 0 1 12 8.5a3.8 3.8 0 0 1 7 2.2C19 15.6 12 20 12 20Z" />
                <path className="r" d="M14.5 4.5c3.5 1.7 3.2 7-.5 10" />
              </svg>
            </span>
            Bypass surgery
          </Link>
          <Link className="mm-t" href="/treatments/angioplasty/">
            <span className="ic">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M2 9c4 0 5 2 10 2s6-2 10-2M2 15c4 0 5-2 10-2s6 2 10 2" />
                <path className="r" d="M8 10.5l2 4M11 11l2 3.6M14 10.8l2 3.8" />
              </svg>
            </span>
            Angioplasty and stents
          </Link>
          <Link className="mm-t" href="/treatments/valve-surgery/">
            <span className="ic">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="8.5" />
                <path className="r" d="M12 12 6.5 8.8M12 12l5.5-3.2M12 12v6.4" />
              </svg>
            </span>
            Valve repair and replacement
          </Link>
          <Link className="mm-t" href="/treatments/childrens-heart-surgery/">
            <span className="ic">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 18.5s-5.5-3.4-5.5-7.3A3 3 0 0 1 12 9.5a3 3 0 0 1 5.5 1.7c0 3.9-5.5 7.3-5.5 7.3Z" />
                <path className="r" d="M5 4.5l1 1.5M19 4.5 18 6M12 3v2" />
              </svg>
            </span>
            Children's heart surgery
          </Link>
          <Link className="mm-t" href="/treatments/minimally-invasive-surgery/">
            <span className="ic">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6 4c-1.5 5-1.5 11 0 16M18 4c1.5 5 1.5 11 0 16" />
                <path className="r" d="M12 7v10M10 9h4M10 12h4M10 15h4" />
              </svg>
            </span>
            Minimally invasive surgery
          </Link>
          <Link className="mm-t" href="/treatments/vascular-surgery/">
            <span className="ic">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M9 2c-.5 6-1 13 0 20M15 2c.5 6 .2 13 1 20" />
                <path className="r" d="M13 4c-3 3-3 9 .5 12" />
              </svg>
            </span>
            Vascular surgery
          </Link>
          <Link className="mm-t" href="/treatments/lung-and-chest-surgery/">
            <span className="ic">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M10 6C7 6 4 10 3.5 15c-.3 3 1 5 3 5 1.8 0 3-1.2 3-3V7.5M14 6c3 0 6 4 6.5 9 .3 3-1 5-3 5-1.8 0-3-1.2-3-3V7.5" />
                <path
                  className="r"
                  d="M12 2v5M12 7c-.6.4-1.5.4-2 1M12 7c.6.4 1.5.4 2 1"
                />
              </svg>
            </span>
            Lung and chest surgery
          </Link>
          <Link className="mm-t" href="/treatments/check-ups-second-opinion/">
            <span className="ic">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="5" y="4" width="11" height="15" rx="2" />
                <path d="M8 8h5M8 11h3" />
                <circle className="r" cx="15.5" cy="15.5" r="3.3" />
                <path className="r" d="M18 18l3 3" />
              </svg>
            </span>
            Check-ups and second opinion
          </Link>
          <Link className="mm-t" href="/treatments/follow-up-care/">
            <span className="ic">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="3.5" y="5" width="17" height="15" rx="2.5" />
                <path d="M3.5 9.5h17M8 3v4M16 3v4" />
                <path className="r" d="M8.5 14.5l2.3 2.3 4.7-4.7" />
              </svg>
            </span>
            Follow-up care
          </Link>
          <Link className="mm-t all" href="/treatments/">
            All treatments &rarr;
          </Link>
        </div>
        <Link href="/symptoms/">Symptoms</Link>
        <Link href="/your-first-visit/">Your first visit</Link>
        <Link href="/about/">Dr. Anand</Link>
        <Link href="/contact/">Contact</Link>
      </nav>
      <div className="mm-cta">
        <a href={TEL_PRIMARY}>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          Call
        </a>
        <a
          className="rd"
          href={waLink(
            "Hello, I would like to book a consultation with Dr. Anand Yadav."
          )}
          target="_blank"
          rel="noopener"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          </svg>
          Book on WhatsApp
        </a>
      </div>
      <p className="em">
        Mon to Sat, 10 am to 7:30 pm. Medical emergency? Call <b>108</b> or <b>112</b>.
      </p>
    </div>
  );
}
