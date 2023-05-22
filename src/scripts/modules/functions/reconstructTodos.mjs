import Todo from "../classes/todo.mjs";
import createTodoElement from "./createTodoElement.mjs";

export default function reconstructTodos(todos) {

  let newTodos = todos.map(todo => {
    let todoElement = createTodoElement(todo.description)
    return new Todo(todo.index, todo.description, todo.status, todoElement)
  });
  
  return newTodos;
}