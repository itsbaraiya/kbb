// // Swiper sliders

document.addEventListener('DOMContentLoaded', function () {
    var swiper = null; 

    function initializeSwiper() {
        swiper = new Swiper('.swiper-container', {
            slidesPerView: getSlidesPerView(),
            centeredSlides: true,
            spaceBetween: 10,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            autoplay: {
                delay: 3000,
            },
        });
    }

    function destroySwiper() {
        if (swiper) {
            swiper.destroy();
            swiper = null;
        }
    }

    function getSlidesPerView() {
        if (window.innerWidth < 768) {
            return 1;
        } else if (window.innerWidth < 992) {
            return 2;
        } else {
            return 3;
        }
    }

    function checkScreenWidth() {
        if (window.innerWidth < 992) {
            initializeSwiper();
        } else {
            destroySwiper();
            const newsSwiper = document.querySelector('.news-container');
            newsSwiper.classList.add('no-slider');
        }
    }

    checkScreenWidth();

    window.addEventListener('resize', function () {
        checkScreenWidth();
    });
});





