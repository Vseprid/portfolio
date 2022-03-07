export default function changeClassActive(container, classAct, classInact) {
    container.forEach(elem => elem.classList.remove(`${classAct}`));
    container.forEach(elem => elem.classList.add(`${classInact}`));
    event.target.classList.remove(`${classInact}`);
    event.target.classList.add(`${classAct}`);
  }