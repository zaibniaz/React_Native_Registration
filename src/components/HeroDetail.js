import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const HeroDetail = props => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: props.hero.image}} />
      <Text> {props.hero.name}</Text>
      <Text> {props.hero.description}</Text>
      <Text> {props.hero.role}</Text>
      <Text> {props.hero.difficulty}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 16,
    justifyContent: 'space-around',
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    width: 150,
    alignSelf: 'center',
    height: 150,
    borderRadius: 150 / 2,
    overflow: 'hidden',
    borderWidth: 3,
    borderColor: 'red',
  },
});

export default HeroDetail;
