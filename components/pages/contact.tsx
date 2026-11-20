import Link from "next/link";
import { waLink, DEFAULT_MESSAGE } from "@/lib/whatsapp";
import { phonesDisplay, TEL_PRIMARY, TEL_SECONDARY, MAIL_PRIMARY } from "@/lib/site";
import { ReviewedBy } from "@/components/reviewed";
export function ContactPage() {
  return (
    <>
      <section className="ct-hero" id="ct-hero" data-hdr="l">
        {" "}
        <div className="wrap ct-hg">
          {" "}
          <div>
            {" "}
            <div className="ct-crumb ct-fade">
              <Link href="/">Home</Link>
              <i></i>
              <span>Contact</span>
            </div>{" "}
            <h1 className="ct-fade" style={{ "--d": ".1s" }}>
              Come and
              <br />
              <em>see us.</em>
            </h1>{" "}
            <p className="lead ct-fade" style={{ "--d": ".3s" }}>
              One clinic, one address, and a team that answers the phone. Call, send a
              WhatsApp message or walk in during OPD hours, and bring your reports.
            </p>{" "}
            <div className="ct-stat ct-fade" id="ctstat" style={{ "--d": ".4s" }}>
              <i></i>
              <span>Open Mon to Sat, 10 am to 7:30 pm</span>
            </div>{" "}
            <div className="ct-acts ct-fade" style={{ "--d": ".55s" }}>
              {" "}
              <a className="ct-act" data-cur={true} href={TEL_PRIMARY}>
                <svg viewBox="0 0 24 24">
                  <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
                </svg>
                <span>
                  <small>Call</small>
                  <b>{phonesDisplay.primary}</b>
                </span>
              </a>{" "}
              <a
                className="ct-act red"
                data-cur={true}
                href={waLink(
                  "Hello, I would like to book a consultation with Dr. Anand Yadav."
                )}
                target="_blank"
                rel="noopener"
              >
                <svg viewBox="0 0 24 24">
                  <path d="M4 20l1.3-4A8 8 0 1 1 8.4 19Z" />
                  <path d="M9 9.5c0 3 2.5 5.5 5.5 5.5l1-1.6-2-1-1 .8a4 4 0 0 1-2.2-2.2l.8-1-1-2Z" />
                </svg>
                <span>
                  <small>WhatsApp</small>
                  <b>Book a visit</b>
                </span>
              </a>{" "}
              <a
                className="ct-act"
                data-cur={true}
                href="https://maps.app.goo.gl/tNvRcRyR8Bai2jP29"
                target="_blank"
                rel="noopener"
              >
                <svg viewBox="0 0 24 24">
                  <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z" />
                  <circle cx="12" cy="9.5" r="2.5" />
                </svg>
                <span>
                  <small>Directions</small>
                  <b>Open in Maps</b>
                </span>
              </a>{" "}
            </div>{" "}
          </div>{" "}
          <div className="ct-ph ct-fade" style={{ "--d": ".15s" }}>
            {" "}
            <div className="arch">
              <img
                src="/img/clinic-door.webp"
                alt="Glass entrance door of Anand Heart Center with the red heart logo"
                fetchPriority="high"
              />
            </div>{" "}
            <div className="ct-gl g1">
              <div>
                <small>Look for</small>
                <b>The glass door with the red heart, 4th floor</b>
              </div>
            </div>{" "}
            <div className="ct-gl g2">
              <div>
                <small>Landmark</small>
                <b>Vindhya Retreat, near Gut Hospital</b>
              </div>
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      <section id="ct-find" data-hdr="l">
        {" "}
        <div className="wrap">
          {" "}
          <div className="shead">
            {" "}
            <div>
              <span className="lab">Find us</span>
              <h2 style={{ marginTop: "18px" }}>
                <span className="ln">
                  <span>Everything you need</span>
                </span>
                <span className="ln">
                  <span>
                    to <em>get here.</em>
                  </span>
                </span>
              </h2>
            </div>{" "}
            <p className="sub" data-rv={true}>
              Address, hours and numbers in one place. Booking ahead saves you waiting.
            </p>{" "}
          </div>{" "}
          <div className="ct-bento">
            {" "}
            <div className="ct-b ct-map" data-io={true}>
              {" "}
              <div className="ct-mw" id="ctmw">
                <svg
                  viewBox="0 0 520 360"
                  preserveAspectRatio="xMidYMid slice"
                  aria-hidden="true"
                >
                  {" "}
                  <rect className="bl" x="40" y="40" width="120" height="80" rx="10" />
                  <rect className="bl" x="200" y="30" width="140" height="70" rx="10" />
                  <rect className="bl" x="380" y="60" width="110" height="110" rx="10" />
                  <rect className="bl" x="60" y="200" width="110" height="120" rx="10" />
                  <rect
                    className="bl"
                    x="220"
                    y="210"
                    width="120"
                    height="100"
                    rx="10"
                  />{" "}
                  <path className="rd" d="M-20 160H560M180 -20V380M360 -20v400" />
                  <path
                    className="rd2"
                    d="M-20 60c120 20 200 10 280-20M180 270h360M40 380c40-80 120-110 140-110"
                  />{" "}
                  <path className="rt" pathLength="1" d="M-10 160H180V270H300" />{" "}
                  <circle className="halo" cx="300" cy="250" r="12" />
                  <path
                    className="pin"
                    d="M300 268s-16-14-16-27a16 16 0 0 1 32 0c0 13-16 27-16 27Z"
                  />
                  <circle cx="300" cy="241" r="5" fill="#fff" />{" "}
                  <text x="200" y="152">
                    Chuna Bhatti
                  </text>
                  <text x="300" y="196">
                    Janki Nagar
                  </text>
                  <text x="214" y="296">
                    Near Gut Hospital
                  </text>{" "}
                </svg>
                <iframe
                  title="Map showing Anand Heart Center, Vindhya Retreat, Bhopal"
                  data-src="https://maps.google.com/maps?q=Anand%20Heart%20Center%2C%20Vindhya%20Retreat%2C%20Janki%20Nagar%2C%20Chuna%20Bhatti%2C%20Bhopal%20462016&z=16&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  tabIndex={-1}
                ></iframe>
                <button className="ct-tap" id="cttap" type="button">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M9 11V5a2 2 0 0 1 4 0v5l4.5.9a2 2 0 0 1 1.6 2.3l-.9 5.1A2 2 0 0 1 16.2 20H11a2 2 0 0 1-1.6-.8L6 14.6a1.6 1.6 0 0 1 2.3-2.2L9 13" />
                  </svg>
                  Tap to use the map
                </button>
              </div>{" "}
              <div className="inf">
                <span className="k">Address</span>
                <h3>Vindhya Retreat, 4th floor</h3>
                <p>
                  Plot No. 5, Near Gut Hospital, Janki Nagar, Chuna Bhatti, Bhopal, Madhya
                  Pradesh 462016
                </p>
                <a
                  className="btn b-red b-sm"
                  data-cur={true}
                  href="https://maps.app.goo.gl/tNvRcRyR8Bai2jP29"
                  target="_blank"
                  rel="noopener"
                >
                  Get directions
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
                </a>
              </div>{" "}
            </div>{" "}
            <div className="ct-b ct-hrs" data-rv={true}>
              <span className="k">OPD hours</span>
              <h3 id="cthh">Monday to Saturday, 10 am to 7:30 pm</h3>
              <div className="ct-week" id="ctweek">{["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d) => (
                <div key={d} className={d === "Sun" ? "off" : ""}><b>{d}</b><span>{d === "Sun" ? "Closed" : "10 to 7:30"}</span></div>
              ))}</div>
              <div className="ct-day">
                <i id="ctdi"></i>
                <b id="ctdb"></b>
              </div>
              <div className="ct-dl">
                <span>10 am</span>
                <span id="ctnow"></span>
                <span>7:30 pm</span>
              </div>
            </div>{" "}
            <div className="ct-b ct-ph2" data-rv={true}>
              <span className="k">Phone</span>
              <a href={TEL_PRIMARY}>{phonesDisplay.primary}</a>
              <p>Call and WhatsApp</p>
              <a href={TEL_SECONDARY}>{phonesDisplay.secondary}</a>
              <p>Call</p>
              <button className="ct-cp" data-copy="+91 91119 50821">
                Copy number
              </button>
            </div>{" "}
            <div className="ct-b ct-em" data-rv={true}>
              <span className="k">Email</span>
              <a
                href={MAIL_PRIMARY}
                style={{
                  fontSize: "clamp(1.15rem,1.5vw,1.4rem)",
                  wordBreak: "break-all",
                }}
              >
                info@anandheartcenter.com
              </a>
              <p>
                For reports and non-urgent questions. Please do not email in an emergency.
              </p>
              <button className="ct-cp" data-copy="info@anandheartcenter.com">
                Copy email
              </button>
            </div>{" "}
            <div className="ct-b ct-x" data-rv={true}>
              <div>
                <span className="k">Medical emergency</span>
                <h3>Do not wait for the clinic.</h3>
                <p>
                  For sudden chest pain, severe breathlessness or fainting, call 108 or
                  112 and go to the nearest emergency department.
                </p>
              </div>
              <a href="tel:108" aria-label="Call 108">
                108
              </a>
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      <section id="ct-way" data-hdr="l">
        {" "}
        <div className="wrap ct-wh">
          <div>
            <span className="lab">Your visit</span>
            <h2 style={{ marginTop: "18px" }}>
              <span className="ln">
                <span>From hello</span>
              </span>
              <span className="ln">
                <span>
                  to a <em>clear plan.</em>
                </span>
              </span>
            </h2>
          </div>
          <div className="ct-nb">
            <button id="ctpv" aria-label="Previous">
              <svg viewBox="0 0 16 16">
                <path d="M13 8H3M7 4 3 8l4 4" />
              </svg>
            </button>
            <button id="ctnx" aria-label="Next">
              <svg viewBox="0 0 16 16">
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </button>
          </div>
        </div>{" "}
        <div className="ct-car" id="ctcar">
          {" "}
          <div className="ct-wc">
            <div className="im">
              <svg viewBox="0 0 100 100">
                <path d="M20 80l4-14A34 34 0 1 1 36 78Z" />
                <path className="r" d="M36 46h8l4-8 6 16 4-8h8" />
              </svg>
            </div>
            <div className="tx">
              <span className="k">Book</span>
              <h3>Send a message</h3>
              <p>
                Call or WhatsApp with your name and what is worrying you. The clinic
                suggests a time that suits you.
              </p>
            </div>
          </div>{" "}
          <div className="ct-wc">
            <div className="im">
              <img
                src="/img/reception-desk.webp"
                alt="Reception desk at Anand Heart Center"
                loading="lazy"
              />
            </div>
            <div className="tx">
              <span className="k">Arrive</span>
              <h3>Find the 4th floor</h3>
              <p>
                Take the lift at Vindhya Retreat to the 4th floor and look for the red
                heart. Reception will check you in.
              </p>
            </div>
          </div>{" "}
          <div className="ct-wc">
            <div className="im">
              <img
                src="/img/waiting-hall.webp"
                alt="Calm waiting area at the clinic"
                loading="lazy"
              />
            </div>
            <div className="tx">
              <span className="k">Settle in</span>
              <h3>A calm place to wait</h3>
              <p>
                Bring a family member if you like. Many decisions about the heart are
                family decisions.
              </p>
            </div>
          </div>{" "}
          <div className="ct-wc">
            <div className="im">
              <img src="/img/consult-room.webp" alt="Consultation room" loading="lazy" />
            </div>
            <div className="tx">
              <span className="k">Consult</span>
              <h3>Sit down with Dr. Yadav</h3>
              <p>
                He listens first, then goes through your reports with you in plain words,
                in Hindi or English.
              </p>
            </div>
          </div>{" "}
          <div className="ct-wc">
            <div className="im">
              <svg viewBox="0 0 100 100">
                <rect x="22" y="14" width="56" height="74" rx="8" />
                <path d="M34 34h32M34 46h22" />
                <path className="r" d="M34 64l8 8 18-18" />
              </svg>
            </div>
            <div className="tx">
              <span className="k">Leave</span>
              <h3>With a clear plan</h3>
              <p>
                You leave knowing your options, the next step, and how to reach the clinic
                with questions later.
              </p>
            </div>
          </div>{" "}
        </div>{" "}
        <div className="ct-bar">
          <i id="ctbar"></i>
        </div>{" "}
      </section>{" "}
      <section id="ct-book" data-hdr="l">
        {" "}
        <div className="wrap ct-fw">
          {" "}
          <div className="side">
            {" "}
            <span className="lab">Ask for a time</span>
            <h2 style={{ marginTop: "18px" }}>
              <span className="ln">
                <span>Book in</span>
              </span>
              <span className="ln">
                <span>
                  <em>a minute.</em>
                </span>
              </span>
            </h2>{" "}
            <p>
              Fill this in and it opens WhatsApp with your message ready to send. Nothing
              is stored on this website.
            </p>{" "}
            <div className="ct-bubh">
              <i></i>Your message preview
            </div>{" "}
            <div className="ct-bub" id="ctbub"></div>{" "}
          </div>{" "}
          <form className="ct-form" id="ctform" noValidate={true}>
            {" "}
            <div className="ct-row">
              <label className="f">
                Your name
                <input id="cfn" autoComplete="name" placeholder="Full name" />
              </label>
              <label className="f">
                Phone
                <input
                  id="cfp"
                  autoComplete="tel"
                  inputMode="tel"
                  placeholder="10 digit mobile"
                />
              </label>
            </div>{" "}
            <div>
              <div className="ct-gl2" style={{ marginBottom: "10px" }}>
                What is it about?
              </div>
              <div className="ct-chips" id="cfr">
                <button type="button" className="on">
                  First consultation
                </button>
                <button type="button">Report review</button>
                <button type="button">Second opinion</button>
                <button type="button">Follow-up after surgery</button>
                <button type="button">My child's heart</button>
                <button type="button">Something else</button>
              </div>
            </div>{" "}
            <div className="ct-row">
              <label className="f">
                Preferred day<select id="cfd"><option>Any day</option></select>
              </label>
              <label className="f">
                Preferred time
                <select id="cft">
                  <option>Morning</option>
                  <option>Afternoon</option>
                  <option>Evening</option>
                </select>
              </label>
            </div>{" "}
            <label className="f">
              Anything we should know? (optional)
              <textarea
                id="cfm"
                placeholder="For example: chest pain on walking for two weeks, angiography done last month"
              ></textarea>
            </label>{" "}
            <button className="btn b-red" data-cur={true} type="submit">
              Send on WhatsApp
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
            </button>{" "}
            <span className="note">
              The clinic replies during OPD hours to confirm your time. In an emergency
              call 108 or 112.
            </span>{" "}
            <noscript>
              <span className="note">
                To book without JavaScript,{" "}
                <a href={waLink(DEFAULT_MESSAGE)} target="_blank" rel="noopener">
                  send a WhatsApp message
                </a>{" "}
                or <a href={TEL_PRIMARY}>call {phonesDisplay.primary}</a>.
              </span>
            </noscript>{" "}
          </form>{" "}
        </div>{" "}
      </section>{" "}
      <section
        id="faq"
        className="sec"
        data-hdr="l"
        style={{ paddingTop: "0", paddingBottom: "110px" }}
      >
        {" "}
        <div className="wrap fgrid">
          {" "}
          <div className="side">
            <span className="lab">Questions</span>
            <h2 style={{ marginTop: "18px" }}>
              <span className="ln">
                <span>Before you</span>
              </span>
              <span className="ln">
                <span>
                  <em>come in.</em>
                </span>
              </span>
            </h2>
            <p>
              Anything else? Call or WhatsApp {phonesDisplay.primary} during clinic hours.
            </p>
          </div>{" "}
          <div>
            {" "}
            <details open={true}>
              <summary>
                Do I need a referral to see Dr. Yadav?<i></i>
              </summary>
              <div className="a">
                No. You can book directly by phone or WhatsApp. If another doctor has
                written a letter or notes, please bring them.{" "}
                <span className="chip">Confirm</span>
              </div>
            </details>{" "}
            <details>
              <summary>
                What should I bring to my first visit?<i></i>
              </summary>
              <div className="a">
                All earlier reports: ECG, echo, TMT, blood tests, angiography CD or
                report, discharge summaries, and a list of the medicines you take now.
              </div>
            </details>{" "}
            <details>
              <summary>
                Does every heart problem need surgery?<i></i>
              </summary>
              <div className="a">
                No. Many heart and vessel problems are managed with medicines and
                lifestyle changes. Surgery or a procedure is advised only when it is the
                right option for you, and the reasons are explained first.
              </div>
            </details>{" "}
            <details>
              <summary>
                Can a family member come with me?<i></i>
              </summary>
              <div className="a">
                Yes. Many decisions about the heart are family decisions, and we are happy
                to explain everything to them too.
              </div>
            </details>{" "}
            <details>
              <summary>
                Is insurance or Ayushman Bharat accepted?<i></i>
              </summary>
              <div className="a">
                Please call the clinic to check your plan before your visit.{" "}
                <span className="chip">Confirm schemes</span>
              </div>
            </details>{" "}
            <details>
              <summary>
                What if it is an emergency?<i></i>
              </summary>
              <div className="a">
                For sudden chest pain, severe breathlessness, fainting or signs of a
                stroke, call 108 or 112 straight away and go to the nearest emergency
                department. Do not wait for a clinic appointment.
              </div>
            </details>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
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
          <span className="lab">Ready when you are</span>{" "}
          <h2>
            See you
            <br />
            <em>soon.</em>
          </h2>{" "}
          <p>
            Call or WhatsApp during OPD hours. Bring your reports and a family member if
            you like.
          </p>{" "}
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
      <ReviewedBy url="/contact/" medical={false} />
      </section>
    </>
  );
}
