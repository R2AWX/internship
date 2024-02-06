import Swiper from 'swiper';
import {Autoplay, Pagination} from 'swiper/modules';

const slider = document.querySelector('[data-swiper="slider"]');
const pagination = slider.querySelector('[data-button="pagination-slider"]');

const setSlider = () => new Swiper(slider, {
  modules: [Autoplay, Pagination],
  pagination: {
    el: pagination,
    clickable: true,
    type: 'bullets',
    bulletElement: 'div',
    bulletClass: 'slider__pagination-bullet',
    bulletActiveClass: 'is-active',
  },
  autoplay: {
    delay: 3000,
  },
  loop: true,
  breakpoints: {
    1440: {
      allowTouchMove: false,
    },
  },
});

const initSliderHero = () => {
  if (document.body.contains(slider)) {
    setSlider();
  }
};

export {initSliderHero};
