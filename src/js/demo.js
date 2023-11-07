//
// demo.js
//


import LazyLoad from 'vanilla-lazyload';

new LazyLoad({
  callback_loaded: (element) => {
    console.log(`Image loaded: ${element.getAttribute('data-src')}`);
  },
});

// Menu toggle
const menuTrigger = document.getElementById('menuTrigger');
const $navbar = document.querySelector('.nav-bar');
const logoImage = document.getElementById('logoImage');
const search = document.querySelector('.search img');
const language = document.querySelector('.language img');
const bars = document.querySelector('.menu-trigger');
const dropdownArrows = document.querySelectorAll('.dropdown-arrow');


function updateIcons() {
  if (window.innerWidth < 992 && $navbar.classList.contains('menu--open')) {
    logoImage.src = './assets/images/Logo.png';
    search.src = './assets/images/searchicon1.png';
    language.src = './assets/images/languageicon2.png';
    bars.classList.add('active');
  } else {
    if (!window.scrollY > 150) {
      logoImage.src = './assets/images/kbb-Logo.png';
      search.src = './assets/images/searchicon.png';
      language.src = './assets/images/languageicon.png';
      bars.classList.remove('active');
    }
    if(window.scrollY < 150)
     {
      logoImage.src = './assets/images/kbb-Logo.png';
      search.src = './assets/images/searchicon.png';
      language.src = './assets/images/languageicon.png';
      bars.classList.remove('active');
    }
  }
}

updateIcons();

window.addEventListener('resize', function () {
  updateIcons();
});

if (menuTrigger) {
  menuTrigger.addEventListener('click', () => {
    menuTrigger.classList.toggle('menu--open');
    $navbar.classList.toggle('menu--open');
    updateIcons();
    
    if (!$navbar.classList.contains('menu--open')) {
      document.querySelectorAll('.dropdown-content').forEach((item) => {
        item.style.display = 'none';
      });

      dropdownArrows.forEach((arrow) => {
        arrow.classList.remove('active');
      });
    }
  });
}
