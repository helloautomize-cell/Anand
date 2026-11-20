import Link from "next/link";
import { waLink, WA_HOME } from "@/lib/whatsapp";
import { phonesDisplay, TEL_PRIMARY } from "@/lib/site";
import DATA from "@/data/interactive.json";
import { ReviewedBy } from "@/components/reviewed";

const SPOTS = DATA.symptomsSpots;
const SP0 = SPOTS[0];
export function SymptomsPage() {
  return (
    <>
      <section className="sy-hero" id="sy-hero" data-hdr="l">
        {" "}
        <div className="wrap sy-hg">
          {" "}
          <div>
            {" "}
            <div className="sy-crumb sy-fade">
              <Link href="/">Home</Link>
              <i></i>
              <span>Symptoms</span>
            </div>{" "}
            <h1 className="sy-fade" style={{ "--d": ".1s" }}>
              What is your body
              <br />
              <em>telling you?</em>
            </h1>{" "}
            <p className="lead sy-fade" style={{ "--d": ".3s" }}>
              Chest pain, breathlessness, a racing heart or leg pain on walking can all
              start in the heart or blood vessels. Find what you feel, learn what it may
              mean, and know when to act fast.
            </p>{" "}
            <div className="sy-chips sy-fade" style={{ "--d": ".45s" }}>
              <a href="#symptoms">Chest pain</a>
              <a href="#symptoms">Breathlessness</a>
              <a href="#symptoms">Palpitations</a>
              <a href="#symptoms">Dizziness</a>
              <a href="#symptoms">Leg pain</a>
              <a href="#sy-red">Emergency signs</a>
            </div>{" "}
          </div>{" "}
          <div className="sy-mon sy-fade" style={{ "--d": ".2s" }} aria-hidden="true">
            {" "}
            <div className="glines"></div>{" "}
            <div className="top">
              <div>
                <span className="k">Heart rate</span>
                <div className="bpm">
                  <span id="sybpm">72</span>
                  <small>BPM</small>
                </div>
              </div>
              <svg className="hb" viewBox="0 0 24 24">
                <path d="M12 21s-8-5.3-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 10c0 5.7-8 11-8 11Z" />
              </svg>
            </div>{" "}
            <svg className="ecg" viewBox="0 0 600 200" preserveAspectRatio="none">
              <path className="bg" id="syecgb" />
              <path id="syecg" />
            </svg>{" "}
            <div className="bot">
              <div>
                <span className="k">Listen</span>
                <b>To what you feel</b>
              </div>
              <div>
                <span className="k">Check</span>
                <b>With simple tests</b>
              </div>
              <div>
                <span className="k">Act</span>
                <b>At the right time</b>
              </div>
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      <section id="symptoms" className="sec" data-hdr="l" style={{ paddingTop: "110px" }}>
        {" "}
        <div className="wrap">
          {" "}
          <div className="shead">
            {" "}
            <div>
              <span className="lab">Body map</span>
              <h2 style={{ marginTop: "18px" }}>
                <span className="ln">
                  <span>Your body often</span>
                </span>
                <span className="ln">
                  <span>
                    speaks <em>first.</em>
                  </span>
                </span>
              </h2>
            </div>{" "}
            <p className="sub" data-rv={true}>
              Choose what you feel to see where it starts in the body and what it may
              mean. General information, not a diagnosis.
            </p>{" "}
          </div>{" "}
          <div className="sx auto" id="sx" data-rv={true}>
            {" "}
            <div className="sl" id="slist">
              <span className="k">What do you feel?</span>{SPOTS.map((s, i) => (
                <button key={i} type="button"><span>{s.h}</span><small>{s.q}</small><i /></button>
              ))}
            </div>{" "}
            <div className="bodymap">
              <svg viewBox="170 30 684 1460" id="bmap" aria-label="Body map">
                {" "}
                <defs>
                  {" "}
                  <radialGradient id="sHalo" cx="50%" cy="50%" r="50%">
                    <stop offset="0" stopColor="#F7E4DF" />
                    <stop offset="1" stopColor="#F7E4DF" stopOpacity="0" />
                  </radialGradient>{" "}
                  <radialGradient id="gRed">
                    <stop offset="0" stopColor="#D23133" stopOpacity=".55" />
                    <stop offset=".55" stopColor="#D23133" stopOpacity=".16" />
                    <stop offset="1" stopColor="#D23133" stopOpacity="0" />
                  </radialGradient>{" "}
                  <radialGradient id="gTeal">
                    <stop offset="0" stopColor="#2B7C88" stopOpacity=".42" />
                    <stop offset=".6" stopColor="#2B7C88" stopOpacity=".12" />
                    <stop offset="1" stopColor="#2B7C88" stopOpacity="0" />
                  </radialGradient>{" "}
                  <filter id="sBlur" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="40" />
                  </filter>{" "}
                  <mask
                    id="sSpot"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="1024"
                    height="1536"
                  >
                    <rect width="1024" height="1536" fill="#000" />
                    <circle
                      id="spotc"
                      className="spotc"
                      r="230"
                      fill="#fff"
                      filter="url(#sBlur)"
                    />
                  </mask>{" "}
                </defs>{" "}
                <circle cx="512" cy="430" r="430" fill="url(#sHalo)" className="halo" />{" "}
                <image
                  href="/img/body.webp"
                  width="1024"
                  height="1536"
                  className="bimg dim"
                />{" "}
                <image
                  href="/img/body.webp"
                  width="1024"
                  height="1536"
                  className="bimg"
                  mask="url(#sSpot)"
                />{" "}
                <g className="sys sys-head" data-sys="head">
                  <g className="orb">
                    <ellipse cx="510" cy="150" rx="132" ry="30" pathLength="1" />
                    <circle cx="642" cy="150" r="8" className="dot" />
                  </g>
                </g>{" "}
                <g className="sys sys-lungs" data-sys="lungs">
                  <ellipse cx="450" cy="392" rx="95" ry="125" className="gl" />
                  <ellipse cx="588" cy="392" rx="90" ry="120" className="gl" />
                </g>{" "}
                <g className="sys sys-heart" data-sys="heart">
                  <circle cx="545" cy="385" r="120" className="hh gl" />
                  <circle cx="545" cy="385" r="76" className="hring" pathLength="1" />
                </g>{" "}
                <g className="sys sys-ecg" data-sys="ecg">
                  <path
                    className="ecg"
                    pathLength="1"
                    d="M396 505h74l12-22 12 44 16-90 16 80 12-16h84"
                  />
                </g>{" "}
                <g className="sys sys-art" data-sys="art">
                  {" "}
                  <path
                    pathLength="1"
                    d="M515 600C485 660 460 760 450 868C444 960 440 1020 440 1068C436 1140 430 1180 428 1218C426 1260 425 1300 425 1328"
                  />{" "}
                  <path
                    pathLength="1"
                    d="M515 600C550 660 580 760 595 868C592 960 590 1020 590 1068C594 1140 598 1180 600 1218C602 1260 604 1300 605 1328"
                  />{" "}
                </g>{" "}
                <g className="sys sys-vein" data-sys="vein">
                  <ellipse cx="620" cy="1180" rx="56" ry="140" className="gl" />
                  <path
                    pathLength="1"
                    d="M615 1060C628 1110 610 1140 626 1180C640 1220 606 1250 614 1300"
                  />
                </g>{" "}
                <g className="sys sys-ankle" data-sys="ankle">
                  {" "}
                  <ellipse cx="415" cy="1382" rx="58" ry="22" pathLength="1" />
                  <ellipse cx="612" cy="1382" rx="58" ry="22" pathLength="1" />{" "}
                  <ellipse
                    cx="415"
                    cy="1382"
                    rx="80"
                    ry="32"
                    pathLength="1"
                    className="thin"
                  />
                  <ellipse
                    cx="612"
                    cy="1382"
                    rx="80"
                    ry="32"
                    pathLength="1"
                    className="thin"
                  />{" "}
                </g>{" "}
                <g id="sfocus" className="sfocus">
                  <circle r="62" className="f1" />
                  <circle r="92" className="f2" />
                </g>{" "}
                <g id="shots">{SPOTS.map((s, i) => (
                    <g key={i} className="hot"><circle className="p" cx={s.x} cy={s.y} r={17} /><circle className="c" cx={s.x} cy={s.y} r={13} /><circle cx={s.x} cy={s.y} r={52} fill="transparent" /></g>
                  ))}</g>{" "}
              </svg>
            </div>{" "}
            <div className="symc" id="symc">
              {" "}
              <div className="fade q" id="sq">{SP0.q}</div> <h3 id="sh">{SP0.h}</h3>{" "}
              <div className="fade two">
                <div>
                  <small>What you may feel</small>
                  <p id="sp1">{SP0.p1}</p>
                </div>
                <div>
                  <small>What it may mean</small>
                  <p id="sp2">{SP0.p2}</p>
                </div>
              </div>{" "}
              <div className="urg">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  style={{ flex: "none", marginTop: "1px" }}
                >
                  <path d="M12 3l10 18H2z" fill="none" stroke="#D23133" strokeWidth="2" />
                  <path
                    d="M12 10v5M12 17.5v.5"
                    stroke="#D23133"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                <span id="su" dangerouslySetInnerHTML={{ __html: SP0.u }} />
              </div>{" "}
              <div className="sfoot">
                <a id="swa" href={WA_HOME} target="_blank" rel="noopener">
                  Ask the clinic about this{" "}
                  <svg width="14" height="14" viewBox="0 0 16 16">
                    <path
                      d="M3 8h10M9 4l4 4-4 4"
                      fill="none"
                      stroke="#D23133"
                      strokeWidth="1.6"
                    />
                  </svg>
                </a>
                <span>Not a diagnosis</span>
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      <section id="sy-red" data-hdr="d">
        {" "}
        <div className="wrap">
          {" "}
          <div className="shead">
            {" "}
            <div>
              <span className="lab">Do not wait</span>
              <h2 style={{ marginTop: "18px" }}>
                <span className="ln">
                  <span>Call 108 or 112</span>
                </span>
                <span className="ln">
                  <span>
                    if you <em>notice this.</em>
                  </span>
                </span>
              </h2>
            </div>{" "}
            <p className="sub" data-rv={true}>
              These signs need emergency care, not a clinic appointment. Tap a card to see
              what to do.
            </p>{" "}
          </div>{" "}
          <div className="sy-rg">
            {" "}
            <div className="sy-rc" data-rv={true} tabIndex={0}>
              <div className="fl">
                <div className="fa">
                  <svg viewBox="0 0 40 40">
                    <path d="M20 34s-13-8-13-17a7 7 0 0 1 13-4 7 7 0 0 1 13 4c0 9-13 17-13 17Z" />
                    <path d="M14 19h4l2-4 3 8 2-4h3" />
                  </svg>
                  <h3>Chest pain lasting more than a few minutes</h3>
                  <span className="tap">Tap to see what to do</span>
                </div>
                <div className="fb">
                  <p>
                    Call 108 or 112. Sit down and rest. Do not drive yourself to hospital.
                  </p>
                  <b>Call now</b>
                </div>
              </div>
            </div>{" "}
            <div className="sy-rc" data-rv={true} style={{ "--d": ".06s" }} tabIndex={0}>
              <div className="fl">
                <div className="fa">
                  <svg viewBox="0 0 40 40">
                    <path d="M16 10c-5 0-9 6-10 14-.5 5 1.5 8 5 8 3 0 5-2 5-5V12M24 10c5 0 9 6 10 14 .5 5-1.5 8-5 8-3 0-5-2-5-5V12" />
                    <path d="M20 4v8" />
                  </svg>
                  <h3>Sudden, severe breathlessness</h3>
                  <span className="tap">Tap to see what to do</span>
                </div>
                <div className="fb">
                  <p>
                    Call 108 or 112. Sit upright and loosen tight clothing while you wait.
                  </p>
                  <b>Call now</b>
                </div>
              </div>
            </div>{" "}
            <div className="sy-rc" data-rv={true} style={{ "--d": ".12s" }} tabIndex={0}>
              <div className="fl">
                <div className="fa">
                  <svg viewBox="0 0 40 40">
                    <circle cx="20" cy="12" r="6" />
                    <path d="M8 34c2-8 7-12 12-12s10 4 12 12" />
                    <path d="M30 6l4-2M30 12h5" />
                  </svg>
                  <h3>Fainting or collapse</h3>
                  <span className="tap">Tap to see what to do</span>
                </div>
                <div className="fb">
                  <p>
                    Call 108 or 112. Lay the person flat. If they are not breathing, start
                    chest compressions.
                  </p>
                  <b>Call now</b>
                </div>
              </div>
            </div>{" "}
            <div className="sy-rc" data-rv={true} style={{ "--d": ".18s" }} tabIndex={0}>
              <div className="fl">
                <div className="fa">
                  <svg viewBox="0 0 40 40">
                    <circle cx="20" cy="18" r="11" />
                    <path d="M15 15h.01M25 15h.01M14 24c3-2 9-2 12 0" />
                  </svg>
                  <h3>Face drooping, weak arm, slurred speech</h3>
                  <span className="tap">Tap to see what to do</span>
                </div>
                <div className="fb">
                  <p>
                    These can be signs of a stroke. Call 108 or 112 and note the time the
                    signs began.
                  </p>
                  <b>Call now</b>
                </div>
              </div>
            </div>{" "}
            <div className="sy-rc" data-rv={true} style={{ "--d": ".24s" }} tabIndex={0}>
              <div className="fl">
                <div className="fa">
                  <svg viewBox="0 0 40 40">
                    <path d="M14 4c-1 10-2 20 0 32M26 4c1 10 .5 20 2 32" />
                    <circle cx="21" cy="20" r="4" />
                  </svg>
                  <h3>A cold, pale, painful leg</h3>
                  <span className="tap">Tap to see what to do</span>
                </div>
                <div className="fb">
                  <p>
                    A sudden blocked leg artery needs urgent care. Call 108 or 112 or go
                    to the nearest emergency department.
                  </p>
                  <b>Go now</b>
                </div>
              </div>
            </div>{" "}
          </div>{" "}
          <div className="sy-call" data-rv={true}>
            <p>
              In any emergency, go to the nearest hospital emergency department. The
              clinic line is for appointments and is not an emergency service.
            </p>
            <div className="n">
              <a href="tel:108" aria-label="Call 108">
                108
              </a>
              <a href="tel:112" aria-label="Call 112">
                112
              </a>
            </div>
          </div>{" "}
        </div>{" "}
      </section>{" "}
      <section id="sy-tests" data-hdr="l">
        {" "}
        <div className="wrap">
          {" "}
          <div className="shead">
            {" "}
            <div>
              <span className="lab">Finding the cause</span>
              <h2 style={{ marginTop: "18px" }}>
                <span className="ln">
                  <span>Tests that tell</span>
                </span>
                <span className="ln">
                  <span>
                    the <em>real story.</em>
                  </span>
                </span>
              </h2>
            </div>{" "}
            <p className="sub" data-rv={true}>
              Only the tests you need are advised. Hover or tap a card to see what to
              expect.
            </p>{" "}
          </div>{" "}
          <div className="sy-tb">
            {" "}
            <div className="sy-t te" data-rv={true} tabIndex={0}>
              <svg className="tr" viewBox="0 0 600 200" preserveAspectRatio="none">
                <path id="syecg2" />
              </svg>
              <span className="k">ECG</span>
              <h3>
                The electrical
                <br />
                picture of your heart
              </h3>
              <p>
                Small stickers on the chest record each heartbeat in a few minutes. It can
                show rhythm problems and signs of strain or an old heart attack.
              </p>
              <div className="more">
                <p>Painless and quick. No preparation needed.</p>
              </div>
            </div>{" "}
            <div
              className="sy-t th"
              data-rv={true}
              style={{ "--d": ".05s" }}
              tabIndex={0}
            >
              <svg className="ar" viewBox="0 0 40 40">
                <circle cx="20" cy="20" r="14" />
                <path className="r" d="M20 20 11 14M20 20l9-6M20 20v11" />
              </svg>
              <span className="k">Echo</span>
              <h3>Ultrasound of the heart</h3>
              <p>Shows the pump, the valves and the walls moving.</p>
              <div className="more">
                <p>
                  A gel and a probe on the chest. Takes about as long as a short scan.
                </p>
              </div>
            </div>{" "}
            <div className="sy-t tt" data-rv={true} style={{ "--d": ".1s" }} tabIndex={0}>
              <svg className="ar" viewBox="0 0 40 40">
                <path d="M6 32h28M10 32l6-10 6 4 8-14" />
                <circle className="r" cx="30" cy="12" r="3" />
              </svg>
              <span className="k">TMT</span>
              <h3>Treadmill test</h3>
              <p>Checks how the heart copes with effort.</p>
              <div className="more">
                <p>
                  You walk on a treadmill while the ECG is recorded. Wear comfortable
                  shoes.
                </p>
              </div>
            </div>{" "}
            <div
              className="sy-t ta"
              data-rv={true}
              style={{ "--d": ".15s" }}
              tabIndex={0}
            >
              <svg className="ar" viewBox="0 0 40 40">
                <path d="M4 16c8 0 10 4 16 4s8-4 16-4M4 26c8 0 10-4 16-4s8 4 16 4" />
                <path className="r" d="M4 21h10" />
              </svg>
              <span className="k">Angiography</span>
              <h3>A map of the heart arteries</h3>
              <p>Dye and X-ray show exactly where an artery is narrowed.</p>
              <div className="more">
                <p>
                  Done in a cath lab at the hospital through the wrist or groin, usually
                  while you are awake.
                </p>
              </div>
            </div>{" "}
            <div className="sy-t td" data-rv={true} style={{ "--d": ".2s" }} tabIndex={0}>
              <svg className="ar" viewBox="0 0 40 40">
                <path d="M15 4c-1 10-2 20 0 32M25 4c1 10 .5 20 2 32" />
                <path className="r" d="M23 8c-5 4-5 14 1 20" />
              </svg>
              <span className="k">Doppler</span>
              <h3>Blood flow in the legs and neck</h3>
              <p>An ultrasound that shows narrowed arteries or leaking veins.</p>
              <div className="more">
                <p>Painless. Wear loose clothes so the legs are easy to reach.</p>
              </div>
            </div>{" "}
            <div
              className="sy-t tc"
              data-rv={true}
              style={{ "--d": ".25s" }}
              tabIndex={0}
            >
              <svg className="ar" viewBox="0 0 40 40">
                <rect x="6" y="6" width="28" height="28" rx="8" />
                <circle className="r" cx="20" cy="20" r="7" />
              </svg>
              <span className="k">CT scan</span>
              <h3>Detailed pictures of the chest and vessels</h3>
              <p>Used for the aorta, the lungs and sometimes the heart arteries.</p>
              <div className="more">
                <p>
                  Some scans use a dye. Tell the team about kidney problems or allergies.
                </p>
              </div>
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      <section id="sy-myth" data-hdr="l">
        {" "}
        <div className="wrap sy-mh">
          <div>
            <span className="lab">Myth or fact</span>
            <h2 style={{ marginTop: "18px" }}>
              <span className="ln">
                <span>What people</span>
              </span>
              <span className="ln">
                <span>
                  often <em>believe.</em>
                </span>
              </span>
            </h2>
          </div>
          <div className="sy-nb">
            <button id="sypv" aria-label="Previous">
              <svg viewBox="0 0 16 16">
                <path d="M13 8H3M7 4 3 8l4 4" />
              </svg>
            </button>
            <button id="synx" aria-label="Next">
              <svg viewBox="0 0 16 16">
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </button>
          </div>
        </div>{" "}
        <div className="sy-car" id="sycar">
          <div className="sy-mc" tabIndex={0}>
            <div className="fl">
              <div className="fa">
                <span className="tg">Myth</span>
                <h3>Heart attack pain is always severe and sudden.</h3>
                <span className="tap">
                  <i>↻</i>Tap to see the fact
                </span>
              </div>
              <div className="fb">
                <span className="tg">Fact</span>
                <p>
                  It can feel like mild pressure, gas, or pain in the jaw, arm or back.
                  Women, older people and people with diabetes often have milder signs.
                </p>
              </div>
            </div>
          </div>
          <div className="sy-mc" tabIndex={0}>
            <div className="fl">
              <div className="fa">
                <span className="tg">Myth</span>
                <h3>Young people do not get heart disease.</h3>
                <span className="tap">
                  <i>↻</i>Tap to see the fact
                </span>
              </div>
              <div className="fb">
                <span className="tg">Fact</span>
                <p>
                  Heart disease is appearing at younger ages in India. Smoking, diabetes,
                  high BP and family history raise the risk at any age.
                </p>
              </div>
            </div>
          </div>
          <div className="sy-mc" tabIndex={0}>
            <div className="fl">
              <div className="fa">
                <span className="tg">Myth</span>
                <h3>If my ECG is normal, my heart is fine.</h3>
                <span className="tap">
                  <i>↻</i>Tap to see the fact
                </span>
              </div>
              <div className="fb">
                <span className="tg">Fact</span>
                <p>
                  A resting ECG can be normal between episodes. Sometimes an echo, a TMT
                  or other tests are needed to find the cause.
                </p>
              </div>
            </div>
          </div>
          <div className="sy-mc" tabIndex={0}>
            <div className="fl">
              <div className="fa">
                <span className="tg">Myth</span>
                <h3>Leg pain on walking is just age.</h3>
                <span className="tap">
                  <i>↻</i>Tap to see the fact
                </span>
              </div>
              <div className="fb">
                <span className="tg">Fact</span>
                <p>
                  Calf pain that comes with walking and eases with rest can mean narrowed
                  leg arteries. It is worth checking.
                </p>
              </div>
            </div>
          </div>
          <div className="sy-mc" tabIndex={0}>
            <div className="fl">
              <div className="fa">
                <span className="tg">Myth</span>
                <h3>Varicose veins are only a cosmetic problem.</h3>
                <span className="tap">
                  <i>↻</i>Tap to see the fact
                </span>
              </div>
              <div className="fb">
                <span className="tg">Fact</span>
                <p>
                  They can cause aching, swelling, skin changes and ulcers, and they can
                  be treated.
                </p>
              </div>
            </div>
          </div>
          <div className="sy-mc" tabIndex={0}>
            <div className="fl">
              <div className="fa">
                <span className="tg">Myth</span>
                <h3>After a stent or bypass, I can stop my medicines.</h3>
                <span className="tap">
                  <i>↻</i>Tap to see the fact
                </span>
              </div>
              <div className="fb">
                <span className="tg">Fact</span>
                <p>
                  Medicines protect the stent or grafts. Never stop them without asking
                  your doctor.
                </p>
              </div>
            </div>
          </div>
        </div>{" "}
      </section>{" "}
      <section id="sy-faq" data-hdr="l">
        {" "}
        <div className="wrap fgrid">
          {" "}
          <div className="side">
            <span className="lab">Questions</span>
            <h2 style={{ marginTop: "18px" }}>
              <span className="ln">
                <span>Not sure</span>
              </span>
              <span className="ln">
                <span>
                  <em>what to do?</em>
                </span>
              </span>
            </h2>
            <p>
              Send a message on WhatsApp during clinic hours. In an emergency call 108 or
              112.
            </p>
          </div>{" "}
          <div>
            <details open={true}>
              <summary>
                Is every chest pain from the heart?<i></i>
              </summary>
              <div className="a">
                No. Chest pain can come from muscles, the stomach, the lungs or anxiety.
                Because it can be the heart, new or unexplained chest pain should always
                be checked.
              </div>
            </details>
            <details>
              <summary>
                When should I see a heart surgeon rather than a physician?<i></i>
              </summary>
              <div className="a">
                Many people start with a physician or cardiologist. You can see Dr. Yadav
                directly if you have been told you may need surgery, want a second
                opinion, or have a vessel or chest problem.
              </div>
            </details>
            <details>
              <summary>
                Can anxiety cause palpitations?<i></i>
              </summary>
              <div className="a">
                Yes, but palpitations can also come from rhythm problems. If they are
                frequent or come with dizziness or fainting, get them checked.
              </div>
            </details>
            <details>
              <summary>
                I have diabetes. Should I be more careful?<i></i>
              </summary>
              <div className="a">
                Yes. Diabetes raises the risk of heart and vessel disease, and symptoms
                can be milder. Regular check-ups are a good idea.
              </div>
            </details>
            <details>
              <summary>
                What should I bring to my appointment?<i></i>
              </summary>
              <div className="a">
                All earlier reports, your medicines, and a short note of your symptoms:
                when they started, how long they last, and what brings them on.
              </div>
            </details>
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
          <span className="lab">Listen to your body</span>{" "}
          <h2>
            Worried about
            <br />
            <em>a symptom?</em>
          </h2>{" "}
          <p>
            Bring your reports and a note of what you feel. I will help you
            understand what it means.
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
      <ReviewedBy url="/symptoms/" />
      </section>
    </>
  );
}
