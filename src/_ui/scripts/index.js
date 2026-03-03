import animateElements from "./animateElements.js";

window.addEventListener("load", () => {
  animateElements();

  document.querySelectorAll("img, a").forEach((img) => {
    img.setAttribute("draggable", "false");
  });
});
