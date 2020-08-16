const burgerBtn = document.querySelector('#gamburger-menu');
const menu = document.querySelector('#gamburger__inner');
const hero = document.querySelector('#hero__container');

burgerBtn.addEventListener('click', function() {
  hero.addClass("hero__container_deactive") 
});