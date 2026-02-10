import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
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

  // COUNTER ANIMATION
  const counters = document.querySelectorAll(".counter");
  ScrollTrigger.create({
    trigger: ".counters",
    start: "top bottom",
    onEnter: () => {
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
});
