document.addEventListener('DOMContentLoaded', function() {
    const openModalBtn = document.querySelector('.js-btn-footer');
    const backdrop = document.querySelector('.backdrop');
    const closeModalBtn = document.querySelector('.btnCloseModal');

    // Функція для відкриття модального вікна
    function openModal() {
        backdrop.style.display = 'flex';
        document.addEventListener('keydown', handleEscKey);
    }

    // Функція для закриття модального вікна
    function closeModal() {
        backdrop.style.display = 'none';
        document.removeEventListener('keydown', handleEscKey);
    }

    // Функція для обробки натискання клавіші Esc
    function handleEscKey(event) {
        if (event.key === 'Escape' || event.key === 'Esc') {
            closeModal();
        }
    }

    // Додати слухач подій на кнопку відкриття модального вікна
    openModalBtn.addEventListener('click', function(event) {
        event.preventDefault(); // Запобігти стандартній поведінці кнопки submit
        openModal();
    });

    // Додати слухач подій на кнопку закриття модального вікна
    closeModalBtn.addEventListener('click', function() {
        closeModal();
    });

    // Закриття модального вікна при натисканні за межами модального вікна
    backdrop.addEventListener('click', function(event) {
        if (event.target === backdrop) {
            closeModal();
        }
    });
});


// document.addEventListener('DOMContentLoaded', function() {
//     const openModalBtn = document.querySelector('.js-btn-footer');
//     const backdrop = document.querySelector('.backdrop');
//     const closeModalBtn = document.querySelector('.btnCloseModal');
//     const form = document.querySelector('.js-form-footer');

//     // Функція для відкриття модального вікна
//     function openModal() {
//         backdrop.style.display = 'flex';
//         document.addEventListener('keydown', handleEscKey);
//     }

//     // Функція для закриття модального вікна
//     function closeModal() {
//         backdrop.style.display = 'none';
//         document.removeEventListener('keydown', handleEscKey);
//     }

//     // Функція для обробки натискання клавіші Esc
//     function handleEscKey(event) {
//         if (event.key === 'Escape' || event.key === 'Esc') {
//             closeModal();
//         }
//     }

//     // Функція для показу сповіщення про помилку
//     function showErrorNotification(message) {
//         iziToast.error({
//             title: 'Error',
//             message: message,
//             position: 'topRight'
//         });
//     }

//     // Функція для обробки форми
//     async function handleSubmit(event) {
//         event.preventDefault(); // Запобігти стандартній поведінці форми

//         const formData = new FormData(form);
        
//         try {
//             const response = await fetch('http://localhost:5173/your-endpoint', {
//                 method: 'POST',
//                 body: formData
//             });

//             if (response.ok) {
//                 const data = await response.json();
//                 openModal(); // Відкриваємо модальне вікно
//                 form.reset(); // Очищаємо форму
//             } else {
//                 const errorData = await response.json();
//                 showErrorNotification(errorData.message || 'Something went wrong. Please try again.');
//             }
//         } catch (error) {
//             showErrorNotification('An unexpected error occurred. Please try again.');
//         }
//     }

//     // Додати слухач подій на кнопку відкриття модального вікна
//     openModalBtn.addEventListener('click', function(event) {
//         handleSubmit(event);
//     });

//     // Додати слухач подій на кнопку закриття модального вікна
//     closeModalBtn.addEventListener('click', function() {
//         closeModal();
//     });

//     // Закриття модального вікна при натисканні за межами модального вікна
//     backdrop.addEventListener('click', function(event) {
//         if (event.target === backdrop) {
//             closeModal();
//         }
//     });
// });

