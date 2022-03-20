import * as hamburgerWindow from './hamburger-window.js';
import {portfolioButtons, changeImage} from './change-images.js';
import preloadImages from './preload-images.js';
import {switchLang, switchInHeader} from './get-translate.js';
import {themeElem, changeTheme, theme} from './light-theme.js';
import {setLocalStorage, getLocalStorage} from './local-storage.js';
import {buttons, rippleButton} from './ripple-button.js';

hamburgerWindow.hamburger.addEventListener('click', hamburgerWindow.toggleMenu);
hamburgerWindow.nav.addEventListener('click', hamburgerWindow.closeMenu);

preloadImages();

portfolioButtons.addEventListener('click', changeImage);

switchLang.addEventListener('click', switchInHeader);


themeElem.addEventListener('click', () => {
  theme[0] = (theme[0] == 'dark' ? 'light' : 'dark');
  changeTheme(theme[0]);
});

window.addEventListener('beforeunload', setLocalStorage)

window.addEventListener('load', getLocalStorage)



buttons.forEach(element => element.addEventListener('click', rippleButton));
