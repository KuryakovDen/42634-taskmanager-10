const RenderPosition = {
  AFTERBEGIN: `afterbegin`,
  BEFOREEND: `beforeend`
};

const castTimeFormat = (value) => {
  return value < 10 ? `0${value}` : String(value);
};

const formatTime = (date) => {
  const hours = castTimeFormat(date.getHours() % 12);
  const minutes = castTimeFormat(date.getMinutes());

  const interval = date.getHours() > 11 ? `pm` : `am`;

  return `${hours}:${minutes} ${interval}`;
};

const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;

  return newElement.firstChild;
};

const render = (container, component, place) => {
  switch (place) {
    case RenderPosition.AFTERBEGIN:
      container.prepend(component.getElement());
      break;
    case RenderPosition.BEFOREEND:
      container.append(component.getElement());
      break;
  }
};

const remove = (component) => {
  component.getElement().remove();
  component.removeElement();
};

const replace = (oldComponent, newComponent) => {
  const parentElement = oldComponent.getElement().parentElement;
  const oldElement = oldComponent.getElement();
  const newElement = newComponent.getElement();

  const isExistElements = !!(parentElement && oldElement && newElement);

  if (isExistElements && parentElement.contains(oldElement)) {
    parentElement.replaceChild(newElement, oldElement);
  }
};

export {
  RenderPosition,
  castTimeFormat,
  formatTime,
  createElement,
  render,
  remove,
  replace
};
