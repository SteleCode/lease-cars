document.querySelector('.form').addEventListener('submit', function (e) {
    e.preventDefault();
    this.reset(); 
  });

  const menuBtn = document.querySelector('.menu__btn');
const menu = document.querySelector('.menu__list');

menuBtn.addEventListener('click', ()=>{
  menu.classList.toggle('menu__list--active');
});