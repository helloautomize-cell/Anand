import Image from "next/image";
import { waLink, WA_HOME } from "@/lib/whatsapp";
import { phonesDisplay, TEL_PRIMARY, TEL_SECONDARY, MAIL_PRIMARY } from "@/lib/site";
import { ReviewedBy } from "@/components/reviewed";
import DATA from "@/data/interactive.json";
export function HomePage() {
  return (
    <>
      <section className="hero" id="hero" data-hdr="l">
        {" "}
        <div className="wrap hgrid">
          {" "}
          <div className="htext">
            {" "}
            <span className="pill" data-rv={true}>
              <i>
                <svg width="12" height="12" viewBox="0 0 24 24">
                  <path
                    fill="#D23133"
                    d="M12 21s-8-5.3-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 10c0 5.7-8 11-8 11Z"
                  />
                </svg>
              </i>
              Heart, lung and vascular surgery · Bhopal
            </span>{" "}
            <h1>
              <span className="ln">
                <span>Heart care,</span>
              </span>
              <span className="ln">
                <span>
                  <em>carefully</em>
                </span>
              </span>
              <span className="ln">
                <span>explained.</span>
              </span>
            </h1>{" "}
            <p className="sub" data-rv={true} style={{ "--d": ".3s" }}>
              Heart, lung and vascular surgery in Janki Nagar, Bhopal, with{" "}
              <b>Dr. Anand Yadav</b>, MCh (CTVS), FACC, and 25 years of experience. An
              honest opinion on what your heart needs, in plain words, before any decision
              is made.
            </p>{" "}
            <div className="hacts" data-rv={true} style={{ "--d": ".45s" }}>
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
            <div className="hours" data-rv={true} style={{ "--d": ".6s" }}>
              <span className="open" id="open">
                <i></i>
                <span>Open today</span>
              </span>
              <span>Mon to Sat · 10 am to 7:30 pm</span>
              <span>Sunday closed</span>
            </div>{" "}
          </div>{" "}
          <div className="hpanel" id="hpanel" data-rv={true}>
            {" "}
            <div className="rings">
              <i style={{ width: "340px", height: "340px" }}></i>
              <i style={{ width: "560px", height: "560px" }}></i>
              <i style={{ width: "800px", height: "800px" }}></i>
            </div>{" "}
            <div className="por" id="por">
              <Image
                src="/img/dr-anand-yadav.webp"
                alt="Dr. Anand Yadav, cardiothoracic and vascular surgeon"
                width={981}
                height={1226}
                priority
                sizes="(max-width: 900px) 90vw, 560px"
              />
            </div>{" "}
            <div className="shade"></div>{" "}
            <div className="tagc t1" data-px="14">
              <div className="k">
                <i></i>Inside
              </div>
              <b>Bypass, valves, vessels, lungs</b>
            </div>{" "}
            <div className="tagc t2" data-px="-18">
              <div className="k">
                <i></i>The promise
              </div>
              <b>Explained before it is done</b>
            </div>{" "}
            <div className="tagc t3" data-px="10">
              <div className="k">
                <i></i>Your doctor
              </div>
              <b>MCh CTVS · FACC (US) · Fellowship, Australia</b>
            </div>{" "}
            <div className="tagc t4" data-px="-12">
              <div className="k">
                <i></i>Experience
              </div>
              <b>25 years in heart surgery</b>
            </div>{" "}
            <div className="hecg">
              <svg viewBox="0 0 600 60" preserveAspectRatio="none">
                <path
                  id="ecgB"
                  fill="none"
                  stroke="rgba(255,255,255,.14)"
                  strokeWidth="1.4"
                />
                <path
                  id="ecgR"
                  fill="none"
                  stroke="#FF9A9B"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>{" "}
            <div className="hname">
              <b>Dr. Anand Yadav</b>
              <span>Cardiothoracic and vascular surgeon</span>
            </div>{" "}
          </div>{" "}
        </div>{" "}
        <div className="strip" aria-hidden="true">
          <div className="row" id="strip"></div>
        </div>{" "}
      </section>{" "}
      <section id="why-clinic" data-hdr="l">
        {" "}
        <div className="wrap">
          {" "}
          <div className="wc">
            {" "}
            <div>
              {" "}
              <span className="lab">
                <b>Why</b> this clinic
              </span>{" "}
              <p className="big" id="wbig">
                For most patients, the hardest step is knowing whom to see. This clinic
                exists to give you the *right *opinion, based on what *you *actually
                *need.
              </p>{" "}
            </div>{" "}
            <div className="side" data-rv={true}>
              {" "}
              <p>
                Dr. Yadav is a heart surgeon, yet he set up a dedicated consultation
                clinic, so that patients from every background can sit down, be heard and
                get clear advice before anything else.
              </p>{" "}
              <p>
                Sometimes the answer is medicines and lifestyle. Sometimes it is a test, a
                procedure or surgery. And sometimes it is a different specialist. Whatever
                it is, you will know why.
              </p>{" "}
              <div className="qt">
                "Though I am a cardiac surgeon, I always felt my patients needed a
                dedicated place for consultation."<small>Dr. Anand Yadav</small>
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <div className="flow" id="flow">
            {" "}
            <div>
              <span>You</span>
              <b>Your symptoms and reports</b>
              <p>Your story, your history, your worries.</p>
            </div>
            <i></i>{" "}
            <div>
              <span>The question</span>
              <b>What do you actually need?</b>
              <p>An opinion that starts from your need, not from a procedure.</p>
            </div>
            <i></i>{" "}
            <div className="last">
              <span>The answer</span>
              <b>The right care, and the right person</b>
              <p>Medicines, tests, a procedure or surgery, explained.</p>
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
                        He <em>listens</em> first.
                      </span>
                    </span>
                  </h3>
                  <p>
                    What do you feel? Since when? What worries you most? Your words become
                    his notes. Family members are welcome to sit in.
                  </p>
                </div>{" "}
                <div className="at">
                  <h3>
                    <span className="ln">
                      <span>
                        He <em>looks</em> closely.
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
                      Dr. Yadav's notes
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
      <section id="heart" data-hdr="d">
        {" "}
        <div className="stage">
          {" "}
          <div className="hbox dark">
            {" "}
            <div className="hstage">
              {" "}
              <div className="bigw" id="bigw">
                pump
              </div>
              <div className="hglow"></div>{" "}
              <div className="tilt" id="tilt">
                <svg
                  className="anat"
                  id="anat"
                  data-s="0"
                  viewBox="0 0 600 600"
                  aria-hidden="true"
                >
                  {" "}
                  <defs>
                    {" "}
                    <radialGradient id="hgr" cx=".4" cy=".35" r=".8">
                      <stop offset="0" stopColor="#E9585A" />
                      <stop offset=".7" stopColor="#C42B2E" />
                      <stop offset="1" stopColor="#8E1E21" />
                    </radialGradient>{" "}
                    <linearGradient id="lg" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0" stopColor="#9CC6CC" stopOpacity=".55" />
                      <stop offset="1" stopColor="#5E9EA7" stopOpacity=".35" />
                    </linearGradient>{" "}
                  </defs>{" "}
                  <circle
                    cx="300"
                    cy="300"
                    r="270"
                    fill="none"
                    stroke="rgba(255,255,255,.08)"
                    strokeDasharray="2 8"
                  />{" "}
                  <g className="t3">
                    <g className="lung">
                      {" "}
                      <path
                        d="M250 170C200 170 140 230 130 330c-8 80 20 140 70 140 40 0 62-30 62-70V200c0-18-4-30-12-30Z"
                        fill="url(#lg)"
                        stroke="#9CC6CC"
                        strokeWidth="1.5"
                      />{" "}
                      <path
                        d="M350 170c50 0 110 60 120 160 8 80-20 140-70 140-40 0-62-30-62-70V200c0-18 4-30 12-30Z"
                        fill="url(#lg)"
                        stroke="#9CC6CC"
                        strokeWidth="1.5"
                      />{" "}
                      <path
                        d="M190 260c20 10 40 30 50 60M170 360c25-5 50 0 70 20M410 260c-20 10-40 30-50 60M430 360c-25-5-50 0-70 20"
                        fill="none"
                        stroke="#9CC6CC"
                        strokeWidth="1.2"
                        opacity=".6"
                      />
                    </g>{" "}
                    <path
                      d="M300 80v90M300 170c-10 10-30 10-38 30M300 170c10 10 30 10 38 30"
                      fill="none"
                      stroke="#9CC6CC"
                      strokeWidth="9"
                      strokeLinecap="round"
                    />
                  </g>{" "}
                  <g className="t4">
                    {" "}
                    <circle cx="300" cy="62" r="34" fill="rgba(255,255,255,.1)" />
                    <rect
                      x="246"
                      y="104"
                      width="108"
                      height="210"
                      rx="46"
                      fill="rgba(255,255,255,.1)"
                    />{" "}
                    <path
                      d="M246 130l-34 150M354 130l34 150"
                      stroke="rgba(255,255,255,.1)"
                      strokeWidth="24"
                      strokeLinecap="round"
                    />{" "}
                    <path
                      d="M276 300l-8 270M324 300l8 270"
                      stroke="rgba(255,255,255,.1)"
                      strokeWidth="34"
                      strokeLinecap="round"
                    />{" "}
                    <path
                      className="vflow"
                      stroke="#FF6B6E"
                      d="M304 196v120l-30 20-6 230M304 316l26 20 6 230M304 150l-50 16-36 110M304 150l50 16 36 110"
                    />{" "}
                    <path
                      className="vflow"
                      stroke="#7CC3CC"
                      style={{ animationDirection: "reverse" }}
                      d="M294 196v118l-34 22-4 228"
                    />{" "}
                    <path
                      d="M340 400c10 14-10 24 0 38s-10 24 0 38-10 24 0 38"
                      fill="none"
                      stroke="#7CC3CC"
                      strokeWidth="5"
                      strokeLinecap="round"
                    />{" "}
                    <circle
                      cx="340"
                      cy="456"
                      r="34"
                      fill="none"
                      stroke="#FF9A9B"
                      strokeWidth="1.5"
                      strokeDasharray="3 5"
                    />
                    <text className="atxt" x="384" y="460">
                      Veins
                    </text>{" "}
                    <circle
                      cx="262"
                      cy="420"
                      r="26"
                      fill="none"
                      stroke="#FF9A9B"
                      strokeWidth="1.5"
                      strokeDasharray="3 5"
                    />
                    <text className="atxt" x="150" y="424">
                      Arteries
                    </text>
                  </g>{" "}
                  <g id="hw">
                    <g id="hwb">
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
                        d="M318 132l-6-36M348 126l4-38M378 136l12-30"
                        stroke="#B3282B"
                        strokeWidth="12"
                        strokeLinecap="round"
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
                        fill="url(#hgr)"
                      />{" "}
                      <path className="cor" d="M302 246c-20 46-30 96-14 158" />
                      <path className="cor" d="M314 248c40 28 66 72 62 136" />
                      <path className="cor" d="M296 258c-40 10-74 40-90 84" />
                      <path
                        className="cor"
                        d="M352 290c20 12 36 30 44 52"
                        style={{ strokeWidth: "3" }}
                      />{" "}
                      <ellipse
                        className="plq"
                        cx="356"
                        cy="300"
                        rx="11"
                        ry="8"
                        fill="#F2C14E"
                      />{" "}
                      <path className="graft t1" d="M360 130c70 40 62 140 8 220" />{" "}
                      <g className="stent t1">
                        <rect
                          x="282"
                          y="320"
                          width="14"
                          height="40"
                          rx="3"
                          fill="none"
                          stroke="#fff"
                          strokeWidth="2"
                          transform="rotate(-8 289 340)"
                        />
                        <path
                          d="M283 330l13 6M283 340l13 6M283 350l13 6"
                          stroke="#fff"
                          strokeWidth="1.5"
                          transform="rotate(-8 289 340)"
                        />
                      </g>{" "}
                      <g className="t5">
                        <ellipse
                          cx="300"
                          cy="350"
                          rx="38"
                          ry="30"
                          fill="#F6D1C8"
                          stroke="#fff"
                          strokeWidth="3"
                        />
                        <path
                          d="M268 340l-8-4M268 360l-8 4M332 340l8-4M332 360l8 4M290 322l-2-8M310 322l2-8M290 378l-2 8M310 378l2 8"
                          stroke="#fff"
                          strokeWidth="3"
                          strokeLinecap="round"
                        />
                      </g>{" "}
                    </g>{" "}
                    <circle r="5" fill="#fff" opacity=".9">
                      <animateMotion
                        dur="2.4s"
                        repeatCount="indefinite"
                        path="M282 232c-6-60 14-104 62-106 46-2 66 34 60 84"
                      />
                    </circle>{" "}
                    <circle r="4" fill="#fff" opacity=".7">
                      <animateMotion
                        dur="2.4s"
                        begin="1.2s"
                        repeatCount="indefinite"
                        path="M282 232c-6-60 14-104 62-106 46-2 66 34 60 84"
                      />
                    </circle>{" "}
                    <circle r="3.5" fill="#FFD9CC" opacity=".8">
                      <animateMotion
                        dur="2.4s"
                        begin=".6s"
                        repeatCount="indefinite"
                        path="M282 232c-6-60 14-104 62-106 46-2 66 34 60 84"
                      />
                    </circle>{" "}
                    <circle r="4" fill="#CFE8EC">
                      <animateMotion
                        dur="2s"
                        repeatCount="indefinite"
                        path="M236 140l4 100"
                      />
                    </circle>{" "}
                    <circle r="3.5" fill="#CFE8EC" opacity=".8">
                      <animateMotion
                        dur="2s"
                        begin="1s"
                        repeatCount="indefinite"
                        path="M236 140l4 100"
                      />
                    </circle>{" "}
                    <circle r="3.5" fill="#CFE8EC">
                      <animateMotion
                        dur="1.8s"
                        repeatCount="indefinite"
                        path="M332 240c10-36 0-58-30-72"
                      />
                    </circle>
                  </g>{" "}
                  <g className="t2">
                    <circle
                      cx="300"
                      cy="300"
                      r="140"
                      fill="none"
                      stroke="rgba(255,255,255,.16)"
                      strokeWidth="18"
                    />
                    <circle cx="300" cy="300" r="122" fill="#5C1214" />{" "}
                    <path
                      className="leaf a"
                      d="M300 300L196 240A120 120 0 0 1 404 240Z"
                    />
                    <path
                      className="leaf b"
                      d="M300 300L404 240A120 120 0 0 1 300 420Z"
                    />
                    <path
                      className="leaf c"
                      d="M300 300L300 420A120 120 0 0 1 196 240Z"
                    />{" "}
                    <text className="atxt" x="300" y="480" textAnchor="middle">
                      Aortic valve · opening and closing
                    </text>
                  </g>{" "}
                  <g className="t5">
                    <path
                      d="M130 500c60-60 280-60 340 0"
                      fill="none"
                      stroke="rgba(255,255,255,.25)"
                      strokeDasharray="2 8"
                      strokeWidth="2"
                    />{" "}
                    <circle cx="150" cy="486" r="7" fill="#FF9A9B" />
                    <circle cx="300" cy="455" r="7" fill="#7CC3CC" />
                    <circle cx="450" cy="486" r="7" fill="#7CC3CC" />{" "}
                    <text className="atxt" x="150" y="520" textAnchor="middle">
                      Surgery
                    </text>
                    <text className="atxt" x="300" y="440" textAnchor="middle">
                      Recovery
                    </text>
                    <text className="atxt" x="450" y="520" textAnchor="middle">
                      Home
                    </text>{" "}
                    <text className="atxt" x="300" y="110" textAnchor="middle">
                      A patched hole in a small heart
                    </text>
                  </g>{" "}
                  <g className="t1">
                    <text className="atxt" x="300" y="560" textAnchor="middle">
                      Blocked artery · bypass graft · stent
                    </text>
                  </g>{" "}
                  <g className="t3">
                    <text className="atxt" x="300" y="545" textAnchor="middle">
                      Lungs and chest
                    </text>
                  </g>{" "}
                  <g className="t0">
                    <text className="atxt" x="300" y="545" textAnchor="middle">
                      About 1,00,000 beats a day
                    </text>
                  </g>{" "}
                  <g id="callouts"></g>{" "}
                </svg>
              </div>{" "}
            </div>{" "}
            <div className="stx" id="stx">
              {" "}
              <div className="s on">
                <div className="n">
                  Inside your heart · <b>The pump</b>
                </div>
                <h3>
                  A heart that <em>never rests.</em>
                </h3>
                <p>
                  Your heart beats about a hundred thousand times a day. When it starts to
                  struggle, the first step is to listen, examine and test carefully.
                </p>
                <div className="live">
                  <i></i>
                  <span>
                    Since you opened this page, your heart has beaten about{" "}
                    <b id="beats">0</b> times.
                  </span>
                </div>
                <div className="svcs">
                  <a href="#treatments">Heart consultation</a>
                  <a href="#treatments">ECG, Echo, TMT at the clinic</a>
                  <a href="#treatments">Preventive check-up</a>
                </div>
              </div>{" "}
              <div className="s">
                <div className="n">
                  Inside your heart · <b>The arteries</b>
                </div>
                <h3>
                  When the road <em>narrows.</em>
                </h3>
                <p>
                  Fat and calcium can narrow the arteries that feed the heart. A stent can
                  open the narrowing from inside, or a bypass can build a new road around
                  it.
                </p>
                <div className="svcs">
                  <a href="#treatments">Bypass surgery (CABG)</a>
                  <a href="#treatments">Angiography and angioplasty</a>
                  <a href="#treatments">Stents</a>
                </div>
              </div>{" "}
              <div className="s">
                <div className="n">
                  Inside your heart · <b>The valves</b>
                </div>
                <h3>
                  Doors that must <em>close well.</em>
                </h3>
                <p>
                  Four valves keep blood moving one way. A leaking or tight valve can
                  often be repaired. If not, it can be replaced with a tissue or
                  mechanical valve.
                </p>
                <div className="svcs">
                  <a href="#treatments">Valve repair</a>
                  <a href="#treatments">Valve replacement</a>
                  <a href="#treatments">Minimally invasive surgery</a>
                </div>
              </div>{" "}
              <div className="s">
                <div className="n">
                  Inside your heart · <b>The lungs</b>
                </div>
                <h3>
                  The heart's <em>closest neighbours.</em>
                </h3>
                <p>
                  Heart and lungs share the chest and work as one. As a cardiothoracic
                  surgeon, Dr. Yadav also treats conditions of the lungs and chest wall.
                </p>
                <div className="svcs">
                  <a href="#treatments">Lung and chest surgery</a>
                  <a href="#treatments">Complex cardiac surgery</a>
                </div>
              </div>{" "}
              <div className="s">
                <div className="n">
                  Inside your heart · <b>The vessels</b>
                </div>
                <h3>
                  Every road the <em>blood travels.</em>
                </h3>
                <p>
                  Blocked leg arteries, swollen veins and a weak bulge in a large artery
                  all need a vascular surgeon. Sudden symptoms need urgent care.
                </p>
                <div className="svcs">
                  <a href="#treatments">Vascular surgery</a>
                  <a href="#treatments">Varicose veins</a>
                  <a href="#treatments">
                    Emergency cardiac care <span className="chip">Confirm where</span>
                  </a>
                </div>
              </div>{" "}
              <div className="s">
                <div className="n">
                  Inside your heart · <b>Small hearts, and healing</b>
                </div>
                <h3>
                  For the smallest <em>patients too.</em>
                </h3>
                <p>
                  Some children are born with a heart defect, and some develop one later.
                  Surgery is followed by a careful plan for recovery, at every age.
                </p>
                <div className="svcs">
                  <a href="#treatments">Children's heart surgery</a>
                  <a href="#treatments">Recovery and rehabilitation</a>
                </div>
              </div>{" "}
              <div className="hnav" id="hnav">
                <button className="on">
                  Pump
                  <i>
                    <b></b>
                  </i>
                </button>
                <button>
                  Arteries
                  <i>
                    <b></b>
                  </i>
                </button>
                <button>
                  Valves
                  <i>
                    <b></b>
                  </i>
                </button>
                <button>
                  Lungs
                  <i>
                    <b></b>
                  </i>
                </button>
                <button>
                  Vessels
                  <i>
                    <b></b>
                  </i>
                </button>
                <button>
                  Small hearts
                  <i>
                    <b></b>
                  </i>
                </button>
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      <section id="treatments" className="sec" data-hdr="l">
        {" "}
        <div className="wrap">
          {" "}
          <div className="shead">
            {" "}
            <div>
              <span className="lab">Treatments</span>
              <h2 style={{ marginTop: "18px" }}>
                <span className="ln">
                  <span>Care for the heart,</span>
                </span>
                <span className="ln">
                  <span>
                    lungs and <em>vessels.</em>
                  </span>
                </span>
              </h2>
            </div>{" "}
            <p className="sub" data-rv={true}>
              The full range of cardiothoracic and vascular surgery under one surgeon:
              adult heart, lung, vascular, thoracic and children's heart surgery.
            </p>{" "}
          </div>{" "}
          <div className="told" id="told" data-rv={true}>
            {" "}
            <span className="muted">Right now,</span>{" "}
            <button className="pick" id="pick" aria-haspopup="listbox">
              <span id="pickT">I have blocked heart arteries</span>
              <svg viewBox="0 0 12 12">
                <path
                  d="M2 4l4 4 4-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
              </svg>
            </button>
            <span className="muted">. Here is where to start.</span>{" "}
            <div className="pop" id="pop" role="listbox" aria-label="What is going on">
              {DATA.treatmentsFinder.told.map((o, i) => (
                <button
                  key={i}
                  role="option"
                  aria-selected={i === 0}
                  className={i === 0 ? "on" : undefined}
                  data-i={i}
                >
                  {o[0]}
                  <small>{o[2]}</small>
                </button>
              ))}
            </div>{" "}
          </div>{" "}
          <div className="txg">
            {" "}
            <aside className="tpanel" id="tpanel">
              {" "}
              <div className="tp-top">
                <span id="tpCat">Heart surgery</span>
                <b>Anand Heart Center</b>
              </div>{" "}
              <svg viewBox="0 0 400 300" id="tpArt" aria-hidden="true">
                {" "}
                <g className="art" data-k="cabg">
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
                </g>{" "}
                <g className="art" data-k="angio">
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
                </g>{" "}
                <g className="art" data-k="valve">
                  <circle className="dw" pathLength="1" cx="200" cy="150" r="110" />
                  <circle className="dw" pathLength="1" cx="200" cy="150" r="92" />
                  <path
                    className="r dw"
                    pathLength="1"
                    d="M200 150L120 104M200 150l80-46M200 150v92"
                  />
                  <path className="f" d="M200 150L120 104A92 92 0 0 1 280 104Z" />
                  <circle className="r pul" cx="200" cy="150" r="8" />
                </g>{" "}
                <g className="art" data-k="child">
                  <path
                    className="dw"
                    pathLength="1"
                    d="M200 250c-44-27-80-57-82-100-1-32 19-54 47-53 15 1 27 9 35 21 8-12 20-20 35-21 28-1 48 21 47 53-2 43-38 73-82 100Z"
                  />
                  <ellipse className="f" cx="200" cy="165" rx="30" ry="24" />
                  <path
                    className="r dw"
                    pathLength="1"
                    d="M176 150l-8-4M176 180l-8 4M224 150l8-4M224 180l8 4M190 140l-2-8M210 140l2-8M190 190l-2 8M210 190l2 8"
                  />
                  <ellipse
                    className="r dw"
                    pathLength="1"
                    cx="200"
                    cy="165"
                    rx="30"
                    ry="24"
                  />
                  <path
                    className="dw"
                    pathLength="1"
                    d="M70 60c10-14 30-14 40 0M290 60c10-14 30-14 40 0"
                  />
                </g>{" "}
                <g className="art" data-k="mini">
                  <path
                    className="dw"
                    pathLength="1"
                    d="M110 40c30 20 150 20 180 0M110 40c-20 60-20 180 10 240M290 40c20 60 20 180-10 240"
                  />
                  <path className="r dw" pathLength="1" d="M200 110v90" strokeWidth="3" />
                  <path
                    className="r dw"
                    pathLength="1"
                    d="M190 120h20M190 140h20M190 160h20M190 180h20"
                  />
                  <circle className="r pul" cx="200" cy="230" r="6" />
                </g>{" "}
                <g className="art" data-k="vasc">
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
                </g>{" "}
                <g className="art" data-k="lung">
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
                </g>{" "}
                <g className="art" data-k="check">
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
                </g>{" "}
                <g className="art" data-k="care">
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
                </g>{" "}
              </svg>{" "}
              <div className="tp-swap">
                {" "}
                <div className="tp-name" id="tpName"></div>{" "}
                <p className="tp-for" id="tpFor"></p>{" "}
                <div className="tp-j">
                  <div>
                    <b>
                      Before<i></i>
                    </b>
                    <span id="j1"></span>
                  </div>
                  <div>
                    <b>
                      During<i></i>
                    </b>
                    <span id="j2"></span>
                  </div>
                  <div>
                    <b>
                      After<i></i>
                    </b>
                    <span id="j3"></span>
                  </div>
                </div>{" "}
              </div>{" "}
              <p className="tp-note">
                A typical path. Every patient's plan is made for them.
              </p>{" "}
            </aside>{" "}
            <div>
              {" "}
              <div className="tlist" id="tlist"></div>{" "}
              <div className="tfoot" data-rv={true}>
                Not sure which one you need? That is what the first consultation is for.{" "}
                <a className="btn b-line b-sm" href="#visit">
                  Book a consultation
                </a>
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      <section id="clinic" className="sec" data-hdr="l">
        {" "}
        <div className="wrap">
          {" "}
          <div className="shead">
            {" "}
            <div>
              <span className="lab">The clinic</span>
              <h2 style={{ marginTop: "18px" }}>
                <span className="ln">
                  <span>A quiet floor.</span>
                </span>
                <span className="ln">
                  <span>
                    <em>Unhurried</em> care.
                  </span>
                </span>
              </h2>
            </div>{" "}
            <p className="sub" data-rv={true}>
              Fourth floor, Vindhya Retreat, Janki Nagar. Away from the street, with time
              for every question.
            </p>{" "}
          </div>{" "}
          <div className="cgrid">
            {" "}
            <div className="cb ph c-a rimg" data-rv={true}>
              <img
                src="/img/waiting-hall.webp"
                alt="Waiting hall at Anand Heart Center"
                loading="lazy"
              />
              <div className="cap">
                <span>Waiting hall</span>
              </div>
            </div>{" "}
            <div className="cb c-b" data-rv={true}>
              <span className="k">Open when you can come</span>
              <h3>Six days a week.</h3>
              <div className="days" id="days"></div>
            </div>{" "}
            <div className="cb c-c" data-rv={true} style={{ "--d": ".1s" }}>
              <span className="k">In plain words</span>
              <h3>Options, not pressure.</h3>
              <p>Every choice explained side by side.</p>
              <div className="opts">
                <div>
                  <b>A</b>Medicines and lifestyle
                </div>
                <div>
                  <b>B</b>A procedure, if it helps
                </div>
                <div>
                  <b>C</b>Surgery, if it is needed
                </div>
              </div>
            </div>{" "}
            <div className="cb ph c-d rimg" data-rv={true}>
              <img src="/img/consult-room.webp" alt="Consultation room" loading="lazy" />
              <div className="cap">
                <span>Consultation room</span>
              </div>
            </div>{" "}
            <div className="cb c-e tl2" data-rv={true} style={{ "--d": ".1s" }}>
              <span className="k">No rush</span>
              <h3>Think it over at home.</h3>
              <ul className="chk">
                {" "}
                <li>
                  <svg width="16" height="16" viewBox="0 0 16 16">
                    <path d="M3 8l3 3 7-7" fill="none" stroke="#FF9A9B" strokeWidth="2" />
                  </svg>
                  Reports and summaries on WhatsApp
                </li>{" "}
                <li>
                  <svg width="16" height="16" viewBox="0 0 16 16">
                    <path d="M3 8l3 3 7-7" fill="none" stroke="#FF9A9B" strokeWidth="2" />
                  </svg>
                  Bring your family to the next visit
                </li>{" "}
                <li>
                  <svg width="16" height="16" viewBox="0 0 16 16">
                    <path d="M3 8l3 3 7-7" fill="none" stroke="#FF9A9B" strokeWidth="2" />
                  </svg>
                  Hindi or English, whichever you prefer
                </li>
              </ul>
            </div>{" "}
            <div className="cb ph c-f rimg" data-rv={true}>
              <img
                src="/img/waiting-garden.webp"
                alt="Waiting area with plants"
                loading="lazy"
              />
              <div className="cap">
                <span>Waiting area</span>
              </div>
            </div>{" "}
            <div className="cb c-g" data-rv={true}>
              <span className="k">Find us</span>
              <h3>4th floor, Vindhya Retreat</h3>
              <p>
                Plot No. 5, near Gut Hospital, Janki Nagar, Chuna Bhatti, Bhopal 462016.
                Lift and parking <span className="chip">Confirm</span>
              </p>{" "}
              <div className="map">
                <svg
                  className="m"
                  viewBox="0 0 600 170"
                  preserveAspectRatio="xMidYMid slice"
                >
                  <path
                    d="M-10 110C120 90 220 130 330 100S520 50 620 70"
                    stroke="#fff"
                    strokeWidth="16"
                    fill="none"
                  />
                  <path
                    d="M180 -10L240 200M420 -10L380 200M-10 36L620 26"
                    stroke="#fff"
                    strokeWidth="9"
                    fill="none"
                  />
                  <path
                    d="M40 130h80v30H40zM470 110h90v44h-90zM260 40h90v36h-90z"
                    fill="#E2D9CC"
                  />
                  <circle cx="520" cy="40" r="24" fill="#D7E5DA" />
                </svg>{" "}
                <div className="pin">
                  <svg width="34" height="44" viewBox="0 0 34 44">
                    <path
                      d="M17 43S2 27 2 16a15 15 0 0 1 30 0c0 11-15 27-15 27Z"
                      fill="#D23133"
                    />
                    <path
                      d="M17 22s-6-4-6-8a3 3 0 0 1 6-1 3 3 0 0 1 6 1c0 4-6 8-6 8Z"
                      fill="#fff"
                    />
                  </svg>
                </div>
              </div>{" "}
              <a
                className="btn b-line b-sm"
                style={{ marginTop: "18px" }}
                href="https://maps.app.goo.gl/tNvRcRyR8Bai2jP29"
                target="_blank"
                rel="noopener"
              >
                Get directions
              </a>
            </div>{" "}
            <div className="cb ph c-h rimg" data-rv={true}>
              <img src="/img/reception-desk.webp" alt="Reception desk" loading="lazy" />
              <div className="cap">
                <span>Reception</span>
              </div>
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      <section id="doctor" className="sec dark" data-hdr="d">
        {" "}
        <div className="wrap dgrid">
          {" "}
          <div className="dpor" data-rv={true}>
            <img src="/img/dr-anand-yadav.webp" alt="Dr. Anand Yadav" />
            <div className="sig">
              <div>
                <b>Dr. Anand Yadav</b>
                <span>MBBS, MS, DNB, MCh (CTVS), FACC</span>
              </div>
              <span>25 years</span>
            </div>
          </div>{" "}
          <div className="dtext">
            {" "}
            <span className="lab">Meet your doctor</span>{" "}
            <h2>
              <span className="ln">
                <span>Dr. Anand</span>
              </span>
              <span className="ln">
                <span>
                  <em>Yadav.</em>
                </span>
              </span>
            </h2>{" "}
            <p className="lead" data-rv={true}>
              A cardiothoracic and vascular surgeon with 25 years of experience, trained
              in Bhopal, Mumbai, Jaipur and Australia. He has helped set up new heart
              surgery units in six hospitals across Bhopal and Punjab, and teaches surgery
              at LN Medical College.
            </p>{" "}
            <div className="cg" data-rv={true}>
              {" "}
              <div>
                <span className="k">Qualifications</span>
                <b>
                  MBBS (Gandhi Medical College, Bhopal) · MS (Grant Medical College and
                  J.J. Hospital, Mumbai) · DNB (General Surgery) · MCh CTVS (SMS Medical
                  College, Jaipur)
                </b>
              </div>{" "}
              <div>
                <span className="k">Fellowships</span>
                <b>Adult cardiac surgery, Australia · FACC (US)</b>
              </div>{" "}
              <div>
                <span className="k">Registration</span>
                <b>
                  MP729, Madhya Pradesh Medical Council{" "}
                  <span className="chip">Confirm</span>
                </b>
              </div>{" "}
              <div>
                <span className="k">Languages</span>
                <b>Hindi, English</b>
              </div>{" "}
            </div>{" "}
            <div className="stats" data-rv={true}>
              {" "}
              <div>
                <b>25</b>
                <span>years of experience</span>
              </div>{" "}
              <div>
                <b>6</b>
                <span>hospitals where he set up new heart surgery units</span>
              </div>{" "}
              <div>
                <b>5</b>
                <span>
                  areas: adult heart, lung, vascular, thoracic, children's heart
                </span>
              </div>{" "}
            </div>{" "}
            <div className="roles" data-rv={true}>
              {" "}
              <div>
                <span className="k">Today</span>
                <ul>
                  {" "}
                  <li>
                    <div>
                      Cardiothoracic and vascular surgeon
                      <small>JK Hospital, LN Medical College, Bhopal</small>
                    </div>
                  </li>{" "}
                  <li>
                    <div>
                      Associate Professor, General Surgery
                      <small>LN Medical College, Bhopal</small>
                    </div>
                  </li>{" "}
                  <li>
                    <div>
                      Visiting cardiac surgeon
                      <small>Carewell Hospital and Manoria Hospital, Bhopal</small>
                    </div>
                  </li>
                </ul>
              </div>{" "}
              <div>
                <span className="k">Before</span>
                <ul>
                  {" "}
                  <li>
                    <div>
                      Consultant
                      <small>Bhopal Memorial Hospital and Research Centre (BMHRC)</small>
                    </div>
                  </li>{" "}
                  <li>
                    <div>
                      Consultant<small>Max Hospitals, Punjab</small>
                    </div>
                  </li>{" "}
                  <li>
                    <div>
                      Fellow, adult cardiac surgery<small>Australia</small>
                    </div>
                  </li>
                </ul>
              </div>{" "}
            </div>{" "}
            <div className="why" id="why" style={{ marginTop: "14px" }}>
              {" "}
              <svg viewBox="-20 -20 240 240">
                {" "}
                <defs>
                  <clipPath id="cl">
                    <polygon points="-20,-20 100,-20 92,40 106,70 94,100 106,130 100,220 -20,220" />
                  </clipPath>
                  <clipPath id="cr">
                    <polygon points="100,-20 220,-20 220,220 100,220 106,130 94,100 106,70 92,40" />
                  </clipPath>
                </defs>{" "}
                <g className="beat">
                  {" "}
                  <g id="hl" clipPath="url(#cl)">
                    <path
                      id="hpl"
                      d="M100 178C40 130 8 96 8 60 8 30 30 12 56 12c20 0 36 12 44 28 8-16 24-28 44-28 26 0 48 18 48 48 0 36-32 70-92 118Z"
                      fill="#2B7C88"
                    />
                  </g>{" "}
                  <g id="hr" clipPath="url(#cr)">
                    <path
                      id="hpr"
                      d="M100 178C40 130 8 96 8 60 8 30 30 12 56 12c20 0 36 12 44 28 8-16 24-28 44-28 26 0 48 18 48 48 0 36-32 70-92 118Z"
                      fill="#2B7C88"
                    />
                  </g>{" "}
                  <path
                    className="st"
                    id="stitch"
                    d="M88 52l22 6M88 84l24 4M88 114l24-2M90 144l20-4"
                  />{" "}
                </g>{" "}
              </svg>{" "}
              <div>
                <p id="words">
                  As a boy, he lost someone dear to his family to rheumatic heart disease.
                  It is the reason he chose to spend his life mending hearts.
                </p>
                <small>Why heart surgery</small>
              </div>{" "}
            </div>{" "}
            <div className="prin">
              {" "}
              <div data-rv={true}>
                <b>Listen before deciding.</b>
                <p>The story comes first, the tests second.</p>
              </div>{" "}
              <div data-rv={true} style={{ "--d": ".1s" }}>
                <b>Say it plainly.</b>
                <p>No jargon. Every option, with its risks.</p>
              </div>{" "}
              <div data-rv={true} style={{ "--d": ".2s" }}>
                <b>Go at your pace.</b>
                <p>Unless it is urgent, there is time to think.</p>
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      <section id="path" className="dark" data-hdr="d">
        {" "}
        <div className="stage">
          {" "}
          <div className="wrap phead">
            {" "}
            <div>
              <span className="lab">His path</span>
              <h2 style={{ marginTop: "16px" }}>
                Twenty-five years of <em>mending</em> <br />
                hearts.
              </h2>
            </div>{" "}
          </div>{" "}
          <div className="pbig" id="pbig" aria-hidden="true">
            <span>Bhopal</span>
            <span>Mumbai</span>
            <span>Jaipur</span>
            <span>
              <em>BMHRC</em>
            </span>
            <span>Australia</span>
            <span>
              <em>Home</em>
            </span>
            <span>Six units</span>
            <span>
              <em>Today</em>
            </span>
          </div>{" "}
          <div className="track" id="track">
            {" "}
            <svg className="jpath" id="jpath">
              <path className="base" id="jbase" />
              <path className="glow" id="jglow" />
              <path className="done" id="jdone" />
            </svg>{" "}
            <div className="jmark" id="jmark">
              <svg viewBox="0 0 24 24">
                <path
                  fill="#fff"
                  d="M12 21s-8-5.3-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 10c0 5.7-8 11-8 11Z"
                />
              </svg>
            </div>{" "}
            <div className="stop">
              <i className="dt"></i>
              <div className="body">
                <svg className="ill" viewBox="0 0 150 110">
                  <path d="M20 90V40l55-22 55 22v50" />
                  <path d="M10 90h130" />
                  <path d="M38 90V48M58 90V48M92 90V48M112 90V48" />
                  <path className="r" d="M75 30v14M68 37h14" />
                </svg>
                <div className="yr">1996</div>
                <div className="pl">Bhopal</div>
                <h3>MBBS, Gandhi Medical College</h3>
                <p>Barkatullah University. Where the doctor in him began.</p>
              </div>
            </div>{" "}
            <div className="stop">
              <i className="dt"></i>
              <div className="body">
                <svg className="ill" viewBox="0 0 150 110">
                  <path d="M25 95V45h100v50" />
                  <path d="M55 95V68a20 20 0 0 1 40 0v27" />
                  <path d="M20 45l10-14h90l10 14" />
                  <path d="M40 31V20M110 31V20M60 31V22M90 31V22" />
                  <path d="M15 95h120" />
                  <path className="r" d="M66 58h18" />
                </svg>
                <div className="yr">MS</div>
                <div className="pl">Mumbai</div>
                <h3>
                  General surgery, Grant Medical College and J.J. Group of Hospitals
                </h3>
                <p>Then the DNB. The steady hands of a surgeon.</p>
              </div>
            </div>{" "}
            <div className="stop">
              <i className="dt"></i>
              <div className="body">
                <svg className="ill" viewBox="0 0 150 110">
                  <path d="M30 100V50l15-12 15 12 15-24 15 24 15-12 15 12v50" />
                  <path d="M45 100V62M60 100V58M75 100V48M90 100V58M105 100V62" />
                  <path d="M20 100h110" />
                  <path className="r" d="M75 30v-14" />
                  <circle className="r" cx="75" cy="12" r="3" />
                </svg>
                <div className="yr">2008</div>
                <div className="pl">Jaipur</div>
                <h3>MCh in cardiothoracic and vascular surgery</h3>
                <p>SMS Medical College. The training to operate on the heart itself.</p>
              </div>
            </div>{" "}
            <div className="stop">
              <i className="dt"></i>
              <div className="body">
                <svg className="ill" viewBox="0 0 150 110">
                  <path d="M20 98V36h110v62" />
                  <path d="M14 98h122" />
                  <path d="M36 52h14M36 68h14M100 52h14M100 68h14" />
                  <path d="M62 98V74h26v24" />
                  <path className="r" d="M75 46v18M66 55h18" />
                </svg>
                <div className="yr">BMHRC</div>
                <div className="pl">Bhopal</div>
                <h3>Consultant, Bhopal Memorial Hospital and Research Centre</h3>
                <p>Years of operating and caring for patients in his own city.</p>
              </div>
            </div>{" "}
            <div className="stop">
              <i className="dt"></i>
              <div className="body">
                <svg className="ill" viewBox="0 0 150 110">
                  <path d="M10 80c30-10 60-34 98-46l18-4c6 0 6 6 0 8L36 76l-8 10-8 2z" />
                  <path d="M64 52L50 30h10l26 14M78 66l8 24h-10L60 72" />
                  <path className="r" d="M100 96c10-12 30-12 40 0" />
                </svg>
                <div className="yr">2011</div>
                <div className="pl">South Australia</div>
                <h3>Fellowship in adult cardiac surgery</h3>
                <p>Advanced heart surgery, learnt alongside teams abroad.</p>
              </div>
            </div>{" "}
            <div className="stop">
              <i className="dt"></i>
              <div className="body">
                <svg className="ill" viewBox="0 0 150 110">
                  <path d="M30 98V54l45-34 45 34v44" />
                  <path d="M20 62l55-42 55 42" />
                  <path d="M14 98h122" />
                  <path
                    className="r"
                    d="M75 86s-16-10-16-20a8 8 0 0 1 16-4 8 8 0 0 1 16 4c0 10-16 20-16 20Z"
                  />
                </svg>
                <div className="yr">2013</div>
                <div className="pl">Back to Bhopal</div>
                <h3>He came home</h3>
                <p>Private practice in the city where his story began.</p>
              </div>
            </div>{" "}
            <div className="stop">
              <i className="dt"></i>
              <div className="body">
                <svg className="ill" viewBox="0 0 150 110">
                  <path d="M14 98h122" />
                  <path d="M22 98V60h30v38M60 98V44h30v54M98 98V68h30v30" />
                  <path className="r" d="M75 22v14M68 29h14" />
                  <path className="r" d="M37 72v10M32 77h10M113 78v10M108 83h10" />
                </svg>
                <div className="yr">6</div>
                <div className="pl">Bhopal and Punjab</div>
                <h3>New heart surgery units in six hospitals</h3>
                <p>
                  Including Max Hospitals, Punjab, where he was a consultant, and
                  hospitals across Bhopal.
                </p>
              </div>
            </div>{" "}
            <div className="stop">
              <i className="dt"></i>
              <div className="body">
                <div className="ph">
                  <img
                    src="/img/signboard.webp"
                    alt="Anand Heart Center signboard"
                    loading="lazy"
                  />
                </div>
                <div className="yr">
                  <em>Today</em>
                </div>
                <div className="pl">Vindhya Retreat, Bhopal</div>
                <h3>Anand Heart Center: heart, lung and vascular clinic</h3>
                <p>
                  Alongside surgery at JK Hospital and teaching at LN Medical College,
                  Bhopal.
                </p>
                <a
                  className="btn b-red b-sm go"
                  data-cur={true}
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
                </a>
              </div>
            </div>{" "}
          </div>{" "}
          <div className="wrap pnav" id="pnav">
            <div className="pl2">
              <button type="button">Bhopal</button>
              <button type="button">Mumbai</button>
              <button type="button">Jaipur</button>
              <button type="button">BMHRC</button>
              <button type="button">Australia</button>
              <button type="button">Home</button>
              <button type="button">Six units</button>
              <button type="button">Today</button>
            </div>
            <i className="pbar">
              <b id="pbarb"></b>
            </i>
          </div>{" "}
        </div>{" "}
      </section>{" "}
      <div className="pathend" data-hdr="d"></div>{" "}
      <section id="journey" className="sec" data-hdr="l">
        {" "}
        <div className="wrap">
          {" "}
          <div className="shead">
            {" "}
            <div>
              <span className="lab">Your journey</span>
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
      <section id="symptoms" className="sec" data-hdr="l" style={{ paddingTop: "0" }}>
        {" "}
        <div className="wrap">
          {" "}
          <div className="shead">
            {" "}
            <div>
              <span className="lab">What you feel</span>
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
              <span className="k">What do you feel?</span>
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
                  <circle cx="545" cy="385" r="76" className="ring" pathLength="1" />
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
                <g id="shots"></g>{" "}
              </svg>
            </div>{" "}
            <div className="symc" id="symc">
              {" "}
              <div className="fade q" id="sq"></div> <h3 id="sh"></h3>{" "}
              <div className="fade two">
                <div>
                  <small>What you may feel</small>
                  <p id="sp1"></p>
                </div>
                <div>
                  <small>What it may mean</small>
                  <p id="sp2"></p>
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
                <span id="su"></span>
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
      <section id="visit" className="sec" data-hdr="l" style={{ paddingTop: "0" }}>
        {" "}
        <div className="wrap">
          {" "}
          <div className="shead">
            {" "}
            <div>
              <span className="lab">Visit us</span>
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
          <span className="lab">The next chapter</span>{" "}
          <h2>
            Start with a<br />
            <em>conversation.</em>
          </h2>{" "}
          <p>
            Tell us what you feel. We will find a time for you to sit down with Dr. Yadav.
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
      <ReviewedBy url="/" />
      </section>
    </>
  );
}
