import changeClassActive from "./change-class-active.js";
import i18Obj from './translate.js';

export let langStorage = 'en';

export const switchLang = document.querySelector('.switch-language pre');

export function getTranslate(lang) {
    const elems = document.querySelectorAll('[data-i18n]');
    elems.forEach(elem => {
        const text = i18Obj[lang]?.[elem.dataset.i18n];
        if (!text) return false;
        elem.innerHTML = text;
        if (elem.placeholder) {
            elem.placeholder = text;
            elem.textContent = '';
      }
    })
    const check = document.querySelector('.button__hero').textContent;
    langStorage = (check == 'Hire me' ? 'en' : 'ru');
    const switches = document.querySelectorAll('.switch-language span');
    switches.forEach(elem => {
      elem.textContent == lang ? elem.classList.add('switch-language_active') :
      elem.classList.remove('switch-language_active');
  });
  }

export function switchInHeader(event) {
    if (event.target.textContent === 'en' || event.target.textContent === 'ru') {
        getTranslate(event.target.textContent);
    } else return false;
  // changeClassActive(switches, 'switch-language_active');
}