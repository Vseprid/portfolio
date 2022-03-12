import * as hamburgerWindow from './hamburger-window.js';
import {portfolioButtons, changeImage} from './change-images.js';
import preloadImages from './preload-images.js';
import {switchLang, switchInHeader} from './get-translate.js';

hamburgerWindow.hamburger.addEventListener('click', hamburgerWindow.toggleMenu);
hamburgerWindow.nav.addEventListener('click', hamburgerWindow.closeMenu);

preloadImages();

portfolioButtons.addEventListener('click', changeImage);

switchLang.addEventListener('click', switchInHeader);

const theme = document.querySelector('.theme');

const elemsTheme = ['body' ,'.icon', '.theme', 'a', '.button', '.nav','.switch-language span', '.wrapper_hero', '.section-title', '.wrapper_contact', '.contact__input', '.socnet'];

theme.addEventListener('click', () => {
    const use = theme.querySelector('use');
    let hrefSvg = use.href.baseVal
    hrefSvg.endsWith('#theme-light') ? use.href.baseVal = hrefSvg.replace(/-light/, '-dark') : use.href.baseVal = hrefSvg.replace(/-dark/, '-light');
    elemsTheme.forEach(cl => {
        const elems = document.querySelectorAll(`${cl}`);
        elems.forEach(el => el.classList.toggle('theme_light'));
    })
})