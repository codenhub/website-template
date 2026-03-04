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
