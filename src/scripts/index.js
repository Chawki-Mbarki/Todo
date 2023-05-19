import '../styles/style.css';

import Task from './modules/classes/task.mjs';
import addNewTask from './modules/functions/addNewTask.mjs';
import createTaskElement from './modules/functions/createTaskElement.mjs';
import displayAllTasksElements from './modules/functions/displayAllTasksElements.mjs';
import displayTaskElement from './modules/functions/displayTaskElement.mjs';

import grabTasks from './modules/functions/grabTasks.mjs';

const container = document.querySelector('.container');
const addedTask = document.querySelector('.add-task input');

let tasks = grabTasks();
displayAllTasksElements(tasks);

addedTask.addEventListener("keypress", (e) => {
  if(e.key == "Enter") {
    tasks = addNewTask(tasks, addedTask)
    displayTaskElement(tasks[tasks.length - 1].element)
  }
})

const btn = document.createElement('button');
btn.textContent = 'Clear all completed';
container.appendChild(btn);
