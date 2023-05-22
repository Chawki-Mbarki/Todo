import reconstructTodos from "./reconstructTodos.mjs";

export default function grabTodos() {
  let todos = JSON.parse(localStorage.getItem("todos"));

  !todos ? todos = []: todos = reconstructTodos(todos);
  
  return todos;
}