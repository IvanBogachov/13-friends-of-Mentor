const refs = {
  closeModalBtn: document.querySelector('.btnCloseModal'),
  modal: document.querySelector('.modal'),
  titleModal: document.querySelector('.modal-title'),
  textModal: document.querySelector('.modal-text'),
};

function closeModal() {
  refs.modal.classList.remove('is-open');
  removeEventListeners(); // Видаляємо слухачі подій після закриття модального вікна
}

function removeEventListeners() {
  refs.closeModalBtn.removeEventListener('click', handleCloseModal);
  window.removeEventListener('click', handleOutsideClick);
  window.removeEventListener('keydown', handleEscapeKey);
}

function handleCloseModal() {
  closeModal();
}

function handleOutsideClick(e) {
  if (e.target === refs.modal) {
    closeModal();
  }
}

function handleEscapeKey(e) {
  if (e.key === 'Escape') {
    closeModal();
  }
}

function addEventListeners() {
  refs.closeModalBtn.addEventListener('click', handleCloseModal);
  window.addEventListener('click', handleOutsideClick);
  window.addEventListener('keydown', handleEscapeKey);
}

export function showModal({ title, message }) {
  refs.titleModal.innerHTML = title;
  refs.textModal.innerHTML = message;
  refs.modal.classList.add('is-open');
  addEventListeners(); // Додаємо слухачі подій при відкритті модального вікна
}

