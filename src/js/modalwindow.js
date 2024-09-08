const refs = {
  closeModalBtn: document.querySelector('.btnCloseModal'),
  modal: document.querySelector('.modal'),
  titleModal: document.querySelector('.modal-title'),
  textModal: document.querySelector('.modal-text'),
};

refs.closeModalBtn.addEventListener('click', () => {
  closeModal();
});

window.addEventListener('click', e => {
  if (e.target === refs.modal) {
    closeModal();
  }
});

window.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeModal();
  }
});

export function showModal({ title, message }) {
  refs.titleModal.innerHTML = title;
  refs.textModal.innerHTML = message;
  refs.modal.classList.add('is-open');
}
function closeModal() {
  refs.modal.classList.remove('is-open');
}
