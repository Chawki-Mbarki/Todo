export default function orderTodos(todos) {
  if(todos.length === 0){
    return [];
  }else if(todos.length === 1){
    todos[0].index = 0;
  }else {
    for (let i = 0; i < todos.length; i += 1) {
      for (let j = i+1; j < todos.length; j += 1) {
        if(todos[i].index > todos[j].index){
          let swap = todos[i];
          todos[i] = todos[j];
          todos[j] = swap
        }
      }
      todos[i].index = i;
    }
  }return todos;
}
