export const theme = document.querySelector('.theme');

const elemsTheme = ['body' ,'.icon', '.theme', 'a', '.button', '.nav','.switch-language span', '.wrapper_hero', '.wrapper-title', '.section-title', '.wrapper_contact', '.contact__input', '.socnet'];

export function changeTheme() {
    const use = theme.querySelector('use');
    let hrefSvg = use.href.baseVal
    hrefSvg.endsWith('#theme-light') ? use.href.baseVal = hrefSvg.replace(/-light/, '-dark') : use.href.baseVal = hrefSvg.replace(/-dark/, '-light');
    elemsTheme.forEach(cl => {
        const elems = document.querySelectorAll(`${cl}`);
        elems.forEach(el => el.classList.toggle('theme_light'));
    });
}