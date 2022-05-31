function initSliderTeam() {
  const teamContainerSelector = '.team__slider-container';
  const prevElSelector = '.team__slider-btn--prev';
  const nextElSelector = '.team__slider-btn--next';
  const teamEl = document.querySelector(teamContainerSelector);

  if (teamEl) {
    const teamSlider = new Swiper(teamContainerSelector, {
      slidesPerView: 'auto',
      freeMode: true,
      navigation: {
        nextEl: nextElSelector,
        prevEl: prevElSelector,
      },
    });
  }
}

export {initSliderTeam};
