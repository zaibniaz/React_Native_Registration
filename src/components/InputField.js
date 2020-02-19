import React, {Component} from 'react';
import {StyleSheet, View, TextInput, ScrollView} from 'react-native';

const InputField = props => {
  //CallBack to Parent Class with params text on changed
  const onChangeText = text => props.onChangeText(text);

  return (
    <View>
      <TextInput
        style={props.isValid ? styles.textInput : styles.errorField}
        secureTextEntry={props.issecureText == true ? true : false}
        textContentType={props.type == 'email' ? 'emailAddress' : 'password'}
        placeholder={props.hint}
        placeholderTextColor="grey"
        onChangeText={text => onChangeText(text)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    padding: 10,
    borderRadius: 10,
    borderColor: 'grey',
    borderWidth: 1,
    margin: 10,
    height: 50,
  },
  errorField: {
    padding: 10,
    borderRadius: 10,
    borderColor: 'red',
    borderWidth: 1,
    margin: 10,
    height: 50,
  },
});

export default InputField;
