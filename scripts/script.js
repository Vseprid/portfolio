import * as hamburgerWindow from './hamburger-window.js';
import {portfolioButtons, changeImage} from './change-images.js';
import preloadImages from './preload-images.js';
import {switchLang, switchInHeader} from './get-translate.js';

hamburgerWindow.hamburger.addEventListener('click', hamburgerWindow.toggleMenu);
hamburgerWindow.nav.addEventListener('click', hamburgerWindow.closeMenu);

preloadImages();

portfolioButtons.addEventListener('click', changeImage);

switchLang.addEventListener('click', switchInHeader);