const mouseTracker = document.createElement("div");
mouseTracker.classList.add("mouse-tracker");
document.body.appendChild(mouseTracker);

let targetX = 0;
let targetY = 0;
let currentX = 0;
let currentY = 0;

let moveTimer;
const ease = 0.1;

const cursorMoving = () => {
  mouseTracker.classList.add("moving");

  clearTimeout(moveTimer);
  moveTimer = setTimeout(() => {
    mouseTracker.classList.remove("moving");
  }, 100);
};

// Update target position only (no animation here)
document.addEventListener("mousemove", (e) => {
  targetX = e.clientX;
  targetY = e.clientY;
  cursorMoving();
});

document.addEventListener("scroll", cursorMoving);

function animate() {
  currentX += (targetX - currentX) * ease;
  currentY += (targetY - currentY) * ease;

  mouseTracker.style.left = `${currentX}px`;
  mouseTracker.style.top = `${currentY}px`;

  requestAnimationFrame(animate);
}

// Initialize starting position
currentX = targetX = window.innerWidth / 2;
currentY = targetY = window.innerHeight / 2;

requestAnimationFrame(animate);
