import Swiper from 'swiper';
import {Scrollbar, Navigation} from 'swiper/modules';

const slider = document.querySelector('[data-swiper="reviews"]');
const buttonNext = document.querySelector('[data-button="next-reviews"]');
const buttonPrev = document.querySelector('[data-button="prev-reviews"]');
const scrollbar = slider.querySelector('[data-scrollbar="reviews"]');

const setSlider = () => new Swiper(slider, {
  modules: [Scrollbar, Navigation],
  keyboard: true,
  spaceBetween: 20,
  scrollbar: {
    el: scrollbar,
    draggable: true,
    dragSize: 392,
  },
  navigation: {
    nextEl: buttonNext,
    prevEl: buttonPrev,
  },
  breakpoints: {
    1440: {
      slidesPerView: 2,
      spaceBetween: 32,
    },
    768: {
      slidesPerView: 'auto',
      spaceBetween: 30,
      scrollbar: {
        dragSize: 324,
      },
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 30,
      scrollbar: {
        enabled: false,
      },
    },
  },
});

const initSliderReviews = () => {
  if (document.body.contains(slider)) {
    setSlider();
  }
};

export {initSliderReviews};
