const loaders = document.querySelectorAll(".loader");
const loaderIndicator = document.getElementById("loader-indicator");

document.addEventListener("DOMContentLoaded", () => {
  loaderIndicator?.remove();
  loaders.forEach((el) => {
    el.classList.add("loaded");
    setTimeout(() => {
      el.remove();
    }, 800);
  });
});
