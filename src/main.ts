import { video, Frame } from "./frames";

const canvas = document.getElementById("board-canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

let frameIndex = 0;
let start = 0;
let currentTime = 0;

const BOARD_WIDTH = 600;
const BOARD_HEIGHT = 600;
const ROWS = 16;
const COLUMNS = 16;
const WIDTH = Math.floor(BOARD_WIDTH / ROWS);
const HEIGHT = Math.floor(BOARD_HEIGHT / COLUMNS);
const FRAME_SPEED = 8;


for (let i = 0; i < ROWS; i++) {
  for (let j = 0; j < COLUMNS; j++) {
    const x = WIDTH * j;
    ctx.strokeRect(x, i * HEIGHT, WIDTH, HEIGHT);
  }
}

canvas.addEventListener("mouseover", startAnimation);

function startAnimation() {
  canvas.removeEventListener("mouseover", startAnimation);
  requestAnimationFrame(drawFrames);
}

function drawFrames() {
  const elapsed = currentTime - start;
  if (elapsed > FRAME_SPEED) {
    start = currentTime;
    renderBoard(video[frameIndex]);
    frameIndex = (frameIndex + 1) % video.length;
  }

  currentTime = requestAnimationFrame(drawFrames);
}

function renderBoard(frames: Frame[]) {
  for (let i = 0; i < ROWS; i++) {
    for (let j = 0; j < COLUMNS; j++) {
      const x = WIDTH * j;
      const frame = frames[i + j * COLUMNS];
      ctx.strokeRect(x, i * HEIGHT, WIDTH, HEIGHT);
      ctx.fillStyle = `rgb(${frame.r}, ${frame.g}, ${frame.b})`;
      ctx.fillRect(x, i * HEIGHT, WIDTH, HEIGHT);
    }
  }
}
