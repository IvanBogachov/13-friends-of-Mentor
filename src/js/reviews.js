import axios from 'axios';
import Swiper from 'swiper';
import { Navigation, Keyboard, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
axios.defaults.baseURL = 'https://portfolio-js.b.goit.study/api/reviews';

const reviewsList = document.querySelector('.reviews-list');
const swiper = document.querySelector('.swiper').swiper;
const nextBtn = document.querySelector('.s-button-next');
const prevBtn = document.querySelector('.s-button-prev');

const fetchReviews = async () => {
  try {
    const resp = await axios.get('');
    if (resp.data.length === 0) {
      return;
    } else {
      greateReviews(resp.data);
    }
  } catch (err) {
    console.log(err);
  }
};
const swipers = new Swiper('.swiper', {
  direction: 'horizontal',
  navigation: {
    nextEl: '.s-button-next',
    prevEl: '.s-button-prev',
  },
  slidesPerView: 1,
  spaceBetween: 20,
  breakpointsBase: 'container',
});

const greateReviews = info => {
  const reviewsValue = info
    .map(({ author, avatar_url, review }) => {
      return `<li class="reviews-item swiper-slide">
  <img class="reviews-img" src="${avatar_url}" alt="${author}" />
  <h3 class="reviews-name">${author}</h3>
  <p class="reviews-text">${review}</p>
</li>`;
    })
    .join('');
  reviewsList.insertAdjacentHTML('beforeend', reviewsValue);
};

fetchReviews();
