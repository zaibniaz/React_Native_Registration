import React from 'react';

import {StyleSheet, View, Text} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

const InputField = props => {
  //CallBack to Parent Class with params text on changed
  const onChangeSelection = text => props.changeGender(text);

  return (
    <Icon.Button
      styles={styles.button}
      color={props.textColor}
      name={props.selected ? 'male' : 'female'}
      onPress={onChangeSelection(props.selected)}
      backgroundColor={props.backgroundColor}>
      <Text style={{color: props.textColor, padding: 2}}>{props.name}</Text>
    </Icon.Button>
  );
};

const styles = StyleSheet.create({
  button: {},
});

export default InputField;
