const caruselElem = document.querySelectorAll('.carusel-elem__item');

caruselElem.forEach((el, index) => {
    el.setAttribute('data-index', index)
});