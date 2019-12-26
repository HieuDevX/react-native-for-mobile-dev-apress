/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { FunctionComponent } from 'react';
import { Provider } from 'react-redux';
import configureStore from './src/store';

import TodoApp from './src/TodoApp';

//  @ts-ignore
// if (process.env.NODE_ENV !== 'production') {
//   const whyDidYouRender = require('@welldone-software/why-did-you-render');
//   whyDidYouRender(React, { include: ['TodoList', 'AddTodo', 'TodoApp'] });
// }

declare var global: { HermesInternal: null | {} };

const store = configureStore();

const App: FunctionComponent = () => (
  <Provider store={store}>
    <TodoApp />
  </Provider>
);

export default App;
