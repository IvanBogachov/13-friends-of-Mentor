const refs = {
  closeModalBtn: document.querySelector('.btnCloseModal'),
  modal: document.querySelector('.modal'),
  titleModal: document.querySelector('.modal-title'),
  textModal: document.querySelector('.modal-text'),
};

function closeModal() {
  refs.modal.classList.remove('is-open');
  removeEventListeners();
  
  // Розблоковуємо скрол і повертаємо початкову позицію
  removeNoScroll();
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
  addEventListeners();
  
  // Блокуємо скрол і фіксуємо поточну позицію
  addNoScroll();
}

let scrollPosition = 0;

function addNoScroll() {
  // Зберігаємо поточну позицію скролу
  scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

  // Встановлюємо клас для блокування скролу
  document.body.classList.add('no-scroll');
  document.documentElement.classList.add('no-scroll');

  // Фіксуємо сторінку на поточній позиції
  document.body.style.position = 'fixed';
  document.body.style.top = `-${scrollPosition}px`;
}

function removeNoScroll() {
  // Видаляємо клас для блокування скролу
  document.body.classList.remove('no-scroll');
  document.documentElement.classList.remove('no-scroll');

  // Відновлюємо нормальне положення сторінки
  document.body.style.position = '';
  document.body.style.top = '';

  // Відновлюємо початкову позицію скролу
  window.scrollTo(0, scrollPosition);
}

