function initSliderGallery() {
  const galleryContainerSelector = '.gallery__slider-container';
  const prevElSelector = '.gallery__slider-btn--prev';
  const nextElSelector = '.gallery__slider-btn--next';
  const galleryEl = document.querySelector(galleryContainerSelector);

  if (galleryEl) {
    const gallerySlider = new Swiper(galleryContainerSelector, {
      slidesPerView: 'auto',
      freeMode: true,
      navigation: {
        nextEl: nextElSelector,
        prevEl: prevElSelector,
      },
    });
  }
}

export {initSliderGallery};
