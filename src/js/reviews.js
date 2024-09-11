import axios from 'axios';
import Swiper from 'swiper';
import iziToast from 'izitoast';
import { Navigation, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
axios.defaults.baseURL = 'https://portfolio-js.b.goit.study/api/reviews';

const reviewsList = document.querySelector('.reviews-list');

const fetchReviews = async () => {
  try {
    const resp = await axios.get('');
    if (resp.data.length === 0) {
      return;
    } else {
      greateReviews(resp.data);
    }
  } catch (err) {
    reviewsErr();
    iziToast.error({
      message: 'Reviews not found',
      position: 'topRight',
      messageSize: 20,
    });
  }
};
const reviewsErrBlock = `<li class="reviews-err" id="reviews-err">
          <p class="reviews-err-text">Not found</p>
        </li>`;
const greateReviews = info => {
  const reviewsValue = info
    .map(({ author, avatar_url, review }) => {
      return `<li class="reviews-item swiper-slide">
  <img class="reviews-img" loading="lazy" src="${avatar_url}" alt="${author}" />
  <h3 class="reviews-name">${author}</h3>
  <p class="reviews-text">${review}</p>
</li>`;
    })
    .join('');
  reviewsList.insertAdjacentHTML('beforeend', reviewsValue);
};
const reviewsErr = () => {
  reviewsList.insertAdjacentHTML('beforeend', reviewsErrBlock);
};
const swiperOption = new Swiper('.reviews-swiper', {
  direction: 'horizontal',
  slidesPerView: 'auto',
  modules: [Navigation, Keyboard],
  navigation: {
    nextEl: '.s-button-next',
    prevEl: '.s-button-prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    1440: {
      slidesPerView: 4,
      spaceBetween: 16,
    },
  },
});
fetchReviews();
