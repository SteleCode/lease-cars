document.querySelector('.form').addEventListener('submit', function (e) {
    e.preventDefault(); // Зупиняємо стандартну відправку форми
    this.reset(); // Очищаємо всі поля форми
  });