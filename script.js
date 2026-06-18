const doorScene = document.getElementById("doorScene");
const roomScene = document.getElementById("roomScene");
const door = document.getElementById("door");
const knockButton = document.getElementById("knockButton");
const backToDoor = document.getElementById("backToDoor");

const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalContent = document.getElementById("modalContent");
const closeModal = document.getElementById("closeModal");

const interactiveObjects = document.querySelectorAll(".interactive");

knockButton.addEventListener("click", () => {
  door.classList.add("open");
  knockButton.textContent = "opening...";

  setTimeout(() => {
    doorScene.classList.add("hidden");
    roomScene.classList.remove("hidden");
  }, 1100);
});

backToDoor.addEventListener("click", () => {
  roomScene.classList.add("hidden");
  doorScene.classList.remove("hidden");

  door.classList.remove("open");
  knockButton.textContent = "knock knock ୨୧";
});

interactiveObjects.forEach((item) => {
  item.addEventListener("click", () => {
    const title = item.dataset.title;
    const content = item.dataset.content;

    modalTitle.textContent = title;
    modalContent.textContent = content;
    modal.classList.remove("hidden");
  });
});

closeModal.addEventListener("click", () => {
  modal.classList.add("hidden");
});

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.classList.add("hidden");
  }
});
