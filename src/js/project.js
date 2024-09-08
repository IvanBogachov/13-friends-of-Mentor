import Swiper from 'swiper';
import { Navigation, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    slidesPerView: '1',
    spaceBetween: 0,
    modules: [Navigation, Keyboard],
    navigation: {
        nextEl: '.project-swiper-button-next',
        prevEl: '.project-swiper-button-prev',
    },
});


