import orderTodos from "./orderTodos.mjs";

export default function clearAllCompleted(todos) {
  todos = todos.filter(todo => {
    return !todo.status;
  });

  return orderTodos(todos)
}