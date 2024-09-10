import Swiper from 'swiper';
import { Navigation, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiper = new Swiper('.swiper', {
    slidesPerView: 'auto',
    spaceBetween: 0,

    centerInsufficientSlides: true,
    centeredSlides: false,
    centeredSlidesBounds: false,
    watchSlidesVisibility: true,

    modules: [Navigation, Keyboard],
    navigation: {
        nextEl: '.project-swiper-button-next',
        prevEl: '.project-swiper-button-prev',
    },
    keyboard: {
    enabled: true,
    onlyInViewport: true,
    },
    breakpoints: {
    768: {
      slidesPerView: 1,
      spaceBetween: 25,
    },
    1440: {
      slidesPerView: 1,
      spaceBetween: 35,
    },
  },
});


