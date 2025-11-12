import frames from "./frames";

const drawingBox = document.querySelector(".drawing-box") as HTMLDivElement;
let frameIndex = 0;
let start = 0;
let currentTime = 0;
for (let i = 0; i < 16 * 16; i++) {
  const cell = document.createElement("div");
  cell.classList.add("cell");
  cell.id = i.toString();

  drawingBox?.appendChild(cell);
}

const cells = document.querySelectorAll(".cell") as NodeListOf<HTMLDivElement>;
drawingBox.addEventListener("mouseover", startAnimation);

function startAnimation() {
  drawingBox.removeEventListener("mouseover", startAnimation);
  requestAnimationFrame(drawFrames);
}

function drawFrames() {
  const elapsed = currentTime - start;
  if (elapsed > 16) {
    start = currentTime;
    for (let i = 0; i < frames[frameIndex].length; i++) {
      cells[i].style.backgroundColor = `rgb(${frames[frameIndex][i].r}, ${frames[frameIndex][i].g}, ${frames[frameIndex][i].b})`;
    }
    frameIndex = (frameIndex + 1) % frames.length;
  }

  currentTime = requestAnimationFrame(drawFrames);
}
