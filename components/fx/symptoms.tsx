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
      ring = $(".cur .hring");
    let mxp = -100,
      myp = -100,
      rx = -100,
      ry = -100;
    const WA = WA_PREFIX;
    {
      const SYM = DATA.symptomsSpots;
      const bmap = $("#bmap"),
        slist = $("#slist"),
        symc = $("#symc"),
        sxEl = $("#sx"),
        shots = $("#shots"),
        sfocus = $("#sfocus"),
        SDUR = 6000;
      // SSR renders the same nodes in the same order — reuse them instead of
      // remove()+recreate, which breaks React-owned DOM on navigation.
      const sbtns = slist.querySelectorAll(":scope > button"),
        sgs = shots.children;
      SYM.forEach((s, i) => {
        const g = sgs[i],
          b = sbtns[i];
        if (!g || !b) return;
        g.onclick = () => {
          stopAuto();
          pick(i);
        };
        b.onclick = () => {
          stopAuto();
          pick(i);
        };
        s.g = g;
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
            WA +
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
    }

    setTimeout(() => $("#sy-hero").classList.add("go"), RM ? 0 : 120);
    {
      const N = 240,
        X = (i) => (i / (N - 1)) * 600;
      const beat = (u) => {
        if (u > 0.28 && u < 0.34) return -10 * Math.sin(((u - 0.28) / 0.06) * Math.PI);
        if (u >= 0.4 && u < 0.42) return ((u - 0.4) / 0.02) * 12;
        if (u >= 0.42 && u < 0.45) return 12 - ((u - 0.42) / 0.03) * 110;
        if (u >= 0.45 && u < 0.48) return -98 + ((u - 0.45) / 0.03) * 130;
        if (u >= 0.48 && u < 0.5) return 32 - ((u - 0.48) / 0.02) * 32;
        if (u > 0.6 && u < 0.72) return -16 * Math.sin(((u - 0.6) / 0.12) * Math.PI);
        return 0;
      };
      const Y = (x) => 100 + beat((x % 200) / 200);
      let d = "";
      for (let i = 0; i < N; i++)
        d += (i ? "L" : "M") + X(i).toFixed(1) + " " + Y(X(i)).toFixed(1);
      $("#syecgb").setAttribute("d", d);
      $("#syecg2").setAttribute("d", d);
      const e = $("#syecg"),
        bp = $("#sybpm");
      let t0 = performance.now(),
        lb = 0;
      FR.push(() => {
        const t = performance.now() - t0,
          head = (t * 0.32) % 660;
        let p = "";
        for (let i = 0; i < N; i++) {
          const x = X(i);
          if (x > head) break;
          if (head - x > 220) continue;
          p += (p ? "L" : "M") + x.toFixed(1) + " " + Y(x).toFixed(1);
        }
        e.setAttribute("d", p);
        if (t - lb > 1600) {
          lb = t;
          bp.textContent = 70 + Math.round(Math.random() * 6);
        }
      });
      if (RM) e.setAttribute("d", d);
    }
    $$(".sy-rc,.sy-t,.sy-mc").forEach((c) => {
      c.addEventListener("click", () => c.classList.toggle("on"));
      c.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          c.classList.toggle("on");
        }
      });
    });
    {
      const car = $("#sycar"),
        st = () => car.querySelector(".sy-mc").offsetWidth + 16;
      $("#sypv").onclick = () => car.scrollBy({ left: -st(), behavior: "smooth" });
      $("#synx").onclick = () => car.scrollBy({ left: st(), behavior: "smooth" });
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

export function SymptomsFx() {
  useFx(fx);
  return null;
}
