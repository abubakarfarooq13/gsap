"use client";

import React, { useLayoutEffect, useRef } from "react";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MainRenderer: React.FC = () => {
  const rootRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      const scene = root.querySelectorAll(".scene");
      const sections = gsap.utils.toArray<HTMLElement>(scene);

      gsap.set(sections, {
        position: "absolute",
        inset: 0,
        willChange: "transform, opacity",
      });
      sections.forEach((el, i) =>
        gsap.set(el, { zIndex: sections.length - i })
      );

      if (sections[0])
        gsap.set(sections[0], {
          autoAlpha: 1,
          scale: 1,
          xPercent: 0,
          yPercent: 0,
        });
      if (sections.length > 1)
        gsap.set(sections.slice(1), { autoAlpha: 0, scale: 0.85 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root,
          start: "top top",
          end: "+=" + (sections.length - 1) * window.innerHeight,
          scrub: 1,
          pin: true,
          anticipatePin: 1,

          snap: {
            snapTo: 1 / (sections.length - 1),
            duration: 1,
            inertia: false,
          },

          invalidateOnRefresh: true,
        },
        defaults: { ease: "none" },
      });

      const dirForIndex = (i: number) => {
        const idx = (i - 1) % 4;
        return ["right", "left", "bottom", "top"][idx] as
          | "right"
          | "left"
          | "bottom"
          | "top";
      };

      for (let i = 1; i < sections.length; i++) {
        const incoming = sections[i];
        const outgoing = sections[i - 1];
        const dir = i === 1 ? "center" : dirForIndex(i);

        switch (dir) {
          case "right":
            gsap.set(incoming, {
              xPercent: 100,
              yPercent: 0,
              scale: 1,
              autoAlpha: 1,
            });
            break;
          case "left":
            gsap.set(incoming, {
              xPercent: -100,
              yPercent: 0,
              scale: 1,
              autoAlpha: 1,
            });
            break;
          case "bottom":
            gsap.set(incoming, {
              xPercent: 0,
              yPercent: 100,
              scale: 1,
              autoAlpha: 1,
            });
            break;
          case "top":
            gsap.set(incoming, {
              xPercent: 0,
              yPercent: -100,
              scale: 1,
              autoAlpha: 1,
            });
            break;
          default:
            gsap.set(incoming, {
              xPercent: 0,
              yPercent: 0,
              scale: 0.6,
              autoAlpha: 1,
            });
        }

        const STEP = "step" + i;
        tl.addLabel(STEP);

        tl.to(
          incoming,
          { xPercent: 0, yPercent: 0, scale: 1, autoAlpha: 1 },
          STEP
        );

        tl.to(outgoing, { scale: 0.85, autoAlpha: 0 }, STEP);
      }

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        ScrollTrigger.disable();
        gsap.set(sections, { clearProps: "all", position: "relative" });
      }
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef} className="relative h-[100dvh] overflow-hidden">
      <SectionOne />

      <SectionTwo />

      <SectionThree />
    </div>
  );
};

export default MainRenderer;
