"use client";

import { useEffect } from "react";

/**
 * Runs a page script with automatic cleanup:
 * - every addEventListener gets an AbortSignal (removed on unmount)
 * - setInterval/setTimeout ids are collected and cleared
 * - requestAnimationFrame callbacks stop after unmount
 * - IntersectionObserver/MutationObserver/ResizeObserver are disconnected
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

  proto.addEventListener = function (
    this: EventTarget,
    type: string,
    listener: EventListenerOrEventListenerObject | null,
    options?: AddEventListenerOptions | boolean
  ) {
    if (typeof options === "object" && options !== null && !options.signal) {
      options = { ...options, signal };
    } else if (options === undefined) {
      options = { signal };
    }
    return origAdd.call(this, type, listener, options);
  };

  const origSi = w.setInterval as typeof setInterval;
  const origCi = w.clearInterval as typeof clearInterval;
  const origSt = w.setTimeout as typeof setTimeout;
  const origCt = w.clearTimeout as typeof clearTimeout;
  const origRaf = w.requestAnimationFrame as typeof requestAnimationFrame;
  const origCaf = w.cancelAnimationFrame as typeof cancelAnimationFrame;

  w.setInterval = function (cb: TimerHandler, ms?: number, ...args: unknown[]) {
    const id = origSi(cb, ms, ...args) as unknown as ReturnType<typeof setInterval>;
    intervals.add(id);
    return id;
  } as unknown as typeof setInterval;
  w.clearInterval = function (id?: ReturnType<typeof setInterval>) {
    if (id !== undefined) intervals.delete(id);
    return origCi(id);
  } as unknown as typeof clearInterval;

  w.setTimeout = function (cb: TimerHandler, ms?: number, ...args: unknown[]) {
    const id = origSt(
      (...a: unknown[]) => {
        timeouts.delete(id);
        if (!dead) {
          if (typeof cb === "function") (cb as (...x: unknown[]) => void)(...a);
        }
      },
      ms,
      ...args
    ) as TimerId;
    timeouts.add(id);
    return id;
  } as unknown as typeof setTimeout;
  w.clearTimeout = function (id?: TimerId) {
    if (id !== undefined) timeouts.delete(id);
    return origCt(id);
  } as unknown as typeof clearTimeout;

  w.requestAnimationFrame = function (cb: FrameRequestCallback) {
    const id = origRaf((t) => {
      rafIds.delete(id);
      if (!dead) cb(t);
    });
    rafIds.add(id);
    return id;
  } as typeof requestAnimationFrame;
  w.cancelAnimationFrame = function (id: number) {
    rafIds.delete(id);
    return origCaf(id);
  } as typeof cancelAnimationFrame;

  function wrapObserver<T extends { disconnect(): void }>(
    Ctor: new (cb: unknown, opts?: unknown) => T
  ) {
    return function (this: unknown, cb: unknown, opts?: unknown) {
      const inst = new Ctor(cb, opts);
      observers.add(inst);
      return inst;
    };
  }
  const OrigIO = w.IntersectionObserver;
  const OrigMO = w.MutationObserver;
  const OrigRO = w.ResizeObserver;
  if (OrigIO) w.IntersectionObserver = wrapObserver(OrigIO as never);
  if (OrigMO) w.MutationObserver = wrapObserver(OrigMO as never);
  if (OrigRO) w.ResizeObserver = wrapObserver(OrigRO as never);

  try {
    // Match classic-script semantics: a throwing page script stops itself but
    // must not tear down the React tree.
    fn();
  } catch (e) {
    console.error("[fx] page script error", e);
  } finally {
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

  return () => {
    dead = true;
    ac.abort();
    intervals.forEach((id) => origCi(id));
    timeouts.forEach((id) => origCt(id));
    observers.forEach((o) => o.disconnect());
  };
}

export function useFx(fn: () => void): void {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => runFx(fn), []);
}
