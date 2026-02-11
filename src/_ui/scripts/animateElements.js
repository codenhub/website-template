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
      yPercent: 100,
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
      yPercent: -100,
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

  // ANIMATE TEXT
  document.fonts.ready.then(() => {
    const createAccessibleSplit = (el, options) => {
      const originalContent = el.innerHTML;
      const originalText = el.innerText || el.textContent;

      el.innerHTML = "";

      const srSpan = document.createElement("span");
      srSpan.classList.add("sr-only");
      srSpan.textContent = originalText;
      el.appendChild(srSpan);

      const wrapper = document.createElement("span");
      wrapper.setAttribute("aria-hidden", "true");
      wrapper.innerHTML = originalContent;
      el.appendChild(wrapper);

      return SplitText.create(wrapper, options);
    };

    gsap.utils.toArray(".split-text").forEach((el) => {
      let split = createAccessibleSplit(el, { type: "lines", mask: "lines" });
      gsap.set(split.lines, {
        overflow: "hidden",
      });

      gsap.from(split.lines, {
        yPercent: 100,
        opacity: 0,
        duration: 0.8,
        ease: "power1.inOut",
        stagger: 0.2,
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          toggleActions: "play none none none",
        },
      });
    });

    gsap.utils.toArray(".split-chars").forEach((el) => {
      let split = createAccessibleSplit(el, { type: "chars, words" });

      gsap.from(split.chars, {
        xPercent: 100,
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
  });

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

  // SMOOTH SCROLL
  const smoother = ScrollSmoother.create({
    smooth: 1.5,
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
}
