const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav')

function toggleMenu() {
  hamburger.classList.toggle('open');
  nav.classList.toggle('open');
}

function closeMenu(event) {
    if (event.target.classList.contains('nav-link')) {
        hamburger.classList.remove('open');
        nav.classList.remove('open');
    }
  }

hamburger.addEventListener('click', toggleMenu);
nav.addEventListener('click', closeMenu);