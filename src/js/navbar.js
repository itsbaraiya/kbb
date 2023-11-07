// navbar icons and logo change
const header = document.querySelector('header');
const logoImage = document.getElementById('logoImage');
const search = document.querySelector('.search img');
const language = document.querySelector('.language img');
const bars = document.querySelector('.menu-trigger');

function updateHeaderStyles() {
  const navLinks = document.querySelectorAll('.nav-link');
  const threshold = 150;

  if (!bars.classList.contains('menu--open')) {
    if (window.innerWidth <= 991) {
  
      header.style.backgroundColor = 'transparent';
      header.style.borderBottom = 'none';
      header.style.boxShadow = 'none';
      bars.classList.remove('active');

      logoImage.src = './assets/images/kbb-Logo.png';
      search.src = './assets/images/searchicon.png';
      language.src = './assets/images/languageicon.png';

      if (window.scrollY > threshold) {
        header.style.backgroundColor = '#fff';
        header.style.borderBottom = '1px solid #000';
        header.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.3)';
        bars.classList.add('active');

        logoImage.src = './assets/images/Logo.png';
        search.src = './assets/images/searchicon1.png';
        language.src = './assets/images/languageicon2.png';
      }
    } else {

      if (window.scrollY > threshold) {
        header.style.backgroundColor = '#fff';
        header.style.borderBottom = '1px solid #000';
        header.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.3)';
        bars.classList.add('active');

        logoImage.src = './assets/images/Logo.png';
        search.src = './assets/images/searchicon1.png';
        language.src = './assets/images/languageicon2.png';
      
        navLinks.forEach(navLink => {
          navLink.style.color = '#003C58';
        });
      } else {
        
        header.style.backgroundColor = 'transparent';
        header.style.borderBottom = 'none';
        header.style.boxShadow = 'none';
        bars.classList.remove('active');

        logoImage.src = './assets/images/kbb-Logo.png';
        search.src = './assets/images/searchicon.png';
        language.src = './assets/images/languageicon.png';
        
        navLinks.forEach(navLink => {
          navLink.style.color = ''; 
        });
      }
    }
  }
}

updateHeaderStyles();

window.addEventListener('scroll', updateHeaderStyles);

window.addEventListener('resize', function () {
  updateHeaderStyles();
});
