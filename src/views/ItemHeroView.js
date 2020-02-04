import React, {useState} from 'react';
import {StyleSheet, Text, FlatList, ToastAndroid, View} from 'react-native';
import Hero from '../models/Hero';

const ItemHeroView = props => {
  const [heroes, setHeroes] = useState('');

  return (
    <View style={styles.container}>
      <FlatList
        data={props.heroes}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <View style={styles.flatview}>
            <Text style={styles.name}>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  h2text: {
    marginTop: 10,
    fontFamily: 'Helvetica',
    fontSize: 36,
    fontWeight: 'bold',
  },
  flatview: {
    justifyContent: 'center',
    paddingTop: 30,
    borderRadius: 2,
  },
  name: {
    fontFamily: 'Verdana',
    fontSize: 18,
  },
  email: {
    color: 'red',
  },
});
export default ItemHeroView;
