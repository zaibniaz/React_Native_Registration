import React from 'react';

import {StyleSheet, View, Button, Text, Alert} from 'react-native';

const NetworkErrorView = props => {
  const onButtonPressed = () => {
    props.onButtonPressed();
  };
  return (
    <View style={[styles.container]}>
      <Text style={styles.errorText}>{props.message}</Text>
      <Button
        color="red"
        title="Try again"
        onPress={() => {
          onButtonPressed();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    margin: 20,
    justifyContent: 'center',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
    fontSize: 17,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  errorButton: {
    width: '40%',
  },
});

export default NetworkErrorView;
