import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  FlatList,
  ToastAndroid,
  View,
  TouchableOpacity,
  Image,
  RefreshControl,
} from 'react-native';
import {Card, ListItem, Button, Divider, Alert} from 'react-native-elements';
import Hero from '../models/Hero';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import HeroDetailView from './HeroDetailView';
import {withNavigation} from 'react-navigation';

const ItemHeroView = props => {
  const [appliedJobstate, setAppliedJobstate] = useState([]);
  const [visitedstate, setVisitedState] = useState([]);
  //console.log('Item Hero View');
  return (
    <View style={styles.container}>
      <View style={styles.cardView}>
        <View style={styles.contentView}>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('HeroDetailView', {
                itemId: props.hero.id,
              });
            }}>
            <View style={styles.viewForRow}>
              <Image
                style={styles.heroImage}
                source={{uri: props.hero.image}}
              />
              <View>
                <Text style={styles.title}> {props.hero.name}</Text>
                <Text> {props.hero.secondary}</Text>
              </View>
            </View>
            <View>
              <Text style={styles.description}>{props.hero.description}</Text>
              <Text style={styles.description}>
                {'Difficulty Level: ' + props.hero.difficulty}
              </Text>
            </View>
            <Divider style={styles.divider} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setVisitedState([...visitedstate, props.hero.id]);
            }}>
            {visitedstate.includes(props.hero.id) == false && (
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
            setAppliedJobstate([...appliedJobstate, props.hero.id]);
          }}>
          {appliedJobstate.includes(props.hero.id) == false && (
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
