var overlay = document.querySelector(".modal-overlay");

xxx.addEventListener("click", function (event) {
  event.preventDefault();
  // Появление попапа yyy при нажатии на элемент xxx
  yyy.classList.add("modal-feedback-show");
  overlay.classList.add("modal-overlay-show");
}
