import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { SplitText } from "gsap/SplitText";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText, DrawSVGPlugin);

export default function animateElements() {
  // ANIMATE ELEMENTS
  gsap.utils.toArray(".slide-up-in").forEach((el) => {
    gsap.from(el, {
      y: 100,
      opacity: 0,
      duration: 1.2,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: el,
        start: "top 100%",
        toggleActions: "play none none none",
      },
    });
  });
  gsap.utils.toArray(".slide-left-in").forEach((el) => {
    gsap.from(el, {
      x: 200,
      opacity: 0,
      duration: 1.2,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: el,
        start: "top bottom",
        toggleActions: "play none none none",
      },
    });
  });
  gsap.utils.toArray(".slide-right-in").forEach((el) => {
    gsap.from(el, {
      x: -200,
      opacity: 0,
      duration: 1.2,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: el,
        start: "top bottom",
        toggleActions: "play none none none",
      },
    });
  });
  gsap.utils.toArray(".slide-down-in").forEach((el) => {
    gsap.from(el, {
      y: -50,
      opacity: 0,
      duration: 1.2,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: el,
        start: "top bottom",
        toggleActions: "play none none none",
      },
    });
  });
  // END ANIMATE ELEMENTS

  // ANIMATE TEXT
  gsap.utils.toArray(".split-text").forEach((el) => {
    let split = SplitText.create(el, { type: "lines" });
    gsap.from(split.lines, {
      yPercent: 120,
      opacity: 0,
      duration: 0.8,
      ease: "power1.inOut",
      stagger: { amount: 0.8 },
      scrollTrigger: {
        trigger: el,
        start: "top bottom",
        toggleActions: "play none none none",
      },
    });
  });
  gsap.utils.toArray(".split-chars").forEach((el) => {
    let split = SplitText.create(el, { type: "chars, words" });
    gsap.from(split.chars, {
      x: 50,
      opacity: 0,
      duration: 0.8,
      ease: "power1.inOut",
      stagger: { amount: 0.8 },
      scrollTrigger: {
        trigger: el,
        start: "top bottom",
        toggleActions: "play none none none",
      },
    });
  });
  // END ANIMATE TEXT

  // ANIMATE SVGS
  gsap.utils.toArray(".draw").forEach((el) => {
    gsap.from(el, {
      drawSVG: "0%",
      duration: 0.8,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: el,
        start: "top bottom",
        toggleActions: "play none none none",
      },
    });
  });
  // END ANIMATE SVGS

  // SMOOTH SCROLL
  const smoother = ScrollSmoother.create({
    smooth: 1.5,
    effects: true,
    smoothTouch: 0.1,
  });

  document.querySelectorAll("a[href^='#']").forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      e.preventDefault();
      let target = document.querySelector(anchor.getAttribute("href"));
      if (target) {
        smoother.scrollTo(target, true, "top 20px");
      }
    });
  });
  // END SMOOTH SCROLL
}
