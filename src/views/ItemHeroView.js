import React from 'react';
import {
  StyleSheet,
  Text,
  FlatList,
  ToastAndroid,
  View,
  TouchableOpacity,
} from 'react-native';
import {Card, ListItem, Button, Icon} from 'react-native-elements';
import Hero from '../models/Hero';

import HeroDetailView from './HeroDetailView';
import {withNavigation} from 'react-navigation';

const ItemHeroView = props => {
  //  const navigate = props.navigate;

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.container}
        data={props.heroes}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => {
              // ToastAndroid.show('Item To Delete' + item.id, ToastAndroid.SHORT);
              props.navigation.navigate('HeroDetailView', {
                itemId: item.id,
              });
            }}>
            <View style={styles.cardView}>
              <Text> {item.name}</Text>
              <Text> {item.id}</Text>
              <Text> {item.difficulty}</Text>
            </View>
          </TouchableOpacity>
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
export default withNavigation(ItemHeroView);
