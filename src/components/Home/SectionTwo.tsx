/*eslint-disable*/
//@ts-nocheck
"use client";
import { useScrollTrigger } from "@/hooks/useScrollTrigger";
import React, { useRef } from "react";
import { sectionTwoTimeline } from "../animations/SectionTwo";

const SectionTwo = () => {
  const scope = useRef<HTMLDivElement>(null);

  useScrollTrigger(scope, (gsap, ScrollTrigger, el) => {
    sectionTwoTimeline(gsap, ScrollTrigger, el);
    return () => {};
  });
  return (
    <div
      ref={scope}
      className="flex section-two justify-center bg-[#0d1d2e] scene"
    >
      <div className="mt-20 text-white container">
        <h2 className=" text-8xl ">Know</h2>
        <div className="flex justify-between ">
          <div className="w-1/2">
            <h2 className="text-7xl mt-10">
              We build what
              <br />
              you imagine
            </h2>
            <div className="ml-10 mt-10">
              <span>We’re glad you’re here.</span>
              <p className="mt-10">
                Akaltic is a product design studio dedicated to crafting
                meaningful
                <br />
                digital experiences. From UX research and design to frontend
                <br />
                development, our hands-on team brings the skills and insight
                needed to
                <br />
                turn your vision into a standout product. We focus on intuitive
                <br />
                functionality, thoughtful design, and delivering results
                you&apos;ll
                <br />
                be proud to share.
              </p>
              <div className="mt-10">
                <span>Know more about us</span>
              </div>
            </div>
          </div>
          <div className="flex items-end w-1/2  text-end">
            <div className="w-full">
              <h2 className="text-8xl">about us</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
