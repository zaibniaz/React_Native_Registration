import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  ToastAndroid,
  View,
  Button,
  Alert,
} from 'react-native';
import Hero from '../models/Hero';
import ContentLoader from '../components/ContentLoader';

import {getAllHeroes} from '../networking/APIController';

import ItemHeroView from './ItemHeroView';

const ListHeroesView = props => {
  const [isLoading, fetchedData] = getAllHeroes();

  return (
    <View style={styles.container}>
      {isLoading && <ContentLoader />}
      {!isLoading && (
        <ItemHeroView
          heroes={
            fetchedData
              ? fetchedData.isError
                ? alert(fetchedData.message)
                : fetchedData.result
              : []
          }
        />
      )}
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
