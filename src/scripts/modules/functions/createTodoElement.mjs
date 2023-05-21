export default function createTodoElement(description) {

  let todoElement = document.createElement('li');
  let todoDescription = document.createElement('input');
  let iconContainer = document.createElement('div');
  let check = document.createElement('input');
  let threedots = document.createElement('i');
  let trashCan = document.createElement('i');

  threedots.classList.add('fa-solid','fa-ellipsis-vertical');
  trashCan.classList.add('fa-solid','fa-trash-can');
  todoDescription.type = 'text';
  todoDescription.value = description;
  todoDescription.classList.add("todo");
  check.type = 'checkbox'
  check.classList.add('status');
  iconContainer.appendChild(threedots)
  iconContainer.appendChild(trashCan)
  iconContainer.classList.add('dragRemoveContainer', 'flex')
  todoElement.appendChild(check);
  todoElement.appendChild(todoDescription);
  todoElement.appendChild(iconContainer);

  return todoElement;

}