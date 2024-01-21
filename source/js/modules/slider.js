import Swiper from 'swiper/bundle';

const heroSlider = document.querySelector('[data-swiper="slider"]');
const heroSliderPagination = document.querySelector('[data-button="pagination-slider"]');

const setSliderHero = () => new Swiper(heroSlider, {
  pagination: {
    el: heroSliderPagination,
    clickable: true,
    type: 'bullets',
    bulletElement: 'div',
    bulletClass: 'slider__pagination-bullet',
    bulletActiveClass: 'is-active',
  },
  // autoplay: {
  //   delay: 3000,
  // },
  loop: true,
  breakpoints: {
    1440: {
      allowTouchMove: false,
    },
  },
});

const initSliders = () => {
  if (document.body.contains(heroSlider)) {
    setSliderHero();
  }
};

export {initSliders};
