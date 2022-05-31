const headerMenu = document.querySelector('.header__menu');
const menuBtn = document.querySelector('.header__menu-btn');
const sideMenuBtn = document.querySelector('.header__side-menu-btn');
const sideMenu = document.querySelector('.header__side-menu');
const header = document.querySelector('.header');
const body = document.querySelector('body');

const isTouchDevice = () => {
  let prefixes = ' -webkit- -moz- -o- -ms- '.split(' ');
  const mq = (query) => {
    return window.matchMedia(query).matches;
  };
  if (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
    return true;
  }
  let query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join('');
  return mq(query);
};

const mainMenu = () => {

  const sideMenuTouch = () => {
    if (sideMenuBtn) {
      if (isTouchDevice() === true && !sideMenuBtn.classList.contains('header__side-menu-btn--touch')) {
        sideMenuBtn.classList.add('header__side-menu-btn--touch');
      } else {
        sideMenuBtn.classList.remove('header__side-menu-btn--touch');
      }
    }
  };

  window.addEventListener('resize', sideMenuTouch());

  if (header && header.classList.contains('header--no-js')) {
    header.classList.remove('header--no-js');
  }
  if (header && body) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 100) {
        header.classList.add('header--top');
      } else {
        header.classList.remove('header--top');
      }
    });
    if (headerMenu && menuBtn) {
      if (headerMenu.classList.contains('header__menu--no-js')) {
        headerMenu.classList.remove('header__menu--no-js');
        headerMenu.classList.add('header__menu--js');
        headerMenu.classList.add('header__menu--close');
      }
      menuBtn.addEventListener('click', () => {
        if (!headerMenu.classList.contains('header__menu--close')) {
          headerMenu.classList.add('header__menu--close');
          header.classList.remove('header--overflow');
          body.classList.remove('body--overflow');
        } else {
          headerMenu.classList.remove('header__menu--close');
          header.classList.add('header--overflow');
          body.classList.add('body--overflow');
        }
      });
    }
    if (sideMenuBtn && sideMenu) {
      if (!sideMenu.classList.contains('header__side-menu--close')) {
        sideMenu.classList.add('header__side-menu--close');
      }
      sideMenuBtn.addEventListener('click', () => {
        if (!sideMenu.classList.contains('header__side-menu--close')) {
          sideMenu.classList.add('header__side-menu--close');
        } else {
          sideMenu.classList.remove('header__side-menu--close');
        }
      });
    }
  }
};

export {mainMenu};
