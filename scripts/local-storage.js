import { langStorage, getTranslate } from './get-translate.js';
import { theme ,changeTheme } from './light-theme.js';

export function setLocalStorage() {
    localStorage.setItem('lang', langStorage);
    localStorage.setItem('theme', theme[0]);
  }

export function getLocalStorage() {
  if(localStorage.getItem('lang')) {
    const lang = localStorage.getItem('lang');
    getTranslate(lang);
  }
  if (localStorage.getItem('theme')) {
    theme[0] = localStorage.getItem('theme');
    changeTheme(theme[0]);
  }
}