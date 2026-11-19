// @ts-nocheck
"use client";
import { useFx } from "@/lib/fx";
import DATA from "@/data/interactive.json";
import { WA_PREFIX } from "@/lib/whatsapp";

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
      ring = $(".cur .ring");
    let mxp = -100,
      myp = -100,
      rx = -100,
      ry = -100;
    const WA = WA_PREFIX;

    setTimeout(() => $("#tt-hero").classList.add("go"), RM ? 0 : 120);
    const D = DATA.checklists["bypass-surgery"];
    const mq = D.mq.map((s) => `<span>${s}</span>`).join("");
    $("#ttmq").innerHTML = mq + mq;
    // checklist
    const tl = $("#ttlist");
    tl.innerHTML = D.check
      .map(
        (c, i) =>
          `<label data-rv style="--d:${i * 0.05}s"><input type="checkbox" value="${i}"><span class="bx"><svg viewBox="0 0 14 14"><path d="M2 7.5 5.5 11 12 3.5"/></svg></span><span>${c}</span></label>`
      )
      .join("");
    const fg = $("#ttfg"),
      res = $("#ttres"),
      wa = $("#ttwa");
    let lastBand = -1;
    function upd(first) {
      const on = $$("#ttlist input:checked").map((i) => D.check[+i.value]);
      const n = on.length;
      fg.style.strokeDashoffset = 1 - Math.min(1, n / Math.max(3, D.check.length * 0.6));
      const band = n === 0 ? 0 : n < 3 ? 1 : 2;
      const msg = D.res[band];
      wa.href =
        WA +
        encodeURIComponent(
          n
            ? `Hello, I am reading about ${D.namel} on your website. These apply to me: ${on.join("; ")}. I would like to consult Dr. Anand Yadav.`
            : `Hello, I would like to ask Dr. Anand Yadav about ${D.namel}.`
        );
      if (band === lastBand) return;
      lastBand = band;
      const f = () => {
        $("#ttrh").innerHTML = msg[0];
        $("#ttrp").textContent = msg[1];
        res.classList.remove("sw");
      };
      if (first) f();
      else {
        res.classList.add("sw");
        setTimeout(f, 220);
      }
    }
    tl.addEventListener("change", () => upd());
    upd(true);
    // story
    const sps = $$(".tt-sp"),
      ssv = $$("#ttstage>svg"),
      sws = $$(".tt-sword span"),
      stb = $$(".tt-stabs i");
    let sK = -1;
    function setS(k) {
      if (k === sK) return;
      sK = k;
      sps.forEach((p, i) => p.classList.toggle("on", i === k));
      ssv.forEach((s, i) => s.classList.toggle("on", i === k));
      sws.forEach((s, i) => s.classList.toggle("on", i === k));
    }
    setS(0);
    FR.push(() => {
      let k = 0;
      sps.forEach((p, i) => {
        if (p.getBoundingClientRect().top < H * 0.5) k = i;
      });
      setS(k);
      sps.forEach((p, i) => {
        const r = p.getBoundingClientRect();
        stb[i].style.transform = `scaleX(${clamp((H * 0.5 - r.top) / r.height)})`;
      });
    });
    if (RM) sps.forEach((p) => p.classList.add("on"));

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

export function FxBypassSurgery() {
  useFx(fx);
  return null;
}
