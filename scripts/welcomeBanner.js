const setBannerHeight = () => {
  const banner = document.querySelector('#block-welcome #banner');
  const header = document.querySelector('header');
  const headerStrokeWidth = getComputedStyle(header).getPropertyValue('border-top-width');
  const headerHeight = header.offsetHeight;
  const clientWidth = document.documentElement.clientWidth;

  let height = 0, top = 0;

  if (clientWidth <= 768) {
    const infoHeight = document.querySelector('section#block-welcome section#info div#text-info').offsetHeight;
    height = `calc(${infoHeight}px - ${headerStrokeWidth})`;
    top = `calc(${headerStrokeWidth} + ${headerHeight}px)`;
  } else {
    const infoHeight = document.querySelector('section#block-welcome section#info').offsetHeight;
    height = `calc(${infoHeight + headerHeight}px - ${headerStrokeWidth})`;
    top = headerStrokeWidth;
  }

  banner.style.height = height;
  banner.style.top = top;
}

setBannerHeight();

window.addEventListener('resize', setBannerHeight);
