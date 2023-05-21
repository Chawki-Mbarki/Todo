export default function displayTodo(todo) {
  const container = document.querySelector(".todos");
  container.appendChild(todo.element)
}