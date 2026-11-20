import Link from "next/link";
import { waLink, WA_HOME } from "@/lib/whatsapp";
import { phonesDisplay, TEL_PRIMARY, TEL_SECONDARY, MAIL_PRIMARY } from "@/lib/site";
import DATA from "@/data/interactive.json";
import { ReviewedBy } from "@/components/reviewed";

const FVG = DATA.visitGroups as [string, [string, string][]][];
const FVT = FVG.reduce((n, g) => n + g[1].length, 0);
export function VisitPage() {
  let fi = 0;
  return (
    <>
      <section className="fv-hero" id="fv-hero" data-hdr="l">
        {" "}
        <div className="wrap fv-hg">
          {" "}
          <div>
            {" "}
            <div className="fv-crumb fv-fade">
              <Link href="/">Home</Link>
              <i></i>
              <span>Your first visit</span>
            </div>{" "}
            <h1 className="fv-fade" style={{ "--d": ".1s" }}>
              Your first visit,
              <br />
              <em>step by step.</em>
            </h1>{" "}
            <p className="lead fv-fade" style={{ "--d": ".3s" }}>
              Knowing what happens takes away half the worry. Here is what to bring, what
              I will do, and how you leave with a clear plan.
            </p>{" "}
            <div className="fv-acts fv-fade" style={{ "--d": ".45s" }}>
              <a className="btn b-line" href="#fv-bring">
                What to bring
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
          <div className="fv-ph fv-fade" style={{ "--d": ".15s" }}>
            {" "}
            <div className="a">
              <img
                src="/img/reception-desk.webp"
                alt="Reception desk at Anand Heart Center"
                fetchPriority="high"
              />
            </div>{" "}
            <div className="fv-gl g1">
              <div>
                <small>Bring along</small>
                <b>A family member, if you like</b>
              </div>
            </div>{" "}
            <div className="fv-gl g2">
              <div>
                <small>In your language</small>
                <b>Hindi or English, in plain words</b>
              </div>
            </div>{" "}
            <div className="fv-gl g3">
              <div>
                <small>No rush</small>
                <b>Take time to decide</b>
              </div>
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      <section id="minutes" data-hdr="l">
        {" "}
        <div className="stage">
          {" "}
          <div className="wrap mg">
            {" "}
            <div>
              {" "}
              <span className="lab">Your first minutes</span>{" "}
              <h2>
                Every heart has a <em>story.</em>
              </h2>{" "}
              <div className="acts3" id="acts3">
                {" "}
                <button className="on">
                  <span>Listen</span>
                  <i>
                    <u></u>
                  </i>
                </button>{" "}
                <button>
                  <span>Look</span>
                  <i>
                    <u></u>
                  </i>
                </button>{" "}
                <button>
                  <span>Plan</span>
                  <i>
                    <u></u>
                  </i>
                </button>{" "}
              </div>{" "}
              <div className="ats">
                {" "}
                <div className="at on">
                  <h3>
                    <span className="ln">
                      <span>
                        I <em>listen</em> first.
                      </span>
                    </span>
                  </h3>
                  <p>
                    What do you feel? Since when? What worries you most? Your words become
                    my notes. Family members are welcome to sit in.
                  </p>
                </div>{" "}
                <div className="at">
                  <h3>
                    <span className="ln">
                      <span>
                        I <em>look</em> closely.
                      </span>
                    </span>
                  </h3>
                  <p>
                    Pulse, blood pressure, heart sounds and an ECG. Then only the tests
                    you actually need, nothing more.
                  </p>
                </div>{" "}
                <div className="at">
                  <h3>
                    <span className="ln">
                      <span>
                        You <em>plan</em> together.
                      </span>
                    </span>
                  </h3>
                  <p>
                    Every option laid out in plain words, with what each one means for
                    you. You decide, at your own pace.
                  </p>
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div className="mvis">
              {" "}
              <svg viewBox="0 0 800 600" id="msvg" aria-hidden="true">
                {" "}
                <defs>
                  {" "}
                  <radialGradient id="metal" cx=".35" cy=".3" r=".9">
                    <stop offset="0" stopColor="#FFFFFF" />
                    <stop offset=".45" stopColor="#D5DCDE" />
                    <stop offset=".8" stopColor="#94A3A7" />
                    <stop offset="1" stopColor="#6E7F84" />
                  </radialGradient>{" "}
                  <radialGradient id="diaph" cx=".4" cy=".35" r=".8">
                    <stop offset="0" stopColor="#2B6E79" />
                    <stop offset=".6" stopColor="#0E4652" />
                    <stop offset="1" stopColor="#06333D" />
                  </radialGradient>{" "}
                  <linearGradient id="tubeG" x1="0" y1="1" x2="1" y2="0">
                    <stop offset="0" stopColor="#0B2A31" />
                    <stop offset="1" stopColor="#2B4A50" />
                  </linearGradient>{" "}
                  <filter id="soft" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="5" />
                  </filter>{" "}
                  <radialGradient id="mhg" cx=".4" cy=".35" r=".8">
                    <stop offset="0" stopColor="#E9585A" />
                    <stop offset=".7" stopColor="#C42B2E" />
                    <stop offset="1" stopColor="#8E1E21" />
                  </radialGradient>{" "}
                  <g id="heartArt">
                    {" "}
                    <path
                      d="M240 240l-4-100"
                      stroke="#3F8F9A"
                      strokeWidth="24"
                      strokeLinecap="round"
                      fill="none"
                    />{" "}
                    <path
                      d="M282 232c-6-60 14-104 62-106 46-2 66 34 60 84"
                      stroke="#B3282B"
                      strokeWidth="30"
                      strokeLinecap="round"
                      fill="none"
                    />{" "}
                    <path
                      d="M332 240c10-36 0-58-30-72"
                      stroke="#4FA3AE"
                      strokeWidth="26"
                      strokeLinecap="round"
                      fill="none"
                    />{" "}
                    <path
                      d="M300 480c-70-40-130-92-136-172-4-62 34-104 86-102 26 1 42 16 50 34 12-26 36-40 66-38 56 4 84 60 76 116-10 72-74 122-142 162Z"
                      fill="url(#mhg)"
                    />{" "}
                    <path
                      d="M302 246c-20 46-30 96-14 158M314 248c40 28 66 72 62 136M296 258c-40 10-74 40-90 84M352 290c20 12 36 30 44 52"
                      fill="none"
                      stroke="#7A1517"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />{" "}
                  </g>{" "}
                </defs>{" "}
                {/* the one line: voice, then heartbeat, then your path */}{" "}
                <path
                  id="mline"
                  fill="none"
                  stroke="#0E5F6B"
                  strokeWidth="2.6"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />{" "}
                <circle id="mdot" r="6" fill="#D23133" opacity="0" />{" "}
                <text className="mono" id="mlab" x="24" y="436" fill="#5E6F73">
                  Your voice
                </text>{" "}
                {/* ACT 1: listen */}{" "}
                <g id="a1">
                  {" "}
                  <g transform="rotate(-2 600 230)">
                    {" "}
                    <rect
                      x="440"
                      y="44"
                      width="330"
                      height="360"
                      rx="18"
                      fill="#fff"
                      stroke="rgba(11,42,49,.08)"
                    />{" "}
                    <rect
                      x="440"
                      y="44"
                      width="330"
                      height="360"
                      rx="18"
                      fill="none"
                      stroke="rgba(11,42,49,.08)"
                      transform="translate(6 8)"
                      opacity=".6"
                    />{" "}
                    <text className="mono" x="466" y="82" fill="#5E6F73">
                      My notes
                    </text>{" "}
                    <text className="mono" x="744" y="82" fill="#D23133" textAnchor="end">
                      Today
                    </text>{" "}
                    <g stroke="rgba(11,42,49,.08)">
                      <path d="M466 136H744M466 188H744M466 240H744M466 292H744M466 344H744" />
                    </g>{" "}
                    <g id="notes" className="ser" fontSize="25" fill="#0B2A31">
                      {" "}
                      <clipPath id="nc0">
                        <rect x="460" y="100" width="0" height="44" />
                      </clipPath>
                      <clipPath id="nc1">
                        <rect x="460" y="152" width="0" height="44" />
                      </clipPath>
                      <clipPath id="nc2">
                        <rect x="460" y="204" width="0" height="44" />
                      </clipPath>
                      <clipPath id="nc3">
                        <rect x="460" y="256" width="0" height="44" />
                      </clipPath>
                      <clipPath id="nc4">
                        <rect x="460" y="308" width="0" height="44" />
                      </clipPath>{" "}
                      <text x="468" y="130" clipPath="url(#nc0)">
                        breathless on stairs
                      </text>{" "}
                      <text x="468" y="182" clipPath="url(#nc1)">
                        chest feels tight
                      </text>{" "}
                      <text x="468" y="234" clipPath="url(#nc2)">
                        for about two months
                      </text>{" "}
                      <text x="468" y="286" clipPath="url(#nc3)">
                        settles with rest
                      </text>{" "}
                      <text x="468" y="338" clipPath="url(#nc4)" fill="#D23133">
                        next: examine, ECG
                      </text>{" "}
                    </g>{" "}
                    <path
                      id="nsq"
                      d="M468 344c40 6 120 6 160 0"
                      fill="none"
                      stroke="#D23133"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeDasharray="170"
                      strokeDashoffset="170"
                    />{" "}
                  </g>{" "}
                  <g id="chips" className="sans" fontSize="15">
                    {" "}
                    <g data-tx="590" data-ty="120">
                      <rect
                        x="-96"
                        y="-22"
                        width="192"
                        height="44"
                        rx="22"
                        fill="#06333D"
                      />
                      <text textAnchor="middle" y="5" fill="#fff">
                        "I get breathless"
                      </text>
                    </g>{" "}
                    <g data-tx="580" data-ty="172">
                      <rect
                        x="-90"
                        y="-22"
                        width="180"
                        height="44"
                        rx="22"
                        fill="#06333D"
                      />
                      <text textAnchor="middle" y="5" fill="#fff">
                        "tight chest"
                      </text>
                    </g>{" "}
                    <g data-tx="600" data-ty="224">
                      <rect
                        x="-90"
                        y="-22"
                        width="180"
                        height="44"
                        rx="22"
                        fill="#06333D"
                      />
                      <text textAnchor="middle" y="5" fill="#fff">
                        "two months now"
                      </text>
                    </g>{" "}
                    <g data-tx="580" data-ty="276">
                      <rect
                        x="-106"
                        y="-22"
                        width="212"
                        height="44"
                        rx="22"
                        fill="#06333D"
                      />
                      <text textAnchor="middle" y="5" fill="#fff">
                        "goes away if I rest"
                      </text>
                    </g>{" "}
                  </g>{" "}
                </g>{" "}
                {/* ACT 2: look */}{" "}
                <g id="a2" opacity="0">
                  {" "}
                  <circle cx="300" cy="225" r="156" fill="#fff" />{" "}
                  <circle
                    cx="300"
                    cy="230"
                    r="196"
                    fill="none"
                    stroke="rgba(11,42,49,.08)"
                    strokeDasharray="2 7"
                  />{" "}
                  <use href="#heartArt" transform="translate(74 0) scale(.75)" />{" "}
                  <g id="ripples" fill="none" stroke="#D23133" strokeWidth="1.5">
                    <circle className="rp" r="40" />
                    <circle className="rp b" r="40" />
                  </g>{" "}
                  <path
                    id="tube"
                    d=""
                    fill="none"
                    stroke="url(#tubeG)"
                    strokeWidth="9"
                    strokeLinecap="round"
                  />{" "}
                  <g id="steth">
                    {" "}
                    <ellipse
                      cx="4"
                      cy="10"
                      rx="40"
                      ry="14"
                      fill="rgba(11,42,49,.18)"
                      filter="url(#soft)"
                    />{" "}
                    <rect
                      x="22"
                      y="-46"
                      width="12"
                      height="34"
                      rx="6"
                      fill="url(#metal)"
                      transform="rotate(32 28 -29)"
                    />{" "}
                    <circle r="38" fill="url(#metal)" />{" "}
                    <circle
                      r="38"
                      fill="none"
                      stroke="rgba(255,255,255,.7)"
                      strokeWidth="1"
                    />{" "}
                    <circle r="31" fill="#0B2A31" /> <circle r="27" fill="url(#diaph)" />{" "}
                    <circle
                      r="27"
                      fill="none"
                      stroke="rgba(255,255,255,.12)"
                      strokeWidth="1"
                    />{" "}
                    <circle
                      r="15"
                      fill="none"
                      stroke="rgba(255,255,255,.08)"
                      strokeWidth="1"
                    />{" "}
                    <path
                      d="M-18 -14a24 24 0 0 1 22 -10"
                      fill="none"
                      stroke="rgba(255,255,255,.55)"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />{" "}
                  </g>{" "}
                  <text
                    id="lub"
                    className="mono"
                    fontSize="11"
                    fill="#D23133"
                    opacity="0"
                  >
                    lub · dub
                  </text>{" "}
                  <g id="checks" className="sans" fontSize="15" fill="#0B2A31">
                    {" "}
                    <g transform="translate(560 108)">
                      <circle r="13" fill="#fff" stroke="#0B2A31" />
                      <path
                        className="ck"
                        d="M-6 0l4 4 8-8"
                        fill="none"
                        stroke="#D23133"
                        strokeWidth="2.4"
                        strokeDasharray="20"
                        strokeDashoffset="20"
                      />
                      <text x="24" y="5">
                        Pulse
                      </text>
                      <text
                        className="mono"
                        x="220"
                        y="5"
                        textAnchor="end"
                        fill="#5E6F73"
                      >
                        72 / min
                      </text>
                    </g>{" "}
                    <g transform="translate(560 168)">
                      <circle r="13" fill="#fff" stroke="#0B2A31" />
                      <path
                        className="ck"
                        d="M-6 0l4 4 8-8"
                        fill="none"
                        stroke="#D23133"
                        strokeWidth="2.4"
                        strokeDasharray="20"
                        strokeDashoffset="20"
                      />
                      <text x="24" y="5">
                        Blood pressure
                      </text>
                      <text
                        className="mono"
                        x="220"
                        y="5"
                        textAnchor="end"
                        fill="#5E6F73"
                      >
                        128/82
                      </text>
                    </g>{" "}
                    <g transform="translate(560 228)">
                      <circle r="13" fill="#fff" stroke="#0B2A31" />
                      <path
                        className="ck"
                        d="M-6 0l4 4 8-8"
                        fill="none"
                        stroke="#D23133"
                        strokeWidth="2.4"
                        strokeDasharray="20"
                        strokeDashoffset="20"
                      />
                      <text x="24" y="5">
                        Heart sounds
                      </text>
                      <text
                        className="mono"
                        x="220"
                        y="5"
                        textAnchor="end"
                        fill="#5E6F73"
                      >
                        heard
                      </text>
                    </g>{" "}
                    <g transform="translate(560 288)">
                      <circle r="13" fill="#fff" stroke="#0B2A31" />
                      <path
                        className="ck"
                        d="M-6 0l4 4 8-8"
                        fill="none"
                        stroke="#D23133"
                        strokeWidth="2.4"
                        strokeDasharray="20"
                        strokeDashoffset="20"
                      />
                      <text x="24" y="5">
                        ECG
                      </text>
                      <text
                        className="mono"
                        x="220"
                        y="5"
                        textAnchor="end"
                        fill="#5E6F73"
                      >
                        recorded
                      </text>
                    </g>{" "}
                    <text className="mono" x="560" y="350" fill="#5E6F73" fontSize="10">
                      Example readings
                    </text>{" "}
                  </g>{" "}
                </g>{" "}
                {/* ACT 3: plan */}{" "}
                <g id="a3" opacity="0">
                  {" "}
                  <text className="mono" x="24" y="70" fill="#D23133">
                    Your plan, drafted together
                  </text>{" "}
                  <text className="ser" x="24" y="122" fontSize="34" fill="#0B2A31">
                    "A narrowing in one heart artery
                  </text>{" "}
                  <text className="ser" x="24" y="162" fontSize="34" fill="#0B2A31">
                    is the likely cause."
                  </text>{" "}
                  <path
                    id="brU"
                    d="M300 470C390 470 440 250 560 250"
                    fill="none"
                    stroke="#0B2A31"
                    strokeWidth="2.5"
                    strokeDasharray="340"
                    strokeDashoffset="340"
                  />{" "}
                  <path
                    id="brD"
                    d="M300 470C390 470 440 560 560 560"
                    fill="none"
                    stroke="#0B2A31"
                    strokeWidth="2.5"
                    strokeDasharray="300"
                    strokeDashoffset="300"
                  />{" "}
                  <circle cx="300" cy="470" r="7" fill="#0B2A31" />{" "}
                  <g id="opts" className="sans">
                    {" "}
                    <g transform="translate(572 250)">
                      <rect
                        x="0"
                        y="-36"
                        width="220"
                        height="72"
                        rx="18"
                        fill="#fff"
                        stroke="rgba(11,42,49,.1)"
                      />
                      <circle cx="30" cy="0" r="15" fill="#F7E4DF" />
                      <text
                        x="30"
                        y="5"
                        textAnchor="middle"
                        fill="#D23133"
                        fontSize="14"
                        fontWeight="500"
                      >
                        A
                      </text>
                      <text x="56" y="-4" fontSize="15" fill="#0B2A31">
                        Medicines and
                      </text>
                      <text x="56" y="16" fontSize="15" fill="#0B2A31">
                        lifestyle
                      </text>
                    </g>{" "}
                    <g transform="translate(572 400)">
                      <rect
                        x="0"
                        y="-36"
                        width="220"
                        height="72"
                        rx="18"
                        fill="#fff"
                        stroke="rgba(11,42,49,.1)"
                      />
                      <circle cx="30" cy="0" r="15" fill="#F7E4DF" />
                      <text
                        x="30"
                        y="5"
                        textAnchor="middle"
                        fill="#D23133"
                        fontSize="14"
                        fontWeight="500"
                      >
                        B
                      </text>
                      <text x="56" y="-4" fontSize="15" fill="#0B2A31">
                        Angioplasty and
                      </text>
                      <text x="56" y="16" fontSize="15" fill="#0B2A31">
                        a stent
                      </text>
                    </g>{" "}
                    <g transform="translate(572 560)">
                      <rect
                        x="0"
                        y="-36"
                        width="220"
                        height="72"
                        rx="18"
                        fill="#fff"
                        stroke="rgba(11,42,49,.1)"
                      />
                      <circle cx="30" cy="0" r="15" fill="#F7E4DF" />
                      <text
                        x="30"
                        y="5"
                        textAnchor="middle"
                        fill="#D23133"
                        fontSize="14"
                        fontWeight="500"
                      >
                        C
                      </text>
                      <text x="56" y="-4" fontSize="15" fill="#0B2A31">
                        Bypass surgery
                      </text>
                      <text x="56" y="16" fontSize="15" fill="#0B2A31">
                        (CABG)
                      </text>
                    </g>{" "}
                  </g>{" "}
                  <g id="decide" opacity="0">
                    <rect x="24" y="214" width="250" height="44" rx="22" fill="#06333D" />
                    <text
                      className="sans"
                      x="149"
                      y="241"
                      textAnchor="middle"
                      fill="#fff"
                      fontSize="15"
                    >
                      Every option explained. You choose.
                    </text>
                  </g>{" "}
                </g>{" "}
              </svg>{" "}
              <div className="mhint">
                <i></i>Keep scrolling
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      <section id="fv-bring" data-hdr="l">
        {" "}
        <div className="wrap">
          {" "}
          <div className="shead">
            {" "}
            <div>
              <span className="lab">What to bring</span>
              <h2 style={{ marginTop: "18px" }}>
                <span className="ln">
                  <span>Pack your bag</span>
                </span>
                <span className="ln">
                  <span>
                    with <em>this list.</em>
                  </span>
                </span>
              </h2>
            </div>{" "}
            <p className="sub" data-rv={true}>
              Tick things off as you pack. Your ticks stay on this device only.
            </p>{" "}
          </div>{" "}
          <div className="fv-bg">
            {" "}
            <div id="fvlist">{FVG.map(([k, items]) => (
              <div key={k} className="fv-grp"><span className="k">{k}</span><div className="fv-list">{items.map(([t, s]) => {
                const i = fi++;
                return <label key={i} data-rv={true}><input type="checkbox" value={i} /><span className="bx"><svg viewBox="0 0 14 14"><path d="M2 7.5 5.5 11 12 3.5" /></svg></span><span><span className="t">{t}</span>{s ? <small>{s}</small> : null}</span></label>;
              })}</div></div>
            ))}</div>{" "}
            <div className="fv-ring" data-rv={true}>
              {" "}
              <svg viewBox="0 0 200 200">
                <circle className="bg" cx="100" cy="100" r="86" />
                <circle
                  className="fg"
                  id="fvfg"
                  cx="100"
                  cy="100"
                  r="86"
                  pathLength="1"
                  strokeDasharray="1"
                  strokeDashoffset="1"
                />
              </svg>{" "}
              <div className="num">
                <span id="fvn">0</span>
                <small id="fvof">{`of ${FVT} packed`}</small>
              </div>{" "}
              <h3 id="fvh">
                Let's get
                <br />
                <em>you ready.</em>
              </h3>{" "}
              <p id="fvp">Tick each item as you put it in your bag.</p>{" "}
              <div className="acts">
                <a
                  className="btn b-red b-sm"
                  data-cur={true}
                  id="fvwa"
                  target="_blank"
                  rel="noopener"
                  href={WA_HOME}
                >
                  Book on WhatsApp
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
              <p style={{ marginTop: "14px" }}>
                <button className="rs" id="fvrs" type="button">
                  Clear my ticks
                </button>
              </p>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      <section id="fv-know" data-hdr="l">
        {" "}
        <div className="wrap">
          {" "}
          <div className="shead">
            {" "}
            <div>
              <span className="lab">Good to know</span>
              <h2 style={{ marginTop: "18px" }}>
                <span className="ln">
                  <span>Small things that</span>
                </span>
                <span className="ln">
                  <span>
                    make it <em>easier.</em>
                  </span>
                </span>
              </h2>
            </div>{" "}
            <p className="sub" data-rv={true}>
              Practical details for the day of your visit.
            </p>{" "}
          </div>{" "}
          <div className="fv-kb">
            {" "}
            <div className="fv-k a" data-rv={true}>
              <div className="ic">
                <svg viewBox="0 0 24 24">
                  <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12Z" />
                </svg>
              </div>
              <h3>Explained in your language</h3>
              <p>
                I explain your condition and options in Hindi or English, without
                jargon. Ask as many questions as you need.
              </p>
              <div className="lang">
                <span>हिन्दी</span>
                <span>English</span>
              </div>
            </div>{" "}
            <div className="fv-k b" data-rv={true} style={{ "--d": ".05s" }}>
              <div className="ic">
                <svg viewBox="0 0 24 24">
                  <path d="M5 21V8l7-5 7 5v13" />
                  <path d="M10 21v-6h4v6" />
                </svg>
              </div>
              <h3>4th floor, by lift</h3>
              <p>
                Vindhya Retreat, near Gut Hospital. Look for the red heart on the glass
                door.
              </p>
            </div>{" "}
            <div className="fv-k c" data-rv={true} style={{ "--d": ".1s" }}>
              <div className="ic">
                <svg viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3 2" />
                </svg>
              </div>
              <h3>Come a little early</h3>
              <p>Arrive 10 to 15 minutes before your time to register and settle in.</p>
            </div>{" "}
            <div className="fv-k d" data-rv={true} style={{ "--d": ".15s" }}>
              <div className="ic">
                <svg viewBox="0 0 24 24">
                  <rect x="3" y="7" width="18" height="12" rx="3" />
                  <circle cx="12" cy="13" r="2.5" />
                </svg>
              </div>
              <h3>Fees and payment</h3>
              <p>
                Please ask the clinic about consultation fees and payment options when you
                book. <span className="chip">Confirm</span>
              </p>
            </div>{" "}
            <div className="fv-k e" data-rv={true} style={{ "--d": ".2s" }}>
              <div className="ic">
                <svg viewBox="0 0 24 24">
                  <path d="M9 11h6M12 8v6" />
                  <rect x="4" y="4" width="16" height="16" rx="4" />
                </svg>
              </div>
              <h3>Medicines on the day</h3>
              <p>
                Take your usual medicines unless you have been told otherwise. Do not stop
                blood thinners on your own. If a test needs fasting, the clinic will tell
                you when you book.
              </p>
            </div>{" "}
            <a
              className="fv-k f"
              data-rv={true}
              style={{ "--d": ".25s" }}
              href={TEL_PRIMARY}
            >
              <div className="ic">
                <svg viewBox="0 0 24 24">
                  <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
                </svg>
              </div>
              <h3>Running late?</h3>
              <p>Call {phonesDisplay.primary} and we will do our best to fit you in.</p>
            </a>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      <section id="journey" className="sec" data-hdr="l">
        {" "}
        <div className="wrap">
          {" "}
          <div className="shead">
            {" "}
            <div>
              <span className="lab">After the visit</span>
              <h2 style={{ marginTop: "18px" }}>
                <span className="ln">
                  <span>From first call</span>
                </span>
                <span className="ln">
                  <span>
                    to <em>follow-up.</em>
                  </span>
                </span>
              </h2>
            </div>{" "}
            <p className="sub" data-rv={true}>
              Four simple steps, with the clinic in touch at each one.
            </p>{" "}
          </div>{" "}
          <div className="jgrid">
            {" "}
            <div className="jline" data-line={true}>
              <i></i>
            </div>{" "}
            <div className="js" data-rv={true}>
              <div className="ic">
                <svg width="28" height="28" viewBox="0 0 28 28">
                  <path d="M8 4h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" />
                  <path className="r" d="M11 20h6" />
                </svg>
              </div>
              <h3>Book</h3>
              <p>
                Call or WhatsApp {phonesDisplay.primary}, and we confirm your time.{" "}
                <span className="chip">Confirm how fast</span>
              </p>
            </div>{" "}
            <div className="js" data-rv={true} style={{ "--d": ".12s" }}>
              <div className="ic">
                <svg width="28" height="28" viewBox="0 0 28 28">
                  <circle cx="14" cy="9" r="4" />
                  <path d="M6 24c0-5 4-8 8-8s8 3 8 8" />
                  <path className="r" d="M20 6l3-2" />
                </svg>
              </div>
              <h3>Visit</h3>
              <p>
                Bring old reports and your medicines. The first consultation is unhurried,
                so plan some time.
              </p>
            </div>{" "}
            <div className="js" data-rv={true} style={{ "--d": ".24s" }}>
              <div className="ic">
                <svg width="28" height="28" viewBox="0 0 28 28">
                  <path d="M3 15h5l2-4 3 9 3-12 2 7h7" />
                  <path className="r" d="M3 15h5" />
                </svg>
              </div>
              <h3>Tests and plan</h3>
              <p>Only the tests you need, then a clear plan you can take home.</p>
            </div>{" "}
            <div className="js" data-rv={true} style={{ "--d": ".36s" }}>
              <div className="ic">
                <svg width="28" height="28" viewBox="0 0 28 28">
                  <rect x="4" y="6" width="20" height="18" rx="2" />
                  <path d="M4 11h20M9 3v5M19 3v5" />
                  <path className="r" d="M10 17l3 3 5-5" />
                </svg>
              </div>
              <h3>Follow-up</h3>
              <p>
                Review dates, reports on WhatsApp, and recovery support if you have
                surgery.
              </p>
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      <section id="visit" className="sec" data-hdr="l" style={{ paddingTop: "0" }}>
        {" "}
        <div className="wrap">
          {" "}
          <div className="shead">
            {" "}
            <div>
              <span className="lab">Where</span>
              <h2 style={{ marginTop: "18px" }}>
                <span className="ln">
                  <span>
                    Come <em>in.</em>
                  </span>
                </span>
              </h2>
            </div>{" "}
            <p className="sub" data-rv={true}>
              Booking ahead saves you waiting. Walk-ins are welcome during OPD hours.
            </p>{" "}
          </div>{" "}
          <div className="vgrid">
            {" "}
            <div className="vcard" data-rv={true}>
              {" "}
              <h3>Anand Heart Center Bhopal</h3>{" "}
              <p className="sub">
                4th Floor, Vindhya Retreat, Plot No. 5, Near Gut Hospital, Janki Nagar,
                Chuna Bhatti, Bhopal, Madhya Pradesh 462016
              </p>{" "}
              <table className="htab" id="htab"></table>{" "}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
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
                  Book on WhatsApp
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
                <a
                  className="btn b-line"
                  href="https://maps.app.goo.gl/tNvRcRyR8Bai2jP29"
                  target="_blank"
                  rel="noopener"
                >
                  Directions
                </a>{" "}
              </div>{" "}
              <p style={{ marginTop: "22px", fontSize: ".92rem", color: "var(--mute)" }}>
                Phone{" "}
                <a href={TEL_PRIMARY} style={{ color: "var(--ink)" }}>
                  {phonesDisplay.primary}
                </a>{" "}
                (call and WhatsApp) ·{" "}
                <a href={TEL_SECONDARY} style={{ color: "var(--ink)" }}>
                  {phonesDisplay.secondary}
                </a>
                <br />
                Email{" "}
                <a href={MAIL_PRIMARY} style={{ color: "var(--ink)" }}>
                  info@anandheartcenter.com
                </a>
              </p>{" "}
            </div>{" "}
            <div className="vph rimg" data-rv={true}>
              <img
                src="/img/clinic-door.webp"
                alt="Entrance of Anand Heart Center"
                loading="lazy"
              />
              <div className="tagc">
                <div className="k">
                  <i></i>Look for
                </div>
                <b>The glass door with the red heart, 4th floor</b>
              </div>
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      <section id="faq" className="sec" data-hdr="l" style={{ paddingTop: "0" }}>
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
            Book your
            <br />
            <em>first visit.</em>
          </h2>{" "}
          <p>
            Call or WhatsApp during OPD hours. Bring your reports, and we will take it
            from there.
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
      <ReviewedBy url="/your-first-visit/" />
      </section>
    </>
  );
}
