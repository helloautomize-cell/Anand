import { waLink } from "@/lib/whatsapp";
import { phonesDisplay, TEL_PRIMARY } from "@/lib/site";
import { ReviewedBy } from "@/components/reviewed";
export function AboutPage() {
  return (
    <>
      <section className="ab-hero" id="ab-hero" data-hdr="l">
        {" "}
        <div className="wrap">
          {" "}
          <div className="ab-hg">
            {" "}
            <div>
              {" "}
              <span className="lab ab-fade" style={{ "--d": ".1s" }}>
                <b>●</b> About Dr. Anand Yadav
              </span>{" "}
              <h1>
                <span className="ln">
                  <span>A heart surgeon</span>
                </span>
                <span className="ln">
                  <span>who came</span>
                </span>
                <span className="ln">
                  <span>
                    <em>home.</em>
                  </span>
                </span>
              </h1>{" "}
              <p className="lead ab-fade" style={{ "--d": ".5s" }}>
                <b>Dr. Anand Yadav</b>, MCh CTVS, FACC, is a cardiothoracic and vascular
                surgeon with 25 years of experience. He trained in Bhopal, Mumbai, Jaipur
                and Australia, and today sees patients at Anand Heart Center in Bhopal,
                his home city.
              </p>{" "}
              <div className="ab-acts ab-fade" style={{ "--d": ".7s" }}>
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
                <a className="btn b-line" href="#ab-train">
                  Read his story
                </a>{" "}
              </div>{" "}
            </div>{" "}
            <div className="ab-por" id="abpor">
              {" "}
              <div className="ab-arch">
                <img
                  src="/img/dr-anand-yadav.webp"
                  alt="Dr. Anand Yadav, cardiothoracic and vascular surgeon"
                  id="abimg"
                />
              </div>{" "}
              <svg
                className="ab-outline"
                viewBox="0 0 532 657"
                preserveAspectRatio="none"
              >
                <path
                  pathLength="1"
                  d="M16 380V266A250 250 0 0 1 516 266V607a34 34 0 0 1-34 34H50a34 34 0 0 1-34-34z"
                />
                <circle cx="16" cy="380" r="5" />
              </svg>{" "}
              <div className="ab-name">
                <div>
                  <b>Dr. Anand Yadav</b>
                  <span>Cardiothoracic and vascular surgeon</span>
                </div>
                <i>Bhopal</i>
              </div>{" "}
              <div className="ab-tag t1">
                <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                  <span className="ic">
                    <svg viewBox="0 0 24 24">
                      <path d="M12 20s-7-4.6-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.4-7 10-7 10Z" />
                    </svg>
                  </span>
                  <span>
                    <b>25 years</b>
                    <small>in surgery</small>
                  </span>
                </div>
              </div>{" "}
              <div className="ab-tag t2">
                <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                  <span className="ic">
                    <svg viewBox="0 0 24 24">
                      <path d="M3 9l9-5 9 5-9 5-9-5Z" />
                      <path d="M7 11v5c3 2 7 2 10 0v-5" />
                    </svg>
                  </span>
                  <span>
                    <b>MCh CTVS</b>
                    <small>SMS Medical College, Jaipur</small>
                  </span>
                </div>
              </div>{" "}
              <div className="ab-tag t3">
                <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                  <span className="ic">
                    <svg viewBox="0 0 24 24">
                      <circle cx="12" cy="10" r="6" />
                      <path d="M8.5 15 7 22l5-3 5 3-1.5-7" />
                    </svg>
                  </span>
                  <span>
                    <b>FACC</b>
                    <small>American College of Cardiology</small>
                  </span>
                </div>
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        <div className="ab-mq" aria-hidden="true">
          <div id="abmq"></div>
        </div>{" "}
      </section>{" "}
      <section id="ab-why" data-hdr="l">
        {" "}
        <div className="stage">
          {" "}
          <div className="q" aria-hidden="true">
            &ldquo;
          </div>{" "}
          <div className="ab-wbox">
            {" "}
            <span className="lab">Why he opened the clinic</span>{" "}
            <p id="abw">
              The hardest part for most patients is not the surgery. It is knowing *who*
              to see, and *what* they really need. Anand Heart Center was opened for that
              conversation: an honest opinion, based on your needs. Sometimes that is
              surgery. Sometimes it is *not.*
            </p>{" "}
            <div className="ab-wsig" id="abwsig">
              <img src="/img/dr-anand-yadav.webp" alt="" />
              <span>Dr. Anand Yadav, in his own words, edited for the site</span>
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      <section id="ab-train" data-hdr="l">
        {" "}
        <div className="wrap">
          {" "}
          <div className="ab-thead">
            {" "}
            <div>
              <span className="lab">His training</span>
              <h2 style={{ marginTop: "18px" }}>
                <span className="ln">
                  <span>The making of a</span>
                </span>
                <span className="ln">
                  <span>
                    <em>heart surgeon.</em>
                  </span>
                </span>
              </h2>
            </div>{" "}
            <p className="sub" data-rv={true}>
              From medical school in Bhopal to heart surgery training in Jaipur and
              Australia. Every step brought him closer to the patients he sees today.
            </p>{" "}
          </div>{" "}
          <div className="ab-tg">
            {" "}
            <div className="ab-tstage">
              {" "}
              <div className="ab-tcard">
                {" "}
                <div className="ab-tdot">
                  <span>His path</span>
                  <b id="abtk">Bhopal</b>
                </div>{" "}
                <div className="ab-till" id="abtill">
                  <svg viewBox="0 0 150 110">
                    <path d="M20 90V40l55-22 55 22v50" />
                    <path d="M10 90h130" />
                    <path d="M38 90V48M58 90V48M92 90V48M112 90V48" />
                    <path className="r" d="M75 30v14M68 37h14" />
                  </svg>
                  <svg viewBox="0 0 150 110">
                    <path d="M25 95V45h100v50" />
                    <path d="M55 95V68a20 20 0 0 1 40 0v27" />
                    <path d="M20 45l10-14h90l10 14" />
                    <path d="M40 31V20M110 31V20M60 31V22M90 31V22" />
                    <path d="M15 95h120" />
                    <path className="r" d="M66 58h18" />
                  </svg>
                  <svg viewBox="0 0 150 110">
                    <path d="M30 100V50l15-12 15 12 15-24 15 24 15-12 15 12v50" />
                    <path d="M45 100V62M60 100V58M75 100V48M90 100V58M105 100V62" />
                    <path d="M20 100h110" />
                    <path className="r" d="M75 30v-14" />
                    <circle className="r" cx="75" cy="12" r="3" />
                  </svg>
                  <svg viewBox="0 0 150 110">
                    <path d="M20 98V36h110v62" />
                    <path d="M14 98h122" />
                    <path d="M36 52h14M36 68h14M100 52h14M100 68h14" />
                    <path d="M62 98V74h26v24" />
                    <path className="r" d="M75 46v18M66 55h18" />
                  </svg>
                  <svg viewBox="0 0 150 110">
                    <path d="M10 80c30-10 60-34 98-46l18-4c6 0 6 6 0 8L36 76l-8 10-8 2z" />
                    <path d="M64 52L50 30h10l26 14M78 66l8 24h-10L60 72" />
                    <path className="r" d="M100 96c10-12 30-12 40 0" />
                  </svg>
                  <svg viewBox="0 0 150 110">
                    <path d="M30 98V54l45-34 45 34v44" />
                    <path d="M20 62l55-42 55 42" />
                    <path d="M14 98h122" />
                    <path
                      className="r"
                      d="M75 86s-16-10-16-20a8 8 0 0 1 16-4 8 8 0 0 1 16 4c0 10-16 20-16 20Z"
                    />
                  </svg>
                  <svg viewBox="0 0 150 110">
                    <path d="M14 98h122" />
                    <path d="M22 98V60h30v38M60 98V44h30v54M98 98V68h30v30" />
                    <path className="r" d="M75 22v14M68 29h14" />
                    <path className="r" d="M37 72v10M32 77h10M113 78v10M108 83h10" />
                  </svg>
                </div>{" "}
                <div className="ab-tbig" id="abtbig">
                  <span>Bhopal</span>
                  <span>Mumbai</span>
                  <span>Jaipur</span>
                  <span>BMHRC</span>
                  <span>Australia</span>
                  <span>Punjab</span>
                  <span>Home</span>
                </div>{" "}
              </div>{" "}
              <div className="ab-rail" id="abrail">
                <button type="button">Bhopal</button>
                <button type="button">Mumbai</button>
                <button type="button">Jaipur</button>
                <button type="button">BMHRC</button>
                <button type="button">Australia</button>
                <button type="button">Punjab</button>
                <button type="button">Home</button>
              </div>{" "}
            </div>{" "}
            <div className="ab-chs" id="abchs">
              <i className="fill" id="abfill"></i>
              <div className="ab-ch">
                <svg className="mill" viewBox="0 0 150 110">
                  <path d="M20 90V40l55-22 55 22v50" />
                  <path d="M10 90h130" />
                  <path d="M38 90V48M58 90V48M92 90V48M112 90V48" />
                  <path className="r" d="M75 30v14M68 37h14" />
                </svg>
                <span className="k">1996 · Bhopal</span>
                <h3>MBBS</h3>
                <p>
                  Medical school at Gandhi Medical College, Bhopal. Where the doctor in
                  him began.
                </p>
                <span className="inst">Gandhi Medical College, Bhopal</span>
              </div>
              <div className="ab-ch">
                <svg className="mill" viewBox="0 0 150 110">
                  <path d="M25 95V45h100v50" />
                  <path d="M55 95V68a20 20 0 0 1 40 0v27" />
                  <path d="M20 45l10-14h90l10 14" />
                  <path d="M40 31V20M110 31V20M60 31V22M90 31V22" />
                  <path d="M15 95h120" />
                  <path className="r" d="M66 58h18" />
                </svg>
                <span className="k">Mumbai</span>
                <h3>MS and DNB, General Surgery</h3>
                <p>
                  Surgical training at Grant Medical College and the J.J. Group of
                  Hospitals, then the DNB. The steady hands of a surgeon.
                </p>
                <span className="inst">Grant Medical College and J.J. Hospital</span>
              </div>
              <div className="ab-ch">
                <svg className="mill" viewBox="0 0 150 110">
                  <path d="M30 100V50l15-12 15 12 15-24 15 24 15-12 15 12v50" />
                  <path d="M45 100V62M60 100V58M75 100V48M90 100V58M105 100V62" />
                  <path d="M20 100h110" />
                  <path className="r" d="M75 30v-14" />
                  <circle className="r" cx="75" cy="12" r="3" />
                </svg>
                <span className="k">2008 · Jaipur</span>
                <h3>MCh, Cardiothoracic and Vascular Surgery</h3>
                <p>
                  Super-specialist training to operate on the heart, lungs and blood
                  vessels themselves.
                </p>
                <span className="inst">SMS Medical College, Jaipur</span>
              </div>
              <div className="ab-ch">
                <svg className="mill" viewBox="0 0 150 110">
                  <path d="M20 98V36h110v62" />
                  <path d="M14 98h122" />
                  <path d="M36 52h14M36 68h14M100 52h14M100 68h14" />
                  <path d="M62 98V74h26v24" />
                  <path className="r" d="M75 46v18M66 55h18" />
                </svg>
                <span className="k">Bhopal</span>
                <h3>Consultant, BMHRC</h3>
                <p>
                  Years of operating and caring for patients at Bhopal Memorial Hospital
                  and Research Centre, in his own city.
                </p>
                <span className="inst">Bhopal Memorial Hospital and Research Centre</span>
              </div>
              <div className="ab-ch">
                <svg className="mill" viewBox="0 0 150 110">
                  <path d="M10 80c30-10 60-34 98-46l18-4c6 0 6 6 0 8L36 76l-8 10-8 2z" />
                  <path d="M64 52L50 30h10l26 14M78 66l8 24h-10L60 72" />
                  <path className="r" d="M100 96c10-12 30-12 40 0" />
                </svg>
                <span className="k">2011 · South Australia</span>
                <h3>Fellowship in adult cardiac surgery</h3>
                <p>
                  Advanced adult heart surgery, learnt alongside surgical teams abroad.
                </p>
                <span className="inst">
                  South Australia &nbsp;<em className="chip">Confirm hospital</em>
                </span>
              </div>
              <div className="ab-ch">
                <svg className="mill" viewBox="0 0 150 110">
                  <path d="M14 98h122" />
                  <path d="M22 98V60h30v38M60 98V44h30v54M98 98V68h30v30" />
                  <path className="r" d="M75 22v14M68 29h14" />
                  <path className="r" d="M37 72v10M32 77h10M113 78v10M108 83h10" />
                </svg>
                <span className="k">Punjab</span>
                <h3>Consultant, Max Hospitals</h3>
                <p>
                  Heart surgery at Max Hospitals, Punjab, including setting up a new heart
                  surgery unit there.
                </p>
                <span className="inst">
                  Max Hospitals, Punjab &nbsp;<em className="chip">Confirm years</em>
                </span>
              </div>
              <div className="ab-ch">
                <svg className="mill" viewBox="0 0 150 110">
                  <path d="M30 98V54l45-34 45 34v44" />
                  <path d="M20 62l55-42 55 42" />
                  <path d="M14 98h122" />
                  <path
                    className="r"
                    d="M75 86s-16-10-16-20a8 8 0 0 1 16-4 8 8 0 0 1 16 4c0 10-16 20-16 20Z"
                  />
                </svg>
                <span className="k">2013 · Bhopal</span>
                <h3>He came home</h3>
                <p>
                  Back to Bhopal for good: surgery at the city's hospitals, teaching, and
                  later a clinic of his own.
                </p>
                <span className="inst">Anand Heart Center, Bhopal</span>
              </div>
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      <section id="ab-led" data-hdr="l">
        {" "}
        <div className="wrap">
          {" "}
          <div className="ab-shead">
            {" "}
            <div>
              <span className="lab">Qualifications</span>
              <h2 style={{ marginTop: "18px" }}>
                <span className="ln">
                  <span>Every qualification,</span>
                </span>
                <span className="ln">
                  <span>
                    <em>in full.</em>
                  </span>
                </span>
              </h2>
            </div>{" "}
            <p className="sub" data-rv={true}>
              Degrees, training and memberships, exactly as they are. You can verify a
              doctor's registration with the state medical council.
            </p>{" "}
          </div>{" "}
          <div className="ab-ltab">
            <div className="ab-row" data-rv={true} style={{ "--d": "0.00s" }}>
              <div className="dg">MBBS</div>
              <div className="in">
                Gandhi Medical College<small>Barkatullah University</small>
              </div>
              <div className="pl">Bhopal</div>
              <span className="mk">
                <svg viewBox="0 0 24 24">
                  <path d="M3 9l9-5 9 5-9 5-9-5Z" />
                  <path d="M7 11v5c3 2 7 2 10 0v-5" />
                </svg>
              </span>
            </div>
            <div className="ab-row" data-rv={true} style={{ "--d": "0.06s" }}>
              <div className="dg">MS, General Surgery</div>
              <div className="in">
                Grant Medical College and the J.J. Group of Hospitals
              </div>
              <div className="pl">Mumbai</div>
              <span className="mk">
                <svg viewBox="0 0 24 24">
                  <path d="M3 9l9-5 9 5-9 5-9-5Z" />
                  <path d="M7 11v5c3 2 7 2 10 0v-5" />
                </svg>
              </span>
            </div>
            <div className="ab-row" data-rv={true} style={{ "--d": "0.12s" }}>
              <div className="dg">DNB, General Surgery</div>
              <div className="in">National Board of Examinations</div>
              <div className="pl">India</div>
              <span className="mk">
                <svg viewBox="0 0 24 24">
                  <path d="M3 9l9-5 9 5-9 5-9-5Z" />
                  <path d="M7 11v5c3 2 7 2 10 0v-5" />
                </svg>
              </span>
            </div>
            <div className="ab-row" data-rv={true} style={{ "--d": "0.18s" }}>
              <div className="dg">MCh, CTVS</div>
              <div className="in">
                SMS Medical College<small>Cardiothoracic and vascular surgery</small>
              </div>
              <div className="pl">Jaipur</div>
              <span className="mk">
                <svg viewBox="0 0 24 24">
                  <path d="M3 9l9-5 9 5-9 5-9-5Z" />
                  <path d="M7 11v5c3 2 7 2 10 0v-5" />
                </svg>
              </span>
            </div>
            <div className="ab-row" data-rv={true} style={{ "--d": "0.24s" }}>
              <div className="dg">Fellowship</div>
              <div className="in">
                Adult cardiac surgery
                <small>
                  <span className="chip">Confirm hospital</span>
                </small>
              </div>
              <div className="pl">South Australia</div>
              <span className="mk">
                <svg viewBox="0 0 24 24">
                  <circle cx="12" cy="10" r="6" />
                  <path d="M8.5 15 7 22l5-3 5 3-1.5-7" />
                </svg>
              </span>
            </div>
            <div className="ab-row" data-rv={true} style={{ "--d": "0.30s" }}>
              <div className="dg">FACC</div>
              <div className="in">
                Fellow of the American College of Cardiology
                <small>
                  <span className="chip">Confirm year</span>
                </small>
              </div>
              <div className="pl">United States</div>
              <span className="mk">
                <svg viewBox="0 0 24 24">
                  <circle cx="12" cy="10" r="6" />
                  <path d="M8.5 15 7 22l5-3 5 3-1.5-7" />
                </svg>
              </span>
            </div>
            <div className="ab-row" data-rv={true} style={{ "--d": "0.36s" }}>
              <div className="dg">Registration</div>
              <div className="in">
                Madhya Pradesh Medical Council
                <small>
                  Reg. no. MP729 <span className="chip">Confirm</span>
                </small>
              </div>
              <div className="pl">Madhya Pradesh</div>
              <span className="mk">
                <svg viewBox="0 0 24 24">
                  <path d="M5 3h14v18H5z" />
                  <path d="M9 8h6M9 12h6M9 16h3" />
                </svg>
              </span>
            </div>
          </div>{" "}
        </div>{" "}
      </section>{" "}
      <section id="ab-units" data-hdr="d">
        {" "}
        <div className="wrap">
          {" "}
          <div className="ab-uhead">
            {" "}
            <div>
              <span className="lab">Building heart care</span>
              <h2 style={{ marginTop: "18px" }}>
                <span className="ln">
                  <span>New heart units in</span>
                </span>
                <span className="ln">
                  <span>
                    <em>six hospitals.</em>
                  </span>
                </span>
              </h2>
            </div>{" "}
            <p data-rv={true}>
              Across Bhopal and Punjab, Dr. Yadav helped set up new heart surgery units
              and performed the first surgeries of their kind there, including at{" "}
              <b>Max Hospitals, Punjab</b>, where he was a consultant.
            </p>{" "}
          </div>{" "}
          <div className="ab-uviz" id="abuviz">
            {" "}
            <div className="ab-ucount" aria-hidden="true">
              <b id="abucnt">0</b>
            </div>{" "}
            <svg viewBox="0 0 1200 200" id="abusvg">
              {" "}
              <path className="base" id="abubase" />
              <path className="glow" id="abuglow" />
              <path className="live" id="abulive" /> <g id="abunodes"></g>{" "}
            </svg>{" "}
          </div>{" "}
          <div className="ab-unote">
            <span>Bhopal</span>
            <span>Punjab</span>
            <em className="chip">Confirm names of the other five hospitals</em>
          </div>{" "}
        </div>{" "}
      </section>{" "}
      <section id="ab-today" data-hdr="l">
        {" "}
        <div className="wrap">
          {" "}
          <div className="ab-shead">
            {" "}
            <div>
              <span className="lab">Today</span>
              <h2 style={{ marginTop: "18px" }}>
                <span className="ln">
                  <span>Where you will</span>
                </span>
                <span className="ln">
                  <span>
                    <em>find him.</em>
                  </span>
                </span>
              </h2>
            </div>{" "}
            <p className="sub" data-rv={true}>
              Consultations happen at the clinic. Surgery, teaching and visiting work
              happen at the hospitals below.
            </p>{" "}
          </div>{" "}
          <div className="ab-tdg">
            {" "}
            <div className="ab-clin" data-rv={true}>
              {" "}
              <img
                src="/img/consult-room.webp"
                alt="Consultation room at Anand Heart Center"
                loading="lazy"
              />{" "}
              <span className="badge" id="abopen">
                <i></i>
                <span>Open today</span>
              </span>{" "}
              <span className="k">Consultations</span> <h3>Anand Heart Center</h3>{" "}
              <p>
                Heart, lung and vascular clinic. 4th Floor, Vindhya Retreat, Plot No. 5,
                near Gut Hospital, Chuna Bhatti, Bhopal. Monday to Saturday, 10 am to 7:30
                pm.
              </p>{" "}
              <div className="acts">
                <a
                  className="btn b-red b-sm"
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
                </a>
                <a
                  className="btn b-line b-sm"
                  href="https://www.google.com/maps/search/?api=1&query=Anand+Heart+Center+Vindhya+Retreat+Chuna+Bhatti+Bhopal"
                  target="_blank"
                  rel="noopener"
                >
                  Get directions
                </a>
              </div>{" "}
            </div>{" "}
            <div className="ab-sides">
              {" "}
              <div className="ab-side" data-rv={true} style={{ "--d": ".1s" }}>
                {" "}
                <svg className="ill" viewBox="0 0 150 110">
                  <path d="M20 98V36h110v62" />
                  <path d="M14 98h122" />
                  <path d="M36 52h14M36 68h14M100 52h14M100 68h14" />
                  <path d="M62 98V74h26v24" />
                  <path className="r" d="M75 46v18M66 55h18" />
                </svg>{" "}
                <span className="k">Surgery and teaching</span>{" "}
                <h3>
                  JK Hospital and
                  <br />
                  LN Medical College
                </h3>{" "}
                <ul>
                  <li>
                    <span>
                      Cardiothoracic and vascular surgery
                      <small>JK Hospital, Bhopal</small>
                    </span>
                  </li>
                  <li>
                    <span>
                      Associate Professor, Department of General Surgery
                      <small>LN Medical College, Bhopal</small>
                    </span>
                  </li>
                </ul>{" "}
              </div>{" "}
              <div className="ab-side" data-rv={true} style={{ "--d": ".2s" }}>
                {" "}
                <svg className="ill" viewBox="0 0 150 110">
                  <path d="M14 98h122" />
                  <path d="M22 98V60h30v38M60 98V44h30v54M98 98V68h30v30" />
                  <path className="r" d="M75 22v14M68 29h14" />
                </svg>{" "}
                <span className="k">Visiting cardiac surgeon</span>{" "}
                <h3>
                  Two more hospitals
                  <br />
                  in Bhopal
                </h3>{" "}
                <ul>
                  <li>
                    <span>
                      Carewell Hospital<small>Bhopal</small>
                    </span>
                  </li>
                  <li>
                    <span>
                      Manoria Hospital<small>Bhopal</small>
                    </span>
                  </li>
                </ul>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <p className="ab-tnote">
            All appointments are booked through the clinic, on {phonesDisplay.primary}.
          </p>{" "}
        </div>{" "}
      </section>{" "}
      <section id="ab-scope" className="ab-scope auto" data-hdr="l">
        {" "}
        <div className="wrap ab-sg">
          {" "}
          <div>
            {" "}
            <span className="lab">What he treats</span>{" "}
            <h2 style={{ marginTop: "18px" }}>
              <span className="ln">
                <span>The full range of</span>
              </span>
              <span className="ln">
                <span>
                  <em>chest surgery.</em>
                </span>
              </span>
            </h2>{" "}
            <p className="sub" data-rv={true} style={{ marginTop: "20px" }}>
              Heart, lungs, blood vessels and children's hearts, all under one surgeon.
              You do not have to be passed between specialists.
            </p>{" "}
            <div className="ab-slist" id="abslist"></div>{" "}
          </div>{" "}
          <div className="ab-orb" id="aborb">
            {" "}
            <svg viewBox="0 0 600 600">
              {" "}
              <circle className="ring2" cx="300" cy="300" r="290" />{" "}
              <g className="rot">
                <circle className="ring2" cx="300" cy="300" r="150" />
                <circle cx="300" cy="150" r="3" fill="#D23133" />
              </g>{" "}
              <circle className="ring" cx="300" cy="300" r="230" />{" "}
              <circle
                className="arc"
                id="abarc"
                cx="300"
                cy="300"
                r="230"
                transform="rotate(-90 300 300)"
              />{" "}
              <g id="abnodes"></g>{" "}
            </svg>{" "}
            <div className="ab-ocenter" id="aboc">
              {" "}
              <svg className="heart" viewBox="0 0 24 24">
                <path d="M12 21s-8-5.3-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 10c0 5.7-8 11-8 11Z" />
              </svg>{" "}
              <div className="fd">
                <h3 id="abosh"></h3>
                <p id="abosp"></p>
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      <section id="ab-way" data-hdr="l">
        {" "}
        <div className="wrap">
          {" "}
          <div className="ab-shead">
            {" "}
            <div>
              <span className="lab">How he works</span>
              <h2 style={{ marginTop: "18px" }}>
                <span className="ln">
                  <span>Four things you</span>
                </span>
                <span className="ln">
                  <span>
                    can <em>expect.</em>
                  </span>
                </span>
              </h2>
            </div>{" "}
            <p className="sub" data-rv={true}>
              The same way of working at every consultation, whatever brings you in.
            </p>{" "}
          </div>{" "}
          <div className="ab-wg">
            {" "}
            <div data-rv={true}>
              <svg viewBox="0 0 58 58">
                <path d="M14 30a15 15 0 1 1 26 10c-3 3-4 6-4 10a5 5 0 0 1-10 0" />
                <path className="r" d="M24 26a5 5 0 0 1 10 0" />
              </svg>
              <h3>
                <em>Listen</em> first.
              </h3>
              <p>
                The first consultation is unhurried. Your story, your old reports and your
                worries come before any new test.
              </p>
            </div>{" "}
            <div data-rv={true} style={{ "--d": ".1s" }}>
              <svg viewBox="0 0 58 58">
                <path d="M29 6v46" />
                <path d="M12 16h34" />
                <path d="M12 16 5 32a8 8 0 0 0 14 0zM46 16l-7 16a8 8 0 0 0 14 0z" />
                <path className="r" d="M20 52h18" />
              </svg>
              <h3>
                The right <em>opinion.</em>
              </h3>
              <p>
                Advice is based on what you need. Sometimes that is surgery. Sometimes it
                is medicines, tests or simply watching closely.
              </p>
            </div>{" "}
            <div data-rv={true} style={{ "--d": ".2s" }}>
              <svg viewBox="0 0 58 58">
                <path d="M8 12h42v26H26l-10 9v-9H8z" />
                <path className="r" d="M17 22h24M17 29h15" />
              </svg>
              <h3>
                <em>Plain</em> words.
              </h3>
              <p>
                Your condition and every option explained clearly, with time for your
                family's questions.
              </p>
            </div>{" "}
            <div data-rv={true} style={{ "--d": ".3s" }}>
              <svg viewBox="0 0 58 58">
                <path d="M10 14h38v34H10z" />
                <path d="M10 22h38M20 8v10M38 8v10" />
                <path className="r" d="M21 35l6 6 11-12" />
              </svg>
              <h3>
                With you <em>after.</em>
              </h3>
              <p>
                Follow-up visits and recovery support through the clinic after any
                procedure.
              </p>
            </div>{" "}
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
          <span className="lab">Meet him</span>{" "}
          <h2>
            Sit down with
            <br />
            <em>Dr. Yadav.</em>
          </h2>{" "}
          <p>
            Bring your reports and your questions. The first consultation is unhurried, so
            you leave knowing your options.
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
      <ReviewedBy url="/about/" />
      </section>
    </>
  );
}
