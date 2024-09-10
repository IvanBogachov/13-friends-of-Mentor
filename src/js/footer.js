import iziToast from 'izitoast'; // Імпорт бібліотеки для спливаючих повідомлень
import 'izitoast/dist/css/iziToast.min.css'; // Імпорт стилів для iziToast
import { showModal } from './modalwindow'; // Імпорт функції для показу модального вікна
import { postComment } from './requests'; // Імпорт функції для відправки POST-запиту з коментарем

// Посилання на елементи DOM
const refs = {
  formFooter: document.querySelector('.js-form-footer'), // Форма в футері сторінки
  sendBtnFooter: document.querySelector('.js-btn-footer'), // Кнопка відправки форми
  emailInput: document.querySelector('.js-email-input'), // Поле для введення email
  emailMessage: document.querySelector('.js-email-message'), // Елемент для відображення повідомлень про валідацію email
};

let wasEmailValid = false; // Змінна для збереження стану валідації email

// Функція для валідації email при втраті фокусу
function validateEmail() {
  const pattern = /^(?!\s*$)\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; // Регулярний вираз для перевірки email
  const email = refs.emailInput.value.trim(); // Отримання введеного email з видаленням пробілів на початку і в кінці

  if (pattern.test(email)) { // Якщо email відповідає шаблону
    refs.emailInput.classList.remove('invalid'); // Видалення класу 'invalid'
    refs.emailInput.classList.add('valid'); // Додавання класу 'valid'
    refs.emailMessage.textContent = 'Success!'; // Відображення повідомлення про успіх
    refs.emailMessage.classList.remove('error'); // Видалення класу 'error'
    refs.emailMessage.classList.add('success'); // Додавання класу 'success'
    wasEmailValid = true; // Встановлення прапорця, що email валідний
  } else if (email === '') { // Якщо поле email порожнє
    refs.emailInput.classList.remove('valid'); // Видалення класу 'valid'
    refs.emailInput.classList.remove('invalid'); // Видалення класу 'invalid'
    refs.emailMessage.classList.remove('success'); // Видалення класу 'success'
    refs.emailMessage.classList.remove('error'); // Видалення класу 'error'
    wasEmailValid = false; // Встановлення прапорця, що email не валідний
  } else { // Якщо email не відповідає шаблону
    refs.emailInput.classList.remove('valid'); // Видалення класу 'valid'
    refs.emailInput.classList.add('invalid'); // Додавання класу 'invalid'
    refs.emailMessage.textContent = 'Invalid email, try again'; // Відображення повідомлення про помилку
    refs.emailMessage.classList.remove('success'); // Видалення класу 'success'
    refs.emailMessage.classList.add('error'); // Додавання класу 'error'
    wasEmailValid = false; // Встановлення прапорця, що email не валідний
  }
}

// Функція для валідації email під час введення
function validateEmailInput() {
  const pattern = /^(?!\s*$)\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; // Регулярний вираз для перевірки email
  const email = refs.emailInput.value.trim(); // Отримання введеного email з видаленням пробілів на початку і в кінці

  if (pattern.test(email)) { // Якщо email відповідає шаблону
    refs.emailInput.classList.remove('invalid'); // Видалення класу 'invalid'
    refs.emailInput.classList.add('valid'); // Додавання класу 'valid'
    refs.emailMessage.textContent = 'Success!'; // Відображення повідомлення про успіх
    refs.emailMessage.classList.remove('error'); // Видалення класу 'error'
    refs.emailMessage.classList.add('success'); // Додавання класу 'success'
    wasEmailValid = true; // Встановлення прапорця, що email валідний
  } else if (email === '') { // Якщо поле email порожнє
    refs.emailInput.classList.remove('valid'); // Видалення класу 'valid'
    refs.emailInput.classList.remove('invalid'); // Видалення класу 'invalid'
    refs.emailMessage.classList.remove('success'); // Видалення класу 'success'
    refs.emailMessage.classList.remove('error'); // Видалення класу 'error'
    wasEmailValid = false; // Встановлення прапорця, що email не валідний
  } else if (wasEmailValid) { // Якщо раніше email був валідним, але тепер невірний
    refs.emailInput.classList.remove('valid'); // Видалення класу 'valid'
    refs.emailInput.classList.add('invalid'); // Додавання класу 'invalid'
    refs.emailMessage.textContent = 'Invalid email, try again'; // Відображення повідомлення про помилку
    refs.emailMessage.classList.remove('success'); // Видалення класу 'success'
    refs.emailMessage.classList.add('error'); // Додавання класу 'error'
  }
}

// Додавання обробника події втрати фокусу на поле email
refs.emailInput.addEventListener('blur', validateEmail);

// Додавання обробника події введення тексту в поле email
refs.emailInput.addEventListener('input', validateEmailInput);

// Обробка події відправки форми
refs.formFooter.addEventListener('submit', async function (e) {
  e.preventDefault(); // Відміна стандартної дії форми (перезавантаження сторінки)

  const formData = new FormData(refs.formFooter); // Створення об'єкта FormData для збирання даних форми
  const email = formData.get('email'); // Отримання значення email з форми
  const comment = formData.get('comment'); // Отримання значення коментаря з форми

  try {
    const response = await postComment({ // Відправка даних на сервер
      email,
      comment,
    });

    if (!response) { // Якщо сервер не повертає відповідь
      throw new Error('Server error'); // Викидає помилку
    }

    refs.formFooter.reset(); // Скидання форми
    refs.emailInput.classList.remove('valid', 'invalid'); // Видалення класів 'valid' та 'invalid'
    refs.emailMessage.textContent = ''; // Очищення повідомлення

    refs.formFooter.reset(); // Повторне скидання форми (зайвий виклик)
    showModal(response); // Відображення модального вікна з відповіддю від сервера
  } catch (error) { // Обробка помилок
    iziToast.show({ // Відображення спливаючого повідомлення про помилку
      title: ':(', // Заголовок повідомлення
      message: `Error: ${error.message}. Please check your input and try again.`, // Текст повідомлення з деталями помилки
    });
  }
});


