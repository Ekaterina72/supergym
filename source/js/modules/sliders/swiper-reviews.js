import Swiper from '../../vendor/swiper';

const swiperReviews = new Swiper('.reviews__slider', {

  slidesPerView: 1,
  spaceBetween: 100,
  centeredSlides: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

export {swiperReviews};
