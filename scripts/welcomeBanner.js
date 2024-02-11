const setBannerHeight = () => {
  const headerStrokeWidth = getComputedStyle(document.documentElement).getPropertyValue('--header-stroke-width');

  const infoHeight = document.querySelector('section#block-welcome section#info').offsetHeight;
  const headerHeight = document.querySelector('header').offsetHeight;

  document.querySelector('#block-welcome #banner').style.height = `calc(${infoHeight + headerHeight}px - ${headerStrokeWidth})`
}

setBannerHeight();

window.addEventListener('resize', setBannerHeight);
