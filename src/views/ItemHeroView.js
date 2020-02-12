import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  FlatList,
  ToastAndroid,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Card, ListItem, Button, Divider, Alert} from 'react-native-elements';
import Hero from '../models/Hero';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import HeroDetailView from './HeroDetailView';
import {withNavigation} from 'react-navigation';

const ItemHeroView = props => {
  //  const navigate = props.navigate;

  const [appliedJobstate, setAppliedJobstate] = useState([]);
  const [visitedstate, setVisitedState] = useState([]);

  return (
    <View style={styles.container}>
      <FlatList
        data={props.heroes}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <View style={styles.cardView}>
            <View style={styles.contentView}>
              <TouchableOpacity
                onPress={() => {
                  props.navigation.navigate('HeroDetailView', {
                    itemId: item.id,
                  });
                }}>
                <View style={styles.viewForRow}>
                  <Image style={styles.heroImage} source={{uri: item.image}} />
                  <View>
                    <Text style={styles.title}> {item.name}</Text>
                    <Text> {item.secondary}</Text>
                  </View>
                </View>
                <View>
                  <Text style={styles.description}>{item.description}</Text>
                  <Text style={styles.description}>
                    {'Difficulty Level: ' + item.difficulty}
                  </Text>
                </View>
                <Divider style={styles.divider} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setVisitedState([...visitedstate, item.id]);
                }}>
                {visitedstate.includes(item.id) == false && (
                  <View style={styles.viewForVisited}>
                    <View style={styles.viewForRow}>
                      <MaterialIcons name={'done'} size={20} />
                      <Text> Already Visited</Text>
                    </View>
                    <View style={styles.viewForRow}>
                      <MaterialIcons name={'save'} size={20} />
                      <MaterialIcons name={'cancel'} size={20} />
                    </View>
                  </View>
                )}
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              onPress={() => {
                setAppliedJobstate([...appliedJobstate, item.id]);
              }}>
              {appliedJobstate.includes(item.id) == false && (
                <View style={styles.viewForApply}>
                  <Text> Already Visited</Text>

                  <View style={styles.viewForRow}>
                    <Text style={styles.text}>Yes</Text>
                    <Text style={styles.text}>No</Text>
                  </View>
                </View>
              )}
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    elevation: 0,
  },
  cardView: {
    margin: 10,
    flexDirection: 'column',
    backgroundColor: 'white',
    borderRadius: 5,
    elevation: 1,
  },
  contentView: {
    margin: 3,
    padding: 5,
  },
  viewForRow: {
    padding: 5,
    flexDirection: 'row',
  },
  heroImage: {
    height: 40,
    width: 40,
    borderRadius: 40 / 2,
  },
  title: {
    fontWeight: 'bold',
    fontFamily: 'sans-serif-medium',
  },
  description: {
    fontFamily: 'sans-serif-light',
  },
  viewForVisited: {
    justifyContent: 'space-between',
    padding: 5,
    flexDirection: 'row',
  },
  viewForApply: {
    backgroundColor: 'gainsboro',
    justifyContent: 'space-between',
    padding: 5,
    flexDirection: 'column',
  },
  text: {
    marginStart: 10,
  },
  divider: {
    backgroundColor: 'black',
    marginTop: 10,
  },
});

export default withNavigation(ItemHeroView);
