export const scrollElement = (selector, options = {}) => {
  const { speed: initSpeed = 1, stopOnHover = false } = options;
  let speed = initSpeed;

  const container = document.querySelector(`${selector} .running-line-wrapper`);

  const handleMarquee = () => {
    const contentNodes = [...container.querySelectorAll('.running-line-content')];
    const content = contentNodes.at(-1);

    const contentWidth = content.offsetWidth;
    const pageWidth = document.documentElement.clientWidth;
    const contentCount = contentNodes.length;

    const clonesCount = Math.ceil(pageWidth / (contentWidth * contentCount));

    for (let i = 0; i < clonesCount; i++) {
      container.appendChild(content.cloneNode(true));
    }

    if (contentWidth * contentCount > pageWidth && contentCount > 1) {
      contentNodes[0].remove();
    }

    let progress = 1;

    const loop = () => {
      progress += speed;
      if (progress >= contentWidth) {
        return handleMarquee();
      }

      container.style.transform = `translateX(${-progress}px)`;
      container.style.transform += `skewX(${speed * 0.4}deg)`;
      window.requestAnimationFrame(loop);
    }
    loop();

    if (stopOnHover) {
      container.addEventListener('mouseover', () => {
        speed = 0;
      });

      container.addEventListener('mouseout', () => {
        speed = initSpeed;
      });

      container.addEventListener('scroll', () => {
        // idea
        speed++;
      });
    }
  };

  handleMarquee();
}
