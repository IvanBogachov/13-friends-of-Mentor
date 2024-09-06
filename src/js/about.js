import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
// import Swiper JS
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';

const swiperBtn = document.querySelector('.swiper-button');

// ACCORDION
const accordionAbout = new Accordion('.accordion-container', {
  duration: 700,
  showMultiple: true,
});
accordionAbout.open(0);

// SWIPER

const swiper = new Swiper('.about-swiper', {
  loop: true,
  slidesPerView: 2,
  navigation: {
    nextEl: '.swiper-button-next',
  },
});
