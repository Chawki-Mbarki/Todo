import '../styles/style.css';

import addNewTask from './modules/functions/addNewTask.mjs';
import displayAllTasksElements from './modules/functions/displayAllTasksElements.mjs';
import displayTaskElement from './modules/functions/displayTaskElement.mjs';

import grabTasks from './modules/functions/grabTasks.mjs';

const container = document.querySelector('.container');
const addedTask = document.querySelector('.add-task input');

let tasks = grabTasks();
localStorage.setItem('tasks', JSON.stringify(tasks));
displayAllTasksElements(tasks);

tasks.forEach((task) => {
  task.element.addEventListener('keyup', () => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  });
  const taskCheck = task.element.children[0];
  taskCheck.addEventListener('change', () => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  });
});

addedTask.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    tasks = addNewTask(tasks, addedTask);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    displayTaskElement(tasks[tasks.length - 1]);
    addedTask.value = '';
  }
});

const btn = document.createElement('button');
btn.textContent = 'Clear all completed';
container.appendChild(btn);
