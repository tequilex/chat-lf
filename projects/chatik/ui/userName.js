export default class UserName {
  constructor(element) {
    this.element = element;
  }

  set(name) {
    const userName = document.querySelector('.load-photo__userName');
    this.name = name;
    this.element.textContent = name;
    userName.textContent = name;
  }

  get() {
    return this.name;
  }
}
