import React, {useState} from 'react';
import {StyleSheet, Text, FlatList, ToastAndroid, View} from 'react-native';
import {Card, ListItem, Button, Icon} from 'react-native-elements';
import Hero from '../models/Hero';

const ItemHeroView = props => {
  const [heroes, setHeroes] = useState('');

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.container}
        data={props.heroes}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <View style={styles.cardView}>
            <Text> {item.name}</Text>
            <Text> {item.heroPowers}</Text>
            <Text> {item.heroId}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    elevation: 0,
    margin: 5,
  },
  cardView: {
    flexDirection: 'column',
    backgroundColor: 'white',
    padding: 10,
    marginTop: 7,
    borderRadius: 5,
    elevation: 1,
  },
});
export default ItemHeroView;
