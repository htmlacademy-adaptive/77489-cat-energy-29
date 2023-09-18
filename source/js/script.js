let navMain = document.querySelector('.header-navigation');
let navToggle = document.querySelector('.header__toggle');

navMain.classList.remove('header-navigation--nojs');
navToggle.classList.remove('header__toggle--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('header-navigation--closed')) {
    navMain.classList.remove('header-navigation--closed');
    navMain.classList.add('header-navigation--opened');
  } else {
    navMain.classList.add('header-navigation--closed');
    navMain.classList.remove('header-navigation--opened');
  }

  if (navToogle.classList.contains('header__toggle--closed')) {
    navToogle.classList.remove('header__toggle--closed');
    navToogle.classList.add('header__toggle--opened');
  } else {
    navToogle.classList.add('header__toggle--closed');
    navToogle.classList.remove('header__toggle--opened');
  }
});
