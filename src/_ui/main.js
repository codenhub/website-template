import animateElements from "./scripts/animateElements.js";
import initMouseTracker from "./scripts/mouseTracker.js";

// LOADER
const loaders = document.querySelectorAll(".loader");
const loaderIndicator = document.getElementById("loader-indicator");

document.addEventListener("DOMContentLoaded", () => {
  // REMOVE LOADER
  loaderIndicator?.remove();
  loaders.forEach((el) => {
    el.classList.add("loaded");
    setTimeout(() => {
      el.remove();
    }, 800);
  });

  // ANIMATE ELEMENTS
  animateElements();

  // INIT MOUSE TRACKER
  initMouseTracker();

  // MAKE IMAGES AND LINKS NOT DRAGGABLE
  document.querySelectorAll("img, a").forEach((img) => {
    img.setAttribute("draggable", "false");
  });
});
