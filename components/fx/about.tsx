// @ts-nocheck
"use client";
import { useFx } from "@/lib/fx";

const fx = () => {
  (() => {
    const TR = [
      {
        k: "Bhopal",
        y: "1996 · Bhopal",
        h: "MBBS",
        p: "Medical school at Gandhi Medical College, Bhopal. Where the doctor in him began.",
        i: "Gandhi Medical College, Bhopal",
        ill: 0,
      },
      {
        k: "Mumbai",
        y: "Mumbai",
        h: "MS and DNB, General Surgery",
        p: "Surgical training at Grant Medical College and the J.J. Group of Hospitals, then the DNB. The steady hands of a surgeon.",
        i: "Grant Medical College and J.J. Hospital",
        ill: 1,
      },
      {
        k: "Jaipur",
        y: "2008 · Jaipur",
        h: "MCh, Cardiothoracic and Vascular Surgery",
        p: "Super-specialist training to operate on the heart, lungs and blood vessels themselves.",
        i: "SMS Medical College, Jaipur",
        ill: 2,
      },
      {
        k: "BMHRC",
        y: "Bhopal",
        h: "Consultant, BMHRC",
        p: "Years of operating and caring for patients at Bhopal Memorial Hospital and Research Centre, in his own city.",
        i: "Bhopal Memorial Hospital and Research Centre",
        ill: 3,
      },
      {
        k: "Australia",
        y: "2011 · South Australia",
        h: "Fellowship in adult cardiac surgery",
        p: "Advanced adult heart surgery, learnt alongside surgical teams abroad.",
        i: "South Australia",
        ill: 4,
        c: "Confirm hospital",
      },
      {
        k: "Punjab",
        y: "Punjab",
        h: "Consultant, Max Hospitals",
        p: "Heart surgery at Max Hospitals, Punjab, including setting up a new heart surgery unit.",
        i: "Max Hospitals, Punjab",
        ill: 6,
        c: "Confirm years",
      },
      {
        k: "Home",
        y: "2013 · Bhopal",
        h: "He came home",
        p: "Back to Bhopal for good: surgery at the city's hospitals, teaching, and later a clinic of his own.",
        i: "Anand Heart Center, Bhopal",
        ill: 5,
      },
    ];
    const SC = [
      {
        h: "Adult heart surgery",
        s: "Heart",
        p: "Bypass surgery, valve repair and replacement, and surgery on the aorta.",
        ic: '<path d="M0 6s-8-5-8-10a4 4 0 0 1 8-2 4 4 0 0 1 8 2c0 5-8 10-8 10z"/>',
      },
      {
        h: "Children's heart surgery",
        s: "Children",
        p: "Holes in the heart and other heart conditions children are born with.",
        ic: '<circle cx="0" cy="-5" r="3"/><path d="M-6 8a6 6 0 0 1 12 0M0 2v0"/>',
      },
      {
        h: "Lung and chest surgery",
        s: "Thoracic",
        p: "Lung, chest wall and food pipe conditions, from biopsy to major surgery.",
        ic: '<path d="M-2-8v6M-2-2c-4 0-7 4-7 9 0 3 2 4 4 3 2-1 3-3 3-6M2-2c4 0 7 4 7 9 0 3-2 4-4 3-2-1-3-3-3-6M2-8v6"/>',
      },
      {
        h: "Vascular surgery",
        s: "Vessels",
        p: "Blocked leg arteries, aneurysms, varicose veins and dialysis access.",
        ic: '<path d="M-4-9c0 6 2 9 2 18M4-9c0 6-2 9-2 18M-2 0h4"/>',
      },
      {
        h: "Minimally invasive surgery",
        s: "Smaller cuts",
        p: "Selected heart and chest operations through smaller cuts, when they suit you.",
        ic: '<path d="M-8 8 8-8"/><path d="M-3-3l3 3M0-6l3 3"/>',
      },
    ];
    const $ = (s) => document.querySelector(s),
      $$ = (s) => [...document.querySelectorAll(s)];
    const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v)),
      sm = (x) => {
        x = clamp(x);
        return x * x * (3 - 2 * x);
      };
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
    $("#tsA").onclick = () => setTs(false);
    $("#tsB").onclick = () => setTs(true);
    setTimeout(() => $("#ab-hero").classList.add("go"), RM ? 0 : 120);

    const ist = new Date(Date.now() + (330 + new Date().getTimezoneOffset()) * 60000);
    const dow = ist.getDay(),
      mins = ist.getHours() * 60 + ist.getMinutes();
    const isOpen = dow >= 1 && dow <= 6 && mins >= 600 && mins < 1170;
    const ob = $("#abopen");
    ob.classList.toggle("closed", !isOpen);
    ob.querySelector("span").textContent = isOpen
      ? "Open now, until 7:30 pm"
      : dow === 0
        ? "Closed today, opens Monday 10 am"
        : mins < 600
          ? "Opens today at 10 am"
          : "Closed now, opens 10 am";

    const MQ = [
      "MBBS, <em>Bhopal</em>",
      "MS, <em>Mumbai</em>",
      "DNB, General Surgery",
      "MCh CTVS, <em>Jaipur</em>",
      "Fellowship, <em>South Australia</em>",
      "FACC (US)",
      "25 years in <em>surgery</em>",
    ];
    const mq = MQ.map((s) => `<span>${s}</span>`).join("");
    $("#abmq").innerHTML = mq + mq;

    const wp = $("#abw");
    wp.innerHTML = wp.textContent
      .trim()
      .split(/\s+/)
      .map((w) =>
        w.startsWith("*")
          ? `<span class="w"><em>${w.replace(/\*/g, "")}</em></span>`
          : `<span class="w">${w}</span>`
      )
      .join(" ");
    const wws = $$("#abw .w"),
      wsig = $("#abwsig"),
      whySec = $("#ab-why");

    $$(".ab-till svg *,.ab-side .ill *,.ab-wg svg *").forEach((el) => {
      try {
        el.style.setProperty("--l", Math.ceil(el.getTotalLength() + 2));
      } catch (e) {}
    });
    const chs = $$(".ab-ch"),
      tills = $$("#abtill svg"),
      tbigs = $$("#abtbig span"),
      rails = $$("#abrail button"),
      abtk = $("#abtk"),
      fill = $("#abfill"),
      chWrap = $("#abchs");
    let tK = -1;
    function setCh(k) {
      if (k === tK) return;
      tK = k;
      chs.forEach((c, i) => {
        c.classList.toggle("now", i === k);
        c.classList.toggle("done", i < k);
      });
      tills.forEach((s) => s.classList.remove("on"));
      const ti = tills[TR[k].ill];
      if (ti) {
        void ti.getBBox();
        ti.classList.add("on");
      }
      tbigs.forEach((s, i) => s.classList.toggle("on", i === k));
      rails.forEach((b, i) => {
        b.classList.toggle("now", i === k);
        b.classList.toggle("done", i < k);
      });
      abtk.textContent = TR[k].k;
    }
    rails.forEach(
      (b, i) =>
        (b.onclick = () => {
          const r = chs[i].getBoundingClientRect();
          scrollTo({ top: scrollY + r.top + r.height / 2 - H * 0.5, behavior: "smooth" });
        })
    );
    setCh(0);

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
    $$("[data-rv],h2,.ab-wg>div").forEach((el) => rio.observe(el));

    // units
    const uN = 6,
      usvg = $("#abusvg"),
      ubase = $("#abubase"),
      ulive = $("#abulive"),
      uglow = $("#abuglow"),
      ung = $("#abunodes"),
      ucnt = $("#abucnt"),
      uviz = $("#abuviz");
    const ux = (i) => 100 + i * 200;
    let ud = "M0 100";
    for (let i = 0; i < uN; i++) {
      const x = ux(i);
      ud += ` L${x - 60} 100 l10 -8 l10 8 l6 0 l6 14 l8 -70 l10 86 l6 -30 l10 0`;
    }
    ud += " L1200 100";
    [ubase, ulive, uglow].forEach((p) => p.setAttribute("d", ud));
    const uL = ulive.getTotalLength();
    [ulive, uglow].forEach((p) => {
      p.style.strokeDasharray = uL;
      p.style.strokeDashoffset = uL;
    });
    const uxs = [];
    for (let i = 0; i < uN; i++) {
      const x = ux(i);
      const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
      g.setAttribute("class", "ab-hn");
      g.innerHTML = `<circle class="bg" cx="${x}" cy="160" r="26"/><g transform="translate(${x - 12} 148)"><g class="hs"><path class="hp" d="M12 21s-8-5.3-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 10c0 5.7-8 11-8 11Z"/></g></g>`;
      ung.appendChild(g);
      let lo = 0,
        hi = uL;
      for (let q = 0; q < 20; q++) {
        const m = (lo + hi) / 2;
        ulive.getPointAtLength(m).x < x + 10 ? (lo = m) : (hi = m);
      }
      uxs.push(lo);
    }
    const uhn = $$(".ab-hn");

    // scope orbit
    const nodesG = $("#abnodes"),
      arc = $("#abarc"),
      aoc = $("#aboc"),
      slist = $("#abslist"),
      scope = $("#ab-scope");
    const AC = 2 * Math.PI * 230;
    arc.style.strokeDasharray = AC;
    arc.style.strokeDashoffset = AC;
    let sK = -1,
      sAuto = null;
    SC.forEach((s, i) => {
      const a = -Math.PI / 2 + (i * 2 * Math.PI) / SC.length,
        x = 300 + 230 * Math.cos(a),
        y = 300 + 230 * Math.sin(a);
      const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
      g.setAttribute("class", "ab-node");
      g.innerHTML = `<circle class="b" cx="${x}" cy="${y}" r="30"/><g class="ic" transform="translate(${x} ${y})">${s.ic}</g>`;
      g.onclick = () => {
        stopS();
        pickS(i);
      };
      nodesG.appendChild(g);
      s.g = g;
      const b = document.createElement("button");
      b.type = "button";
      b.innerHTML = `<span>${s.h}</span><small>${s.s}</small><i></i>`;
      b.onclick = () => {
        stopS();
        pickS(i);
      };
      slist.appendChild(b);
      s.b = b;
    });
    function pickS(i, first) {
      if (i === sK) return;
      sK = i;
      const s = SC[i];
      SC.forEach((o, j) => {
        o.g.classList.toggle("on", j === i);
        o.b.classList.toggle("on", j === i);
      });
      arc.style.strokeDashoffset = AC * (1 - (i + 1) / SC.length);
      const f = () => {
        $("#abosh").textContent = s.h;
        $("#abosp").textContent = s.p;
        aoc.classList.remove("sw");
      };
      if (first) f();
      else {
        aoc.classList.add("sw");
        setTimeout(f, 260);
      }
    }
    function stopS() {
      clearInterval(sAuto);
      sAuto = null;
      scope.classList.remove("auto");
    }
    pickS(0, true);
    if (!RM) {
      new IntersectionObserver(
        (es) =>
          es.forEach((e) => {
            if (!scope.classList.contains("auto")) return;
            if (e.isIntersecting && !sAuto) {
              const b = SC[sK].b;
              b.classList.remove("on");
              void b.offsetWidth;
              b.classList.add("on");
              sAuto = setInterval(() => pickS((sK + 1) % SC.length), 5000);
            } else if (!e.isIntersecting && sAuto) {
              clearInterval(sAuto);
              sAuto = null;
            }
          }),
        { threshold: 0.4 }
      ).observe(scope);
    } else stopS();

    const fine = matchMedia("(pointer:fine)").matches,
      curEl = $(".cur"),
      ring = $(".cur .ring");
    let mxp = -100,
      myp = -100,
      rx = -100,
      ry = -100;
    if (fine && !RM) {
      addEventListener("pointermove", (e) => {
        mxp = e.clientX;
        myp = e.clientY;
      });
      $$("[data-cur]").forEach((el) => {
        el.addEventListener("pointerenter", () => curEl.classList.add("big"));
        el.addEventListener("pointerleave", () => curEl.classList.remove("big"));
      });
    }

    const hdr = $("#hdr"),
      prog = $("#prog"),
      mbar = $("#mbar"),
      hdrSecs = $$("[data-hdr]"),
      abimg = $("#abimg");
    let lastHdrY = 0,
      uS = 0,
      lastU = -1;
    function frame() {
      const y = scrollY,
        docH = document.documentElement.scrollHeight - H;
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
        abimg.style.setProperty("--py", -clamp(y / H) * 60 + "px");
        const r = whySec.getBoundingClientRect(),
          p = clamp(-r.top / (r.height - H));
        const n = Math.floor(clamp(p / 0.8) * wws.length);
        wws.forEach((w, i) => w.classList.toggle("on", i < n));
        wsig.classList.toggle("on", p > 0.8);
        let k = 0;
        chs.forEach((c, i) => {
          if (c.getBoundingClientRect().top < H * 0.55) k = i;
        });
        setCh(k);
        const cr = chWrap.getBoundingClientRect();
        fill.style.transform = `scaleY(${clamp((H * 0.55 - cr.top) / cr.height)})`;
        const ur = uviz.getBoundingClientRect();
        const up = clamp((H * 0.85 - ur.top) / (H * 0.55));
        uS += (up - uS) * 0.12;
        const len = uS * uL;
        ulive.style.strokeDashoffset = uL - len;
        uglow.style.strokeDashoffset = uL - len;
        let lit = 0;
        uxs.forEach((v, i) => {
          const on = len >= v;
          uhn[i].classList.toggle("on", on);
          if (on) lit++;
        });
        if (lit !== lastU) {
          lastU = lit;
          ucnt.textContent = lit;
        }
      }
      if (fine && !RM) {
        rx += (mxp - rx) * 0.2;
        ry += (myp - ry) * 0.2;
        ring.style.transform = `translate(${rx}px,${ry}px)`;
      }
      requestAnimationFrame(frame);
    }
    if (RM) {
      setCh(0);
      ulive.style.strokeDashoffset = 0;
      uhn.forEach((h) => h.classList.add("on"));
      ucnt.textContent = 6;
      wsig.classList.add("on");
    }
    addEventListener("resize", () => {
      W = innerWidth;
      H = innerHeight;
    });
    requestAnimationFrame(frame);
  })();
};

export function AboutFx() {
  useFx(fx);
  return null;
}
