import orderTodos from "./orderTodos.mjs";

export default function removeTodo(todos, index) {
  if(index === todos.length-1) {
    todos.pop();
  }else if (index === 0){
    todos.shift();
  }else{
    todos.splice(index, 1);
  }

  return orderTodos(todos);
}