/*eslint-disable*/
//@ts-nocheck
export function sectionTwoTimeline(
  gsap: any,
  ScrollTrigger: any,
  root: HTMLElement
) {
  const section = root.querySelectorAll(".section-two");
  const know = root.querySelectorAll(".know");

  gsap.from(know, {
    scrollTrigger: {
      trigger: section,
      toggleActions: "play none none reverse",
      scrub: 1,
      pin: true,
      //   markers: true,
      start: "center center",
      end: "bottom center",
    },
    x: 600,
    opacity: 0,
    // duration: 1,
    // ease: "power2.out",
  });
}
