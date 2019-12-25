import React, { FunctionComponent } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Todo } from 'src/types';

interface Props {
  items: Todo[];
  toggleTodo: (id: number) => void;
}

const TodoList: FunctionComponent<Props> = ({ items, toggleTodo }) => (
  <View style={{ padding: 20 }}>
    {items.map(item => (
      <TouchableOpacity key={item.id} onPress={() => toggleTodo(item.id)}>
        <Text
          style={{
            fontSize: 24,
            textDecorationLine: item.completed ? 'line-through' : 'none',
          }}>
          {item.text}
        </Text>
      </TouchableOpacity>
    ))}
  </View>
);
export default TodoList;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
