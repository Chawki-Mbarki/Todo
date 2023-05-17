export default function addTask(todo){
  const todos = document.querySelector('.todos');

  let listElement = document.createElement('li');
  let task = document.createElement('input');
  let threedotsContainer = document.createElement('div');
  let check = document.createElement('input');
  let threedots = document.createElement('i');
  threedots.classList.add('fa-solid','fa-ellipsis-vertical');

  const description = todo.description;
  const completed = todo.completed;

  task.type = 'text';
  task.value = description;
  task.classList.add(completed);
  
  check.type = 'checkbox'
  check.classList.add('status');

  threedotsContainer.appendChild(threedots)
  threedotsContainer.classList.add('dragRemoveContainer', 'flex')
  
  listElement.appendChild(check);
  listElement.appendChild(task);
  listElement.appendChild(threedotsContainer);
  todos.appendChild(listElement);

  return task
}