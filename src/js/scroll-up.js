window.addEventListener('scroll', function () {
  var scrollButton = document.querySelector('.top');
  
  // Перевіряємо, чи заблоковано скрол
  if (document.body.classList.contains('no-scroll')) {
    return; // Якщо скрол заблоковано, зупиняємо виконання
  }
  
  if (window.scrollY > 1000) {
    scrollButton.style.display = 'flex';
  } else {
    scrollButton.style.display = 'none';
  }
});
document.querySelector('.top').addEventListener('click', function () {
  // Тимчасово розблоковуємо скрол
  document.body.classList.remove('no-scroll');

  // Прокручуємо сторінку вгору
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });

  // Знову блокуємо скрол через невеликий час після прокрутки
  setTimeout(() => {
    document.body.classList.add('no-scroll');
  }, 500); // Виставляємо час відповідно до швидкості прокрутки
});