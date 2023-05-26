import newTodo from '../functions/newTodo.mjs';
import removeTodo from '../functions/removeTodo.mjs';

describe('Creating a new Task', () => {
  const newTask = newTodo(0, 'go to the gym');

  const { index } = newTask;
  const { description } = newTask;
  const { completed } = newTask;
  const { element } = newTask;

  test('Index check', () => {
    expect(index).toBe(0);
  });

  test('description check', () => {
    expect(description).toMatch('go to the gym');
  });

  test('completed check', () => {
    expect(completed).toBeFalsy();
  });

  test('element check', () => {
    expect(element.children).toHaveLength(3);
  });
});

describe('deleteTodo', () => {
  test('test to remove the last element of the todos', () => {
    const todos = ['task1', 'task2', 'task3'];
    const index = 2;
    const expected = ['task1', 'task2'];

    expect(removeTodo(todos, index)).toEqual(expected);
  });

  test('test to remove the first element of the todos', () => {
    const todos = ['task1', 'task2', 'task3'];
    const index = 0;
    const expected = ['task2', 'task3'];

    expect(removeTodo(todos, index)).toEqual(expected);
  });

  test('test to remove other elements of the todos', () => {
    const todos = ['task1', 'task2', 'task3'];
    const index = 1;
    const expected = ['task1', 'task3'];

    expect(removeTodo(todos, index)).toEqual(expected);
  });
});