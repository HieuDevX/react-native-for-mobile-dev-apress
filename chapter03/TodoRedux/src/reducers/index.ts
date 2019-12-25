import { combineReducers } from 'redux';
import todosReducer from './todos';
import { ApplicationState } from 'src/types';

export default combineReducers<ApplicationState>({
  todos: todosReducer,
});
