const refs = {
  backdrop: document.querySelector(".backdrop"),
  btnOpen: document.querySelector(".button--open-JS"),
  btnClose: document.querySelector(".button--close-JS"),
};

console.log(refs.backdrop);
console.log(refs.btnOpen);

// При натисканні GET TOUCH відкривається модалка
refs.btnOpen.addEventListener("click", onOpenModal);

// При натисканні хрестик відкривається модалка
refs.btnClose.addEventListener("click", onCloseModal);

// тогл класу backdrop--hidden, альтернатива onOpenModal/onCloseModal
// function toggleModal() {
//   refs.backdrop.classList.toggle("backdrop--hidden");
// }

// клік по бекдропу, закриває модалку
refs.backdrop.addEventListener("click", onBackdropClick);

// ця функція вішається на бекдроп, якщо бекдроп === місце кліку, то закривай модалку
function onBackdropClick(event) {
  if (event.currentTarget === event.target) {
    onCloseModal();
  }
}

// Функція відкривання модалки. Якщо модалка відкрита, слухаємо подію
function onOpenModal() {
  window.addEventListener("keydown", onEscKeyPress);
  refs.backdrop.classList.remove("backdrop--hidden");
}

// Коли модалка закривається, знімаємо слухача подій
function onCloseModal() {
  window.removeEventListener("keydown", onEscKeyPress);
  refs.backdrop.classList.add("backdrop--hidden");
}

// Тільки при натисканні Escape закривається модалка
function onEscKeyPress(event) {
  const ESC_KEY = event.code === "Escape";

  if (ESC_KEY) {
    onCloseModal();
  }
}
