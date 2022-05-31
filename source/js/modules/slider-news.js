function initSliderNews() {
  const prevElSelector = '.slider__navigation-btn--last';
  const nextElSelector = '.slider__navigation-btn--next';
  const reviewsEl = document.querySelector('.slider--news');

  if (reviewsEl) {
    const newsSlider = new Swiper('.news-swiper', {

      navigation: {
        nextEl: nextElSelector,
        prevEl: prevElSelector,
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 21,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 41,
        },
      },
    });
  }
}

export {initSliderNews};
