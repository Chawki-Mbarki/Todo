import '../styles/style.css';

import Task from './modules/classes/task.mjs';
import addNewTask from './modules/functions/addNewTask.mjs';
import createTaskElement from './modules/functions/createTaskElement.mjs';
import displayAllTasksElements from './modules/functions/displayAllTasksElements.mjs';
import displayTaskElement from './modules/functions/displayTaskElement.mjs';





const btn = document.createElement('button');
btn.textContent = 'Clear all completed';
