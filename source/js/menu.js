var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function () {
  if (!navToggle.classList.contains('main-nav--closed')) {
    navToggle.classList.add('main-nav--closed');
    navToggle.classList.remove('main-nav--opened');
  } else {
    navToggle.classList.remove('main-nav--closed');
    navToggle.classList.add('main-nav--opened');
  }
})
