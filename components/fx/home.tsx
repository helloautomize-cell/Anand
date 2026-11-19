// @ts-nocheck
"use client";
import { useFx } from "@/lib/fx";
import { WA_PREFIX } from "@/lib/whatsapp";

const fx = () => {
  (() => {
    const $ = (s) => document.querySelector(s),
      $$ = (s) => [...document.querySelectorAll(s)];
    const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
    const RM = matchMedia("(prefers-reduced-motion: reduce)").matches;
    let W = innerWidth,
      H = innerHeight;

    const setTs = (b) => {
      document.documentElement.classList.toggle("big", b);
      $("#tsA").classList.toggle("on", !b);
      $("#tsB").classList.toggle("on", b);
      try {
        localStorage.setItem("ahc-ts", b ? "1" : "0");
      } catch (e) {}
    };
    try {
      if (localStorage.getItem("ahc-ts") === "1") setTs(true);
    } catch (e) {}
    $("#tsA").onclick = () => {
      setTs(false);
      setTimeout(layoutPath, 80);
    };
    $("#tsB").onclick = () => {
      setTs(true);
      setTimeout(layoutPath, 80);
    };

    const intro = $("#intro");
    let seen = false;
    try {
      seen = sessionStorage.getItem("ahc-intro") === "1";
    } catch (e) {}
    const go = () => $("#hero").classList.add("go");
    if (RM || seen) {
      intro?.remove();
      go();
    } else {
      intro?.addEventListener("animationend", (e) => {
        if (e.animationName === "introOut") intro?.remove();
      });
      setTimeout(go, 1300);
      setTimeout(() => intro?.isConnected && intro?.remove(), 3000);
      try {
        sessionStorage.setItem("ahc-intro", "1");
      } catch (e) {}
    }

    const ist = new Date(Date.now() + (330 + new Date().getTimezoneOffset()) * 60000);
    const dow = ist.getDay(),
      mins = ist.getHours() * 60 + ist.getMinutes();
    const isOpen = dow >= 1 && dow <= 6 && mins >= 600 && mins < 1170;
    const op = $("#open");
    op.classList.toggle("closed", !isOpen);
    op.querySelector("span").textContent = isOpen
      ? "Open now, until 7:30 pm"
      : dow === 0
        ? "Closed today, opens Monday 10 am"
        : mins < 600
          ? "Opens today at 10 am"
          : "Closed now, opens 10 am";
    const DN = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      DF = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    $("#days").innerHTML = [1, 2, 3, 4, 5, 6, 0]
      .map(
        (d) =>
          `<div class="${d === 0 ? "x" : ""}${d === dow ? " today" : ""}"><b>${DN[d]}</b>${d === 0 ? "Closed" : "10 to<br>7:30"}</div>`
      )
      .join("");
    $("#htab").innerHTML = [1, 2, 3, 4, 5, 6, 0]
      .map(
        (d) =>
          `<tr class="${d === dow ? "today" : ""}"><td>${DF[d]}${d === dow ? " · today" : ""}</td><td>${d === 0 ? "Closed" : "10 am to 7:30 pm"}</td></tr>`
      )
      .join("");

    const strip = $("#strip");
    const S = [
      "25 years of <em>experience</em>",
      "MCh <em>CTVS</em>, Jaipur",
      "FACC (US)",
      "Fellowship in <em>adult cardiac surgery</em>, Australia",
      "MS, Mumbai",
      "DNB, General Surgery",
      "Adult heart, lung, vascular, thoracic and <em>children's</em> heart surgery",
    ];
    const one = S.map((s) => `<span>${s}<i></i></span>`).join("");
    strip.innerHTML = one + one;
    let sx = 0;

    const eB = $("#ecgB"),
      eR = $("#ecgR");
    let d = "M0 34";
    for (let x = 0; x < 600; x += 150) {
      d += ` L${x + 50} 34 l7 -5 l7 5 l8 0 l4 7 l6 -32 l6 40 l5 -10 l12 0 q10 -9 20 0 L${x + 150} 34`;
    }
    eB.setAttribute("d", d);
    eR.setAttribute("d", d);
    const EL = eR.getTotalLength();
    eR.style.strokeDasharray = `120 ${EL}`;

    const wp = $("#words");
    wp.innerHTML = wp.textContent
      .trim()
      .split(/\s+/)
      .map((w) => `<span class="w">${w}</span>`)
      .join(" ");
    const ws = $$("#words .w");
    const wb = $("#wbig");
    wb.innerHTML = wb.textContent
      .trim()
      .split(/\s+/)
      .map((w) =>
        w.startsWith("*")
          ? `<span class="w"><em>${w.slice(1)}</em></span>`
          : `<span class="w">${w}</span>`
      )
      .join(" ");
    const wbs = $$("#wbig .w"),
      flowEls = $$("#flow div");
    const why = $("#why"),
      hl = $("#hl"),
      hr = $("#hr"),
      hpl = $("#hpl"),
      hpr = $("#hpr"),
      stitch = $("#stitch");
    const sl = stitch.getTotalLength();
    stitch.style.strokeDasharray = sl;

    const pSec = $("#path"),
      track = $("#track"),
      stops = $$(".stop"),
      jbase = $("#jbase"),
      jdone = $("#jdone"),
      jmark = $("#jmark"),
      jpath = $("#jpath");
    let jLen = 0,
      jMax = 0,
      jsm = 0;
    stops.forEach((st) => {
      const h = st.querySelector("h3");
      const ws = h.textContent.split(" ");
      h.innerHTML = ws
        .map((w, i) => `<span class="w" style="--i:${i}">${w}</span>`)
        .join(" ");
    });
    const pbs = $$("#pbig span"),
      pnb = $$("#pnav button"),
      pbarb = $("#pbarb"),
      pl2 = $("#pnav .pl2"),
      jglow = $("#jglow");
    let pK = -1;
    function setStop(k) {
      if (k === pK) return;
      pK = k;
      stops.forEach((s, i) => s.classList.toggle("now", i === k));
      pbs.forEach((s, i) => s.classList.toggle("on", i === k));
      pnb.forEach((b, i) => {
        b.classList.toggle("now", i === k);
        b.classList.toggle("on", i < k);
      });
      const b = pnb[k];
      if (b && pl2.scrollWidth > pl2.clientWidth)
        pl2.scrollTo({
          left: b.offsetLeft - pl2.clientWidth / 2 + b.offsetWidth / 2,
          behavior: "smooth",
        });
    }
    pnb.forEach((b, i) =>
      b.addEventListener("click", () => {
        if (!jMax) return;
        const x = i / (stops.length - 1);
        const top = pSec.getBoundingClientRect().top + scrollY;
        scrollTo({ top: top + x * (pSec.offsetHeight - H) + 2, behavior: "smooth" });
      })
    );
    stops.forEach((s) =>
      s.querySelectorAll(".ill *").forEach((el) => {
        try {
          el.style.setProperty("--l", Math.ceil(el.getTotalLength() + 2));
        } catch (e) {}
      })
    );
    function layoutPath() {
      track.style.transform = "none";
      const tw = track.scrollWidth;
      jMax = Math.max(0, tw - W);
      pSec.style.height = RM ? "auto" : jMax + H * 1.25 + "px";
      jpath.setAttribute("width", tw);
      jpath.setAttribute("height", track.clientHeight);
      jpath.style.width = tw + "px";
      const tr = track.getBoundingClientRect();
      const pts = stops.map((s) => {
        const r = s.querySelector(".dt").getBoundingClientRect();
        return [r.left + r.width / 2 - tr.left, r.top + r.height / 2 - tr.top];
      });
      let p = `M${pts[0][0] - 200} ${pts[0][1]} L${pts[0][0]} ${pts[0][1]}`;
      for (let i = 1; i < pts.length; i++) {
        const [a, b] = pts[i - 1],
          [c, e] = pts[i],
          dx = c - a;
        p += ` C${a + dx * 0.3} ${b - 56} ${a + dx * 0.7} ${e - 56} ${c} ${e}`;
      }
      jbase.setAttribute("d", p);
      jdone.setAttribute("d", p);
      jglow.setAttribute("d", p);
      jLen = jdone.getTotalLength();
      jdone.style.strokeDasharray = jLen;
      jglow.style.strokeDasharray = jLen;
      stops._x = pts.map((q) => q[0]);
      stops._A = $("#path .phead h2").getBoundingClientRect().left + (W < 721 ? 18 : 26);
    }

    const rio = new IntersectionObserver(
      (es) =>
        es.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            rio.unobserve(e.target);
          }
        }),
      { threshold: 0.15, rootMargin: "0px 0px -6% 0px" }
    );
    $$("[data-rv],h2,[data-line]").forEach((el) => rio.observe(el));

    const SYM = [
      {
        x: 545,
        y: 385,
        sys: "heart",
        q: "Chest",
        h: "Chest pain or pressure",
        p1: "Tightness, heaviness or burning in the chest, sometimes spreading to the arm, jaw or back, especially on walking or climbing stairs.",
        p2: "This can be a sign of narrowed heart arteries. It needs a proper check, usually with an ECG and other tests.",
        u: "<b>Sudden or severe chest pain, with sweating or breathlessness?</b> Call 108 or 112 now.",
      },
      {
        x: 450,
        y: 410,
        sys: "lungs",
        q: "Breathing",
        h: "Breathlessness",
        p1: "Getting out of breath with less effort than before, needing more pillows at night, or waking up gasping.",
        p2: "A weak pump, a leaking or tight valve, or a lung problem can all cause it. Tests help find which.",
        u: "<b>Breathless at rest, or lips turning blue?</b> Call 108 or 112 now.",
      },
      {
        x: 612,
        y: 505,
        sys: "ecg",
        q: "Heartbeat",
        h: "Racing or uneven heartbeat",
        p1: "A thumping, fluttering or skipping feeling in the chest, sometimes with dizziness.",
        p2: "Often harmless, but sometimes a rhythm problem. An ECG or a 24 hour Holter can record it.",
        u: "<b>Palpitations with fainting or chest pain?</b> Call 108 or 112 now.",
      },
      {
        x: 510,
        y: 150,
        sys: "head",
        q: "Head",
        h: "Dizziness or fainting",
        p1: "Feeling light-headed on standing or exertion, or passing out without warning.",
        p2: "A narrow valve or a rhythm problem can reduce blood flow to the brain. It should always be checked.",
        u: "<b>Face drooping, weak arm, slurred speech?</b> These are stroke signs. Call 108 or 112 now.",
      },
      {
        x: 430,
        y: 1150,
        sys: "art",
        q: "Legs",
        h: "Leg pain when walking",
        p1: "Cramping in the calf or thigh that comes on with walking and eases with rest. Cold feet or slow-healing wounds.",
        p2: "This can mean narrowed leg arteries. A Doppler scan helps.",
        u: "<b>Sudden cold, pale, painful leg?</b> Call 108 or 112 now.",
      },
      {
        x: 626,
        y: 1180,
        sys: "vein",
        q: "Veins",
        h: "Swollen or twisted leg veins",
        p1: "Bulging blue veins, heaviness or aching after standing, itching or darkening skin near the ankle.",
        p2: "These are varicose veins. Treatments range from stockings to surgery.",
        u: "<b>Sudden swelling and pain in one leg?</b> It can be a clot. Seek urgent care.",
      },
      {
        x: 415,
        y: 1382,
        sys: "ankle",
        q: "Ankles",
        h: "Swollen ankles",
        p1: "Puffiness around the ankles or feet that is worse by evening and leaves a dent when pressed.",
        p2: "It can come from the heart, kidneys, veins or medicines. A check-up finds the cause.",
        u: "<b>Swelling with breathlessness at night?</b> See a doctor the same day.",
      },
    ];
    const bmap = $("#bmap"),
      ns = "http://www.w3.org/2000/svg",
      slist = $("#slist"),
      symc = $("#symc"),
      sxEl = $("#sx"),
      shots = $("#shots"),
      sfocus = $("#sfocus"),
      SDUR = 6000;
    SYM.forEach((s, i) => {
      const g = document.createElementNS(ns, "g");
      g.setAttribute("class", "hot");
      g.innerHTML = `<circle class="p" cx="${s.x}" cy="${s.y}" r="17"/><circle class="c" cx="${s.x}" cy="${s.y}" r="13"/><circle cx="${s.x}" cy="${s.y}" r="52" fill="transparent"/>`;
      g.onclick = () => {
        stopAuto();
        pick(i);
      };
      shots.appendChild(g);
      s.g = g;
      const b = document.createElement("button");
      b.type = "button";
      b.innerHTML = `<span>${s.h}</span><small>${s.q}</small><i></i>`;
      b.onclick = () => {
        stopAuto();
        pick(i);
      };
      slist.appendChild(b);
      s.b = b;
      s.sg = bmap.querySelector(".sys-" + s.sys);
    });
    sxEl.style.setProperty("--dur", SDUR + "ms");
    let cur = -1,
      sAuto = null;
    function pick(i, first) {
      if (i === cur) return;
      cur = i;
      const s = SYM[i];
      SYM.forEach((o, j) => {
        o.g.classList.toggle("act", j === i);
        o.b.classList.toggle("act", j === i);
        o.sg.classList.toggle("on", j === i);
        o.sg.classList.remove("draw");
      });
      void s.sg.getBBox();
      s.sg.classList.add("draw");
      clearTimeout(s.sg._t);
      s.sg._t = setTimeout(() => s.sg.classList.remove("draw"), 1700);
      sfocus.style.transform = `translate(${s.x}px,${s.y}px)`;
      $("#spotc").style.transform = `translate(${s.x}px,${s.y}px)`;
      if (slist.scrollWidth > slist.clientWidth + 4)
        slist.scrollTo({
          left: s.b.offsetLeft - slist.clientWidth / 2 + s.b.offsetWidth / 2,
          behavior: first ? "auto" : "smooth",
        });
      const fill = () => {
        $("#sq").textContent = s.q;
        $("#sh").innerHTML = s.h
          .split(" ")
          .map((w, k) => `<span class="w" style="--i:${k}">${w}</span>`)
          .join(" ");
        $("#sp1").textContent = s.p1;
        $("#sp2").textContent = s.p2;
        $("#su").innerHTML = s.u;
        $("#swa").href =
          WA_PREFIX +
          encodeURIComponent(
            "Hello, I have " +
              s.h.toLowerCase() +
              " and would like to consult Dr. Anand Yadav."
          );
        symc.classList.remove("sw");
      };
      if (first) fill();
      else {
        symc.classList.add("sw");
        setTimeout(fill, 260);
      }
    }
    function stopAuto() {
      clearInterval(sAuto);
      sAuto = null;
      sxEl.classList.remove("auto");
    }
    pick(0, true);
    if (!RM) {
      const sio = new IntersectionObserver(
        (es) =>
          es.forEach((e) => {
            if (!sxEl.classList.contains("auto")) return;
            if (e.isIntersecting && !sAuto) {
              const b = SYM[cur].b;
              b.classList.remove("act");
              void b.offsetWidth;
              b.classList.add("act");
              sAuto = setInterval(() => pick((cur + 1) % SYM.length), SDUR);
            } else if (!e.isIntersecting && sAuto) {
              clearInterval(sAuto);
              sAuto = null;
            }
          }),
        { threshold: 0.45 }
      );
      sio.observe(sxEl);
    } else stopAuto();

    const fine = matchMedia("(pointer:fine)").matches,
      curEl = $(".cur"),
      ring = $(".cur .ring");
    let mxp = -100,
      myp = -100,
      rx = -100,
      ry = -100;
    const hp = $("#hpanel"),
      tags = $$(".tagc[data-px]");
    let hx = 0,
      hy = 0,
      thx = 0,
      thy = 0;
    if (fine && !RM) {
      addEventListener("pointermove", (e) => {
        mxp = e.clientX;
        myp = e.clientY;
      });
      $$("[data-cur]").forEach((el) => {
        el.addEventListener("pointerenter", () => curEl.classList.add("big"));
        el.addEventListener("pointerleave", () => curEl.classList.remove("big"));
      });
      hp.addEventListener("pointermove", (e) => {
        const r = hp.getBoundingClientRect();
        thx = (e.clientX - r.left) / r.width - 0.5;
        thy = (e.clientY - r.top) / r.height - 0.5;
      });
      hp.addEventListener("pointerleave", () => {
        thx = thy = 0;
      });
    }

    /* treatments finder */
    const TR = [
      {
        k: "cabg",
        cat: "Heart surgery",
        n: "Bypass surgery",
        e: "(CABG)",
        nm: "Bypass <em>surgery</em>",
        f: "For blocked heart arteries, when a stent is not the best option.",
        d: "A healthy blood vessel is used to build a new route around the blocked part, so blood reaches the heart muscle again.",
        tags: ["Blocked arteries", "Chest pain on effort", "Multiple blockages"],
        j: [
          "Angiography and tests, then the plan explained to you and your family",
          "Surgery, followed by close monitoring in the ICU",
          "Walking, breathing exercises and reviews until you are back to routine",
        ],
      },
      {
        k: "angio",
        cat: "Arteries",
        n: "Angiography and angioplasty",
        e: "",
        nm: "Angioplasty and <em>stents</em>",
        f: "To see inside the heart arteries, and open a narrowing from the inside.",
        d: "A thin tube shows exactly where an artery is narrowed. If needed, a balloon opens it and a stent keeps it open.",
        tags: ["Blocked arteries", "Chest pain", "Abnormal TMT"],
        j: [
          "ECG, echo and a clear reason for the test",
          "A thin tube through the wrist or groin, usually without general anaesthesia",
          "Medicines, a short stay and lifestyle changes",
        ],
      },
      {
        k: "valve",
        cat: "Heart surgery",
        n: "Valve repair and replacement",
        e: "",
        nm: "Valve <em>repair</em> and replacement",
        f: "For a valve that leaks or has become tight.",
        d: "Your own valve is repaired whenever possible. If not, it is replaced with a tissue or mechanical valve, chosen with you.",
        tags: [
          "Leaking valve",
          "Narrow valve",
          "Rheumatic heart disease",
          "Breathlessness",
        ],
        j: [
          "Echo to see how the valve works, and the choices explained",
          "Repair or replacement surgery",
          "Recovery plan and, if needed, blood thinner follow-up",
        ],
      },
      {
        k: "child",
        cat: "Children",
        n: "Children's heart surgery",
        e: "",
        nm: "Small <em>hearts</em>",
        f: "For heart defects children are born with, and those that develop later.",
        d: "Holes in the heart and other defects can often be corrected. Parents are walked through every step, in plain words.",
        tags: [
          "Hole in the heart",
          "Born with a heart defect",
          "Poor growth or breathlessness",
        ],
        j: [
          "A gentle consultation with the child and parents",
          "Surgery planned around the child",
          "Growth and heart checks as they grow up",
        ],
      },
      {
        k: "mini",
        cat: "Heart surgery",
        n: "Minimally invasive and complex surgery",
        e: "",
        nm: "Smaller cuts, <em>complex</em> cases",
        f: "For selected patients who may benefit from smaller cuts, and for more complex heart conditions.",
        d: "Where it suits the patient, surgery through smaller cuts can mean less pain and a faster return home. Complex and repeat surgeries are planned in detail.",
        tags: ["Selected valve and bypass cases", "Repeat surgery", "Complex conditions"],
        j: [
          "Detailed scans and a plan made for you",
          "Surgery by the approach that suits you best",
          "A recovery plan matched to the operation",
        ],
      },
      {
        k: "vasc",
        cat: "Vessels",
        n: "Vascular surgery and varicose veins",
        e: "",
        nm: "Every road the <em>blood</em> travels",
        f: "For blocked leg arteries, aneurysms and varicose veins.",
        d: "From swollen, aching veins to arteries that cause leg pain when you walk, treatment ranges from stockings and medicines to surgery.",
        tags: ["Varicose veins", "Leg pain when walking", "Aneurysm", "Dialysis access"],
        j: [
          "Doppler scan of the legs",
          "The right treatment for the vessel, from simple to surgical",
          "Walking plan and follow-up scans",
        ],
      },
      {
        k: "lung",
        cat: "Chest",
        n: "Lung and chest surgery",
        e: "",
        nm: "Lungs and <em>chest</em>",
        f: "For conditions of the lungs, chest wall and the space around the lungs.",
        d: "As a cardiothoracic surgeon, Dr. Yadav also operates on the lungs and chest, often working with chest physicians.",
        tags: ["Lung lesions", "Fluid or air around the lung", "Chest injuries"],
        j: [
          "CT scan and breathing tests",
          "Thoracic surgery",
          "Breathing exercises and reviews",
        ],
      },
      {
        k: "check",
        cat: "Tests and prevention",
        n: "Heart check-ups and second opinions",
        e: "",
        nm: "Start with a <em>check-up</em>",
        f: "For symptoms, risk factors like diabetes and BP, or a second opinion before surgery.",
        d: "A full consultation, the tests you actually need, and honest advice on whether you need treatment at all.",
        tags: ["Chest pain", "Diabetes or BP", "Family history", "Second opinion"],
        j: [
          "Your story, your reports, your worries",
          "Examination, ECG and other tests if needed",
          "A clear plan, or reassurance",
        ],
      },
      {
        k: "care",
        cat: "Before and after",
        n: "Emergency care, ICU and recovery",
        e: "",
        nm: "Recovery, <em>step by step</em>",
        f: "Urgent heart care, monitoring after surgery and rehabilitation.",
        d: "Close monitoring after surgery, then a step-by-step plan to get you home and active again. In an emergency, call 108 or 112 first.",
        tags: ["After heart surgery", "Cardiac rehabilitation", "Urgent heart care"],
        j: [
          "A clear plan before you go home",
          "Reviews in the first weeks",
          "Back to work, walking and daily life",
        ],
      },
    ];
    const TL = {
      cabg: "/treatments/bypass-surgery/",
      angio: "/treatments/angioplasty/",
      valve: "/treatments/valve-surgery/",
      child: "/treatments/childrens-heart-surgery/",
      mini: "/treatments/minimally-invasive-surgery/",
      vasc: "/treatments/vascular-surgery/",
      lung: "/treatments/lung-and-chest-surgery/",
      check: "/treatments/check-ups-second-opinion/",
      care: "/treatments/follow-up-care/",
    };
    const TOLD = [
      ["I have blocked heart arteries", ["cabg", "angio"], "Heart"],
      ["I have a leaking or narrow valve", ["valve"], "Heart"],
      ["my child has a hole in the heart", ["child"], "Children"],
      ["I have chest pain and want to know why", ["check", "angio"], "Not sure"],
      ["I have swollen, twisted leg veins", ["vasc"], "Legs"],
      ["my legs hurt when I walk", ["vasc"], "Legs"],
      ["I have a lung or chest problem", ["lung"], "Chest"],
      [
        "I have been advised surgery and want a second opinion",
        ["check", "cabg"],
        "Opinion",
      ],
    ];
    const tlist = $("#tlist"),
      tpanel = $("#tpanel"),
      arts = $$("#tpArt .art"),
      told = $("#told"),
      pop = $("#pop"),
      pickT = $("#pickT");
    const WA = WA_PREFIX;
    tlist.innerHTML = TR.map(
      (t, i) =>
        `<div class="tr" data-i="${i}"><button class="th" aria-expanded="false"><span class="tn">${t.n} ${t.e ? `<em>${t.e}</em>` : ""}</span><span class="tg"><i class="m"></i>${t.cat}</span><i class="pl"></i></button><div class="tb"><div class="tbi"><div><div><p>${t.d}</p><div class="tags">${t.tags.map((x) => `<span>${x}</span>`).join("")}</div></div><div class="side2"><small>Often for</small><b>${t.f}</b><a class="btn b-red b-sm" data-cur target="_blank" rel="noopener" href="${WA + encodeURIComponent("Hello, I would like to ask Dr. Anand Yadav about " + t.n.toLowerCase() + ".")}">Ask about this<span class="ar"><svg viewBox="0 0 16 16"><path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.6"/></svg><svg viewBox="0 0 16 16"><path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.6"/></svg></span></a><a href="${TL[t.k]}" style="display:inline-block;margin-top:14px;font-size:.88rem;font-weight:500;text-decoration:underline;text-underline-offset:4px">Read the full guide</a></div></div></div></div></div>`
    ).join("");
    const trs = $$("#tlist .tr");
    let shown = -1;
    function showT(i) {
      if (i === shown) return;
      shown = i;
      const t = TR[i];
      tpanel.classList.add("sw");
      tpanel.classList.remove("go");
      setTimeout(() => {
        $("#tpCat").textContent = t.cat;
        $("#tpName").innerHTML = t.nm;
        $("#tpFor").textContent = t.f;
        $("#j1").textContent = t.j[0];
        $("#j2").textContent = t.j[1];
        $("#j3").textContent = t.j[2];
        arts.forEach((a) => a.classList.toggle("on", a.dataset.k === t.k));
        tpanel.classList.remove("sw");
        void tpanel.offsetWidth;
        tpanel.classList.add("go");
      }, 260);
    }
    function openT(i, scroll) {
      trs.forEach((r, j) => {
        const o = j === i && !(r.classList.contains("open") && !scroll);
        r.classList.toggle("open", o);
        r.querySelector(".th").setAttribute("aria-expanded", o);
      });
      showT(i);
    }
    trs.forEach((r, i) => {
      r.querySelector(".th").onclick = () => openT(i);
      r.addEventListener("pointerenter", () => {
        if (fine) showT(i);
      });
    });
    tlist.addEventListener("pointerleave", () => {
      const o = trs.findIndex((r) => r.classList.contains("open"));
      if (o >= 0) showT(o);
    });
    pop.innerHTML = TOLD.map(
      (o, i) =>
        `<button role="option" data-i="${i}">${o[0]}<small>${o[2]}</small></button>`
    ).join("");
    function choose(i, first) {
      const o = TOLD[i];
      pickT.textContent = o[0];
      $$("#pop button").forEach((b, j) => b.classList.toggle("on", j === i));
      trs.forEach((r, j) => r.classList.toggle("match", o[1].includes(TR[j].k)));
      tlist.classList.add("filt");
      const k = TR.findIndex((t) => t.k === o[1][0]);
      openT(k, true);
      told.classList.remove("open");
      if (!first && W <= 980) {
        setTimeout(
          () => trs[k].scrollIntoView({ behavior: "smooth", block: "center" }),
          300
        );
      }
    }
    $("#pick").onclick = (e) => {
      e.stopPropagation();
      told.classList.toggle("open");
    };
    $$("#pop button").forEach(
      (b) =>
        (b.onclick = (e) => {
          e.stopPropagation();
          choose(+b.dataset.i);
        })
    );
    document.addEventListener("click", (e) => {
      if (!told.contains(e.target)) told.classList.remove("open");
    });
    tpanel.addEventListener("pointermove", (e) => {
      const r = tpanel.getBoundingClientRect();
      tpanel.style.setProperty("--mx", e.clientX - r.left + "px");
      tpanel.style.setProperty("--my", e.clientY - r.top + "px");
    });
    choose(0, true);
    const hdr = $("#hdr"),
      prog = $("#prog"),
      mbar = $("#mbar"),
      por = $("#por");
    const hdrSecs = $$("[data-hdr]"),
      hSec = $("#heart"),
      anat = $("#anat"),
      stx = $$("#stx .s"),
      hbars = $$("#hnav b"),
      hnavB = $$("#hnav button"),
      bigw = $("#bigw"),
      tilt = $("#tilt"),
      beatsEl = $("#beats"),
      T0 = performance.now();
    const BW = ["pump", "arteries", "valves", "lungs", "vessels", "small hearts"];
    const CO = [
      [0, 344, 128, 400, 70, "Aorta, the main artery"],
      [0, 328, 300, 430, 430, "Coronary arteries"],
      [0, 236, 380, 40, 470, "Heart muscle"],
      [1, 330, 325, 440, 470, "A narrowed artery"],
      [1, 396, 254, 450, 150, "Bypass graft"],
      [1, 251, 372, 40, 440, "Stent"],
      [2, 300, 300, 430, 120, "Three leaflets"],
      [2, 404, 360, 410, 520, "Opens with every beat"],
      [3, 170, 330, 20, 140, "Lungs"],
      [3, 300, 120, 370, 70, "Windpipe"],
      [3, 300, 330, 385, 500, "Heart, between the lungs"],
      [4, 312, 192, 380, 150, "Heart"],
      [5, 300, 333, 400, 240, "A patch closes a hole"],
    ];
    const coG = $("#callouts");
    CO.forEach(([st, px, py, lx, ly, tx], i) => {
      const w = tx.length * 7.6 + 28,
        right = lx > px,
        bx = right ? lx : lx,
        ex = right ? lx : lx + w;
      const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
      g.setAttribute("class", "co");
      g.dataset.s = st;
      const mid = right ? px + (lx - px) * 0.5 : px - (px - ex) * 0.5;
      const d = `M${px} ${py}L${mid} ${ly}L${right ? lx : ex} ${ly}`;
      const L = Math.hypot(mid - px, ly - py) + Math.abs((right ? lx : ex) - mid) + 4;
      g.style.setProperty("--l", L);
      g.style.setProperty("--dl", (i % 3) * 0.15 + "s");
      g.innerHTML = `<path class="ld" d="${d}"/><circle class="pr" cx="${px}" cy="${py}" r="6"/><circle class="pt" cx="${px}" cy="${py}" r="4"/><g class="lb"><rect x="${right ? lx : lx}" y="${ly - 17}" width="${w}" height="34" rx="17"/><text x="${(right ? lx : lx) + 14}" y="${ly + 5}">${tx}</text></g>`;
      coG.appendChild(g);
    });
    const coEls = $$("#callouts .co");
    let tX = 0,
      tY = 0,
      tx2 = 0,
      ty2 = 0;
    if (fine && !RM) {
      $("#heart").addEventListener("pointermove", (e) => {
        tX = e.clientX / W - 0.5;
        tY = e.clientY / H - 0.5;
      });
    }
    hnavB.forEach(
      (b, i) =>
        (b.onclick = () => {
          const top = hSec.offsetTop,
            h = hSec.offsetHeight - H;
          scrollTo({ top: top + (h * (i + 0.5)) / 6, behavior: "smooth" });
        })
    );
    const prg = (el) => {
      const r = el.getBoundingClientRect();
      return clamp(-r.top / (r.height - H));
    };
    /* first minutes: one line, three acts */
    const mSec = $("#minutes"),
      msvg = $("#msvg"),
      mline = $("#mline"),
      mdot = $("#mdot"),
      mlab = $("#mlab");
    const A1 = $("#a1"),
      A2 = $("#a2"),
      A3 = $("#a3"),
      ats = $$(".at"),
      actBtns = $$("#acts3 button"),
      actBars = $$("#acts3 u");
    const ncs = [0, 1, 2, 3, 4].map((i) => $("#nc" + i + " rect")),
      nsq = $("#nsq"),
      chips = $$("#chips>g");
    const chipStart = [
      [130, 90],
      [112, 170],
      [150, 250],
      [132, 330],
    ];
    const steth = $("#steth"),
      tube = $("#tube"),
      rip = $("#ripples"),
      lub = $("#lub"),
      cks = $$("#checks .ck");
    const SPOTS = [
      [262, 170],
      [338, 212],
      [292, 292],
    ];
    const brU = $("#brU"),
      brD = $("#brD"),
      opts = $$("#opts>g"),
      decide = $("#decide");
    const NP = 420,
      LX0 = 20,
      LX1 = 780,
      BY = 470,
      LX = [...Array(NP)].map((_, i) => LX0 + ((LX1 - LX0) * i) / (NP - 1));
    const sm = (x) => {
      x = clamp(x);
      return x * x * (3 - 2 * x);
    };
    function yVoice(x, t) {
      const tap = Math.min(1, (x - LX0) / 70, (LX1 - x) / 70);
      const env =
        Math.pow(Math.abs(Math.sin(x * 0.0105 + 0.5)), 1.4) *
        (0.55 + 0.45 * Math.sin(x * 0.031 + t * 0.0007));
      return BY - tap * env * 44 * Math.sin(x * 0.21 + t * 0.007);
    }
    function yEcg(x) {
      const u = ((x - LX0) % 190) / 190;
      let y = 0;
      if (u > 0.28 && u < 0.36) y = -9 * Math.sin(((u - 0.28) / 0.08) * Math.PI);
      else if (u >= 0.42 && u < 0.44) y = ((u - 0.42) / 0.02) * 10;
      else if (u >= 0.44 && u < 0.47) y = 10 - ((u - 0.44) / 0.03) * 96;
      else if (u >= 0.47 && u < 0.505) y = -86 + ((u - 0.47) / 0.035) * 110;
      else if (u >= 0.505 && u < 0.53) y = 24 - ((u - 0.505) / 0.025) * 24;
      else if (u > 0.62 && u < 0.74) y = -15 * Math.sin(((u - 0.62) / 0.12) * Math.PI);
      const tap = Math.min(1, (x - LX0) / 30, (LX1 - x) / 30);
      return BY + y * tap;
    }
    function yRoad(x) {
      if (x < 300) return BY;
      if (x > 560) return 400;
      return BY + (400 - BY) * sm((x - 300) / 260);
    }
    const RD = LX.map(yRoad),
      EC = LX.map(yEcg);
    function lerpCol(a, b, t) {
      const h = (c) => [1, 3, 5].map((i) => parseInt(c.slice(i, i + 2), 16));
      const A = h(a),
        B = h(b);
      return `rgb(${A.map((v, i) => Math.round(v + (B[i] - v) * t)).join(",")})`;
    }
    let lastAct = -1;
    function drawMinutes(t) {
      const p = RM ? 0.15 : prg(mSec);
      const l1 = clamp(p / 0.31),
        l2 = clamp((p - 0.36) / 0.27),
        l3 = clamp((p - 0.69) / 0.26);
      const wAB = sm((p - 0.3) / 0.08),
        wBC = sm((p - 0.62) / 0.08);
      /* line */
      let d = "";
      for (let i = 0; i < NP; i++) {
        const x = LX[i];
        let y = yVoice(x, t) * (1 - wAB) + EC[i] * wAB;
        y = y * (1 - wBC) + RD[i] * wBC;
        d += (i ? "L" : "M") + x.toFixed(1) + " " + y.toFixed(1);
      }
      mline.setAttribute("d", d);
      mline.setAttribute(
        "stroke",
        wBC > 0 ? lerpCol("#D23133", "#0B2A31", wBC) : lerpCol("#0E5F6B", "#D23133", wAB)
      );
      const act = p < 0.33 ? 0 : p < 0.66 ? 1 : 2;
      if (act !== lastAct) {
        lastAct = act;
        ats.forEach((a, i) => a.classList.toggle("on", i === act));
        actBtns.forEach((b, i) => b.classList.toggle("on", i <= act));
        mlab.textContent = ["Your voice", "Your heartbeat", "Your path"][act];
      }
      actBars[0].style.transform = `scaleX(${l1})`;
      actBars[1].style.transform = `scaleX(${l2})`;
      actBars[2].style.transform = `scaleX(${l3})`;
      /* act fades */
      A1.setAttribute("opacity", 1 - sm((p - 0.31) / 0.05));
      A2.setAttribute("opacity", sm((p - 0.33) / 0.05) * (1 - sm((p - 0.64) / 0.05)));
      A3.setAttribute("opacity", sm((p - 0.66) / 0.05));
      /* act 1: words fly into notes */
      chips.forEach((c, i) => {
        const k = sm((l1 - 0.08 - i * 0.18) / 0.2);
        const [sx, sy] = chipStart[i];
        const tx = +c.dataset.tx,
          ty = +c.dataset.ty;
        const x = sx + (tx - sx) * k,
          y = sy + (ty - sy) * k - Math.sin(k * Math.PI) * 40;
        c.setAttribute(
          "transform",
          `translate(${x.toFixed(1)} ${(y + Math.sin(t * 0.002 + i) * 4 * (1 - k)).toFixed(1)}) scale(${1 - k * 0.35})`
        );
        c.setAttribute("opacity", (1 - sm((k - 0.75) / 0.25)).toFixed(3));
      });
      ncs.forEach((r, i) =>
        r.setAttribute("width", (300 * sm((l1 - 0.2 - i * 0.17) / 0.18)).toFixed(1))
      );
      nsq.style.strokeDashoffset = 170 * (1 - sm((l1 - 0.92) / 0.08));
      /* act 2: stethoscope over heart */
      {
        const u = Math.min(2.999, l2 * 3),
          k = Math.floor(u),
          fr = u - k,
          mv = sm(fr / 0.45),
          from = SPOTS[Math.max(0, k - 1)],
          to = SPOTS[k];
        const st =
          k === 0
            ? [from[0] + 120 * (1 - mv), from[1] - 140 * (1 - mv)]
            : [from[0] + (to[0] - from[0]) * mv, from[1] + (to[1] - from[1]) * mv];
        const lift = Math.sin(mv * Math.PI) * 14,
          cx = st[0],
          cy = st[1] - lift,
          hold = fr > 0.48 && l2 > 0 && l2 < 1;
        steth.setAttribute(
          "transform",
          `translate(${cx.toFixed(1)} ${cy.toFixed(1)}) scale(${(1 + lift * 0.004).toFixed(3)})`
        );
        tube.setAttribute(
          "d",
          `M${cx + 30} ${cy - 44}C${cx + 70} ${cy - 150} ${cx + 180} ${cy - 60} 540 -40`
        );
        rip.setAttribute("transform", `translate(${cx} ${cy})`);
        rip.classList.toggle("on", hold);
        lub.setAttribute("x", cx - 30);
        lub.setAttribute("y", cy + 62);
        lub.setAttribute("opacity", hold ? 1 : 0);
      }
      cks.forEach(
        (c, i) => (c.style.strokeDashoffset = 20 * (1 - sm((l2 - 0.1 - i * 0.2) / 0.14)))
      );
      const ecgOn = wAB * (1 - wBC);
      mdot.setAttribute("opacity", ecgOn > 0.6 ? 1 : 0);
      if (ecgOn > 0.6) {
        const xx = LX0 + ((t * 0.22) % (LX1 - LX0));
        const i = Math.round(((xx - LX0) / (LX1 - LX0)) * (NP - 1));
        mdot.setAttribute("cx", xx);
        mdot.setAttribute("cy", EC[i]);
      }
      /* act 3: branches and options */
      brU.style.strokeDashoffset = 340 * (1 - sm((l3 - 0.05) / 0.25));
      brD.style.strokeDashoffset = 300 * (1 - sm((l3 - 0.1) / 0.25));
      opts.forEach((o, i) => {
        const k = sm((l3 - 0.2 - i * 0.15) / 0.18);
        o.setAttribute("opacity", k);
        o.setAttribute(
          "transform",
          o
            .getAttribute("transform")
            .replace(
              /translate\([^)]*\)/,
              `translate(${572 + (1 - k) * 30} ${[250, 400, 560][i]})`
            )
        );
      });
      decide.setAttribute("opacity", sm((l3 - 0.75) / 0.15));
    }
    actBtns.forEach(
      (b, i) =>
        (b.onclick = () => {
          const top = mSec.offsetTop,
            h = mSec.offsetHeight - H;
          scrollTo({ top: top + h * [0.12, 0.48, 0.85][i], behavior: "smooth" });
        })
    );
    let lastY = scrollY,
      vel = 0,
      lastHdrY = 0,
      hs = -1;
    function mix(a, b, t) {
      const h = (c) => [1, 3, 5].map((i) => parseInt(c.slice(i, i + 2), 16));
      const A = h(a),
        B = h(b);
      return "rgb(" + A.map((v, i) => Math.round(v + (B[i] - v) * t)).join(",") + ")";
    }

    function frame(t) {
      const y = scrollY,
        docH = document.documentElement.scrollHeight - H;
      vel += (y - lastY - vel) * 0.1;
      lastY = y;
      prog.style.transform = `scaleX(${clamp(y / docH)})`;
      let mode = "l";
      for (const s of hdrSecs) {
        const r = s.getBoundingClientRect();
        if (r.top <= 50 && r.bottom > 50) {
          mode = s.dataset.hdr;
          break;
        }
      }
      hdr.classList.toggle("float", y > 30);
      hdr.classList.toggle("dk", mode === "d" && y > 30);
      if (Math.abs(y - lastHdrY) > 10) {
        hdr.classList.toggle("hide", y > lastHdrY && y > 700);
        lastHdrY = y;
      }
      mbar.classList.toggle("on", y > H * 0.7);

      if (!RM) {
        if (y < H * 1.3)
          por.style.transform = `translateY(${y * 0.12}px) scale(${1 + y * 0.00015})`;
        hx += (thx - hx) * 0.08;
        hy += (thy - hy) * 0.08;
        tags.forEach((el) => {
          const k = +el.dataset.px;
          el.style.transform = `translate(${hx * k}px,${hy * k - Math.min(y, H) * k * 0.01}px)`;
        });
        eR.style.strokeDashoffset = -(((t || 0) * 0.18) % (EL + 120)) + 120;
        sx -= 0.45 + Math.abs(vel) * 0.2;
        const half = strip.scrollWidth / 2;
        if (-sx > half) sx += half;
        strip.style.transform = `translate3d(${sx}px,0,0)`;
      }

      drawMinutes(t || 0);

      if (!RM) {
        const p = prg(hSec);
        const s = Math.min(5, Math.floor(p * 6));
        if (s !== hs) {
          hs = s;
          anat.dataset.s = s;
          stx.forEach((e, i) => e.classList.toggle("on", i === s));
          hnavB.forEach((b, i) => b.classList.toggle("on", i === s));
          coEls.forEach((c) => c.classList.toggle("on", +c.dataset.s === s));
          bigw.classList.add("sw");
          setTimeout(() => {
            bigw.textContent = BW[s];
            bigw.classList.remove("sw");
          }, 350);
        }
        hbars.forEach((b, i) => (b.style.transform = `scaleX(${clamp(p * 6 - i)})`));
        tx2 += (tX - tx2) * 0.06;
        ty2 += (tY - ty2) * 0.06;
        tilt.style.transform = `rotateY(${tx2 * 10}deg) rotateX(${-ty2 * 8}deg)`;
      }
      if (beatsEl) {
        beatsEl.textContent = Math.floor(
          (((performance.now() - T0) / 1000) * 72) / 60
        ).toLocaleString("en-IN");
      }

      {
        const r = wb.getBoundingClientRect();
        const p = RM ? 1 : clamp((H * 0.85 - r.top) / (H * 0.55));
        const n = Math.floor(p * wbs.length);
        wbs.forEach((w, i) => w.classList.toggle("on", i < n));
        const fr = $("#flow").getBoundingClientRect();
        const fp = RM ? 1 : clamp((H * 0.95 - fr.top) / (H * 0.4));
        flowEls.forEach((e, i) => e.classList.toggle("on", fp > i * 0.33));
      }
      if (!RM) {
        const r = why.getBoundingClientRect();
        const p = clamp((H * 0.95 - r.top) / (H * 0.55));
        const n = Math.floor(clamp(p / 0.7) * ws.length);
        ws.forEach((w, i) => w.classList.toggle("on", i < n));
        const sp = 1 - clamp(p / 0.5);
        hl.setAttribute(
          "transform",
          `translate(${-30 * sp} ${8 * sp}) rotate(${-12 * sp} 100 178)`
        );
        hr.setAttribute(
          "transform",
          `translate(${30 * sp} ${-6 * sp}) rotate(${10 * sp} 100 178)`
        );
        stitch.style.strokeDashoffset = sl * (1 - clamp((p - 0.45) / 0.25));
        const col = mix("#2B7C88", "#D23133", clamp((p - 0.7) / 0.2));
        hpl.setAttribute("fill", col);
        hpr.setAttribute("fill", col);
        why.classList.toggle("beating", p > 0.92);
      }

      if (!RM && jMax) {
        const p = prg(pSec);
        jsm += (p - jsm) * 0.14;
        const xs = stops._x,
          n = xs.length,
          u = clamp(jsm) * (n - 1),
          i = Math.min(n - 2, Math.floor(u)),
          f = u - i,
          f2 = sm((f - 0.3) / 0.4);
        const pos = xs[i] + (xs[i + 1] - xs[i]) * f2,
          A = stops._A || W * 0.3,
          x = pos - A;
        track.style.transform = `translate3d(${-x}px,0,0)`;
        const k = f2 < 0.5 ? i : i + 1;
        stops.forEach((s, j) => s.classList.toggle("on", j <= k));
        setStop(k);
        pbarb.style.transform = `scaleX(${jsm})`;
        let lo = 0,
          hi = jLen;
        for (let q = 0; q < 18; q++) {
          const m = (lo + hi) / 2;
          jdone.getPointAtLength(m).x < pos ? (lo = m) : (hi = m);
        }
        const pt = jdone.getPointAtLength(lo);
        jdone.style.strokeDashoffset = jLen - lo;
        jglow.style.strokeDashoffset = jLen - lo;
        jmark.style.transform = `translate(${pt.x}px,${pt.y}px)`;
      }

      if (fine && !RM) {
        rx += (mxp - rx) * 0.2;
        ry += (myp - ry) * 0.2;
        ring.style.transform = `translate(${rx}px,${ry}px)`;
      }
      requestAnimationFrame(frame);
    }
    function resize() {
      W = innerWidth;
      H = innerHeight;
      layoutPath();
    }
    addEventListener("resize", () => {
      clearTimeout(resize.t);
      resize.t = setTimeout(resize, 120);
    });
    layoutPath();
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(layoutPath);
    addEventListener("load", layoutPath);
    requestAnimationFrame(frame);
  })();
};

export function HomeFx() {
  useFx(fx);
  return null;
}
