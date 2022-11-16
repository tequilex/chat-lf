export default class UserList {
  constructor(element) {
    this.element = element;
    this.items = new Set();
  }

  buildDom() {
    const fragment = document.createDocumentFragment();

    this.element.innerHTML = '';

    for (const name of this.items) {
      const userListSize = document.querySelector('.user-list__size');
      const element = document.createElement('div');
      element.classList.add('user-list-item');
      element.textContent = name;
      fragment.append(element);
      if (this.items.size === 1) {
        userListSize.textContent = `${this.items.size} ` + `участник`;
      } else {
        userListSize.textContent = `${this.items.size} ` + `участника`;
      }
    }

    this.element.append(fragment);
  }

  add(name) {
    this.items.add(name);
    this.buildDom();
  }

  remove(name) {
    this.items.delete(name);
    this.buildDom();
  }
}
