/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {View} from 'react-native';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import ListHeroesView from './src/views/ListHeroesView';
import SignUp from './src/views/SignUp';

const AppNavigator = createStackNavigator({
  LogIn: {
    screen: ListHeroesView,
    navigationOptions: {
      headerShown: false,
    },
  },
  SignUp: {
    screen: SignUp,
    navigationOptions: {
      headerShown: false,
    },
  },
});

const App = createAppContainer(AppNavigator);

export default App;
