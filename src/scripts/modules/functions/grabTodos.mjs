import reconstructTodos from "./reconstructTodos.mjs";

export default function grabTodos() {
  let todos = JSON.parse(localStorage.getItem("todos"));

  if (!todos) {
    todos = [];
  }else {
    todos = reconstructTodos(todos);
  }

  return todos;
}