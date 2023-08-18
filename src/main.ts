import frames from "./frames";

const drawingBox = document.querySelector(".drawing-box") as HTMLDivElement;
let frameIndex = 0;

for (let i = 0; i < 16 * 16; i++) {
  const cell = document.createElement("div");
  cell.classList.add("cell");
  cell.id = i.toString();

  drawingBox?.appendChild(cell);
}

const cells = document.querySelectorAll(".cell") as NodeListOf<HTMLDivElement>;

drawingBox.addEventListener("mouseover", setDrawInterval);

function setDrawInterval() {
  setInterval(drawFrames, 100);
  drawingBox.removeEventListener("mouseover", setDrawInterval);
}

function drawFrames() {
  for (let i = 0; i < frames[frameIndex].length; i++) {
    cells[i].style.backgroundColor = `rgb(${frames[frameIndex][i].r}, ${frames[frameIndex][i].g}, ${frames[frameIndex][i].b})`;
  }

  frameIndex = (frameIndex + 1) % frames.length;
}
