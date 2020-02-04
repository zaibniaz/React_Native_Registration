import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  ToastAndroid,
  View,
  Button,
} from 'react-native';
import Hero from '../models/Hero';

import {getAllHeroes} from '../networking/APIController';

import ItemHeroView from './ItemHeroView';

const ListHeroesView = props => {
  const [heroes, setHeroes] = useState([]);

  const [fetchedData] = getAllHeroes();

  fetchedData
    ? fetchedData.isError
      ? console.log('error')
      : fetchedData.result.then(data => {
          setHeroes(data);
          console.log(fetchedData.message);
        })
    : [];

  return (
    <View style={styles.container}>
      <ItemHeroView heroes={heroes} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
export default ListHeroesView;
