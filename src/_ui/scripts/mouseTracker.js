export default function initMouseTracker() {
  const mouseTracker = document.createElement("div");
  mouseTracker.classList.add("mouse-tracker");
  document.body.appendChild(mouseTracker);

  let moveTimer;

  const cursorMoving = () => {
    mouseTracker.classList.add("moving");

    clearTimeout(moveTimer);
    moveTimer = setTimeout(() => {
      mouseTracker.classList.remove("moving");
    }, 100);
  };

  document.addEventListener("mousemove", async (e) => {
    const { clientX, clientY } = e;

    mouseTracker.animate(
      {
        left: `${clientX}px`,
        top: `${clientY}px`,
      },
      { duration: 800, fill: "forwards" },
    );

    cursorMoving();
  });

  document.addEventListener("scroll", cursorMoving);
}
