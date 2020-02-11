import {View, Text, StyleSheet} from 'react-native';
import React, {useState, useEffect} from 'react';

import ContentLoader from '../components/ContentLoader';

import {getAllHeroes} from '../networking/APIController';

import HeroDetail from '../components/HeroDetail';

const HeroDetailView = props => {
  const {state} = props.navigation;

  const [isLoading, fetchedData] = getAllHeroes(
    Constants.API_URL + '/' + state.params.itemId,
  );

  return (
    <View style={styles.container}>
      {isLoading && <ContentLoader />}
      {!isLoading && (
        <HeroDetail
          hero={
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
  },
});

export default HeroDetailView;
