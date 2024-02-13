for (let icon of document.querySelectorAll('.svg-icon')) {
  icon.style['-webkit-mask-image'] = `url(${icon.attributes['data-icon-name'].nodeValue})`
  icon.style['mask-image'] = `url(${icon.attributes['data-icon-name'].nodeValue})`
}
