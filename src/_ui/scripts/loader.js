const loaderLeft = document.querySelector(".loader.left");
const loaderRight = document.querySelector(".loader.right");

document.addEventListener("DOMContentLoaded", () => {
  loaderLeft.classList.add("loaded");
  loaderRight.classList.add("loaded");
  setTimeout(() => {
    loaderLeft.remove();
    loaderRight.remove();
  }, 800);
});
