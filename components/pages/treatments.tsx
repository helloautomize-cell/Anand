import Link from "next/link";
import { waLink } from "@/lib/whatsapp";
import { phonesDisplay, TEL_PRIMARY } from "@/lib/site";
import DATA from "@/data/interactive.json";
import { ReviewedBy } from "@/components/reviewed";

const TR = DATA.treatmentsFinder.tr;
const TOLD = DATA.treatmentsFinder.told;
const TL = DATA.treatmentLinks;
export function TreatmentsPage() {
  return (
    <>
      <section className="tp-hero" id="tp-hero" data-hdr="l">
        {" "}
        <div className="wrap tp-hg">
          {" "}
          <div>
            {" "}
            <span className="lab tp-fade" style={{ "--d": ".05s" }}>
              <b>●</b> Treatments
            </span>{" "}
            <h1>
              <span className="ln">
                <span>Care for the heart,</span>
              </span>
              <span className="ln">
                <span>lungs and</span>
              </span>
              <span className="ln">
                <span>
                  <em>vessels.</em>
                </span>
              </span>
            </h1>{" "}
            <p className="lead tp-fade" style={{ "--d": ".45s" }}>
              I treat the full range of heart, lung and blood vessel
              conditions, from tests and medicines to surgery. Start with what you feel,
              or explore by area.
            </p>{" "}
            <div className="tp-acts tp-fade" style={{ "--d": ".6s" }}>
              <a className="btn b-line" href="#treatments">
                Find my treatment
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
            <div className="tp-chips tp-fade" style={{ "--d": ".75s" }} id="tpchips">
              {" "}
              <a href="#tp-heart" data-k="muscle">
                <i></i>Heart surgery
              </a>
              <a href="#tp-angio" data-k="arteries">
                <i></i>Arteries
              </a>
              <a href="#tp-heart" data-k="valves">
                <i></i>Valves
              </a>
              <a href="#tp-lung" data-k="lungs">
                <i></i>Lungs and chest
              </a>
              <a href="#tp-vasc" data-k="aorta">
                <i></i>Blood vessels
              </a>
              <a href="#tp-child" data-k="muscle">
                <i></i>Children's hearts
              </a>{" "}
            </div>{" "}
          </div>{" "}
          <div className="tp-art tp-fade" style={{ "--d": ".2s" }} id="tpart">
            {" "}
            <svg viewBox="0 0 520 520">
              {" "}
              <g className="rot">
                <circle className="orbit" cx="260" cy="260" r="236" />
                <circle cx="260" cy="24" r="4" fill="#D23133" />
              </g>{" "}
              <g className="draw" data-k="lungs">
                <path pathLength="1" d="M168 150c-56 10-86 92-80 180 3 44 34 58 58 40" />
                <path pathLength="1" d="M352 150c56 10 86 92 80 180-3 44-34 58-58 40" />
                <path
                  pathLength="1"
                  d="M150 210c-14 20-20 50-16 80M370 210c14 20 20 50 16 80"
                  style={{ "--dl": ".4s" }}
                />
              </g>{" "}
              <g className="draw" data-k="aorta">
                <path
                  pathLength="1"
                  d="M252 172c-4-56 14-90 54-94 40-4 62 26 56 70-6 60-4 140-14 230-4 40-10 70-14 100"
                  style={{ "--dl": ".3s" }}
                />
                <path
                  pathLength="1"
                  d="M286 82V44M312 78V38M338 88V50"
                  style={{ "--dl": ".9s" }}
                />
                <path
                  pathLength="1"
                  d="M232 178c-8-40-30-64-64-66-22-2-40 8-52 24"
                  style={{ "--dl": ".5s" }}
                />
              </g>{" "}
              <g className="beat">
                <g className="draw" data-k="muscle">
                  <path
                    className="body"
                    pathLength="1"
                    d="M262 170c-58-30-138 0-140 92-2 80 72 150 140 206 68-56 144-126 140-206-4-92-82-122-140-92z"
                  />
                </g>{" "}
                <g className="draw" data-k="arteries">
                  <path
                    pathLength="1"
                    d="M262 236c38 20 66 62 74 116M262 236c-30 40-48 92-44 150M304 262c22 8 40 22 56 30M240 290c-18 10-34 26-44 44"
                    style={{ "--dl": ".8s" }}
                  />
                </g>{" "}
                <g className="draw" data-k="valves">
                  <circle
                    pathLength="1"
                    cx="280"
                    cy="244"
                    r="20"
                    style={{ "--dl": "1s" }}
                  />
                  <path
                    pathLength="1"
                    d="M280 244v-20M280 244l17 10M280 244l-17 10"
                    style={{ "--dl": "1.2s" }}
                  />
                </g>
              </g>{" "}
              <path
                className="flow"
                pathLength="1"
                d="M252 172c-4-56 14-90 54-94 40-4 62 26 56 70-6 60-4 140-14 230-4 40-10 70-14 100"
              />{" "}
              <path
                className="flow"
                pathLength="1"
                style={{ animationDelay: "-1.2s" }}
                d="M262 236c38 20 66 62 74 116"
              />{" "}
            </svg>{" "}
            <a
              className="tp-co"
              href="#tp-heart"
              data-k="muscle"
              style={{ left: "56%", top: "74%", "--d": "1.4s" }}
            >
              <i></i>Heart muscle
            </a>{" "}
            <a
              className="tp-co"
              href="#tp-angio"
              data-k="arteries"
              style={{ left: "8%", top: "58%", "--d": "1.55s" }}
            >
              <i></i>Heart arteries
            </a>{" "}
            <a
              className="tp-co"
              href="#tp-heart"
              data-k="valves"
              style={{ left: "62%", top: "40%", "--d": "1.7s" }}
            >
              <i></i>Valves
            </a>{" "}
            <a
              className="tp-co"
              href="#tp-lung"
              data-k="lungs"
              style={{ left: "4%", top: "24%", "--d": "1.85s" }}
            >
              <i></i>Lungs
            </a>{" "}
            <a
              className="tp-co"
              href="#tp-vasc"
              data-k="aorta"
              style={{ left: "62%", top: "9%", "--d": "2s" }}
            >
              <i></i>Aorta and vessels
            </a>{" "}
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
              <span className="lab">Treatment finder</span>
              <h2 style={{ marginTop: "18px" }}>
                <span className="ln">
                  <span>Not sure</span>
                </span>
                <span className="ln">
                  <span>
                    where <em>to start?</em>
                  </span>
                </span>
              </h2>
            </div>{" "}
            <p className="sub" data-rv={true}>
              Pick what is happening to you right now. The treatments that usually help
              are highlighted, with a plain-language explanation of each.
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
            <div className="pop" id="pop" role="listbox" aria-label="What is going on">{TOLD.map((o, i) => (
                <button key={i} role="option" aria-selected={false} data-i={i}>{o[0]}<small>{o[2]}</small></button>
              ))}</div>{" "}
          </div>{" "}
          <div className="txg">
            {" "}
            <aside className="tpanel" id="tpanel">
              {" "}
              <div className="tp-top">
                <span id="tpCat">{TR[0].cat}</span>
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
                <div className="tp-name" id="tpName" dangerouslySetInnerHTML={{ __html: TR[0].nm }} />{" "}
                <p className="tp-for" id="tpFor">{TR[0].f}</p>{" "}
                <div className="tp-j">
                  <div>
                    <b>
                      Before<i></i>
                    </b>
                    <span id="j1">{TR[0].j[0]}</span>
                  </div>
                  <div>
                    <b>
                      During<i></i>
                    </b>
                    <span id="j2">{TR[0].j[1]}</span>
                  </div>
                  <div>
                    <b>
                      After<i></i>
                    </b>
                    <span id="j3">{TR[0].j[2]}</span>
                  </div>
                </div>{" "}
              </div>{" "}
              <p className="tp-note">
                A typical path. Every patient's plan is made for them.
              </p>{" "}
            </aside>{" "}
            <div>
              {" "}
              <div className="tlist" id="tlist">{TR.map((t, i) => (
                <div key={i} className="tr" data-i={i}>
                  <button className="th" aria-expanded={false}><span className="tn">{t.n} {t.e ? <em>{t.e}</em> : null}</span><span className="tg"><i className="m"></i>{t.cat}</span><i className="pl"></i></button>
                  <div className="tb"><div className="tbi"><div><div>
                    <p>{t.d}</p>
                    <div className="tags">{t.tags.map((x) => <span key={x}>{x}</span>)}</div>
                  </div><div className="side2">
                    <small>Often for</small><b>{t.f}</b>
                    <a className="btn b-red b-sm" data-cur={true} target="_blank" rel="noopener" href={waLink("Hello, I would like to ask Dr. Anand Yadav about " + t.n.toLowerCase() + ".")}>Ask about this<span className="ar"><svg viewBox="0 0 16 16"><path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth={1.6} /></svg><svg viewBox="0 0 16 16"><path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth={1.6} /></svg></span></a>
                    <a href={TL[t.k as keyof typeof TL]} style={{ display: "inline-block", marginTop: 14, fontSize: ".88rem", fontWeight: 500, textDecoration: "underline", textUnderlineOffset: 4 }}>Read the full guide</a>
                  </div></div></div></div>
                </div>
              ))}</div>{" "}
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
      <section id="tp-areas" data-hdr="l">
        {" "}
        <div className="wrap">
          {" "}
          <div className="shead">
            {" "}
            <div>
              <span className="lab">Areas of care</span>
              <h2 style={{ marginTop: "18px" }}>
                <span className="ln">
                  <span>Every part of the</span>
                </span>
                <span className="ln">
                  <span>
                    <em>chest,</em> one surgeon.
                  </span>
                </span>
              </h2>
            </div>{" "}
            <p className="sub" data-rv={true}>
              Each area has its own page with what happens before, during and after. Tap
              an area to read more.
            </p>{" "}
          </div>{" "}
          <div className="tp-bento">
            {" "}
            <Link
              className="tp-t dk tp-a"
              id="tp-heart"
              href="/treatments/bypass-surgery/"
              data-rv={true}
              data-cur={true}
            >
              {" "}
              <svg className="art" viewBox="0 0 400 400">
                <g className="hb">
                  <path d="M200 330s-130-76-130-170a70 70 0 0 1 130-38 70 70 0 0 1 130 38c0 94-130 170-130 170z" />
                  <path
                    className="r"
                    d="M200 140c30 20 50 60 52 110M200 140c-24 34-36 80-30 130"
                  />
                </g>
                <path
                  className="ecg"
                  pathLength="1"
                  d="M0 360h120l14-20 14 36 18-70 18 64 14-10h202"
                />
              </svg>{" "}
              <div>
                <span className="k">Heart surgery</span>
                <h3>
                  Bypass, valves
                  <br />
                  and the aorta.
                </h3>
                <p>
                  Open heart and beating heart bypass, valve repair or replacement, and
                  surgery on the main artery of the body.
                </p>
                <ul>
                  <li>Bypass (CABG)</li>
                  <li>Valve repair</li>
                  <li>Valve replacement</li>
                  <li>Aortic surgery</li>
                </ul>
              </div>{" "}
              <span className="go2">
                <span>→</span>Explore heart surgery
              </span>{" "}
            </Link>{" "}
            <Link
              className="tp-t sd tp-b"
              id="tp-angio"
              href="/treatments/angioplasty/"
              data-rv={true}
              style={{ "--d": ".08s" }}
            >
              {" "}
              <svg className="art" viewBox="0 0 300 120">
                <path d="M10 40h280M10 80h280" />
                <path className="lumen" d="M10 60h280" />
                <g className="bal">
                  <rect x="110" y="44" width="80" height="32" rx="16" className="r" />
                </g>
                <path
                  d="M118 40l8 8 8-8 8 8 8-8 8 8 8-8 8 8 8-8M118 80l8-8 8 8 8-8 8 8 8-8 8 8 8-8 8 8"
                  className="r"
                />
              </svg>{" "}
              <div>
                <span className="k">Arteries</span>
                <h3>
                  Angiography and
                  <br />
                  angioplasty
                </h3>
                <p>
                  See inside the heart arteries, and open a narrowing from the inside with
                  a balloon and stent.
                </p>
              </div>{" "}
              <span className="go2">
                <span>→</span>Read more
              </span>{" "}
            </Link>{" "}
            <Link
              className="tp-t tp-c"
              id="tp-lung"
              href="/treatments/lung-and-chest-surgery/"
              data-rv={true}
              style={{ "--d": ".16s" }}
            >
              {" "}
              <svg className="art" viewBox="0 0 200 160">
                <path d="M96 20v34M96 54c-30 0-56 30-60 70-2 22 14 30 30 22 20-10 28-40 30-70M104 20v34M104 54c30 0 56 30 60 70 2 22-14 30-30 22-20-10-28-40-30-70" />
                <path className="r" d="M70 90l12 10M130 90l-12 10" />
              </svg>{" "}
              <div>
                <span className="k">Thoracic</span>
                <h3>
                  Lungs and
                  <br />
                  chest
                </h3>
              </div>{" "}
              <span className="go2">
                <span>→</span>Read more
              </span>{" "}
            </Link>{" "}
            <Link
              className="tp-t bl tp-d"
              id="tp-vasc"
              href="/treatments/vascular-surgery/"
              data-rv={true}
              style={{ "--d": ".24s" }}
            >
              {" "}
              <svg
                className="art"
                viewBox="0 0 100 200"
                preserveAspectRatio="xMidYMax meet"
              >
                <path d="M40 0c0 50-10 80-10 130s6 60 6 70M64 0c0 50 6 80 6 130s-4 60-4 70" />
                <path className="fl" d="M52 0c0 60-4 100-2 200" />
              </svg>{" "}
              <div>
                <span className="k">Vascular</span>
                <h3>
                  Arteries
                  <br />
                  and veins
                </h3>
              </div>{" "}
              <span className="go2">
                <span>→</span>Read more
              </span>{" "}
            </Link>{" "}
            <Link
              className="tp-t tp-e"
              id="tp-child"
              href="/treatments/childrens-heart-surgery/"
              data-rv={true}
              style={{ "--d": ".08s" }}
            >
              {" "}
              <svg className="art" viewBox="0 0 220 160">
                <g className="h1">
                  <path d="M70 120s-46-27-46-60a25 25 0 0 1 46-14 25 25 0 0 1 46 14c0 33-46 60-46 60z" />
                </g>
                <g className="h2">
                  <path
                    className="r"
                    d="M150 130s-30-18-30-40a16 16 0 0 1 30-9 16 16 0 0 1 30 9c0 22-30 40-30 40z"
                  />
                  <path className="r" d="M144 92h12M150 86v12" />
                </g>
              </svg>{" "}
              <div>
                <span className="k">Children</span>
                <h3>
                  Children's
                  <br />
                  heart surgery
                </h3>
                <p>
                  Holes in the heart and other conditions children are born with,
                  explained to parents step by step.
                </p>
              </div>{" "}
              <span className="go2">
                <span>→</span>Read more
              </span>{" "}
            </Link>{" "}
            <Link
              className="tp-t dk tp-f"
              href="/treatments/minimally-invasive-surgery/"
              data-rv={true}
              style={{ "--d": ".16s" }}
            >
              {" "}
              <svg className="art" viewBox="0 0 220 140">
                <path d="M30 110c40-30 120-60 170-70" />
                <path className="r cut" pathLength="1" d="M80 80c20-8 40-14 60-18" />
                <path d="M84 70l4 18M100 64l4 18M116 59l4 18M132 55l4 18" />
              </svg>{" "}
              <div>
                <span className="k">Smaller cuts</span>
                <h3>
                  Minimally
                  <br />
                  invasive
                </h3>
              </div>{" "}
              <span className="go2">
                <span>→</span>Read more
              </span>{" "}
            </Link>{" "}
            <a
              className="tp-t rd tp-g"
              href={waLink(
                "Hello, I have been advised surgery and would like a second opinion from Dr. Anand Yadav."
              )}
              target="_blank"
              rel="noopener"
              data-rv={true}
              style={{ "--d": ".24s" }}
            >
              {" "}
              <svg className="art" viewBox="0 0 200 160">
                <path d="M40 30h110v70H90l-30 26v-26H40z" />
                <path d="M62 56h66M62 74h40" />
              </svg>{" "}
              <div>
                <span className="k">Advised surgery?</span>
                <h3>
                  Get a second
                  <br />
                  opinion
                </h3>
              </div>{" "}
              <span className="go2">
                <span>→</span>Message us
              </span>{" "}
            </a>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      <section id="tp-path" data-hdr="l">
        {" "}
        <div className="wrap tp-chead">
          {" "}
          <div>
            <span className="lab">Your treatment journey</span>
            <h2 style={{ marginTop: "18px" }}>
              <span className="ln">
                <span>From first visit to</span>
              </span>
              <span className="ln">
                <span>
                  <em>back home.</em>
                </span>
              </span>
            </h2>
          </div>{" "}
          <div className="tp-ctrl">
            <button id="tpprev" aria-label="Previous">
              <svg viewBox="0 0 16 16">
                <path d="M13 8H3M7 4 3 8l4 4" />
              </svg>
            </button>
            <button id="tpnext" aria-label="Next">
              <svg viewBox="0 0 16 16">
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </button>
          </div>{" "}
        </div>{" "}
        <div className="tp-car" id="tpcar">
          {" "}
          <article className="tp-card">
            <div className="vis">
              <img
                src="/img/consult-room.webp"
                alt="Consultation room"
                width={1400}
                height={788}
                loading="lazy"
                draggable="false"
              />
              <span className="tag">First visit</span>
            </div>
            <div className="tx2">
              <h3>An unhurried conversation</h3>
              <p>
                I go through your story, your old reports and your medicines,
                and examines you.
              </p>
            </div>
          </article>{" "}
          <article className="tp-card tl">
            <div className="vis">
              <svg viewBox="0 0 200 120">
                <path d="M10 60h50l8-14 8 28 10-52 10 46 8-8h86" />
                <path className="r" d="M150 30h30v60h-30z" />
              </svg>
              <span className="tag">Tests</span>
            </div>
            <div className="tx2">
              <h3>Only the tests you need</h3>
              <p>
                Usually an ECG and an echo to start. More tests only if they will change
                the plan. All tests are done at the clinic.
              </p>
            </div>
          </article>{" "}
          <article className="tp-card">
            <div className="vis">
              <svg viewBox="0 0 200 120">
                <path d="M40 14h120v96H40z" />
                <path d="M60 40h80M60 58h80M60 76h50" />
                <path className="r" d="M120 84l10 10 20-24" />
              </svg>
              <span className="tag">Your plan</span>
            </div>
            <div className="tx2">
              <h3>A plan you can take home</h3>
              <p>
                Your options are explained in plain words, including medicines, a
                procedure or surgery, and what each one means for you.
              </p>
            </div>
          </article>{" "}
          <article className="tp-card tl">
            <div className="vis">
              <svg viewBox="0 0 200 120">
                <path d="M30 90h140M50 90V60h100v30" />
                <path d="M70 60V40h60v20" />
                <path className="r" d="M100 20v24M88 32h24" />
              </svg>
              <span className="tag">The day</span>
            </div>
            <div className="tx2">
              <h3>The day of your procedure</h3>
              <p>
                Surgery takes place at the hospital. The team explains each step to you
                and your family before you go in.
              </p>
            </div>
          </article>{" "}
          <article className="tp-card">
            <div className="vis">
              <img
                src="/img/waiting-hall.webp"
                alt="Waiting area at the clinic"
                width={1400}
                height={788}
                loading="lazy"
                draggable="false"
              />
              <span className="tag">Recovery</span>
            </div>
            <div className="tx2">
              <h3>Recovery, step by step</h3>
              <p>
                Walking, breathing exercises and medicines, with clear guidance on what is
                normal and what needs a call.
              </p>
            </div>
          </article>{" "}
          <article className="tp-card tl">
            <div className="vis">
              <svg viewBox="0 0 200 120">
                <path d="M40 100V54l60-40 60 40v46z" />
                <path d="M84 100V70h32v30" />
                <path
                  className="r"
                  d="M100 52s-12-8-12-15a6 6 0 0 1 12-3 6 6 0 0 1 12 3c0 7-12 15-12 15z"
                />
              </svg>
              <span className="tag">Home</span>
            </div>
            <div className="tx2">
              <h3>Home, with follow-up</h3>
              <p>
                Review visits at the clinic and reports on WhatsApp, so you are never left
                wondering what comes next.
              </p>
            </div>
          </article>{" "}
        </div>{" "}
        <div className="wrap">
          <div className="tp-prog">
            <b id="tpbar"></b>
          </div>
        </div>{" "}
      </section>{" "}
      <section id="tp-opts" data-hdr="d">
        {" "}
        <div className="wrap">
          {" "}
          <span className="lab">Your options</span>{" "}
          <h2 style={{ marginTop: "18px" }}>
            <span className="ln">
              <span>Surgery is one option,</span>
            </span>
            <span className="ln">
              <span>
                <em>not the only one.</em>
              </span>
            </span>
          </h2>{" "}
          <div className="tp-seg" id="tpseg">
            <i className="ind" id="tpind"></i>
            <button className="on">Medicines and lifestyle</button>
            <button>A procedure through a tube</button>
            <button>Surgery</button>
          </div>{" "}
          <div className="tp-og">
            {" "}
            <div className="tp-ovis">
              <svg viewBox="0 0 200 200" id="tpovis">
                {" "}
                <g className="on">
                  <rect pathLength="1" x="60" y="50" width="80" height="110" rx="14" />
                  <path pathLength="1" d="M60 80h80" />
                  <path pathLength="1" className="r" d="M100 100v36M82 118h36" />
                  <path pathLength="1" d="M76 34h48v16H76z" />
                </g>{" "}
                <g>
                  <path pathLength="1" d="M10 80h180M10 120h180" />
                  <path pathLength="1" className="r" d="M20 100h110" />
                  <rect
                    pathLength="1"
                    className="r"
                    x="120"
                    y="86"
                    width="50"
                    height="28"
                    rx="14"
                  />
                  <path
                    pathLength="1"
                    d="M128 80l6 6 6-6 6 6 6-6 6 6 6-6M128 120l6-6 6 6 6-6 6 6 6-6 6 6"
                  />
                </g>{" "}
                <g>
                  <path
                    pathLength="1"
                    d="M100 170s-70-40-70-92a36 36 0 0 1 70-14 36 36 0 0 1 70 14c0 52-70 92-70 92z"
                  />
                  <path pathLength="1" className="r" d="M100 70v80" />
                  <path
                    pathLength="1"
                    className="r"
                    d="M92 84h16M92 100h16M92 116h16M92 132h16"
                  />
                </g>{" "}
              </svg>
            </div>{" "}
            <div className="tp-ocard" id="tpocard">
              <div className="fd">
                <h3 id="tpoh"></h3>
                <div className="rows">
                  <div>
                    <small>What it is</small>
                    <p id="tpo1"></p>
                  </div>
                  <div>
                    <small>When it may suit</small>
                    <p id="tpo2"></p>
                  </div>
                  <div>
                    <small>Recovery</small>
                    <p id="tpo3"></p>
                  </div>
                </div>
              </div>{" "}
              <p className="tp-onote">
                I explain every option that fits you, including not operating,
                and helps you choose with your family.
              </p>
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      <section id="tp-faq" data-hdr="l">
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
                  <em>decide.</em>
                </span>
              </span>
            </h2>
            <p>
              Answers to what patients and families ask most about treatment. Ask us
              anything else on WhatsApp.
            </p>
          </div>{" "}
          <div>
            {" "}
            <details open={true}>
              <summary>
                Will I definitely need surgery?<i></i>
              </summary>
              <div className="a">
                Not always. Many heart and vessel conditions are first treated with
                medicines, lifestyle changes or a procedure through a tube. Surgery is
                advised only when it is the right option for you, and the reasons are
                explained clearly.
              </div>
            </details>{" "}
            <details>
              <summary>
                Can I get a second opinion on surgery advised elsewhere?<i></i>
              </summary>
              <div className="a">
                Yes. Bring your reports, angiography CD and prescriptions. I will
                go through them with you and explain what I would advise and why.
              </div>
            </details>{" "}
            <details>
              <summary>
                Where does the surgery take place?<i></i>
              </summary>
              <div className="a">
                Consultations are at Anand Heart Center. Procedures and surgery take place
                at the hospital where I operate, which will be discussed with
                you. <span className="chip">Confirm hospital wording</span>
              </div>
            </details>{" "}
            <details>
              <summary>
                How long will I stay in hospital?<i></i>
              </summary>
              <div className="a">
                It depends on the procedure and how you recover. You will be told what to
                expect for your own treatment before you decide.
              </div>
            </details>{" "}
            <details>
              <summary>
                Is my insurance accepted?<i></i>
              </summary>
              <div className="a">
                Many insurance and government schemes are accepted at the hospital. Please
                share your policy details with the clinic and we will check for you.{" "}
                <span className="chip">Confirm schemes</span>
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
          <span className="lab">Talk it through</span>{" "}
          <h2>
            Not sure what
            <br />
            <em>you need?</em>
          </h2>{" "}
          <p>
            Share your reports on WhatsApp or book a consultation. You will leave knowing
            your options.
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
      <ReviewedBy url="/treatments/" />
      </section>
    </>
  );
}
