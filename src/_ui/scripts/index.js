import animateElements from "./animateElements.js";

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

  animateElements();

  document.querySelectorAll("img, a").forEach((img) => {
    img.setAttribute("draggable", "false");
  });
});
