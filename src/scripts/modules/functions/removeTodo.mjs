import orderTodos from "./orderTodos.mjs";

export default function removeTodo(tasks, index) {
  if(index === tasks.length-1) {
    tasks.pop();
  }else if (index === 0){
    tasks.shift();
  }else{
    tasks.splice(index, 1);
  }

  return orderTodos(tasks);
}