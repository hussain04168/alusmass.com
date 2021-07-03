// Variables
let previousButton = document.querySelector(".previous-btn");
let nextButton = document.querySelector(".next-btn");
let carouselItems = document.querySelectorAll(".project-carousel-item");
let slideIndex = 0;
nextButton.addEventListener("click", () => {
  for (let i = 0; i < carouselItems.length; i++) {
    carouselItems[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > carouselItems.length) {
    slideIndex = 1;
  }
  carouselItems[slideIndex - 1].style.display = "flex";
});

// previousButton.addEventListener("click", () => {
//   for (let i = 0; i < carouselItems.length; i++) {
//     carouselItems[i].style.transform = "translateX(20%)";
//   }
// });
