const entrance = document.querySelector("#entrance");
const room = document.querySelector("#room");
const enterButton = document.querySelector("#enterButton");
const blackTransition = document.querySelector("#blackTransition");

let isEntering = false;

enterButton.addEventListener("click", () => {
  if (isEntering) return;

  isEntering = true;

  // 1. 门打开 + 黑色门洞放大
  entrance.classList.add("entering");

  // 2. 黑色门洞快铺满屏幕时，让全屏黑色遮罩出现
  setTimeout(() => {
    blackTransition.classList.add("show");
  }, 950);

  // 3. 全黑后，隐藏入口页，显示房间页
  setTimeout(() => {
    entrance.style.display = "none";
    room.classList.add("active");
  }, 1600);

  // 4. 房间准备好后，黑色慢慢褪去
  setTimeout(() => {
    blackTransition.classList.remove("show");
  }, 2100);
});
