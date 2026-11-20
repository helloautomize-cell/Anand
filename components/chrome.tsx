import Link from "next/link";
import { waLink, WA_HOME } from "@/lib/whatsapp";
import { phonesDisplay, site, TEL_PRIMARY } from "@/lib/site";
export function UtilBar() {
  return (
    <div className="util">
      {" "}
      <div className="wrap">
        {" "}
        <span className="em">
          <i></i>Medical emergency? Call <b>108</b> or <b>112</b>
        </span>{" "}
        <span className="r">
          <span className="h">Mon to Sat, 10 am to 7:30 pm</span>
          <a className="t" href={TEL_PRIMARY}>
            {phonesDisplay.primary}
          </a>
          <span className="ts" aria-label="Text size">
            <button id="tsA" className="on" aria-label="Normal text, A">
              A
            </button>
            <button id="tsB" aria-label="Larger text, A+">
              A+
            </button>
          </span>
        </span>{" "}
      </div>{" "}
    </div>
  );
}

export function Overlays() {
  return (
    <>
      <div id="intro" aria-hidden="true">
        {" "}
        <svg viewBox="0 0 200 180">
          {" "}
          <path
            className="h1"
            d="M100 168C40 124 8 92 8 56 8 28 30 8 56 8c20 0 36 12 44 28 8-16 24-28 44-28 26 0 48 20 48 48 0 36-32 68-92 112Z"
          />{" "}
          <path
            className="h2"
            d="M100 132C66 106 48 88 48 66c0-16 12-28 27-28 12 0 21 7 25 16 4-9 13-16 25-16 15 0 27 12 27 28 0 22-18 40-52 66Z"
          />{" "}
          <path className="x" d="M100 70v34M83 87h34" />{" "}
        </svg>{" "}
      </div>{" "}
      <div id="prog"></div>{" "}
      <div className="cur" aria-hidden="true">
        <div className="hring">
          <b>Book</b>
        </div>
      </div>
    </>
  );
}

export function Footer() {
  return (
    <footer data-hdr="d">
      {" "}
      <div className="wrap">
        {" "}
        <div className="fcols">
          {" "}
          <div>
            <img src="/img/logo-white.webp" alt="Anand Heart Center Bhopal" width="170" height="75" loading="lazy" decoding="async" />
            <p>
              {`${site.address.line1}, ${site.address.line2}, ${site.address.city} ${site.address.postalCode}`}
            </p>
          </div>{" "}
          <div>
            <h2 className="fh">Treatments</h2>
            <ul>
              <li>
                <Link href="/treatments/bypass-surgery/">Bypass surgery</Link>
              </li>
              <li>
                <Link href="/treatments/valve-surgery/">Valve surgery</Link>
              </li>
              <li>
                <Link href="/treatments/angioplasty/">Angioplasty</Link>
              </li>
              <li>
                <Link href="/treatments/vascular-surgery/">Vascular surgery</Link>
              </li>
              <li>
                <Link href="/treatments/lung-and-chest-surgery/">Lung and chest</Link>
              </li>
              <li>
                <Link href="/treatments/childrens-heart-surgery/">Children's hearts</Link>
              </li>
              <li>
                <Link href="/treatments/">All treatments</Link>
              </li>
            </ul>
          </div>{" "}
          <div>
            <h2 className="fh">Patients</h2>
            <ul>
              <li>
                <Link href="/your-first-visit/">Your first visit</Link>
              </li>
              <li>
                <Link href="/about/">About Dr. Anand</Link>
              </li>
              <li>
                <Link href="/treatments/check-ups-second-opinion/">Second opinion</Link>
              </li>
              <li>
                <Link href="/treatments/follow-up-care/">After surgery</Link>
              </li>
              <li>
                <Link href="/contact/">Contact and visit</Link>
              </li>
            </ul>
          </div>{" "}
          <div>
            <h2 className="fh">Legal</h2>
            <ul>
              <li>
                <Link href="/privacy-policy/">Privacy policy</Link>
              </li>
              <li>
                <Link href="/terms-of-use/">Terms of use</Link>
              </li>
              <li>
                <Link href="/medical-disclaimer/">Medical disclaimer</Link>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/anandheartcenterbhopal"
                  target="_blank"
                  rel="noopener"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>{" "}
        </div>{" "}
        <div className="fbot">
          <span>
            © 2026 Anand Heart Center Bhopal. Information on this site is general and not
            a substitute for medical advice.
          </span>
          <span>Medical emergency? Call 108 or 112</span>
          <span>
            Powered by{" "}
            <a href="https://www.automizemedialabs.com/" target="_blank" rel="noopener nofollow">
              Automize Media Labs
            </a>
          </span>
        </div>{" "}
      </div>{" "}
    </footer>
  );
}

export function MobileBar() {
  return (
    <div className="mbar" id="mbar">
      <a href={TEL_PRIMARY}>Call</a>
      <a href={WA_HOME} target="_blank" rel="noopener">
        WhatsApp
      </a>
      <a
        href={waLink("Hello, I would like to book a consultation with Dr. Anand Yadav.")}
        target="_blank"
        rel="noopener"
      >
        Book a visit
      </a>
    </div>
  );
}
