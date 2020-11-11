import React, { useState } from 'react';
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

const Form = ({ submitHandler }) => {
  const [text, setText] = useState('');

  const changeHandler = (val) => {
    setText(val);
  };

  return (
    <View>
      <TextInput
      value={text}
        style={styles.input}
        placeholder="add new Todo"
        keyboardType="default"
        onChangeText={changeHandler}
      />

      <TouchableOpacity
        style={styles.addbtn}
        onPress={() => {
          submitHandler(text);
          setText('')
        }}>
        <Text style={styles.text}>Add Todo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    borderBottomColor: 'coral',
    margin: 20,
    padding: 10,
    fontSize: 15,
    fontStyle: 'italic',
  },
  addbtn: {
    height: 40,
    width: 120,
    backgroundColor: 'coral',
    borderRadius: 8,
    marginLeft: 20,
  },
  text: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    padding: 6,
    fontWeight: 'bold',
  },
});

export default Form;
