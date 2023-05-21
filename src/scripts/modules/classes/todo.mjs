export default class Todo {
  constructor(index, description, status, element) {
    this.index = index;
    this.description = description;
    this.status = status;
    this.element = element;

    const check = this.element.children[0];
    const input = this.element.children[1];
    const trash = this.element.children[2].children[1];

    check.checked = this.status;
    input.textContent = this.description;
    
    if (status) {
      input.classList.add(status);
    }

    check.addEventListener("change", () => {
      this.updateStatus(check, input);
    })
    
    input.addEventListener("keyup", () => {
      this.changeDescription(input);
    })

    trash.addEventListener("click", () => {
      window.postMessage({ type: 'removeTodo', index: this.index}, '*');
    });

    this.element.addEventListener("focusin", () => {
      trash.classList.add("display-trash");
    });
  
    this.element.addEventListener("focusout", () => {
      trash.classList.remove("display-trash");
    });


  }

  updateStatus(check, input) {
    this.status = !this.status;
    check.checked = this.status;
    if (this.status) {
      input.classList.contains("true") ? null : input.classList.add("true") ;
    }else {
      input.classList.contains("true") ? input.classList.remove("true") : null ;
    }
    window.postMessage({ type: 'updateArray'}, '*');
  }

  changeDescription(input) {
    this.description = input.value;
    window.postMessage({ type: 'updateArray'}, '*');
  }

}