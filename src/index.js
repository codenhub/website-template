import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DotLottie } from "@lottiefiles/dotlottie-web";

gsap.registerPlugin(ScrollTrigger);

// SVG ANIMATIONS
document.querySelectorAll("canvas.svg-animation").forEach((canvas) => {
  new DotLottie({
    autoplay: true,
    loop: true,
    canvas: canvas,
    src: canvas.dataset.source,
  });
});

document.addEventListener("DOMContentLoaded", () => {
  // HIDE/SHOW HEADER ON SCROLL
  let lastScrollY = window.scrollY;
  document.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;
    const direction = currentScrollY > lastScrollY ? "down" : "up";
    if (direction === "down") {
      document.querySelector("header").classList.add("-translate-y-1/1");
      document.querySelector("header").classList.remove("border-b");
    }
    if (direction === "up") {
      document.querySelector("header").classList.remove("-translate-y-1/1");
      // ADD SHADOW IF NOT TOP
      document
        .querySelector("header")
        .classList.toggle("border-b", currentScrollY > 0);
    }
    lastScrollY = currentScrollY;
  });
  // END HIDE/SHOW HEADER ON SCROLL

  // FAQ TOGGLE
  const questions = document.querySelectorAll(".faq-item");
  questions.forEach((item) => {
    item.addEventListener("click", () => {
      questions.forEach((el) => {
        if (el !== item) el.classList.remove("active"); // CLOSE ALL OTHERS
      });
      item.classList.toggle("active");
    });
  });
  // END FAQ TOGGLE

  // COUNTER ANIMATION
  const counters = document.querySelectorAll(".counter");
  ScrollTrigger.create({
    trigger: ".counters",
    start: "top bottom",
    onEnter: () => {
      console.log("entered");
      counters.forEach((counter) => {
        const updateCount = () => {
          const target = +counter.getAttribute("data-target");
          const count = +counter.innerText;
          const increment = target / 200;
          if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            requestAnimationFrame(updateCount);
          } else {
            counter.innerText = target;
          }
        };
        updateCount();
      });
    },
  });
  // END COUNTER ANIMATION

  // ELEMENTS ANIMATIONS
  gsap.from("footer", {
    y: 100,
    duration: 0.8,
    ease: "power1.inOut",
    scrollTrigger: {
      trigger: "footer",
      start: "top 120%",
      end: "bottom bottom",
      scrub: true,
      toggleActions: "play none none none",
    },
  });
  // END ELEMENTS ANIMATIONS
});
