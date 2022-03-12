export default function changeClassActive(container, classAct) {
    container.forEach(elem => elem.classList.remove(`${classAct}`));
    event.target.classList.add(`${classAct}`);
   }