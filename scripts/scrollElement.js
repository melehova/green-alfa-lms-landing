export const scrollElement = (selector, options = {}) => {
  const initSpeed = options.speed || 1;

  const container = document.querySelector(`${selector} .running-line-wrapper`);

  const handleMarquee = () => {
    if (!options.speed) {
      return;
    }
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
      progress += options.speed;

      if (progress >= contentWidth) {
        return handleMarquee();
      }

      container.style.transform = `translateX(${-progress}px)`;
      if (options.speed > 0) {
        return window.requestAnimationFrame(loop);
      }

      if (options.details === 'stop') {
        return;
      }

      if (options.details === 'reset') {
        container.style.transform = '';
        for (let index in contentNodes) {
          return index && contentNodes[index].remove();
        }
      }
    }
    loop();
    return loop;
  };

  let loop = handleMarquee();

  const handleMouseOver = () => {
    options.speed = 0;
  };

  const handleMouseOut = () => {
    options.details = 'stop';
    options.speed = initSpeed;
    loop();
  };

  const handleStartLoop = () => {
    loop = handleMarquee();
  }

  if (options.stopOnHover) {
    container.addEventListener('mouseover', handleMouseOver);
    container.addEventListener('mouseout', handleMouseOut);
  }

  addEventListener('startLoop', handleStartLoop)
}
