import { createStore, Store } from 'redux';
import rootReducer from '../reducers';
import { ApplicationState } from 'src/types';

const configureStore = (): Store<ApplicationState> => {
  const store = createStore(rootReducer);
  return store;
};

export default configureStore;
