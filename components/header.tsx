"use client";
import Link from "next/link";
import { waLink } from "@/lib/whatsapp";

export function Header() {
  return (
    <header className="hdr" id="hdr">
      {" "}
      <div className="wrap">
        {" "}
        <div className="bar">
          {" "}
          <Link href="/" className="logo" aria-label="Anand Heart Center Bhopal, home">
            <img className="c" src="/img/logo.webp" alt="Anand Heart Center Bhopal" width="170" height="75" />
            <img className="w" src="/img/logo-white.webp" alt="" width="170" height="75" />
          </Link>{" "}
          <nav className="nav" aria-label="Main">
            <div className="dd">
              <button
                className="ddb"
                type="button"
                aria-expanded="false"
                aria-haspopup="true"
              >
                Treatments
                <svg className="chev" viewBox="0 0 12 12" aria-hidden="true">
                  <path d="M3 4.5 6 7.5 9 4.5" />
                </svg>
              </button>
              <div className="mega">
                <div className="in">
                  <div className="gr">
                    <Link className="mi" href="/treatments/bypass-surgery/">
                      <span className="ic">
                        <svg viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M12 20s-7-4.4-7-9.3A3.8 3.8 0 0 1 12 8.5a3.8 3.8 0 0 1 7 2.2C19 15.6 12 20 12 20Z" />
                          <path className="r" d="M14.5 4.5c3.5 1.7 3.2 7-.5 10" />
                        </svg>
                      </span>
                      <span>
                        <b>Bypass surgery</b>
                        <small>Blocked heart arteries</small>
                      </span>
                    </Link>
                    <Link className="mi" href="/treatments/angioplasty/">
                      <span className="ic">
                        <svg viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M2 9c4 0 5 2 10 2s6-2 10-2M2 15c4 0 5-2 10-2s6 2 10 2" />
                          <path className="r" d="M8 10.5l2 4M11 11l2 3.6M14 10.8l2 3.8" />
                        </svg>
                      </span>
                      <span>
                        <b>Angioplasty and stents</b>
                        <small>Opening a narrowed artery</small>
                      </span>
                    </Link>
                    <Link className="mi" href="/treatments/valve-surgery/">
                      <span className="ic">
                        <svg viewBox="0 0 24 24" aria-hidden="true">
                          <circle cx="12" cy="12" r="8.5" />
                          <path
                            className="r"
                            d="M12 12 6.5 8.8M12 12l5.5-3.2M12 12v6.4"
                          />
                        </svg>
                      </span>
                      <span>
                        <b>Valve repair and replacement</b>
                        <small>Leaking or narrow valves</small>
                      </span>
                    </Link>
                    <Link className="mi" href="/treatments/childrens-heart-surgery/">
                      <span className="ic">
                        <svg viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M12 18.5s-5.5-3.4-5.5-7.3A3 3 0 0 1 12 9.5a3 3 0 0 1 5.5 1.7c0 3.9-5.5 7.3-5.5 7.3Z" />
                          <path className="r" d="M5 4.5l1 1.5M19 4.5 18 6M12 3v2" />
                        </svg>
                      </span>
                      <span>
                        <b>Children's heart surgery</b>
                        <small>Conditions present from birth</small>
                      </span>
                    </Link>
                    <Link className="mi" href="/treatments/minimally-invasive-surgery/">
                      <span className="ic">
                        <svg viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M6 4c-1.5 5-1.5 11 0 16M18 4c1.5 5 1.5 11 0 16" />
                          <path className="r" d="M12 7v10M10 9h4M10 12h4M10 15h4" />
                        </svg>
                      </span>
                      <span>
                        <b>Minimally invasive surgery</b>
                        <small>Smaller cuts where suitable</small>
                      </span>
                    </Link>
                    <Link className="mi" href="/treatments/vascular-surgery/">
                      <span className="ic">
                        <svg viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M9 2c-.5 6-1 13 0 20M15 2c.5 6 .2 13 1 20" />
                          <path className="r" d="M13 4c-3 3-3 9 .5 12" />
                        </svg>
                      </span>
                      <span>
                        <b>Vascular surgery</b>
                        <small>Leg arteries, veins, aneurysms</small>
                      </span>
                    </Link>
                    <Link className="mi" href="/treatments/lung-and-chest-surgery/">
                      <span className="ic">
                        <svg viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M10 6C7 6 4 10 3.5 15c-.3 3 1 5 3 5 1.8 0 3-1.2 3-3V7.5M14 6c3 0 6 4 6.5 9 .3 3-1 5-3 5-1.8 0-3-1.2-3-3V7.5" />
                          <path
                            className="r"
                            d="M12 2v5M12 7c-.6.4-1.5.4-2 1M12 7c.6.4 1.5.4 2 1"
                          />
                        </svg>
                      </span>
                      <span>
                        <b>Lung and chest surgery</b>
                        <small>Lungs, pleura, chest wall</small>
                      </span>
                    </Link>
                    <Link className="mi" href="/treatments/check-ups-second-opinion/">
                      <span className="ic">
                        <svg viewBox="0 0 24 24" aria-hidden="true">
                          <rect x="5" y="4" width="11" height="15" rx="2" />
                          <path d="M8 8h5M8 11h3" />
                          <circle className="r" cx="15.5" cy="15.5" r="3.3" />
                          <path className="r" d="M18 18l3 3" />
                        </svg>
                      </span>
                      <span>
                        <b>Check-ups and second opinion</b>
                        <small>Start here, bring reports</small>
                      </span>
                    </Link>
                    <Link className="mi" href="/treatments/follow-up-care/">
                      <span className="ic">
                        <svg viewBox="0 0 24 24" aria-hidden="true">
                          <rect x="3.5" y="5" width="17" height="15" rx="2.5" />
                          <path d="M3.5 9.5h17M8 3v4M16 3v4" />
                          <path className="r" d="M8.5 14.5l2.3 2.3 4.7-4.7" />
                        </svg>
                      </span>
                      <span>
                        <b>Follow-up care</b>
                        <small>Recovery, rehab, reviews</small>
                      </span>
                    </Link>
                  </div>
                  <div className="side">
                    <span className="k">Not sure?</span>
                    <h4>
                      Start with what
                      <br />
                      you <em>feel.</em>
                    </h4>
                    <p>Answer one question and see the treatments that usually help.</p>
                    <div className="sl">
                      <Link href="/treatments/#treatments">
                        Treatment finder<span>&rarr;</span>
                      </Link>
                      <Link href="/treatments/">
                        All treatments<span>&rarr;</span>
                      </Link>
                      <a
                        className="rd"
                        href={waLink(
                          "Hello, I would like a second opinion from Dr. Anand Yadav."
                        )}
                        target="_blank"
                        rel="noopener"
                      >
                        Second opinion on WhatsApp<span>&rarr;</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Link href="/symptoms/">Symptoms</Link>
            <Link href="/your-first-visit/">Your first visit</Link>
            <Link href="/about/">Dr. Anand</Link>
            <Link href="/contact/">Contact</Link>
          </nav>{" "}
          <button
            className="mtog"
            type="button"
            aria-label="Open menu"
            aria-expanded="false"
            aria-controls="mm"
          >
            <i></i>
          </button>
          <a
            className="btn b-red b-sm"
            data-cur={true}
            aria-label="Book a consultation on WhatsApp"
            href={waLink(
              "Hello, I would like to book a consultation with Dr. Anand Yadav."
            )}
            target="_blank"
            rel="noopener"
          >
            <span className="tx">Book a consultation</span>
            <span className="ar">
              <svg viewBox="0 0 16 16">
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
              </svg>
              <svg viewBox="0 0 16 16">
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
              </svg>
            </span>
          </a>{" "}
        </div>{" "}
      </div>{" "}
    </header>
  );
}
