const entranceScene = document.getElementById("entranceScene");
const doorSystem = document.getElementById("doorSystem");
const enterButton = document.getElementById("enterButton");
const blackTransition = document.getElementById("blackTransition");
const roomCanvas = document.getElementById("roomCanvas");

let isEntering = false;

/* 让门底梯形的上边宽度，自动等于门的实际宽度 */
function syncFloorToDoor() {
  const root = document.documentElement;
  const rect = doorSystem.getBoundingClientRect();
  const viewportWidth = window.innerWidth;

  const leftPct = (rect.left / viewportWidth) * 100;
  const rightPct = (rect.right / viewportWidth) * 100;

  root.style.setProperty("--floor-left", `${leftPct}%`);
  root.style.setProperty("--floor-right", `${rightPct}%`);
}

function enterRoom() {
  if (isEntering) return;
  isEntering = true;

  // 1. 门打开
  entranceScene.classList.add("is-opening");

  // 2. 门洞放大后黑屏
  setTimeout(() => {
    blackTransition.classList.add("is-visible");
  }, 1900);

  // 3. 黑屏时切换到空白 room canvas
  setTimeout(() => {
    entranceScene.style.display = "none";
    roomCanvas.classList.add("is-active");
  }, 2450);

  // 4. 黑屏退去，像开灯
  setTimeout(() => {
    blackTransition.classList.remove("is-visible");
  }, 2900);
}

window.addEventListener("load", syncFloorToDoor);
window.addEventListener("resize", syncFloorToDoor);

enterButton.addEventListener("click", enterRoom);
doorSystem.addEventListener("click", enterRoom);
