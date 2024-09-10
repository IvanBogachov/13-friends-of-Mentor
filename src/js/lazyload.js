const lazyImages = document.querySelectorAll('.lazy');

const lazyLoad = image => {
  image.src = image.dataset.src; // Завантаження зображення
  image.classList.add('loaded'); // Додаємо клас для плавної анімації
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      lazyLoad(entry.target);
      observer.unobserve(entry.target); // Прибираємо спостереження після завантаження
    }
  });
});

// Додаємо спостереження для кожного зображення
lazyImages.forEach(image => {
  observer.observe(image);
});
