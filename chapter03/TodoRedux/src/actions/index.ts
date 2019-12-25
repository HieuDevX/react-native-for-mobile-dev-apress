import { ActionCreator } from 'redux';
import { AddTodoAction, ToggleTodoAction, ActionTypes, Todo } from '../types';

let nextId = 0;
export const addTodo: ActionCreator<AddTodoAction> = (text: string) => {
  return {
    type: ActionTypes.ADD_TODO,
    item: {
      id: nextId++,
      completed: false,
      text,
    },
  };
};

export const toggleTodo: ActionCreator<ToggleTodoAction> = (id: number) => ({
  type: ActionTypes.TOGGLE_TODO,
  id,
});
