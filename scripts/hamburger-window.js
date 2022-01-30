export const hamburger = document.querySelector('.hamburger');
export const nav = document.querySelector('.nav')

export function toggleMenu() {
  hamburger.classList.toggle('open');
  nav.classList.toggle('open');
}

export function closeMenu(event) {
    if (event.target.classList.contains('nav-link')) {
        hamburger.classList.remove('open');
        nav.classList.remove('open');
    }
  }

