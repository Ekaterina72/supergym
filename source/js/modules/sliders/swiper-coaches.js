import Swiper from '../../vendor/swiper';

const swiperCoaches = new Swiper('.swiper-coaches', {
  loop: true,
  slidesPerView: 4,
  spaceBetween: 40,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

export {swiperCoaches};
