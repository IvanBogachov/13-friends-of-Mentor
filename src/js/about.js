import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
import { Navigation, Keyboard, Mousewheel } from 'swiper/modules';
import Swiper from 'swiper';
import 'swiper/css';
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
  speed: 750,
  navigation: {
    nextEl: '.swiper-button-next',
  },
});
document.querySelector('.swiper-button-next').addEventListener('click', () => {
  swiperAbout.slideNext();
});

// const swiperAbout = new Swiper('.about-swiper', {
//   loop: true,
//   speed: 750,

//   navigation: {
//     nextEl: '.swiper-button-next',
//   },

//   grabCursor: true,
//   simulateTouch: true,
//   keyboard: {
//     enabled: true,
//   },

//   breakpoints: {
//     // when window width is >= 320px
//     320: {
//       slidesPerView: 2,
//       // spaceBetween: 0,
//     },
//     // when window width is >= 768px
//     768: {
//       slidesPerView: 3,
//     },
//     // when window width is >= 1440px
//     1440: {
//       slidesPerView: 6,
//     },
//   },

//   on: {
//     init: function () {
//       const activeIndex = this.activeIndex;
//       this.slides.forEach((slide, index) => {
//         if (index === activeIndex) {
//           slide.classList.add('active-slide');
//         } else {
//           slide.classList.remove('active-slide');
//         }
//       });
//     },
//     slideChange: function () {
//       const activeIndex = this.activeIndex;
//       this.slides.forEach((slide, index) => {
//         if (index === activeIndex) {
//           slide.classList.add('active-slide');
//         } else {
//           slide.classList.remove('active-slide');
//         }
//       });
//     },
//   },
// });
// const nextButton = document.querySelector('.swiper-button-next');
// nextButton.addEventListener('click', () => {
//   swiperAbout.slideNext();
// });
