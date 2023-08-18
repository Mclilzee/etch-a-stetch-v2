import frames from "./frames";

const drawingBox = document.querySelector(".drawing-box") as HTMLDivElement;
let drawInterval: number | undefined;
let frameIndex = 0;

for (let i = 0; i < 16 * 16; i++) {
  const cell = document.createElement("div");
  cell.classList.add("cell");
  cell.id = i.toString();

  drawingBox?.appendChild(cell);
}

const cells = document.querySelectorAll(".cell") as NodeListOf<HTMLDivElement>;

drawingBox.addEventListener("mouseover", () => {
  if (drawInterval === undefined) {
    drawInterval = setInterval(drawFrames, 100);
  }
})

function drawFrames() {
  for (let i = 0; i < frames[frameIndex].length; i++) {
    cells[i].style.backgroundColor = `rgb(${frames[frameIndex][i].r}, ${frames[frameIndex][i].g}, ${frames[frameIndex][i].b})`;
  }

  frameIndex = (frameIndex + 1) % frames.length;
}
