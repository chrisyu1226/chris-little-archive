const knockBtn = document.getElementById("knock-btn");
const door = document.getElementById("door");
const doorScreen = document.getElementById("door-screen");
const roomScreen = document.getElementById("room-screen");

const modal = document.getElementById("modal");
const modalContent = document.getElementById("modal-content");
const closeModal = document.getElementById("close-modal");

const modalData = {
  photos: `
    <h2>photo board</h2>
    <p>little pieces of places i wanted to keep.</p>
    <div class="memory-card">campus sky — the sky looked soft today.</div>
    <div class="memory-card">food memory — not fancy, but warm.</div>
    <div class="memory-card">travel soon — busan & fukuoka are waiting.</div>
  `,

  travel: `
    <h2>travel journal</h2>
    <p>places i went, places i miss, and places i am still dreaming about.</p>
    <div class="memory-card">
      <strong>Busan</strong><br>
      soon: sea, sky capsule, small streets, olive young, maybe fried chicken.
    </div>
    <div class="memory-card">
      <strong>Fukuoka</strong><br>
      soon: soft city walks, food, little memories with family.
    </div>
  `,

  playlist: `
    <h2>songs i loved lately</h2>
    <p>songs that sound like they are haunting a tiny room.</p>
    <div class="memory-card">♪ song title — artist</div>
    <div class="memory-card">♪ another song — artist</div>
    <a class="spotify-link" href="https://open.spotify.com/" target="_blank">
      open my spotify ♡
    </a>
  `,

  thoughts: `
    <h2>tiny thoughts</h2>
    <div class="memory-card">some days are just for surviving gently.</div>
    <div class="memory-card">i like keeping small proof that i was happy somewhere.</div>
    <div class="memory-card">a song can make an ordinary night feel haunted.</div>
  `,

  closet: `
    <h2>closet</h2>
    <p>favorite outfits, tiny accessories, and things that feel like me.</p>
    <div class="memory-card">soft cardigan / little skirt / comfortable shoes</div>
    <div class="memory-card">future idea: add ootd photos here.</div>
  `
};

knockBtn.addEventListener("click", () => {
  door.classList.add("open");

  setTimeout(() => {
    doorScreen.classList.add("hidden");
    roomScreen.classList.remove("hidden");
  }, 900);
});

document.querySelectorAll("[data-modal]").forEach((item) => {
  item.addEventListener("click", () => {
    const modalName = item.getAttribute("data-modal");
    modalContent.innerHTML = modalData[modalName];
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
