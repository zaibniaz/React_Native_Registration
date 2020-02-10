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
import LogIn from './src/views/LogIn';
import SplashView from './src/views/SplashView';
import BottomNavigationView from './src/views/BottomNavigationView';

const splashNavigator = createStackNavigator({
  BottomNavigationView: {
    screen: BottomNavigationView,
    navigationOptions: {
      headerShown: true,
    },
  },
  SplashView: {
    screen: SplashView,
    navigationOptions: {
      headerShown: false,
    },
  },
  LogIn: {
    screen: LogIn,
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
  ListHeroesView: {
    screen: ListHeroesView,
    navigationOptions: {
      headerShown: false,
    },
  },
});

const App = createAppContainer(splashNavigator);

export default App;
