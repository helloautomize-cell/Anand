import Link from "next/link";
import { waLink, WA_HOME } from "@/lib/whatsapp";
import { phonesDisplay, TEL_PRIMARY } from "@/lib/site";
import DATA from "@/data/interactive.json";
import { ReviewedBy } from "@/components/reviewed";

const CHK = DATA.checklists["vascular-surgery"];
export function TreatmentVascularSurgeryPage() {
  return (
    <>
      <section className="tt-hero" id="tt-hero" data-hdr="l">
        {" "}
        <div className="wrap tt-hg">
          {" "}
          <div>
            {" "}
            <div className="tt-crumb tt-fade">
              <Link href="/treatments/">Treatments</Link>
              <i></i>
              <span>Vessels</span>
            </div>{" "}
            <h1>
              <span className="ln">
                <span>Vascular</span>
              </span>
              <span className="ln">
                <span>
                  <em>surgery.</em>
                </span>
              </span>
            </h1>{" "}
            <span className="aka tt-fade" style={{ "--d": ".35s" }}>
              Arteries · Veins · Aneurysms
            </span>{" "}
            <p className="lead tt-fade" style={{ "--d": ".45s" }}>
              Blocked arteries in the legs, swollen veins, weak bulging arteries called
              aneurysms and other vessel problems. Here is how they are treated, from
              medicines to surgery.
            </p>{" "}
            <div className="tt-acts tt-fade" style={{ "--d": ".6s" }}>
              <a className="btn b-line" href="#tt-me">
                Is this for me?
              </a>
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
              </a>
            </div>{" "}
          </div>{" "}
          <div className="tt-art tt-fade" style={{ "--d": ".15s" }}>
            {" "}
            <div className="disc"></div>{" "}
            <svg className="hring" viewBox="0 0 100 100">
              <g className="rot">
                <circle
                  cx="50"
                  cy="50"
                  r="49"
                  stroke="rgba(11,42,49,.14)"
                  strokeWidth=".2"
                  strokeDasharray=".6 1.6"
                />
                <circle cx="50" cy="1" r=".9" fill="#D23133" />
              </g>
            </svg>{" "}
            <svg className="main" viewBox="0 0 400 300">
              <path
                className="dw"
                pathLength="1"
                d="M160 20c-6 80-14 160-4 260M240 20c6 80 2 160 12 260"
              />
              <path
                className="r dw"
                pathLength="1"
                d="M210 40c16 20-16 34 0 54s-16 34 0 54-16 34 0 54-16 30 0 50"
                strokeWidth="3"
              />
              <path
                className="dw"
                pathLength="1"
                d="M180 30v240"
                strokeDasharray=".02 .03"
              />
              <circle className="r pul" cx="210" cy="148" r="6" />
            </svg>{" "}
            <div className="tt-fact f1">
              <div>
                <small>Often for</small>
                <b>Arteries and veins outside the heart</b>
              </div>
            </div>{" "}
            <div className="tt-fact f2">
              <div>
                <small>Where</small>
                <b>At the clinic and the hospital</b>
              </div>
            </div>{" "}
            <div className="tt-fact f3">
              <div>
                <small>Your choice</small>
                <b>Medicines first where they help</b>
              </div>
            </div>{" "}
          </div>{" "}
        </div>{" "}
        <div className="tt-mq" aria-hidden="true">
          <div id="ttmq"></div>
        </div>{" "}
      </section>{" "}
      <section id="tt-me" data-hdr="l">
        {" "}
        <div className="wrap">
          {" "}
          <div className="shead">
            {" "}
            <div>
              <span className="lab">Is this for me?</span>
              <h2 style={{ marginTop: "18px" }}>
                <span className="ln">
                  <span>Tick what sounds</span>
                </span>
                <span className="ln">
                  <span>
                    like <em>you.</em>
                  </span>
                </span>
              </h2>
            </div>{" "}
            <p className="sub" data-rv={true}>
              A quick way to see if this is worth discussing with Dr. Yadav. It is not a
              diagnosis, and nothing is sent unless you choose to.
            </p>{" "}
          </div>{" "}
          <div className="tt-mg">
            {" "}
            <div className="tt-list" id="ttlist">{CHK.check.map((c, i) => (
              <label key={i} data-rv={true} style={{ "--d": `${i * 0.05}s` }}><input type="checkbox" value={i} /><span className="bx"><svg viewBox="0 0 14 14"><path d="M2 7.5 5.5 11 12 3.5" /></svg></span><span>{c}</span></label>
            ))}</div>{" "}
            <div className="tt-res" id="ttres" data-rv={true}>
              {" "}
              <div className="tt-gauge">
                <svg viewBox="0 0 180 100">
                  <path className="bg" d="M14 92a76 76 0 0 1 152 0" />
                  <path
                    className="fg"
                    id="ttfg"
                    d="M14 92a76 76 0 0 1 152 0"
                    pathLength="1"
                    strokeDasharray="1"
                    strokeDashoffset="1"
                  />
                  <path
                    className="hp"
                    transform="translate(78 52)"
                    d="M12 21s-8-5.3-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 10c0 5.7-8 11-8 11Z"
                  />
                </svg>
              </div>{" "}
              <div className="fd">
                <h3 id="ttrh" dangerouslySetInnerHTML={{ __html: CHK.res[0][0] }} />
                <p id="ttrp">{CHK.res[0][1]}</p>
              </div>{" "}
              <div className="acts">
                <a
                  className="btn b-red b-sm"
                  id="ttwa"
                  data-cur={true}
                  target="_blank"
                  rel="noopener"
                  href={WA_HOME}
                >
                  Send this to the clinic
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
              <span className="note">
                General information, not a diagnosis. In an emergency call 108 or 112.
              </span>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      <section id="tt-story" data-hdr="l">
        {" "}
        <div className="wrap">
          {" "}
          <span className="lab">Step by step</span>{" "}
          <h2 style={{ marginTop: "18px" }}>
            <span className="ln">
              <span>Before, during</span>
            </span>
            <span className="ln">
              <span>
                and <em>after.</em>
              </span>
            </span>
          </h2>{" "}
          <div className="tt-sg">
            {" "}
            <div className="tt-sstage" id="ttstage">
              <div className="tt-stabs">
                <b>
                  <i></i>
                </b>
                <b>
                  <i></i>
                </b>
                <b>
                  <i></i>
                </b>
              </div>
              <svg viewBox="0 0 200 200" className="on">
                <rect pathLength="1" x="52" y="36" width="96" height="128" rx="12" />
                <path pathLength="1" d="M80 36v-8h40v8" />
                <path pathLength="1" d="M68 70h64M68 88h40" />
                <path
                  pathLength="1"
                  className="r"
                  d="M66 124h18l8-14 10 26 8-18 6 6h18"
                />
              </svg>
              <svg viewBox="0 0 200 200">
                <path
                  pathLength="1"
                  d="M80 20c-4 50-8 110 0 170M120 20c4 50 2 110 8 170"
                />
                <path
                  pathLength="1"
                  className="r"
                  d="M108 40c-30 30-30 90 4 120"
                  strokeWidth="2.6"
                />
                <circle pathLength="1" className="r" cx="108" cy="40" r="4" />
                <circle pathLength="1" className="r" cx="112" cy="160" r="4" />
              </svg>
              <svg viewBox="0 0 200 200">
                <path pathLength="1" d="M24 160c30-6 46-30 70-44s46-10 82-60" />
                <circle pathLength="1" className="r" cx="176" cy="56" r="8" />
                <path pathLength="1" d="M40 176h120" />
                <path
                  pathLength="1"
                  className="r"
                  d="M60 152l10-12M96 118l12-8M134 96l10-10"
                />
                <circle pathLength="1" cx="150" cy="40" r="14" />
              </svg>
              <div className="tt-sword">
                <span>Before</span>
                <span>During</span>
                <span>After</span>
              </div>
            </div>{" "}
            <div id="ttsps">
              <div className="tt-sp">
                <svg className="msvg" viewBox="0 0 200 200">
                  <rect x="52" y="36" width="96" height="128" rx="12" />
                  <path d="M80 36v-8h40v8" />
                  <path d="M68 70h64M68 88h40" />
                  <path className="r" d="M66 124h18l8-14 10 26 8-18 6 6h18" />
                </svg>
                <span className="k">Before</span>
                <h3>Finding the problem</h3>
                <ul>
                  <li>
                    <span>
                      <b>Tests:</b> Doppler scan, CT angiography and blood tests as
                      needed.
                    </span>
                  </li>
                  <li>
                    <span>
                      <b>Options:</b> medicines, walking programmes, a procedure or
                      surgery, explained side by side.
                    </span>
                  </li>
                  <li>
                    <span>
                      <b>Your decision:</b> taken with your family once you understand the
                      plan.
                    </span>
                  </li>
                </ul>
              </div>
              <div className="tt-sp">
                <svg className="msvg" viewBox="0 0 200 200">
                  <path d="M80 20c-4 50-8 110 0 170M120 20c4 50 2 110 8 170" />
                  <path className="r" d="M108 40c-30 30-30 90 4 120" strokeWidth="2.6" />
                  <circle className="r" cx="108" cy="40" r="4" />
                  <circle className="r" cx="112" cy="160" r="4" />
                </svg>
                <span className="k">On the day</span>
                <h3>The treatment</h3>
                <ul>
                  <li>
                    <span>
                      Depending on the problem, this may be a day procedure or an
                      operation.
                    </span>
                  </li>
                  <li>
                    <span>
                      A blocked artery may be bypassed with a graft or opened from inside.
                    </span>
                  </li>
                  <li>
                    <span>Veins may be treated to stop pain and swelling.</span>
                  </li>
                  <li>
                    <span>You will know beforehand which anaesthesia is used.</span>
                  </li>
                </ul>
              </div>
              <div className="tt-sp">
                <svg className="msvg" viewBox="0 0 200 200">
                  <path d="M24 160c30-6 46-30 70-44s46-10 82-60" />
                  <circle className="r" cx="176" cy="56" r="8" />
                  <path d="M40 176h120" />
                  <path className="r" d="M60 152l10-12M96 118l12-8M134 96l10-10" />
                  <circle cx="150" cy="40" r="14" />
                </svg>
                <span className="k">Afterwards</span>
                <h3>Recovery</h3>
                <ul>
                  <li>
                    <span>Walking is usually encouraged early.</span>
                  </li>
                  <li>
                    <span>Wound and foot care are taught before you go home.</span>
                  </li>
                  <li>
                    <span>Medicines to protect the vessels, taken every day.</span>
                  </li>
                  <li>
                    <span>Regular follow-up scans where needed.</span>
                  </li>
                </ul>
              </div>
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      <section id="tt-prac" data-hdr="l">
        {" "}
        <div className="wrap">
          {" "}
          <div className="shead">
            {" "}
            <div>
              <span className="lab">Practical</span>
              <h2 style={{ marginTop: "18px" }}>
                <span className="ln">
                  <span>Good to know</span>
                </span>
                <span className="ln">
                  <span>
                    <em>in advance.</em>
                  </span>
                </span>
              </h2>
            </div>{" "}
            <p className="sub" data-rv={true}>
              What to bring, who looks after you, and the questions worth asking.
            </p>{" "}
          </div>{" "}
          <div className="tt-bento">
            <div className="tt-b ba" data-rv={true}>
              <div className="ic">
                <svg viewBox="0 0 24 24">
                  <circle cx="9" cy="8" r="3.2" />
                  <path d="M3 20c0-3.4 2.7-6 6-6s6 2.6 6 6" />
                  <circle cx="17" cy="9" r="2.4" />
                  <path d="M16 14.2c2.8.3 5 2.5 5 5.8" />
                </svg>
              </div>
              <h3>
                Who looks
                <br />
                after you
              </h3>
              <ul>
                <li>Dr. Anand Yadav</li>
                <li>Anaesthetist</li>
                <li>Nurses</li>
                <li>Wound care team</li>
                <li>Physiotherapist</li>
              </ul>
              <div className="team">
                <span title="Dr. Anand Yadav">DA</span>
                <span title="Anaesthetist">AN</span>
                <span title="Nurses">NU</span>
                <span title="Wound care team">WC</span>
                <span title="Physiotherapist">PH</span>
              </div>
            </div>
            <div className="tt-b bb" data-rv={true}>
              <div className="ic">
                <svg viewBox="0 0 24 24">
                  <rect x="4" y="7" width="16" height="13" rx="3" />
                  <path d="M9 7V5a3 3 0 0 1 6 0v2M4 12h16" />
                </svg>
              </div>
              <h3>What to bring</h3>
              <ul>
                <li>Doppler or CT reports</li>
                <li>Sugar and kidney test reports</li>
                <li>Your current medicines list</li>
                <li>Photos of any wound</li>
              </ul>
            </div>
            <div className="tt-b bc" data-rv={true}>
              <div className="ic">
                <svg viewBox="0 0 24 24">
                  <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12Z" />
                  <path d="M10 9.5a2 2 0 1 1 2.6 1.9c-.4.2-.6.5-.6 1v.6M12 15.5v.01" />
                </svg>
              </div>
              <h3>Questions to ask</h3>
              <ul>
                <li>Can medicines help first?</li>
                <li>What happens if I wait?</li>
                <li>Is it a day procedure?</li>
                <li>How do I care for my feet?</li>
              </ul>
            </div>
            <div className="tt-b bd" data-rv={true}>
              <div className="ic">
                <svg viewBox="0 0 24 24">
                  <path d="M3 12h4l2-5 4 10 2-5h6" />
                </svg>
              </div>
              <h3>Living with it</h3>
              <ul>
                <li>Stop smoking completely</li>
                <li>Check your feet every day</li>
                <li>Walk a little more each week</li>
                <li>Control sugar and BP</li>
              </ul>
            </div>
            <a
              className="tt-b be"
              data-rv={true}
              data-cur={true}
              href={waLink(
                "Hello, I would like Dr. Anand Yadav to review my vascular (blood vessel) reports."
              )}
              target="_blank"
              rel="noopener"
            >
              <div>
                <div className="ic">
                  <svg viewBox="0 0 24 24">
                    <path d="M4 20l1.3-4A8 8 0 1 1 8.4 19Z" />
                    <path d="M9 9.5c0 3 2.5 5.5 5.5 5.5l1-1.6-2-1-1 .8a4 4 0 0 1-2.2-2.2l.8-1-1-2Z" />
                  </svg>
                </div>
                <h3>Already advised vascular surgery?</h3>
                <p>
                  A second opinion is a sensible step. Send your reports and Dr. Yadav
                  will review them.
                </p>
              </div>
              <span className="lk">
                Send reports on WhatsApp
                <span>
                  <svg viewBox="0 0 16 16">
                    <path
                      d="M3 8h10M9 4l4 4-4 4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    />
                  </svg>
                </span>
              </span>
            </a>
          </div>{" "}
        </div>{" "}
      </section>{" "}
      <section id="tt-faq" data-hdr="l">
        {" "}
        <div className="wrap fgrid">
          {" "}
          <div className="side">
            <span className="lab">Questions</span>
            <h2 style={{ marginTop: "18px" }}>
              <span className="ln">
                <span>What people</span>
              </span>
              <span className="ln">
                <span>
                  <em>ask us.</em>
                </span>
              </span>
            </h2>
            <p>
              Answers to common questions about vascular surgery. Ask us anything else on
              WhatsApp.
            </p>
          </div>{" "}
          <div>
            <details open={true}>
              <summary>
                Does leg pain on walking always need surgery?<i></i>
              </summary>
              <div className="a">
                No. Many people improve with medicines, stopping smoking and a walking
                plan. Surgery or a procedure is advised when these are not enough.
              </div>
            </details>
            <details>
              <summary>
                Are varicose veins dangerous?<i></i>
              </summary>
              <div className="a">
                Often they cause aching and swelling. Sometimes they lead to skin changes
                or ulcers, which need treatment.
              </div>
            </details>
            <details>
              <summary>
                What is an aneurysm?<i></i>
              </summary>
              <div className="a">
                It is a weak, bulging part of an artery. Small ones are watched with
                scans, larger ones may need repair.
              </div>
            </details>
            <details>
              <summary>
                Why does diabetes matter for my feet?<i></i>
              </summary>
              <div className="a">
                Diabetes can affect both the blood supply and feeling in the feet, so
                small wounds need early attention.
              </div>
            </details>
            <details>
              <summary>
                Is insurance accepted?<i></i>
              </summary>
              <div className="a">
                Many insurance plans cover these treatments, subject to the terms of your
                policy. Please call the clinic to check your plan.{" "}
                <span className="chip">Confirm</span>
              </div>
            </details>
          </div>{" "}
        </div>{" "}
      </section>{" "}
      <section id="tt-rel" data-hdr="l">
        {" "}
        <div className="wrap tt-rhead">
          <div>
            <span className="lab">Related</span>
            <h2 style={{ marginTop: "18px" }}>
              <span className="ln">
                <span>You may also</span>
              </span>
              <span className="ln">
                <span>
                  want to <em>read.</em>
                </span>
              </span>
            </h2>
          </div>
        </div>{" "}
        <div className="tt-car">
          <Link
            className="tt-rc"
            data-cur={true}
            href="/treatments/check-ups-second-opinion/"
          >
            <div className="v">
              <svg viewBox="0 0 400 300">
                <path
                  className="dw"
                  pathLength="1"
                  d="M10 170h90l12-18 12 18h16l10-90 14 140 10-50h40l10-14 10 14h16l10-60 12 90 8-30h100"
                />
                <path
                  className="r dw"
                  pathLength="1"
                  d="M10 170h90l12-18 12 18h16l10-90 14 140 10-50h40"
                  strokeWidth="3"
                />
                <circle className="r pul" cx="300" cy="70" r="8" />
                <path className="dw" pathLength="1" d="M290 50a26 26 0 1 1 20 0" />
              </svg>
            </div>
            <div>
              <small>Start here</small>
              <h3>Check-ups and second opinion</h3>
            </div>
            <p>A careful look at your reports.</p>
          </Link>
          <Link className="tt-rc" data-cur={true} href="/treatments/follow-up-care/">
            <div className="v">
              <svg viewBox="0 0 400 300">
                <path
                  className="dw"
                  pathLength="1"
                  d="M20 260C120 250 160 160 220 140s120-40 160-110"
                />
                <circle className="r" cx="80" cy="254" r="7" />
                <circle className="r" cx="170" cy="190" r="7" />
                <circle className="r" cx="260" cy="128" r="7" />
                <circle className="r pul" cx="360" cy="56" r="9" />
                <path className="dw" pathLength="1" d="M300 270h80M320 250h40" />
              </svg>
            </div>
            <div>
              <small>After surgery</small>
              <h3>Follow-up care</h3>
            </div>
            <p>Recovery, rehab and regular reviews.</p>
          </Link>
          <Link className="tt-rc" data-cur={true} href="/treatments/bypass-surgery/">
            <div className="v">
              <svg viewBox="0 0 400 300">
                <path
                  className="f"
                  d="M200 270c-60-36-108-78-110-138-2-44 26-74 64-72 20 1 36 12 46 28 10-16 26-27 46-28 38-2 66 28 64 72-2 60-50 102-110 138Z"
                />
                <path
                  className="dw"
                  pathLength="1"
                  d="M200 270c-60-36-108-78-110-138-2-44 26-74 64-72 20 1 36 12 46 28 10-16 26-27 46-28 38-2 66 28 64 72-2 60-50 102-110 138Z"
                />
                <path
                  className="dw"
                  pathLength="1"
                  d="M200 92c-14 40-20 90-8 150M210 96c34 24 56 60 52 116"
                />
                <circle className="r pul" cx="248" cy="140" r="7" />
                <path
                  className="r dw"
                  pathLength="1"
                  d="M236 40c70 30 64 120 10 180"
                  strokeWidth="3"
                />
              </svg>
            </div>
            <div>
              <small>Heart surgery</small>
              <h3>Bypass surgery</h3>
            </div>
            <p>A new route for blood around blocked heart arteries.</p>
          </Link>
          <Link
            className="tt-rc"
            data-cur={true}
            href="/treatments/lung-and-chest-surgery/"
          >
            <div className="v">
              <svg viewBox="0 0 400 300">
                <path
                  className="f"
                  d="M170 70c-40 0-80 50-86 120-4 50 14 86 46 86 26 0 42-20 42-44V90c0-12-2-20-2-20Z"
                />
                <path
                  className="dw"
                  pathLength="1"
                  d="M170 70c-40 0-80 50-86 120-4 50 14 86 46 86 26 0 42-20 42-44V90c0-12-2-20-2-20ZM230 70c40 0 80 50 86 120 4 50-14 86-46 86-26 0-42-20-42-44V90c0-12 2-20 2-20Z"
                />
                <path
                  className="r dw"
                  pathLength="1"
                  d="M200 10v56M200 66c-8 6-24 6-30 18M200 66c8 6 24 6 30 18"
                  strokeWidth="3"
                />
              </svg>
            </div>
            <div>
              <small>Chest</small>
              <h3>Lung and chest surgery</h3>
            </div>
            <p>Operations on the lungs and chest wall.</p>
          </Link>
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
          <span className="lab">Talk it through</span>{" "}
          <h2>
            Questions about
            <br />
            <em>your vessels?</em>
          </h2>{" "}
          <p>Bring your scans and any wound photos. You will leave with a clear plan.</p>{" "}
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
      <ReviewedBy url="/treatments/vascular-surgery/" />
      </section>
    </>
  );
}
