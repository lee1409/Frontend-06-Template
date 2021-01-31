export class Component {
  constructor() {
  }

  setAttribute(key, value) {
    this.root.setAttribute(key, value);
  }

  appendChild(child) {
    child.mountTo(this.root);
  }

  mountTo(parent) {
    parent.appendChild(this.root);
  }
}

class TextWrapper extends Component {
  constructor (content) {
    super();
    this.root = document.createTextNode(content);
  }
}

class ElementWrapper extends Component {
  constructor(type) {
    super();
    this.root = document.createElement(type);
  }

  setAttribute(key, value) {
    this.root.setAttribute(key, value)
  }

  appendChild(child) {
    child.mountTo(this.root);
  }

  mountTo(parent) {
    parent.appendChild(this.root);
  }
}


export function createElement(type, attribute, ...children) {
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