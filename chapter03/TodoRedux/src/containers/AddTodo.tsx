import React, { FunctionComponent, useState, useCallback } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { connect, ConnectedProps } from 'react-redux';
import { addTodo } from '../actions';
import { ApplicationState } from 'src/types';
import Icon from 'react-native-vector-icons/MaterialIcons';

const mapStateToProps = (store: ApplicationState) => ({});

const mapDispatchToProps = (dispatch: any) => {
  return {
    addTodo: (text: string) => dispatch(addTodo(text)),
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux;

const AddTodo: FunctionComponent<Props> = props => {
  const [text, setText] = useState<string>('');

  const handleAddTodo = useCallback(() => {
    console.log(`handle add`, text);
    props.addTodo(text);
    setText('');
  }, [text]);

  const handleTextChange = useCallback(text => {
    setText(text);
  }, []);

  return (
    <View style={{ flexDirection: 'row', marginHorizontal: 20 }}>
      <TextInput
        onChangeText={handleTextChange}
        value={text}
        placeholder="Eg. Add something just like this"
        style={{
          borderWidth: 1,
          borderColor: '#f2f2e1',
          backgroundColor: '#eaeaea',
          height: 50,
          flex: 1,
          padding: 5,
        }}
        onSubmitEditing={handleAddTodo}
      />
      <TouchableOpacity onPress={handleAddTodo}>
        <View
          style={{
            height: 50,
            backgroundColor: '#eaeaea',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Icon name="add" size={20} color="#de9595" style={{ padding: 10 }} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default connector(AddTodo);
