export default function orderTasks(tasks) {
  if(tasks.length === 0){
    return [];
  }else if(tasks.length === 1){
    tasks[0]["index"] = 0;
  }else {
    for (let i = 0; i < tasks.length; i += 1) {
      for (let j = i+1; j < tasks.length; j += 1) {
        if(tasks[i].index > tasks[j].index){
          let swap = tasks[i];
          tasks[i] = tasks[j];
          tasks[j] = swap
        }
      }
      tasks[i]["index"] = i;
    }
  }return tasks;
}
