import orderTodos from "./orderTodos.mjs";

export default function removeTodo(todos, index) {
  switch (index) {
    case todos.length-1:
      todos.pop();
      break;
    case 0:
      todos.shift();
      break;
    default:
      todos.splice(index, 1);
      break;
  }
  return orderTodos(todos);
}