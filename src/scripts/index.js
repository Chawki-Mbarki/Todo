import style from "../styles/style.css"

import grabTodos from "./modules/functions/grabTodos.mjs";
import displayTodo from "./modules/functions/displayTodo.mjs";
import newTodo from "./modules/functions/newTodo.mjs";
import displayAllTodos from "./modules/functions/displayAllTodos.mjs";
import removeTodo from "./modules/functions/removeTodo.mjs";
import clearAllCompleted from "./modules/functions/clearAllCompleted.mjs";

let todos = grabTodos();
displayAllTodos(todos)
localStorage.setItem("todos", JSON.stringify(todos));

window.addEventListener('message', (e) => {
  if (e.data.type === 'updateArray') {
    localStorage.setItem('todos', JSON.stringify(todos));
  }else if (e.data.type === 'removeTodo') {
    todos = removeTodo(todos, e.data.index)
    localStorage.setItem("todos", JSON.stringify(todos));
    displayAllTodos(todos)
  }
});

const container = document.querySelector(".container");
const input = document.querySelector(".add-todo input");

input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    todos.push(newTodo(todos.length, e.target.value))
    displayTodo(todos[todos.length - 1]);
    input.value = ""
    localStorage.setItem("todos", JSON.stringify(todos));
  }
})

const btn = document.createElement('button');
btn.textContent = 'Clear all completed';
btn.addEventListener('click', () => {
  todos = clearAllCompleted(todos);
  console.log(todos)
  localStorage.setItem('todos', JSON.stringify(todos));
  displayAllTodos(todos);
});
container.appendChild(btn);
