import Swiper from '../../vendor/swiper';

const swiperCoaches = new Swiper('.coaches__slider', {
  loop: true,
  slidesPerView: 4,
  spaceBetween: 40,
  grabCursor: true,
  resizeObserver: true,

  breakpoints: {
    1366: {
      slidesPerView: 4,
      spaceBetween: 40,
    },

    1200: {
      slidesPerView: 4,
      spaceBetween: 15,
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

const createSlidesTabs = () => {
  const slides = document.querySelectorAll('[data-slide]');
  const slidesObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

      if (entry.isIntersecting) {
        entry.target.setAttribute('tabindex', '0');
      } else {
        entry.target.removeAttribute('tabindex', '0');
      }
    });
  });

  slides.forEach((slide) => slidesObserver.observe(slide));


};

createSlidesTabs();

export {swiperCoaches};
