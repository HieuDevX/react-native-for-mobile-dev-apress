export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export enum ActionTypes {
  ADD_TODO = 'ADD_TODO',
  TOGGLE_TODO = 'TOGGLE_TODO',
}

export interface AddTodoAction {
  type: ActionTypes.ADD_TODO;
  item: Todo;
}

export interface ToggleTodoAction {
  type: ActionTypes.TOGGLE_TODO;
  id: number;
}

export type Actions = AddTodoAction | ToggleTodoAction;

export interface TodosState {
  readonly items: Todo[];
}

export interface ApplicationState {
  todos: TodosState;
}
