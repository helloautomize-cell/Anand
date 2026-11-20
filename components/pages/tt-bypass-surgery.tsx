import Link from "next/link";
import { waLink, WA_HOME } from "@/lib/whatsapp";
import { phonesDisplay, TEL_PRIMARY } from "@/lib/site";
import DATA from "@/data/interactive.json";
import { ReviewedBy } from "@/components/reviewed";

const CHK = DATA.checklists["bypass-surgery"];
export function TreatmentBypassSurgeryPage() {
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
              <span>Heart surgery</span>
            </div>{" "}
            <h1>
              <span className="ln">
                <span>Bypass</span>
              </span>
              <span className="ln">
                <span>
                  <em>surgery.</em>
                </span>
              </span>
            </h1>{" "}
            <span className="aka tt-fade" style={{ "--d": ".35s" }}>
              Coronary artery bypass grafting · CABG
            </span>{" "}
            <p className="lead tt-fade" style={{ "--d": ".45s" }}>
              A new route for blood around blocked heart arteries, made with a healthy
              blood vessel from your own body. Here is what it involves, in plain words,
              so you can decide with your family.
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
            </svg>{" "}
            <div className="tt-fact f1">
              <div>
                <small>Often for</small>
                <b>Several blocked heart arteries</b>
              </div>
            </div>{" "}
            <div className="tt-fact f2">
              <div>
                <small>Where</small>
                <b>At the hospital, with the full surgical team</b>
              </div>
            </div>{" "}
            <div className="tt-fact f3">
              <div>
                <small>Your choice</small>
                <b>Decided after every option is explained</b>
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
                  d="M100 166c-34-20-60-44-61-76-1-24 15-40 36-39 11 1 20 7 25 16 5-9 14-15 25-16 21-1 37 15 36 39-1 32-27 56-61 76Z"
                />
                <path pathLength="1" d="M100 70c-8 22-10 50-4 82" />
                <path
                  pathLength="1"
                  className="r"
                  d="M122 38c40 18 36 70 4 102"
                  strokeWidth="2.6"
                />
                <circle pathLength="1" className="r" cx="126" cy="140" r="4" />
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
                <span className="k">Before surgery</span>
                <h3>Getting ready</h3>
                <ul>
                  <li>
                    <span>
                      <b>Tests:</b> angiography, echo, ECG, chest X-ray and blood tests,
                      if not done already.
                    </span>
                  </li>
                  <li>
                    <span>
                      <b>Medicines:</b> you will be told which to continue and which to
                      stop, and when.
                    </span>
                  </li>
                  <li>
                    <span>
                      <b>Family meeting:</b> I explain the plan, the alternatives
                      and the risks before you agree.
                    </span>
                  </li>
                  <li>
                    <span>
                      <b>Admission:</b> usually a day or so before, at the hospital where
                      the surgery is planned.
                    </span>
                  </li>
                </ul>
              </div>
              <div className="tt-sp">
                <svg className="msvg" viewBox="0 0 200 200">
                  <path d="M100 166c-34-20-60-44-61-76-1-24 15-40 36-39 11 1 20 7 25 16 5-9 14-15 25-16 21-1 37 15 36 39-1 32-27 56-61 76Z" />
                  <path d="M100 70c-8 22-10 50-4 82" />
                  <path className="r" d="M122 38c40 18 36 70 4 102" strokeWidth="2.6" />
                  <circle className="r" cx="126" cy="140" r="4" />
                </svg>
                <span className="k">On the day</span>
                <h3>The operation</h3>
                <ul>
                  <li>
                    <span>
                      You are fully asleep under general anaesthesia and feel nothing.
                    </span>
                  </li>
                  <li>
                    <span>
                      A healthy blood vessel, called a graft, is taken from the chest
                      wall, leg or arm.
                    </span>
                  </li>
                  <li>
                    <span>
                      The graft is joined beyond each blockage, so blood flows around it.
                    </span>
                  </li>
                  <li>
                    <span>
                      Depending on your heart, this is done with a heart-lung machine or
                      on the beating heart.
                    </span>
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
                    <span>
                      A short stay in the ICU, then the ward, with nurses close by.
                    </span>
                  </li>
                  <li>
                    <span>
                      Walking starts early, with a physiotherapist guiding breathing
                      exercises.
                    </span>
                  </li>
                  <li>
                    <span>
                      Most people go home within days, with clear instructions for the
                      weeks ahead.
                    </span>
                  </li>
                  <li>
                    <span>
                      Regular follow-up visits and cardiac rehab help you return to daily
                      life.
                    </span>
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
                <li>Perfusionist</li>
                <li>ICU nurses</li>
                <li>Physiotherapist</li>
              </ul>
              <div className="team">
                <span title="Dr. Anand Yadav">DA</span>
                <span title="Anaesthetist">AN</span>
                <span title="Perfusionist">PE</span>
                <span title="ICU nurses">IN</span>
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
                <li>Angiography CD or report</li>
                <li>Echo and ECG reports</li>
                <li>A list of the medicines you take</li>
                <li>Earlier discharge summaries</li>
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
                <li>Why bypass and not a stent for me?</li>
                <li>Which grafts will be used?</li>
                <li>On the beating heart or on the machine?</li>
                <li>What will recovery look like at home?</li>
              </ul>
            </div>
            <div className="tt-b bd" data-rv={true}>
              <div className="ic">
                <svg viewBox="0 0 24 24">
                  <path d="M3 12h4l2-5 4 10 2-5h6" />
                </svg>
              </div>
              <h3>Living after bypass</h3>
              <ul>
                <li>Medicines to protect the grafts</li>
                <li>A heart-healthy diet and no smoking</li>
                <li>Regular walks that build up week by week</li>
                <li>Follow-up visits and rehab</li>
              </ul>
            </div>
            <a
              className="tt-b be"
              data-rv={true}
              data-cur={true}
              href={waLink(
                "Hello, I have been advised bypass surgery and would like a second opinion from Dr. Anand Yadav."
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
                <h3>Already advised bypass?</h3>
                <p>
                  A second opinion is a sensible step. Send your angiography and reports,
                  and I will review them.
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
              Answers to common questions about bypass surgery. Ask us anything else on
              WhatsApp.
            </p>
          </div>{" "}
          <div>
            <details open={true}>
              <summary>
                Is bypass better than a stent?<i></i>
              </summary>
              <div className="a">
                Neither is better for everyone. Stents suit some blockages, and bypass
                suits others, often when several arteries are involved or the pattern is
                complex. I explain both, and why one may suit you, before you
                decide.
              </div>
            </details>
            <details>
              <summary>
                Will I be awake during the operation?<i></i>
              </summary>
              <div className="a">
                No. Bypass surgery is done under general anaesthesia, so you are fully
                asleep and feel nothing during the operation.
              </div>
            </details>
            <details>
              <summary>
                How long do the grafts last?<i></i>
              </summary>
              <div className="a">
                It varies from person to person. Taking your medicines, not smoking, and
                keeping sugar, blood pressure and cholesterol in control all help protect
                the grafts.
              </div>
            </details>
            <details>
              <summary>
                How long will I be in hospital?<i></i>
              </summary>
              <div className="a">
                It depends on your recovery and any other health conditions. You will get
                a clear estimate at the consultation, along with a plan for the first
                weeks at home.
              </div>
            </details>
            <details>
              <summary>
                What is beating-heart bypass?<i></i>
              </summary>
              <div className="a">
                Some bypass operations can be done while the heart keeps beating, without
                the heart-lung machine. Whether it suits you depends on your arteries and
                your heart, and it will be discussed with you.
              </div>
            </details>
            <details>
              <summary>
                Is insurance accepted?<i></i>
              </summary>
              <div className="a">
                Many insurance plans cover heart surgery, subject to the terms of your
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
          <Link className="tt-rc" data-cur={true} href="/treatments/angioplasty/">
            <div className="v">
              <svg viewBox="0 0 400 300">
                <path
                  className="dw"
                  pathLength="1"
                  d="M20 120c80 0 120 40 180 40s100-40 180-40M20 190c80 0 120 40 180 40s100-40 180-40"
                />
                <g className="r">
                  <path
                    className="dw"
                    pathLength="1"
                    d="M160 150l80 20M160 220l80-20M170 152l-6 66M190 157l-6 66M210 162l-6 62M230 167l-6 54"
                  />
                </g>
                <ellipse className="f" cx="200" cy="190" rx="44" ry="20" />
                <path className="dw" pathLength="1" d="M20 155h120" />
                <circle className="r pul" cx="140" cy="155" r="6" />
              </svg>
            </div>
            <div>
              <small>Heart procedure</small>
              <h3>Angioplasty and stents</h3>
            </div>
            <p>Opening a narrowed artery from the inside.</p>
          </Link>
          <Link className="tt-rc" data-cur={true} href="/treatments/valve-surgery/">
            <div className="v">
              <svg viewBox="0 0 400 300">
                <circle className="dw" pathLength="1" cx="200" cy="150" r="110" />
                <circle className="dw" pathLength="1" cx="200" cy="150" r="92" />
                <path
                  className="r dw"
                  pathLength="1"
                  d="M200 150L120 104M200 150l80-46M200 150v92"
                />
                <path className="f" d="M200 150L120 104A92 92 0 0 1 280 104Z" />
                <circle className="r pul" cx="200" cy="150" r="8" />
              </svg>
            </div>
            <div>
              <small>Heart surgery</small>
              <h3>Valve repair and replacement</h3>
            </div>
            <p>When a heart valve leaks or narrows.</p>
          </Link>
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
            <em>bypass?</em>
          </h2>{" "}
          <p>
            Bring your angiography and your questions. You will leave knowing your
            options, and you can take time to decide.
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
      <ReviewedBy url="/treatments/bypass-surgery/" />
      </section>
    </>
  );
}
