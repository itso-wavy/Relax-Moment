// * Painter
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const brush = document.querySelector('#brush');

const lineWidth = document.getElementById('lineWidth');
const lineColor = document.getElementById('lineColor');
const colorOptions = Array.from(
  document.getElementsByClassName('color-option')
); // 유사배열을 배열로 가져오기 Array.from()
const destroyBtn = document.getElementById('destroyBtn');
const eraserBtn = document.getElementById('eraserBtn');
const modeBtn = document.getElementById('modeBtn');

CANVAS_WIDTH = 340;
CANVAS_HEIGHT = 250;
canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;

ctx.lineWidth = lineWidth.value;
ctx.strokeStyle = lineColor.value;

let isPainting = false;
let isFilling = false;
let isErasing = false;
let isEraserClicked = false;

function onMove(e) {
  const x = e.offsetX;
  const y = e.offsetY;
  brush.style.left = e.layerX + 'px';
  brush.style.top = e.layerY + 'px';

  if (isPainting && !isErasing) {
    ctx.lineTo(x, y);
    ctx.stroke();
    return;
  }
  if (isErasing && isEraserClicked) {
    ctx.clearRect(x, y, x, y);
    return;
  }
  ctx.moveTo(x, y);
}

function startPainting() {
  isPainting = true;
  isEraserClicked = true;
}

function cancelPainting() {
  isPainting = false;
  isErasing = false;
  isEraserClicked = false;
  ctx.beginPath();
}

function onLineWidthChange(e) {
  ctx.lineWidth = e.target.value;
}

function onLineColorChange(e) {
  ctx.strokeStyle = e.target.value;
}

function onColorClick(e) {
  const colorValue = e.target.dataset.color;
  ctx.strokeStyle = colorValue;
  ctx.fillStyle = colorValue;
  lineColor.value = colorValue;
}

function onModeClick() {
  isErasing = false;
  if (isFilling) {
    isFilling = false;
    modeBtn.innerText = 'Fill';
  } else {
    isFilling = true;
    modeBtn.innerText = 'Draw';
  }
}

function onCanvasClick() {
  if (isFilling) {
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  }
}

function onDestroyClick() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  isFilling = false;
  modeBtn.innerText = 'Fill';
}

function onEraserClick() {
  isErasing = true;
  isFilling = false;
  modeBtn.innerText = 'Fill';
}

canvas.addEventListener('mousemove', onMove)
canvas.addEventListener('mousedown', startPainting);
canvas.addEventListener('mouseup', cancelPainting);
canvas.addEventListener('mouseleave', cancelPainting);

canvas.addEventListener('click', onCanvasClick);
lineWidth.addEventListener('change', onLineWidthChange);
lineColor.addEventListener('change', onLineColorChange);
colorOptions.forEach((color) => color.addEventListener('click', onColorClick));
modeBtn.addEventListener('click', onModeClick);
destroyBtn.addEventListener('click', onDestroyClick);
eraserBtn.addEventListener('click', onEraserClick);
