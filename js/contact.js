document.querySelector('.form').addEventListener('submit', function (e) {
    e.preventDefault(); // Зупиняємо стандартну відправку форми
    this.reset(); // Очищаємо всі поля форми
  });

  const menuBtn = document.querySelector('.menu__btn');
const menu = document.querySelector('.menu__list');

menuBtn.addEventListener('click', ()=>{
  menu.classList.toggle('menu__list--active');
});