const coversSection = document.querySelector('.covers');
const coverItems = document.querySelectorAll('.covers-item');

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0,
};

const callback = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      coverItems.forEach(item => {
        item.classList.add('active');
      });
    } else {
      coverItems.forEach(item => {
        item.classList.remove('active');
      });
    }
  });
};

const observer = new IntersectionObserver(callback, options);

observer.observe(coversSection);
