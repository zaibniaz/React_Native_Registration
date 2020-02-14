import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  ToastAndroid,
  View,
  Button,
  FlatList,
  Alert,
  RefreshControl,
} from 'react-native';
import Hero from '../models/Hero';
import ContentLoader from '../components/ContentLoader';
import NetworkErrorView from '../components/NetworkErrorView';

import {getAllHeroes} from '../networking/APIController';

import ItemHeroView from './ItemHeroView';
import Constants from '../utils/Constants';
import NetInfo from '@react-native-community/netinfo';

const ListHeroesView = props => {
  const [isRefreshing, setRefreshing] = useState(true);

  const [isLoading, fetchedData] = getAllHeroes(Constants.API_URL, [
    isRefreshing,
  ]);

  return (
    <View style={styles.container}>
      {isLoading && fetchedData === null && <ContentLoader />}

      {!isLoading && fetchedData != null && fetchedData.isError && (
        <NetworkErrorView
          message={fetchedData.message}
          onButtonPressed={() => {
            setRefreshing(!isRefreshing);
          }}
        />
      )}

      <View>
        <FlatList
          data={fetchedData != null && fetchedData.result}
          key={item => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => {
            setRefreshing(false);
            return <ItemHeroView hero={item} navigate={props.navigate} />;
          }}
          refreshControl={
            <RefreshControl
              colors={['#9Bd35A', '#689F38']}
              refreshing={isRefreshing}
              onRefresh={() => {
                setRefreshing(true);
              }}
            />
          }
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default ListHeroesView;
