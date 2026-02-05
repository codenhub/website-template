import animateElements from "./scripts/animateElements.js";
import initMouseTracker from "./scripts/mouseTracker.js";

document.addEventListener("DOMContentLoaded", () => {
  const loaders = document.querySelectorAll(".loader");
  const loaderIndicator = document.getElementById("loader-indicator");
  loaderIndicator?.remove();
  loaders.forEach((el) => {
    el.classList.add("loaded");
    setTimeout(() => {
      el.remove();
    }, 800);
  });

  animateElements();
  initMouseTracker();

  document.querySelectorAll("img, a").forEach((img) => {
    img.setAttribute("draggable", "false");
  });
});
