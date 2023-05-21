import Todo from "../classes/todo.mjs";
import createTodoElement from "./createTodoElement.mjs";

export default function reconstructTodos(todos) {
  let newTodos = [];
  todos.forEach(todo => {
    let todoElement = createTodoElement(todo.description)
    todo = new Todo(todo.index, todo.description, todo.status, todoElement)
    newTodos.push(todo);
  });
  return newTodos;
}