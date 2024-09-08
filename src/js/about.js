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
  loopedSlides: 7,
  speed: 750,
  slidesPerGroup: 1,
  setWrapperSize: true,
  modules: [Navigation, Keyboard, Mousewheel],
  simulateTouch: true,
  grabCursor: true,
  slideActiveClass: 'active',
  navigation: {
    nextEl: '.swiper-button-next',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    375: {
      slidesPerView: 2,
      spaceBetween: 55,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 115,
    },
    1440: {
      slidesPerView: 6,
      spaceBetween: 10,
    },
  },

  on: {
    init: function () {
      const activeIndex = this.activeIndex;
      this.slides.forEach((slide, index) => {
        if (index === activeIndex) {
          slide.classList.add('active-slide');
        } else {
          slide.classList.remove('active-slide');
        }
      });
    },
    slideChange: function () {
      const activeIndex = this.activeIndex;
      this.slides.forEach((slide, index) => {
        if (index === activeIndex) {
          slide.classList.add('active-slide');
        } else {
          slide.classList.remove('active-slide');
        }
      });
    },
  },
});

document.querySelector('.swiper-button-next').addEventListener('click', () => {
  swiperAbout.slideNext();
});
