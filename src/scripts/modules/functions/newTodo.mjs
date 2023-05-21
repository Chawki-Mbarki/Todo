import Todo from "../classes/todo.mjs";
import createTodoElement from "./createTodoElement.mjs";

export default function newTodo(index, description) {
  return new Todo(index, description, false, createTodoElement(description));
}