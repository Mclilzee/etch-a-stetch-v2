const drawingBox = document.querySelector<HTMLDivElement>(".drawing-box");

for (let i = 0; i < 16; i++) {
  for (let j = 0; j < 16; j++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.id = `${i}${j}`;

    drawingBox?.appendChild(cell);
  }
}
