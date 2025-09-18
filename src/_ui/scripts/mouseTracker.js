export default function initMouseTracker() {
  const mouseTracker = document.createElement("div");
  mouseTracker.classList.add("mouse-tracker");
  document.body.appendChild(mouseTracker);

  let mouseX = 0;
  let mouseY = 0;
  let cursorX = 0;
  let cursorY = 0;
  let moveTimer;

  const updateCursor = () => {
    cursorX += (mouseX - cursorX) * 0.15;
    cursorY += (mouseY - cursorY) * 0.15;

    mouseTracker.style.left = cursorX + "px";
    mouseTracker.style.top = cursorY + "px";

    requestAnimationFrame(updateCursor);
  };

  const cursorMoving = () => {
    mouseTracker.classList.add("moving");

    clearTimeout(moveTimer);
    moveTimer = setTimeout(() => {
      mouseTracker.classList.remove("moving");
    }, 100);
  };

  updateCursor();

  document.addEventListener("mousemove", async (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    cursorMoving();
  });

  document.addEventListener("scroll", cursorMoving);

  document.addEventListener("mouseleave", () => {
    mouseTracker.style.opacity = "0";
  });

  document.addEventListener("mouseenter", () => {
    mouseTracker.style.opacity = "1";
  });
}
