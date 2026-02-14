const envelope = document.getElementById("envelope");
const letter = document.getElementById("letter");
const audio = document.querySelector(".player");
const audio2 = document.querySelector(".player2");

const modalYes = document.getElementById("modalYes");
const modalNo = document.getElementById("modalNo");

envelope.addEventListener("click", () => {
  envelope.style.display = "none";
  letter.style.display = "block";
});

function sayYes() {
  modalYes.style.display = "flex";
    audio.play();
  if (navigator.vibrate) {
    navigator.vibrate(150);
  }
}

function sayNo() {
  modalNo.style.display = "flex";
  audio2.play();
}

function closeYes() {
  modalYes.style.display = "none";
  if (audio) {
    audio.pause();
    audio.currentTime = 0;
  }
}

function closeNo() {
  modalNo.style.display = "none";
  if (audio2) {
    audio2.pause();
    audio2.currentTime = 0;
  }
}