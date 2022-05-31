function initSliderReviews() {
  const reviewsContainerSelector = '.reviews__slider-container';
  const prevElSelector = '.reviews__slider-btn--prev';
  const nextElSelector = '.reviews__slider-btn--next';
  const reviewsEl = document.querySelector(reviewsContainerSelector);

  if (reviewsEl) {
    const reviewsSlider = new Swiper(reviewsContainerSelector, {
      slidesPerView: 'auto',
      freeMode: true,
      navigation: {
        nextEl: nextElSelector,
        prevEl: prevElSelector,
      },
    });
  }
}

export {initSliderReviews};
