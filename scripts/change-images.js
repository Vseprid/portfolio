import changeClassActive from "./change-class-active.js";

export const portfolioButtons = document.querySelector('.portfolio-buttons');
const buttons = document.querySelectorAll('.portfolio-buttons > .button')

const portfolioImages = document.querySelectorAll('.portfolio-img > img');

export function changeImage(event) {
    if (event.target.classList.contains('button')) {
        portfolioImages.forEach((img, index) => img.src = `./assets/img/${event.target.dataset.season}/${index + 1}.jpg`);
        changeClassActive(buttons, 'button_active', 'button_inactive');
    }
  }