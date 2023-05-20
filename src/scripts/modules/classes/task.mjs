export default class Task {
  constructor(index, description, completed, element) {
    this.index = index;
    this.description = description;
    this.completed = completed;
    this.element = element;
  }

  taskUpdate(e) {
    const regex = /[\w\d]/;
    if (regex.test(e.target.value)) {
      this.description = e.target.value;
    }
  }
  
}
