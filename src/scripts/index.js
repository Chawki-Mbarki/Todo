import '../styles/style.css';

import Task from './modules/classes/task.mjs';
import addTask from './modules/functions/addTask.mjs';
import ordertasks from './modules/functions/orderTasks.mjs';

const todos = document.querySelector('.todos');

const task1 = new Task(0, 'Go to the gym', false);
const task2 = new Task(1, 'Study', false);
const task3 = new Task(2, 'play soccer', false);
const task4 = new Task(3, 'kiss wife for the last time', false);
const task5 = new Task(4, 'Destroy the solar system', false);

let tasks = [task2, task3, task1, task5, task4];

tasks = ordertasks(tasks);
tasks.forEach((todo) => {
  addTask(todo);
});

const btn = document.createElement('button');
btn.textContent = 'Clear all completed';
todos.appendChild(btn);
