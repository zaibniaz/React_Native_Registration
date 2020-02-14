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

import {getAllHeroes} from '../networking/APIController';

import ItemHeroView from './ItemHeroView';
import Constants from '../utils/Constants';

const ListHeroesView = props => {
  const [isRefreshing, setRefreshing] = useState(false);
  const [isLoading, fetchedData] = getAllHeroes(Constants.API_URL, [
    isRefreshing,
  ]);

  return (
    <View style={styles.container}>
      {isLoading && <ContentLoader />}
      <View>
        <FlatList
          data={
            !isLoading && fetchedData != null
              ? fetchedData.isError
                ? alert(fetchedData.message)
                : fetchedData.result
              : []
          }
          key={item => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => {
            return <ItemHeroView hero={item} navigate={props.navigate} />;
          }}
          refreshControl={
            <RefreshControl
              colors={['#9Bd35A', '#689F38']}
              refreshing={isLoading}
              onRefresh={() => {
                //  setRefreshing(true);
                setRefreshing(isRefreshing ? false : true);
                //  console.log(isRefreshing);
                console.log(isLoading);
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
