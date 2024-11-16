const openPopup = document.getElementById("openPopup");
const closePopup = document.getElementById("closePopup");
const popup = document.getElementById("popup");
const overlay = document.getElementById("overlay");

openPopup.addEventListener("click", () => {
  popup.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

closePopup.addEventListener("click", () => {
  popup.classList.add("hidden");
  overlay.classList.add("hidden");
});