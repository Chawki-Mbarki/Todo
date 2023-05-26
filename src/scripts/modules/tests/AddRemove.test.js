import Todo from '../classes/todo.mjs';
import createTodoElement from '../functions/createTodoElement.mjs';
import newTodo from '../functions/newTodo.mjs';
import orderTodos from '../functions/orderTodos.mjs';
import removeTodo from '../functions/removeTodo.mjs';

describe('Create a new Task', () => {
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

describe('Remove task', () => {
  const task1 = new Todo(0, 'task1', false, createTodoElement('taks1'));
  const task2 = new Todo(1, 'task2', false, createTodoElement('taks2'));
  const task3 = new Todo(2, 'task3', false, createTodoElement('taks3'));
  const task4 = new Todo(3, 'task4', false, createTodoElement('taks4'));
  const task5 = new Todo(4, 'task5', false, createTodoElement('taks5'));

  test('Removing the " LAST " element of the todos', () => {
    const todos = [task1, task2, task3, task4, task5];
    const expected = orderTodos([task1, task2, task3, task4]);
    expect(removeTodo(todos, 4)).toEqual(expected);
  });

  test('Removing the " FIRST " element of the todos', () => {
    const todos = [task1, task2, task3, task4, task5];
    const expected = orderTodos([task4, task3, task2, task5]);
    expect(removeTodo(todos, 0)).toEqual(expected);
  });

  test('Removing " ANY " element of the todos', () => {
    const todos = [task1, task2, task3, task4, task5];
    const expected = orderTodos([task1, task2, task4, task5]);
    expect(removeTodo(todos, 2)).toEqual(expected);
  });

  test('Removing " ALL " elements of the todos', () => {
    const todos = [task1, task2, task3, task4, task5];
    const expected = [];
    removeTodo(todos, 0);
    removeTodo(todos, 0);
    removeTodo(todos, 0);
    removeTodo(todos, 0);
    removeTodo(todos, 0);
    expect(todos).toEqual(expected);
  });
});