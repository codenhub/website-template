import "./scripts/loader.js";
import animateElements from "./scripts/animateElements.js";
import initMouseTracker from "./scripts/mouseTracker.js";

document.addEventListener("DOMContentLoaded", () => {
  // ANIMATE ELEMENTS
  animateElements();

  // INIT MOUSE TRACKER
  initMouseTracker();

  // MAKE IMAGES NOT DRAGGABLE
  document.querySelectorAll("img").forEach((img) => {
    img.setAttribute("draggable", "false");
  });
});
