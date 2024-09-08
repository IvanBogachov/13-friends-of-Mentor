import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
import { Navigation, Keyboard, Mousewheel } from 'swiper/modules';
import Swiper from 'swiper';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// ACCORDION
const accordionAbout = new Accordion('.accordion-container', {
  duration: 700,
  showMultiple: true,
});
accordionAbout.open(0);

// SWIPER

const swiperAbout = new Swiper('.swiper', {
  loop: true,
  slidesPerGroup: 1,
  setWrapperSize: true,
  modules: [Navigation, Keyboard, Mousewheel],
  simulateTouch: true,
  grabCursor: true,
  slideActiveClass: 'active',
  navigation: {
    nextEl: '.about-swiper-button',
  },
  // mousewheel: {
  //   invert: true,
  // },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    375: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
    1440: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
  },

  on: {
    init: function () {
      // Получаем индекс активного слайда при инициализации
      let activeSlide =
        this.slides[this.activeIndex].querySelector('.swiper-slide-item');
      activeSlide.classList.add('active-slide');
    },
    slideChange: function () {
      // Убираем класс с предыдущего активного слайда
      this.slides.forEach(slide => {
        const item = slide.querySelector('.swiper-slide-item');
        if (item) {
          item.classList.remove('active-slide');
        }
      });
      // Добавляем класс к новому активному слайду
      let activeSlide =
        this.slides[this.activeIndex].querySelector('.swiper-slide-item');
      if (activeSlide) {
        activeSlide.classList.add('active-slide');
      }
    },
  },
});

document
  .querySelector('.swiper-button-next-about')
  .addEventListener('click', () => {
    swiperAbout.slideNext();
  });
