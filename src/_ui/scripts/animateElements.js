import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

export default function animateElements() {
  // ANIMATE ELEMENTS
  gsap.utils.toArray(".anim-in").forEach((el) => {
    gsap.from(el, {
      y: 100,
      opacity: 0,
      duration: 0.8,
      delay: 0.8,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: el,
        start: "top bottom",
        toggleActions: "play none none none",
      },
    });
  });
  gsap.utils.toArray(".anim-left-in").forEach((el) => {
    gsap.from(el, {
      x: 200,
      y: 100,
      rotate: 30,
      opacity: 0,
      duration: 0.8,
      delay: 0.8,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: el,
        start: "top bottom",
        toggleActions: "play none none none",
      },
    });
  });
  gsap.utils.toArray(".anim-down-in").forEach((el) => {
    gsap.from(el, {
      y: -100,
      opacity: 0,
      duration: 0.8,
      delay: 0.8,
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
  gsap.utils.toArray(".anim-text-in").forEach((el) => {
    let split = SplitText.create(el, { type: "words" });
    gsap.from(split.words, {
      y: 100,
      rotate: 30,
      opacity: 0,
      duration: 0.8,
      delay: 0.8,
      ease: "power1.inOut",
      stagger: { amount: 0.4 },
      scrollTrigger: {
        trigger: el,
        start: "top bottom",
        toggleActions: "play none none none",
      },
    });
  });
  gsap.utils.toArray(".anim-text-chars-in").forEach((el) => {
    let split = SplitText.create(el, { type: "chars" });
    gsap.from(split.chars, {
      y: 100,
      rotate: 30,
      opacity: 0,
      duration: 0.8,
      delay: 0.8,
      ease: "power1.inOut",
      stagger: { amount: 0.4 },
      scrollTrigger: {
        trigger: el,
        start: "top bottom",
        toggleActions: "play none none none",
      },
    });
  });
  // END ANIMATE TEXT

  // SMOOTH SCROLL
  ScrollSmoother.create({
    smooth: 1,
    effects: true,
    smoothTouch: 0.1,
  });
}
