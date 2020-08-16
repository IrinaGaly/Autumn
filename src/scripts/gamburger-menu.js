
const burgerBtn = document.getElementById('gamburger-menu');
const menu = document.getElementById('gamburger__inner');
const close = document.getElementById('gamburger__close');



burgerBtn.onclick = function() {
  menu.style.top = '0';
};

close.onclick = function() {
   menu.style.top = '-3000px';
};