import Swiper from 'swiper';
import {Grid, Navigation, Pagination} from 'swiper/modules';

const slider = document.querySelector('[data-swiper="news"]');
const buttonNext = slider.querySelector('[data-button="next-news"]');
const buttonPrev = slider.querySelector('[data-button="prev-news"]');
const pagination = slider.querySelector('[data-button="news-pagination"]');

const setSlider = () => new Swiper(slider, {
  modules: [Grid, Navigation, Pagination],
  pagination: {
    el: pagination,
    clickable: true,
    dynamicBullets: true,
    dynamicMainBullets: 2,
    renderBullet: function (index, className) {
      return `<span class="${className}">${index + 1}</span>`;
    },
  },
  navigation: {
    nextEl: buttonNext,
    prevEl: buttonPrev,
  },
  breakpoints: {
    1440: {
      slidesPerView: 'auto',
      spaceBetween: 32,
      grid: {
        rows: 1,
      },
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
      grid: {
        rows: 2,
      },
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
      grid: {
        rows: 2,
      },
    },
  },
});

const initSliderNews = () => {
  if (document.body.contains(slider)) {
    setSlider();
  }
};

export {initSliderNews};
