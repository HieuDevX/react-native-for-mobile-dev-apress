// @ts-nocheck
import { createStore, Store } from 'redux';
import rootReducer from '../reducers';
import { ApplicationState } from '../types';

const configureStore = (): Store<ApplicationState> => {
  const store = createStore(
    rootReducer,

    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
  );
  return store;
};

export default configureStore;
