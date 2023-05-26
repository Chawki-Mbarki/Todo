import newTodo from '../functions/newTodo.mjs';

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
