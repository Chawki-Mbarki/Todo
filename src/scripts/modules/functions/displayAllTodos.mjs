import displayTodo from "./displayTodo.mjs";

export default function displayAllTodos(todos) {
  document.querySelector(".todos").innerHTML = "";
  todos.forEach(todo => {
    displayTodo(todo)
  });
}