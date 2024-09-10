import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { showModal } from './modalwindow'; // Імпорт функції для відображення модального вікна
import { postComment } from './requests'; // Імпорт функції для відправки коментаря на сервер

// Об'єкт для зручного доступу до елементів DOM
const refs = {
  formFooter: document.querySelector('.js-form-footer'),
  sendBtnFooter: document.querySelector('.js-btn-footer'),
  emailInput: document.querySelector('.js-email-input'),
};

let wasEmailValid = false; // Змінна для відстеження валідності email

// Функція для перевірки валідності email
function validateEmail() {
  const pattern = /^(?!\s*$)\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  const email = refs.emailInput.value.trim();

  if (pattern.test(email)) {
    // Email валідний
    refs.emailInput.classList.remove('invalid');
    refs.emailInput.classList.add('valid');
    wasEmailValid = true;
  } else if (email === '') {
    // Email порожній
    refs.emailInput.classList.remove('valid');
    refs.emailInput.classList.remove('invalid');
    wasEmailValid = false;
  } else {
    // Email недійсний
    refs.emailInput.classList.remove('valid');
    refs.emailInput.classList.add('invalid');
    wasEmailValid = false;
  }
}

// Функція для перевірки email при введенні
function validateEmailInput() {
  const pattern = /^(?!\s*$)\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  const email = refs.emailInput.value.trim();

  if (pattern.test(email)) {
    // Email валідний
    refs.emailInput.classList.remove('invalid');
    refs.emailInput.classList.add('valid');
    wasEmailValid = true;
  } else if (email === '') {
    // Email порожній
    refs.emailInput.classList.remove('valid');
    refs.emailInput.classList.remove('invalid');
    wasEmailValid = false;
  } else if (wasEmailValid) {
    // Email недійсний, але був валідний раніше
    refs.emailInput.classList.remove('valid');
    refs.emailInput.classList.add('invalid');
  }
}

// Додаємо слухачі подій для поля email
refs.emailInput.addEventListener('blur', validateEmail); // Перевірка при втраті фокусу
refs.emailInput.addEventListener('input', validateEmailInput); // Перевірка при введенні символів

// Додаємо слухач подій на форму для обробки надсилання
refs.formFooter.addEventListener('submit', async function (e) {
  e.preventDefault(); // Запобігає стандартній поведінці форми (перезавантаження сторінки)

  // Збираємо дані з форми
  const formData = new FormData(refs.formFooter);
  const email = formData.get('email');
  const comment = formData.get('comment');

  try {
    // Надсилаємо дані на сервер
    const response = await postComment({
      email,
      comment,
    });

    // Перевірка відповіді сервера
    if (!response) {
      throw new Error('Server error');
    }

    // Очищення форми та показ модального вікна
    refs.formFooter.reset();
    refs.emailInput.classList.remove('valid', 'invalid');
    showModal(response);
  } catch (error) {
    // Показ помилки за допомогою iziToast
    iziToast.show({
      title: ':(',
      message: `Error: ${error.message}. Please check your input and try again.`,
    });
  }
});
