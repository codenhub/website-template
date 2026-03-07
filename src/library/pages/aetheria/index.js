import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

document.addEventListener("DOMContentLoaded", () => {
  window.addEventListener("load", () => {
    const loaders = document.querySelectorAll(".loader");
    const loaderIndicator = document.getElementById("loader-indicator");
    loaderIndicator?.remove();
    loaders.forEach((el) => {
      el.classList.add("loaded");
      setTimeout(() => {
        el.remove();
      }, 800);
    });

    const rippleContainer = document.querySelector("#smooth-content");
    let lastRippleTime = 0;
    rippleContainer.addEventListener("mousemove", (e) => {
      const now = Date.now();
      if (now - lastRippleTime < 120) return;
      lastRippleTime = now;
      const rect = rippleContainer.getBoundingClientRect();
      const ring = document.createElement("div");
      ring.style.cssText = `
        position:absolute;
        left:${e.clientX - rect.left}px;
        top:${e.clientY - rect.top}px;
        width:0;height:0;
        border:2px solid currentColor;
        border-radius:50%;
        pointer-events:none;
        transform:translate(-50%,-50%);
        opacity:0.8;
      `;
      ring.className = "text-primary";
      rippleContainer.appendChild(ring);
      ring.animate(
        [
          { width: "0px", height: "0px", opacity: 0.8 },
          { width: "120px", height: "120px", opacity: 0 },
        ],
        { duration: 800, easing: "ease-out", fill: "forwards" },
      );
      setTimeout(() => ring.remove(), 850);
    });

    gsap.utils.toArray(".split-text").forEach((el) => {
      const split = SplitText.create(el, { type: "lines", mask: "lines" });
      gsap.from(split.lines, {
        opacity: 0,
        y: 20,
        filter: "blur(10px)",
        duration: 0.4,
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
      const split = SplitText.create(el, { type: "chars, words" });
      gsap.from(split.chars, {
        opacity: 0,
        y: 20,
        filter: "blur(10px)",
        duration: 0.4,
        ease: "power1.inOut",
        stagger: { amount: 0.4 },
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          toggleActions: "play none none none",
        },
      });
    });

    gsap.utils.toArray(".grow-in").forEach((el) => {
      gsap.from(el, {
        opacity: 0,
        scale: 0.4,
        filter: "blur(10px)",
        duration: 0.8,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          toggleActions: "play none none none",
        },
      });
    });

    gsap.utils.toArray(".grow-in-stagger-out").forEach((el) => {
      const items = el.querySelectorAll(".grow-in-stagger-inn");
      gsap.from(items, {
        opacity: 0,
        scale: 0.4,
        filter: "blur(10px)",
        duration: 0.8,
        ease: "power1.inOut",
        stagger: { amount: 0.4 },
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          toggleActions: "play none none none",
        },
      });
    });

    gsap.utils.toArray(".slide-in-stagger-out").forEach((el) => {
      const items = el.querySelectorAll(".slide-in-stagger-inn");
      gsap.from(items, {
        opacity: 0,
        yPercent: 80,
        filter: "blur(10px)",
        duration: 0.8,
        ease: "power1.inOut",
        stagger: { amount: 0.4 },
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          toggleActions: "play none none none",
        },
      });
    });

    gsap.utils.toArray(".slide-up-in").forEach((el) => {
      gsap.from(el, {
        opacity: 0,
        yPercent: 80,
        filter: "blur(10px)",
        duration: 0.8,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          toggleActions: "play none none none",
        },
      });
    });

    gsap.utils.toArray(".slide-up-divider").forEach((el) => {
      gsap.from(el, {
        yPercent: 80,
        duration: 0.8,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          toggleActions: "play none none none",
        },
      });
    });

    gsap.from("#divider-ellipse", {
      scaleY: 0,
      duration: 0.8,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#divider-ellipse",
        start: "top bottom",
        toggleActions: "play none none none",
      },
    });

    gsap.utils.toArray(".slide-left-in").forEach((el) => {
      gsap.from(el, {
        opacity: 0,
        xPercent: 80,
        filter: "blur(10px)",
        duration: 0.8,
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
        opacity: 0,
        xPercent: -80,
        filter: "blur(10px)",
        duration: 0.8,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          toggleActions: "play none none none",
        },
      });
    });

    gsap.from("#steps-line", {
      scaleX: 0,
      transformOrigin: "left",
      duration: 0.8,
      delay: 0.4,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#steps-line",
        start: "top bottom",
        toggleActions: "play none none none",
      },
    });
  });

  const smoother = ScrollSmoother.create({
    wrapper: "#smooth-wrapper",
    content: "#smooth-content",
    smooth: 1.5,
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
});
