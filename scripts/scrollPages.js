import { scrollElement } from "/scripts/scrollElement.js";

const SPEED = 4;
const options = { speed: 0, stopOnHover: true, details: '' };

const updateOptions = () => {
  if (document.documentElement.clientWidth <= 768) {
    options.speed = 0;
    options.details = 'reset';
  } else {
    options.speed = SPEED;
    if (options.details === 'reset') {
      options.details = '';
      dispatchEvent(new Event('startLoop'));
    }
  }
}

window.addEventListener('resize', updateOptions);

updateOptions();
scrollElement('#pages', options);
