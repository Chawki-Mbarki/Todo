import newTodo from '../functions/newTodo.mjs';

describe('Update Task', () => {
  // a new task with the description 'go to the gym'
  const task = newTodo(0, 'go to the gym');

  test('update description check', () => {
    const input = document.createElement('input');
    input.value = 'study';

    // changing the task description to the input value
    task.changeDescription(input.value);
    expect(task.description).toEqual('study');
  });

  test('update task status to be truthy', () => {
    const check = task.element.children[0];
    const input = task.element.children[1];
    // changing the task description to the input value
    task.updateStatus(check, input);
    expect(task.status).toBeTruthy();
  });

  test('update task status to be falsy', () => {
    const check = task.element.children[0];
    const input = task.element.children[1];
    // changing the task description to the input value
    task.updateStatus(check, input);
    expect(task.status).toBeFalsy();
  });
});
