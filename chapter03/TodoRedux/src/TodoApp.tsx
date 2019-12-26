import React, { FunctionComponent } from 'react';
import { View, StyleSheet } from 'react-native';
import TodoList from './components/TodoList';

import AddTodo from './containers/AddTodo';

const TodoApp: FunctionComponent = () => {
  return (
    <View style={styles.container}>
      <AddTodo />
      <View>
        <TodoList />
      </View>
    </View>
  );
};

export default TodoApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
});
