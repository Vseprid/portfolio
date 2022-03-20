export let theme = ['light'];

export const themeElem = document.querySelector('.theme');

const elemsTheme = ['body' ,'.icon', '.theme', 'a', '.button', '.nav','.switch-language span', '.wrapper_hero', '.wrapper-title', '.section-title', '.wrapper_contact', '.contact__input', '.socnet'];

export function changeTheme(themeFun) {
    const use = themeElem.querySelector('use');
    let hrefSvg = use.href.baseVal;
    use.href.baseVal = hrefSvg.replace(/dark|light$/, `${themeFun}`)
    elemsTheme.forEach(cl => {
        const elems = document.querySelectorAll(`${cl}`);
        const antiTheme = (themeFun == 'dark' ? 'light' : 'dark');
        elems.forEach(el => {
            el.classList.remove(`theme_${antiTheme}`)
            el.classList.add(`theme_${themeFun}`);
        });
    });
}