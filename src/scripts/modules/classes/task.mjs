export default class Task {
  constructor(index, description, completed, element){
    this.index = index;
    this.description  = description;
    this.completed = completed;   
    this.element = element.children;

    const taskInput = this.element[1];

    taskInput.addEventListener("keyup", (e) => {
      this.taskUpdate(e);
    });

    this.element = element;

    if(this.completed) {
      this.element.children[0].checked = true;
      this.element.children[1].classList.add("true");
    }

  }

  taskUpdate(e) {
    const regex = /[\w\d]/;
    if(regex.test(e.target.value)){
      this.description = e.target.value;
    }
  }
}
