import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

document.addEventListener("DOMContentLoaded", () => {
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
  });
});
