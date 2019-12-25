import { Reducer } from 'redux';
import { TodosState, Actions, ActionTypes, Todo } from '../types';

const initialState: TodosState = {
  items: [],
};

export const todosReducer: Reducer<TodosState, Actions> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case ActionTypes.ADD_TODO:
      return {
        ...state,
        items: [
          ...state.items,
          {
            ...action.item,
          },
        ],
      };

    case ActionTypes.TOGGLE_TODO: {
      return {
        ...state,
        items: [
          ...state.items.map(
            (item): Todo =>
              item.id === action.id
                ? { ...item, completed: !item.completed }
                : item,
          ),
        ],
      };
    }

    default:
      return state;
  }
};

export default todosReducer;
