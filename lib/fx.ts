"use client";

import { useEffect } from "react";

/**
 * Runs a page script with automatic cleanup:
 * - every addEventListener gets an AbortSignal (removed on unmount)
 * - setInterval/setTimeout ids are collected and cleared
 * - requestAnimationFrame callbacks stop after unmount
 * - IntersectionObserver/MutationObserver/ResizeObserver are disconnected
 *
 * The global patches are active while the page script runs AND while any
 * tracked callback fires, so work scheduled inside callbacks (the rAF loop
 * re-arming itself, nested timeouts, listeners added later) is tracked too
 * and dies on unmount.
 */
export function runFx(fn: () => void): () => void {
  const ac = new AbortController();
  const signal = ac.signal;
  let dead = false;

  const w = window as unknown as Record<string, unknown>;
  type TimerId = ReturnType<typeof setTimeout>;
  const timeouts = new Set<TimerId>();
  const intervals = new Set<ReturnType<typeof setInterval>>();
  const observers = new Set<{ disconnect(): void }>();
  const rafIds = new Set<number>();

  const proto = EventTarget.prototype;
  const origAdd = proto.addEventListener;
  const origSi = w.setInterval as typeof setInterval;
  const origCi = w.clearInterval as typeof clearInterval;
  const origSt = w.setTimeout as typeof setTimeout;
  const origCt = w.clearTimeout as typeof clearTimeout;
  const origRaf = w.requestAnimationFrame as typeof requestAnimationFrame;
  const origCaf = w.cancelAnimationFrame as typeof cancelAnimationFrame;
  const OrigIO = w.IntersectionObserver;
  const OrigMO = w.MutationObserver;
  const OrigRO = w.ResizeObserver;

  function patchedAdd(
    this: EventTarget,
    type: string,
    listener: EventListenerOrEventListenerObject | null,
    options?: AddEventListenerOptions | boolean
  ) {
    if (options === undefined || options === null) {
      options = { signal };
    } else if (typeof options === "boolean") {
      options = { capture: options, signal };
    } else if (typeof options === "object" && !options.signal) {
      options = { ...options, signal };
    }
    return origAdd.call(this, type, listener, options);
  }

  function patchedSi(cb: TimerHandler, ms?: number, ...args: unknown[]) {
    const id = origSi(
      (...a: unknown[]) => {
        if (!dead && typeof cb === "function")
          withPatch(() => (cb as (...x: unknown[]) => void)(...a));
      },
      ms,
      ...args
    ) as unknown as ReturnType<typeof setInterval>;
    intervals.add(id);
    return id;
  }
  function patchedCi(id?: ReturnType<typeof setInterval>) {
    if (id !== undefined) intervals.delete(id);
    return origCi(id);
  }

  function patchedSt(cb: TimerHandler, ms?: number, ...args: unknown[]) {
    const id = origSt(
      (...a: unknown[]) => {
        timeouts.delete(id);
        if (!dead && typeof cb === "function")
          withPatch(() => (cb as (...x: unknown[]) => void)(...a));
      },
      ms,
      ...args
    ) as TimerId;
    timeouts.add(id);
    return id;
  }
  function patchedCt(id?: TimerId) {
    if (id !== undefined) timeouts.delete(id);
    return origCt(id);
  }

  function patchedRaf(cb: FrameRequestCallback) {
    const id = origRaf((t) => {
      rafIds.delete(id);
      if (!dead) withPatch(() => cb(t));
    });
    rafIds.add(id);
    return id;
  }
  function patchedCaf(id: number) {
    rafIds.delete(id);
    return origCaf(id);
  }

  function wrapObserver<T extends { disconnect(): void }>(
    Ctor: new (cb: unknown, opts?: unknown) => T
  ) {
    return function (this: unknown, cb: unknown, opts?: unknown) {
      const inst = new Ctor(
        (...a: unknown[]) => {
          if (!dead) withPatch(() => (cb as (...x: unknown[]) => void)(...a));
        },
        opts
      );
      observers.add(inst);
      return inst;
    };
  }
  const WrappedIO = OrigIO ? wrapObserver(OrigIO as never) : undefined;
  const WrappedMO = OrigMO ? wrapObserver(OrigMO as never) : undefined;
  const WrappedRO = OrigRO ? wrapObserver(OrigRO as never) : undefined;

  function install() {
    proto.addEventListener = patchedAdd;
    w.setInterval = patchedSi;
    w.clearInterval = patchedCi;
    w.setTimeout = patchedSt;
    w.clearTimeout = patchedCt;
    w.requestAnimationFrame = patchedRaf;
    w.cancelAnimationFrame = patchedCaf;
    if (WrappedIO) w.IntersectionObserver = WrappedIO as never;
    if (WrappedMO) w.MutationObserver = WrappedMO as never;
    if (WrappedRO) w.ResizeObserver = WrappedRO as never;
  }
  function restore() {
    proto.addEventListener = origAdd;
    w.setInterval = origSi;
    w.clearInterval = origCi;
    w.setTimeout = origSt;
    w.clearTimeout = origCt;
    w.requestAnimationFrame = origRaf;
    w.cancelAnimationFrame = origCaf;
    if (OrigIO) w.IntersectionObserver = OrigIO;
    if (OrigMO) w.MutationObserver = OrigMO;
    if (OrigRO) w.ResizeObserver = OrigRO;
  }
  function withPatch<T>(cb: () => T): T {
    install();
    try {
      return cb();
    } finally {
      restore();
    }
  }

  try {
    // Match classic-script semantics: a throwing page script stops itself but
    // must not tear down the React tree.
    withPatch(() => fn());
  } catch (e) {
    console.error("[fx] page script error", e);
  }

  return () => {
    dead = true;
    ac.abort();
    intervals.forEach((id) => origCi(id));
    timeouts.forEach((id) => origCt(id));
    rafIds.forEach((id) => origCaf(id));
    observers.forEach((o) => o.disconnect());
  };
}

export function useFx(fn: () => void): void {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => runFx(fn), []);
}
