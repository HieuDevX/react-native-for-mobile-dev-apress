import React, { FunctionComponent } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ApplicationState } from '../types';
import { toggleTodo } from '../actions';
import { ConnectedProps, connect } from 'react-redux';
import { Dispatch } from 'redux';

const mapStateToProps = (store: ApplicationState) => ({
  items: store.todos.items,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  toggleTodo: (id: number) => dispatch(toggleTodo(id)),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux;

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

export default connector(TodoList);
