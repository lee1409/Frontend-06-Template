function createElement(type, attribute, ...children) {
  let element;
  if (typeof type === 'string') {
    element = new ElementWrapper(type);
  } else {
    element = new type
  }

  for (let attr in attribute) {
    element.setAttribute(attr, attribute[attr]);
  }
  for (let child of children) {
    if (typeof child === 'string') {
      child = new TextWrapper(child);
    }
    element.appendChild(child);
  }
  return element;
}

class TextWrapper {
  constructor (content) {
    this.element = document.createTextNode(content);
  }

  mountTo (parent) {
    parent.appendChild(this.element);
  }
}

class ElementWrapper {
  constructor(type) {
    this.element = document.createElement(type);
  }

  setAttribute(key, value) {
    this.element.setAttribute(key, value)
  }

  appendChild(child) {
    child.mountTo(this.element);
  }

  mountTo(parent) {
    parent.appendChild(this.element);
  }
}

class Component {
  constructor() {
    this.element = document.createElement('div');
  }

  setAttribute(key, value) {
    this.element.setAttribute(key, value);
  }

  appendChild(child) {
    child.mountTo(this.element);
  }

  mountTo(parent) {
    parent.appendChild(this.element);
  }
}

const abc = (
  <Component>
    <span>
      AbabaAbaba
    </span>
    ahahaha
    <span></span>
  </Component>
);

abc.mountTo(document.body)