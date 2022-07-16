const refs = {
  backdrop: document.querySelector(".backdrop"),
  btnOpen: document.querySelector(".button--open-JS"),
  btnClose: document.querySelector(".button--close-JS"),
};

console.log(refs.backdrop);
console.log(refs.btnOpen);

// При натисканні GET TOUCH відкривається модалка
refs.btnOpen.addEventListener("click", toggleModal);

// При натисканні хрестик відкривається модалка
refs.btnClose.addEventListener("click", toggleModal);

// тогл класу backdrop--hidden
function toggleModal() {
  refs.backdrop.classList.toggle("backdrop--hidden");
}
