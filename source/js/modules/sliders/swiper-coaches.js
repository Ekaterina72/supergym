import Swiper from '../../vendor/swiper';

const swiperCoaches = new Swiper('.coaches__slider', {
  loop: true,
  slidesPerView: 4,
  spaceBetween: 40,
  grabCursor: true,

  breakpoints: {
    1200: {
      slidesPerView: 4,
      spaceBetween: 40,
    },

    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },

    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },

    320: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

export {swiperCoaches};
