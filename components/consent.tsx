"use client";

import { useEffect, useRef, useState } from "react";

const KEY = "ahc-consent";
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    __gaLoaded?: boolean;
  }
}

function gtagDefaults() {
  if (!GA_ID) return;
  window.dataLayer = window.dataLayer || [];
  window.gtag =
    window.gtag ||
    function (...args: unknown[]) {
      window.dataLayer!.push(args);
    };
  window.gtag("consent", "default", {
    ad_storage: "denied",
    analytics_storage: "denied",
    wait_for_update: 500,
  });
}

function loadGa() {
  if (!GA_ID || window.__gaLoaded) return;
  window.__gaLoaded = true;
  const s = document.createElement("script");
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(s);
  window.gtag!("js", new Date());
  window.gtag!("config", GA_ID, { anonymize_ip: true });
}

/** Lightweight analytics event helper used by instrumented elements. */
export function track(name: string, params?: Record<string, unknown>) {
  if (window.gtag) window.gtag("event", name, params);
}

export function Consent() {
  const [show, setShow] = useState(false);
  const [on, setOn] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gtagDefaults();
    let saved: string | null = null;
    try {
      saved = localStorage.getItem(KEY);
    } catch {
      /* ignore */
    }
    if (saved === "accepted") loadGa();
    else if (!saved) {
      const EVENTS = ["scroll", "pointerdown", "keydown", "touchstart"] as const;
      let t: ReturnType<typeof setTimeout> | undefined;
      const off = () => {
        EVENTS.forEach((e) => window.removeEventListener(e, reveal));
        window.removeEventListener("load", arm);
        clearTimeout(t);
      };
      function reveal() {
        off();
        setShow(true);
      }
      function arm() {
        t = setTimeout(reveal, 10000);
      }
      EVENTS.forEach((e) =>
        window.addEventListener(e, reveal, { once: true, passive: true })
      );
      if (document.readyState === "complete") arm();
      else window.addEventListener("load", arm, { once: true });
      return off;
    }
  }, []);

  useEffect(() => {
    if (!show) return;
    const id = requestAnimationFrame(() => setOn(true));
    return () => cancelAnimationFrame(id);
  }, [show]);

  const choose = (ok: boolean) => {
    try {
      localStorage.setItem(KEY, ok ? "accepted" : "declined");
    } catch {
      /* ignore */
    }
    window.gtag?.("consent", "update", { analytics_storage: ok ? "granted" : "denied" });
    if (ok) loadGa();
    setShow(false);
  };

  if (!show) return null;
  return (
    <div
      className={`cookie${on ? " on" : ""}`}
      ref={ref}
      role="dialog"
      aria-label="Cookie consent"
      aria-live="polite"
    >
      <p>
        <b>Analytics cookies.</b> We would like to count visits to see which pages help
        patients most. Nothing medical is tracked. Accept or carry on without it.
      </p>
      <div className="row">
        <button type="button" className="ck-ok" onClick={() => choose(true)}>
          Accept
        </button>
        <button type="button" className="ck-no" onClick={() => choose(false)}>
          No thanks
        </button>
      </div>
    </div>
  );
}
