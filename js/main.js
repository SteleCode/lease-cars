// --- Tabs ---
const tabItem = document.querySelectorAll('.tabs__btn-item');
const tabContent = document.querySelectorAll('.tabs__content-item');

tabItem.forEach(function(element){
  element.addEventListener('click', open);
});

function open(event){
  const tabTarget = event.currentTarget;
  const button = tabTarget.dataset.button;

  tabItem.forEach(function(item){
    item.classList.remove('tabs__btn-item--active');
  });

  tabTarget.classList.add('tabs__btn-item--active');

  tabContent.forEach(function(item){
    item.classList.remove('tabs__content-item--active');
  });

  document.querySelector(`#${button}`).classList.add('tabs__content-item--active');
}

// --- Burger Menu ---
const menuBtn = document.querySelector('.menu__btn');
const menu = document.querySelector('.menu__list');

menuBtn.addEventListener('click', ()=>{
  menu.classList.toggle('menu__list--active');
});

// --- Card click: redirect to seedetails.html with params ---
document.querySelectorAll('.card__link').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const card = this.closest('.card');
    const title = card.querySelector('.card__title').textContent.trim();
    const imgSrc = card.querySelector('.card__img').getAttribute('src');
    const text = card.querySelector('.card__text').textContent.trim();
    const price = card.querySelector('.card__price').textContent.trim();

    const params = new URLSearchParams({
      title,
      img: imgSrc,
      text,
      price
    });

    window.location.href = 'seedetails.html?' + params.toString();
  });
});

// --- Load params on seedetails.html ---
if (window.location.pathname.includes('seedetails.html')) {
  const params = new URLSearchParams(window.location.search);

  const titleElement = document.getElementById('car-title');
  const imageElement = document.getElementById('car-img');
  const textElement = document.getElementById('car-text');
  const priceElement = document.getElementById('car-price');

  if (params.has('title')) {
    titleElement.textContent = params.get('title');
  }
  if (params.has('img')) {
    imageElement.src = params.get('img');
  }
  if (params.has('text')) {
    textElement.textContent = params.get('text');
  }
  if (params.has('price')) {
    priceElement.textContent = params.get('price');
  }
}

document.querySelectorAll('.card__text').forEach(textElement => {
  const path = window.location.pathname;

  if (path.includes('new-cars.html')) {
    textElement.setAttribute('hidden', 'true');
  }

  if (path.includes('seedetails.html')) {
    textElement.removeAttribute('hidden');
  }
});

// --- Swiper ---
const swiper = new Swiper(".swiper", {
  effect: "fade",
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
});
