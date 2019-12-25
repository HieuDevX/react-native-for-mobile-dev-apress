import React, { FunctionComponent, useState, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Button,
} from 'react-native';
// import { Ionicons } from '@expo/vector-icons'
import { bindActionCreators, Dispatch, ActionCreatorsMapObject } from 'redux';
import { connect, ConnectedProps } from 'react-redux';
import { addTodo } from '../actions';
import { ApplicationState, Actions, ActionTypes } from 'src/types';

const mapStateToProps = (store: ApplicationState) => ({});

// const mapDispatchToProps = (dispatch: Dispatch<Actions>) =>
//   bindActionCreators(
//     {
//       addTodo: ActionTypes.ADD_TODO,
//     },
//     dispatch,
//   );

const mapDispatchToProps = {
  addTodo: (text: string) => ({ type: ActionTypes.ADD_TODO }),
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux;

const AddTodo: FunctionComponent<Props> = props => {
  const [text, setText] = useState<string>('');

  const addTodo = useCallback(() => {
    props.addTodo(text);
    setText('');
  }, [props]);

  const handleChangeText = useCallback((text: string) => {
    setText(text);
  }, []);

  return (
    <View style={{ flexDirection: 'row', marginHorizontal: 20 }}>
      <TextInput
        onChangeText={handleChangeText}
        value={text}
        placeholder="Eg. Create New Video"
        style={{
          borderWidth: 1,
          borderColor: '#f2f2e1',
          backgroundColor: '#eaeaea',
          height: 50,
          flex: 1,
          padding: 5,
        }}
      />
      {/* <TouchableOpacity onPress={() => this.addTodo(this.state.text)}> */}
      <TouchableOpacity onPress={addTodo}>
        <View
          style={{
            height: 50,
            backgroundColor: '#eaeaea',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          {/* <Ionicons name="md-add" size={30} style={{ color: '#de9595', padding: 10 }} /> */}
          <Button title="+" onPress={() => {}} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default connector(AddTodo);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
