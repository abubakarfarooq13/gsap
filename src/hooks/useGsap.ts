/*eslint-disable*/
//@ts-nocheck
"use client";
import { RefObject, useLayoutEffect } from "react";
import { loadGSAP } from "@/lib/gsapClient";

export function useGSAP(
  scopeRef: RefObject<HTMLElement>,
  run: (gsap: any, scopeEl: HTMLElement) => void | (() => void)
) {
  useLayoutEffect(() => {
    const el = scopeRef.current;
    if (!el) return;
    let cancelled = false;
    let localCleanup: void | (() => void);

    loadGSAP().then((gsap) => {
      if (cancelled || !gsap || !scopeRef.current) return;
      const ctx = gsap.context(() => {
        localCleanup = run(gsap, scopeRef.current!);
      }, scopeRef);
      return () => {
        if (typeof localCleanup === "function") localCleanup();
        ctx.revert(); // kills all in scope
      };
    });

    return () => {
      cancelled = true;
    };
  }, [scopeRef, run]);
}
