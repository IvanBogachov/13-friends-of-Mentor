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

const swiperAbout = new Swiper('.swiper-about', {
  loop: true,
  speed: 750,
  modules: [Navigation, Keyboard, Mousewheel],
  simulateTouch: true,
  grabCursor: true,
  slideActiveClass: 'active',
  navigation: {
    nextEl: '.about-swiper-button',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  spaceBetween: 0,
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    375: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
    1440: {
      slidesPerView: 6,
    },
  },

  on: {
    init: function () {
      let activeSlide = this.slides[this.activeIndex].querySelector(
        '.swiper-slide-item-about'
      );
      activeSlide.classList.add('active-slide');
    },
    slideChange: function () {
      this.slides.forEach(slide => {
        const item = slide.querySelector('.swiper-slide-item-about');
        if (item) {
          item.classList.remove('active-slide');
        }
      });
      let activeSlide = this.slides[this.activeIndex].querySelector(
        '.swiper-slide-item-about'
      );
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
