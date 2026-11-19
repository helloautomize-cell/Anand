import Link from "next/link";
import { waLink } from "@/lib/whatsapp";
import { phonesDisplay, TEL_PRIMARY, MAIL_PRIMARY } from "@/lib/site";
import { ReviewedBy } from "@/components/reviewed";
export function DisclaimerPage() {
  return (
    <>
      <section className="lg-hero" id="lg-hero" data-hdr="l">
        {" "}
        <div className="wrap">
          {" "}
          <div className="crumb">
            <Link href="/">Home</Link>
            <i></i>
            <span>Legal</span>
          </div>{" "}
          <h1>
            Medical <em>disclaimer.</em>
          </h1>{" "}
          <p>
            Please read this before relying on anything on this website for decisions
            about your health.
          </p>{" "}
          <div className="meta">
            <span>Last updated 19 November 2026</span>
            <span>Anand Heart Center Bhopal</span>
            <span className="chip">Lawyer review pending</span>
          </div>{" "}
          <div className="lg-tabs">
            <Link href="/privacy-policy/" className="">
              Privacy policy
            </Link>
            <Link href="/terms-of-use/" className="">
              Terms of use
            </Link>
            <Link href="/medical-disclaimer/" className="on">
              Medical disclaimer
            </Link>
          </div>{" "}
        </div>{" "}
      </section>{" "}
      <div className="wrap lg-body">
        {" "}
        <nav className="lg-toc" id="lgtoc">
          <a href="#general-information-only">General information only</a>
          <a href="#every-person-is-different">Every person is different</a>
          <a href="#interactive-tools">Interactive tools</a>
          <a href="#no-guarantee-of-results">No guarantee of results</a>
          <a href="#emergencies">Emergencies</a>
          <a href="#regulatory-information">Regulatory information</a>
          <a href="#contact-us">Contact us</a>
          <div className="bar">
            <i id="lgbar"></i>
          </div>
        </nav>{" "}
        <article className="lg-art" id="lgart">
          <div className="lg-note">
            <b>In short:</b> this website explains, a consultation decides. In an
            emergency call 108 or 112.
          </div>
          <section id="general-information-only">
            <h2>General information only</h2>
            <p>
              Everything on this website, including treatment pages, symptom guides,
              checklists and FAQs, is general information for education. It is not a
              diagnosis, a treatment plan or a substitute for a consultation with a
              qualified doctor who has examined you.
            </p>
          </section>
          <section id="every-person-is-different">
            <h2>Every person is different</h2>
            <p>
              Whether a treatment is suitable, and what recovery looks like, depends on
              your own condition, tests and overall health. The descriptions on this
              website are typical and will not apply to everyone.
            </p>
          </section>
          <section id="interactive-tools">
            <h2>Interactive tools</h2>
            <p>
              The "Is this for me?" checklists and symptom tools only help you decide
              whether to talk to a doctor. They do not assess risk and their results are
              not medical advice. Your answers are not stored or sent unless you choose to
              send them.
            </p>
          </section>
          <section id="no-guarantee-of-results">
            <h2>No guarantee of results</h2>
            <p>
              No surgery or procedure has a guaranteed result. Benefits and risks are
              explained to you in person before any treatment, and the decision is always
              yours.
            </p>
          </section>
          <section id="emergencies">
            <h2>Emergencies</h2>
            <p>
              If you have sudden chest pain, severe breathlessness, fainting or signs of a
              stroke, do not use this website or wait for an appointment. Call 108 or 112
              and go to the nearest emergency department straight away.
            </p>
          </section>
          <section id="regulatory-information">
            <h2>Regulatory information</h2>
            <p>
              Dr. Anand Yadav is registered with the Madhya Pradesh Medical Council.
              Registration number MP729. <span className="chip">Confirm</span>
            </p>
            <p>
              This website follows the National Medical Commission guidelines on
              professional conduct, and does not publish patient testimonials, rankings or
              outcome claims.
            </p>
          </section>
          <section id="contact-us">
            <h2>Contact us</h2>
            <p>
              Anand Heart Center Bhopal, 4th Floor, Vindhya Retreat, Plot No. 5, Near Gut
              Hospital, Janki Nagar, Chuna Bhatti, Bhopal, Madhya Pradesh 462016.
              <br />
              Phone <a href={TEL_PRIMARY}>{phonesDisplay.primary}</a> · Email{" "}
              <a href={MAIL_PRIMARY}>info@anandheartcenter.com</a>
            </p>
          </section>
        </article>{" "}
      </div>{" "}
      <section className="wrap" data-hdr="l" id="cta">
        {" "}
        <div className="cta" data-rv={true}>
          {" "}
          <div className="glow"></div>{" "}
          <svg className="e" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path
              d="M0 60h420l14-16 14 16h20l12-50 16 90 12-40h692"
              fill="none"
              stroke="#FF9A9B"
              strokeWidth="2"
            />
          </svg>{" "}
          <span className="lab">Questions?</span>{" "}
          <h2>
            Talk to
            <br />
            <em>the clinic.</em>
          </h2>{" "}
          <p>Call or WhatsApp during OPD hours and we will help.</p>{" "}
          <div className="acts">
            {" "}
            <a
              className="btn b-red"
              data-cur={true}
              href={waLink(
                "Hello, I would like to book a consultation with Dr. Anand Yadav."
              )}
              target="_blank"
              rel="noopener"
            >
              Book a consultation
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
            <a className="btn b-line" href={TEL_PRIMARY}>
              Call {phonesDisplay.primary}
            </a>{" "}
          </div>{" "}
        </div>{" "}
        <div className="emc">
          <svg width="20" height="20" viewBox="0 0 24 24" style={{ flex: "none" }}>
            <path d="M12 3l10 18H2z" fill="none" stroke="#D23133" strokeWidth="2" />
            <path
              d="M12 10v5M12 17.5v.5"
              stroke="#D23133"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <span>
            <b>Medical emergency? Call 108 or 112.</b> Go to the nearest emergency
            department first.
          </span>
        </div>{" "}
      <ReviewedBy url="/medical-disclaimer/" medical={false} />
      </section>
    </>
  );
}
