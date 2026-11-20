// @ts-nocheck
"use client";
import { useFx } from "@/lib/fx";
import DATA from "@/data/interactive.json";


const fx = () => {
  (() => {
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
    const FR = [];
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
    const ist = new Date(Date.now() + (330 + new Date().getTimezoneOffset()) * 60000),
      dow = ist.getDay(),
      mins = ist.getHours() * 60 + ist.getMinutes(),
      isOpen = dow >= 1 && dow <= 6 && mins >= 600 && mins < 1170;
    const openText = isOpen
      ? "Open now, until 7:30 pm"
      : dow === 0
        ? "Closed today, opens Monday 10 am"
        : mins < 600
          ? "Opens today at 10 am"
          : "Closed now, opens 10 am";
    const fine = matchMedia("(pointer:fine)").matches,
      curEl = $(".cur"),
      ring = $(".cur .hring");
    let mxp = -100,
      myp = -100,
      rx = -100,
      ry = -100;
    {
      const TR = DATA.treatmentsFinder.tr;
      const TOLD = DATA.treatmentsFinder.told;
      const tlist = $("#tlist"),
        tpanel = $("#tpanel"),
        arts = $$("#tpArt .art"),
        told = $("#told"),
        pop = $("#pop"),
        pickT = $("#pickT");

      // SSR renders the same .tr rows — reuse them instead of innerHTML=
      // which detaches React-owned children and breaks commit on navigation.
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
    }

    // hero
    setTimeout(() => $("#tp-hero").classList.add("go"), RM ? 0 : 120);
    const tart = $("#tpart"),
      hotEls = $$("#tpart [data-k]");
    const setHot = (k) => {
      tart.classList.toggle("dim", !!k);
      hotEls.forEach((g) => g.classList.toggle("hot", g.dataset.k === k));
      $$("#tpart .tp-co,#tpchips a").forEach((a) =>
        a.classList.toggle("hot", a.dataset.k === k)
      );
    };
    $$("#tpart .tp-co,#tpchips a").forEach((a) => {
      a.addEventListener("pointerenter", () => setHot(a.dataset.k));
      a.addEventListener("pointerleave", () => setHot(null));
      a.addEventListener("click", (e) => {
        const t = document.querySelector(a.getAttribute("href"));
        if (t) {
          e.preventDefault();
          t.scrollIntoView({ behavior: "smooth", block: "center" });
          t.classList.remove("flash");
          void t.offsetWidth;
          t.classList.add("flash");
        }
      });
    });
    // carousel
    const car = $("#tpcar"),
      bar = $("#tpbar"),
      prev = $("#tpprev"),
      next = $("#tpnext");
    const upd = () => {
      const max = car.scrollWidth - car.clientWidth;
      const p = max > 0 ? car.scrollLeft / max : 1;
      bar.style.transform = `scaleX(${0.12 + 0.88 * p})`;
      prev.disabled = car.scrollLeft < 4;
      next.disabled = car.scrollLeft > max - 4;
    };
    car.addEventListener("scroll", upd, { passive: true });
    upd();
    const step = () => {
      const c = car.querySelector(".tp-card");
      return c.offsetWidth + 18;
    };
    prev.onclick = () => car.scrollBy({ left: -step(), behavior: "smooth" });
    next.onclick = () => car.scrollBy({ left: step(), behavior: "smooth" });
    let dx = 0,
      sl = 0,
      down = false,
      moved = false;
    car.addEventListener("pointerdown", (e) => {
      if (e.pointerType !== "mouse") return;
      down = true;
      moved = false;
      dx = e.clientX;
      sl = car.scrollLeft;
      car.classList.add("drag");
    });
    addEventListener("pointermove", (e) => {
      if (!down) return;
      const d = e.clientX - dx;
      if (Math.abs(d) > 4) moved = true;
      car.scrollLeft = sl - d;
    });
    addEventListener("pointerup", () => {
      if (!down) return;
      down = false;
      car.classList.remove("drag");
      const s = step();
      car.scrollTo({ left: Math.round(car.scrollLeft / s) * s, behavior: "smooth" });
    });
    // options
    const OP = [
      {
        h: "Medicines and <em>lifestyle</em>",
        a: "Tablets to control blood pressure, cholesterol, sugar and heart rhythm, with changes in food, activity and smoking.",
        b: "Often the first step, and sometimes all that is needed, especially when a problem is found early.",
        c: "No hospital stay. Regular reviews to see how you are doing.",
      },
      {
        h: "A procedure through a <em>tube</em>",
        a: "A thin tube is passed through a blood vessel in the wrist or groin, for example to open a narrowed artery with a balloon and stent.",
        b: "For some narrowings and blockages where a stent is suitable and likely to help.",
        c: "Usually a short hospital stay, with most people walking the same or next day.",
      },
      {
        h: "<em>Surgery</em>",
        a: "An operation such as bypass or valve repair, done by the surgical team at the hospital.",
        b: "When there are several blockages, a valve problem, or when a stent is not the right option.",
        c: "A hospital stay and a few weeks of gradual recovery at home, with follow-up at the clinic.",
      },
    ];
    const seg = $$("#tpseg button"),
      ind = $("#tpind"),
      ovis = $$("#tpovis>g"),
      oc = $("#tpocard");
    let oK = -1;
    function setO(i, first) {
      if (i === oK) return;
      oK = i;
      seg.forEach((b, j) => b.classList.toggle("on", j === i));
      const b = seg[i];
      if (W > 900) {
        ind.style.width = b.offsetWidth + "px";
        ind.style.transform = `translateX(${b.offsetLeft - 6}px)`;
        ind.style.height = "";
      } else {
        ind.style.height = b.offsetHeight + "px";
        ind.style.transform = `translateY(${b.offsetTop - 6}px)`;
      }
      ovis.forEach((g, j) => g.classList.toggle("on", j === i));
      const o = OP[i];
      const f = () => {
        $("#tpoh").innerHTML = o.h;
        $("#tpo1").textContent = o.a;
        $("#tpo2").textContent = o.b;
        $("#tpo3").textContent = o.c;
        oc.classList.remove("sw");
      };
      if (first) f();
      else {
        oc.classList.add("sw");
        setTimeout(f, 260);
      }
    }
    seg.forEach((b, i) => (b.onclick = () => setO(i)));
    setO(0, true);
    addEventListener("resize", () => {
      const k = oK;
      oK = -1;
      setO(k, true);
    });
    if (document.fonts)
      document.fonts.ready.then(() => {
        const k = oK;
        oK = -1;
        setO(k, true);
      });

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
    $$("[data-rv],h2,[data-io]").forEach((el) => rio.observe(el));
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
      hdrSecs = $$("[data-hdr]");
    let lastHdrY = 0;
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
      if (!RM) FR.forEach((f) => f(y));
      if (fine && !RM) {
        rx += (mxp - rx) * 0.2;
        ry += (myp - ry) * 0.2;
        ring.style.transform = `translate(${rx}px,${ry}px)`;
      }
      requestAnimationFrame(frame);
    }
    addEventListener("resize", () => {
      W = innerWidth;
      H = innerHeight;
    });
    requestAnimationFrame(frame);
  })();
};

export function TreatmentsFx() {
  useFx(fx);
  return null;
}
