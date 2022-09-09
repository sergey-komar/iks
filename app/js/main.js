$(function () {
    $('.slider__inner').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-after-left"></button>',
        nextArrow: '<button type="button" class="slick-after-rigth"></button>',

        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                dots: true,
                arrows: false
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: true,
                arrows: false
              }
            },
            {
              breakpoint: 550,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: false
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
    });

    const menu = document.querySelector('.menu');
    const mobile = document.querySelector('.nav-icon');

    mobile.addEventListener('click', function(){
    this.classList.toggle('nav-icon--active');
    menu.classList.toggle('nav--active');
});

// Находим ссылки внутри мобильной навигации
// const navLinks = document.querySelectorAll('.menu__list a');
const navLinks = document.querySelectorAll('.coaching__menu a');

// Обходим ссылки методом forEach
navLinks.forEach(function (item) {
  // Для каждой ссылки добавляем прослушку по событию "Клик"
  item.addEventListener('click', function () {
    mobile.classList.remove('nav-icon--active'); // Убираем активный класс у иконки моб. навигации
    menu.classList.remove('nav--active'); // Убираем активный класс у блока моб. навигации
  });
  
});

});


