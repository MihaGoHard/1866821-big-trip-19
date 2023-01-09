import {RenderPosition} from './const/view.js';

const createElement = (template) => {
  const newElement = document.createElement('div');
  newElement.innerHTML = template;

  return newElement.firstElementChild;
};

const render = (component, container, place = RenderPosition.BEFOREEND) => container.insertAdjacentElement(place, component.element);


export {createElement, render};
