/*eslint-disable*/
//@ts-nocheck
export function buildHeroTimeline(
  gsap: any,
  ScrollTrigger: any,
  root: HTMLElement
) {
  const title = root.querySelectorAll(".hero-title");
  const lineOne = root.querySelectorAll(".line-one");
  // const lineTwo = root.querySelectorAll(".line-two");
  const orb = root.querySelectorAll(".orb");
  const scrollDown = root.querySelectorAll(".scroll-down");
  const section = root.querySelectorAll(".section-one");

  gsap.to(title, {
    scrollTrigger: {
      trigger: section,
      toggleActions: "play none none reverse",
      scrub: 1,
      // pin: true,
      start: "top top",
      end: "bottom bottom",
      // markers: true,
    },
    scale: 10,
    opacity: 0,
    duration: 2,
    ease: "power2.out",
  });
  // gsap.to(lineTwo, {
  //   scrollTrigger: {
  //     trigger: section,
  //     toggleActions: "play none none reverse",
  //     scrub: 1,
  //     // pin: true,
  //   },
  //   scale: 10,
  //   rotation: 20,
  //   // rotateY: 20,
  //   transformOrigin: "50% 50%",
  //   opacity: 0,
  //   duration: 3,
  //   ease: "power2.out",
  // });
  gsap.to(lineOne, {
    scrollTrigger: {
      trigger: section,
      toggleActions: "play none none reverse",
      scrub: 1,
      // pin: true,
    },
    rotateY: 20,
    scale: 10,
    opacity: 0,
    duration: 2,
    ease: "power2.out",
  });

  gsap.to(orb, {
    scrollTrigger: {
      trigger: section,
      toggleActions: "play none none reverse",
      scrub: 1,
      // pin: true,
    },
    yPercent: -50,
    opacity: 0,
    scale: 10,
    duration: 2,
    ease: "power2.out",
  });
  gsap.to(scrollDown, {
    scrollTrigger: {
      trigger: section,
      toggleActions: "play none none reverse",
      scrub: 1,
      // pin: true,
    },
    yPercent: -80,
    opacity: 0,
    // scale: 10,
    duration: 1,
    ease: "power2.out",
  });
}
