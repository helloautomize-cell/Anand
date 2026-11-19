"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useFx } from "@/lib/fx";

/* Site nav script + keyboard focus support. */
const navFx = () => {
  const dd = document.querySelector(".nav .dd") as HTMLElement | null;
  if (dd) {
    const b = dd.querySelector(".ddb") as HTMLButtonElement;
    let t: ReturnType<typeof setTimeout>;
    const fine = matchMedia("(pointer:fine)").matches;
    const set = (o: boolean) => {
      dd.classList.toggle("open", o);
      b.setAttribute("aria-expanded", String(o));
      if (!o && document.activeElement === b) b.blur();
    };
    b.addEventListener("click", (e) => {
      e.stopPropagation();
      // keyboard activation (detail 0) always opens; mouse toggles
      if (e.detail === 0) set(true);
      else set(!dd.classList.contains("open"));
    });
    if (fine) {
      dd.addEventListener("pointerenter", () => {
        clearTimeout(t);
        set(true);
      });
      dd.addEventListener("pointerleave", () => {
        t = setTimeout(() => set(false), 180);
      });
    }
    dd.addEventListener("focusin", () => {
      clearTimeout(t);
      set(true);
    });
    dd.addEventListener("focusout", (e) => {
      if (!dd.contains((e as FocusEvent).relatedTarget as Node))
        t = setTimeout(() => set(false), 120);
    });
    document.addEventListener("click", (e) => {
      if (!dd.contains(e.target as Node)) set(false);
    });
    addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        const wasOpen = dd.classList.contains("open");
        set(false);
        if (wasOpen && dd.contains(document.activeElement)) b.focus();
      }
    });
    dd.querySelectorAll(".mi").forEach((m, i) =>
      (m as HTMLElement).style.setProperty("--d", i * 0.03 + "s")
    );
    new MutationObserver(() => {
      if (document.querySelector("#hdr")!.classList.contains("hide")) set(false);
    }).observe(document.querySelector("#hdr")!, {
      attributes: true,
      attributeFilter: ["class"],
    });
  }
  const mm = document.querySelector("#mm") as HTMLElement;
  const tog = document.querySelector(".mtog") as HTMLButtonElement;
  const ms = (o: boolean) => {
    mm.classList.toggle("open", o);
    document.body.classList.toggle("mm-lock", o);
    tog.setAttribute("aria-expanded", String(o));
    if (o) (mm.querySelector(".mm-x") as HTMLElement)?.focus();
  };
  tog.onclick = () => ms(true);
  (mm.querySelector(".mm-x") as HTMLElement).onclick = () => ms(false);
  addEventListener("keydown", (e) => {
    if (e.key === "Escape") ms(false);
  });
  mm.querySelectorAll("nav>a,.mm-tl a").forEach((a) =>
    a.addEventListener("click", () => ms(false))
  );
  const tb = mm.querySelector(".mm-tb") as HTMLElement;
  const tl = mm.querySelector(".mm-tl") as HTMLElement;
  tb.onclick = () => {
    const o = !tl.classList.contains("open");
    tl.classList.toggle("open", o);
    tb.setAttribute("aria-expanded", String(o));
  };
  mm.querySelectorAll("nav>a,.mm-tb").forEach((a, i) =>
    (a as HTMLElement).style.setProperty("--d", 0.15 + i * 0.05 + "s")
  );
};

function applyHere(pathname: string) {
  const pn = pathname.endsWith("/") ? pathname : pathname + "/";
  document.querySelectorAll<HTMLElement>(".nav a").forEach((a) => {
    const href = a.getAttribute("href") ?? "";
    const isMi = a.classList.contains("mi");
    a.classList.toggle(isMi ? "here" : "on", href === pn);
  });
  document.querySelectorAll<HTMLElement>(".mm nav>a").forEach((a) => {
    a.classList.toggle("on", a.getAttribute("href") === pn);
  });
  const dd = document.querySelector(".nav .dd");
  dd?.classList.toggle("on", pn.startsWith("/treatments/"));
}

export function NavFx() {
  const pn = usePathname();
  useFx(navFx);
  useEffect(() => {
    applyHere(pn);
  }, [pn]);
  return null;
}
