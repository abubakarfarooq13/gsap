/*eslint-disable*/
//@ts-nocheck
"use client";
import { RefObject, useLayoutEffect } from "react";
import { loadGSAP } from "@/lib/gsapClient";

export function useScrollTrigger(
  scopeRef: RefObject<HTMLElement>,
  run: (
    gsap: any,
    ScrollTrigger: any,
    scopeEl: HTMLElement
  ) => void | (() => void)
) {
  useLayoutEffect(() => {
    const el = scopeRef.current;
    if (!el) return;

    let cancelled = false;
    let localCleanup: void | (() => void);

    loadGSAP([() => import("gsap/ScrollTrigger") as any]).then((gsap) => {
      if (cancelled || !gsap || !scopeRef.current) return;
      const { ScrollTrigger } = gsap;
      const ctx = gsap.context(() => {
        localCleanup = run(gsap, ScrollTrigger, scopeRef.current!);
      }, scopeRef);

      return () => {
        if (typeof localCleanup === "function") localCleanup();
        ctx.revert();
      };
    });

    return () => {
      cancelled = true;
    };
  }, [scopeRef, run]);
}
