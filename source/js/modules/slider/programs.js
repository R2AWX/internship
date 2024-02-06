import Swiper from 'swiper';
import {Scrollbar, Navigation} from 'swiper/modules';

const slider = document.querySelector('[data-swiper="programs"]');
const buttonNext = document.querySelector('[data-button="next-programs"]');
const buttonPrev = document.querySelector('[data-button="prev-programs"]');
const scrollbar = slider.querySelector('[data-scrollbar="programs"]');

const setSlider = () => new Swiper(slider, {
  modules: [Scrollbar, Navigation],
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
      slidesPerView: 3,
      spaceBetween: 32,
      allowTouchMove: false,
    },
    768: {
      spaceBetween: 30,
      slidesPerView: 'auto',
      scrollbar: {
        dragSize: 324,
      },
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 15,
      scrollbar: {
        enabled: false,
      },
    },
  },
});

const initSliderPrograms = () => {
  if (document.body.contains(slider)) {
    setSlider();
  }
};

export {initSliderPrograms};
