// Слайдер
// Получаем элементы слайдера
const slider = document.querySelector(".slider");
const leftButton = document.querySelector(".left");
const centerButton = document.querySelector(".center");
const rightButton = document.querySelector(".right");

const slides = Array.from(document.querySelectorAll(".slider"));
const slidesBlock = Array.from(document.querySelectorAll(".slider_block"));

const slidCenter = document.querySelector(".slider_center");

const slideCount = slides.length;
let slideIndex = 0;
let maxSlides = slidesBlock.length;
slider.style.overflow = `visible`;

// Обработчики событий для кнопок
leftButton.addEventListener("click", function () {
  if (slideIndex === maxSlides - 2) {
    slideIndex = 0;
  } else {
    slideIndex++;
  }
  slides.forEach(function (slide, index) {
    slide.style.transform = `translateX(${100 * (index - slideIndex)}%)`;
  });
});

rightButton.addEventListener("click", function () {
  if (slideIndex === maxSlides - 2) {
    slideIndex = 0;
  } else {
    slideIndex++;
  }
  slides.forEach(function (slide, index) {
    slide.style.transform = `translateX(${100 * (index + slideIndex)}%)`;
  });
});

// // Обработчик события для кнопки сброса
centerButton.addEventListener("click", () => {
  slider.style.transform = `translateX(0)`;
});
