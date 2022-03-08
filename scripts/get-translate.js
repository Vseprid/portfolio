import changeClassActive from "./change-class-active.js";
import i18Obj from './translate.js';

export const switchLang = document.querySelector('.switch-language pre');

function getTranslate(lang) {
    const elems = document.querySelectorAll('[data-i18n]');
    elems.forEach(elem => {
        const text = i18Obj[lang][elem.dataset.i18n];
        // console.log(text)
        if (!text) return false;
        elem.innerHTML = text;
        if (elem.placeholder) {
            elem.placeholder = text;
            elem.textContent = '';
      }
    })
  }

export function switchInHeader(event) {
    if (event.target.textContent === 'en' || event.target.textContent === 'ru') {
        getTranslate(event.target.textContent);
    } else return false;
  const switches = document.querySelectorAll('.switch-language span')
  changeClassActive(switches, 'switch-language_active');
}