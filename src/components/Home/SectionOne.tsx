/*eslint-disable*/
//@ts-nocheck
"use client";
import { MoveDown } from "lucide-react";
import React, { useRef } from "react";
import Orb from "../ui/Orb";
import { buildHeroTimeline } from "../animations/SectionOne";
import { useScrollTrigger } from "@/hooks/useScrollTrigger";

const SectionOne = () => {
  const scope = useRef<HTMLDivElement>(null);

  useScrollTrigger(scope, (gsap, ScrollTrigger, el) => {
    buildHeroTimeline(gsap, ScrollTrigger, el);
    return () => {};
  });
  return (
    <div
      ref={scope}
      className="bg-[#0d1d2e] scene section-one flex justify-center"
    >
      <div className=" flex justify-center container items-center text-center text-white flex-col relative h-[100dvh]">
        <div className=" ">
          {" "}
          <h1 className="text-2xl hero-title">Welcome to Rohan</h1>
          <h2 className="text-7xl font-bold mt-6 line-one leading-22 ">
            <span className="">We’re here to bring</span>
            <br />
            <span className="">your vision to life.</span>
          </h2>
          <div className="relative ">
            <div className=" left-1/2 orb -translate-x-1/2 absolute w-[800px] h-[800px]  ">
              <Orb
                hoverIntensity={1}
                rotateOnHover={true}
                hue={0}
                forceHoverState={false}
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-16 scroll-down flex flex-col items-center">
          <span>Let&apos;s get to know each other</span>
          <div className="border-2 border-green-400 rounded-full w-10 h-10 mt-6 flex justify-center">
            <div className="-mt-1 animate-bounce">
              <MoveDown size={30} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
