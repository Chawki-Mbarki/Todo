import '../styles/style.css';

import addNewTask from './modules/functions/addNewTask.mjs';
import clearAllCompleted from './modules/functions/clearAllCompleted.mjs';
import createTaskElement from './modules/functions/createTaskElement.mjs';
import displayAllTasksElements from './modules/functions/displayAllTasksElements.mjs';
import displayTaskElement from './modules/functions/displayTaskElement.mjs';
import eventsReminder from './modules/functions/eventsReminder.mjs';

import grabTasks from './modules/functions/grabTasks.mjs';
import removeTask from './modules/functions/removeTask.mjs';

const container = document.querySelector('.container');
const addedTask = document.querySelector('.add-task input');

let tasks = grabTasks();
tasks = eventsReminder(tasks)
localStorage.setItem('tasks', JSON.stringify(tasks));
displayAllTasksElements(tasks);

addedTask.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    const taskElement = createTaskElement(addedTask.value)
    tasks = addNewTask(tasks, addedTask.value, false, taskElement);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    displayTaskElement(tasks[tasks.length - 1]);
    addedTask.value = '';
    const trash = tasks[tasks.length - 1].element.children[2].children[1];
    trash.addEventListener('click', () => {
      tasks = removeTask(tasks, tasks.length - 1);
      localStorage.setItem('tasks', JSON.stringify(tasks));
      displayAllTasksElements(tasks);
    });
    tasks = eventsReminder(tasks)
  }
});

const btn = document.createElement('button');
btn.textContent = 'Clear all completed';
btn.addEventListener("click", () => {
  tasks = eventsReminder(clearAllCompleted(grabTasks()));
  displayAllTasksElements(tasks);
  
})
container.appendChild(btn);
