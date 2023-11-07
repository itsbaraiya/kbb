// dropdown

const dropdownArrows = document.querySelectorAll('.dropdown-arrow');
dropdownArrows.forEach((dropdownArrow) => {
  if (window.innerWidth < 992) {
    dropdownArrow.addEventListener('click', () => {
      const parentNavItem = dropdownArrow.closest('.nav-link');
      const dropdownItem = parentNavItem.querySelector('.dropdown-content');


      document.querySelectorAll('.dropdown-content').forEach((item) => {
        if (item !== dropdownItem) {
          item.style.display = 'none';
        }
      });

      dropdownItem.style.display = (dropdownItem.style.display === 'block') ? 'none' : 'block';


      dropdownArrows.forEach((arrow) => {
        if (arrow !== dropdownArrow) {
          arrow.classList.remove('active');
        }
      });

      dropdownArrow.classList.toggle('active');
    });
  }
});


