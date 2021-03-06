/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState} from 'react';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import ListHeroesView from './src/views/ListHeroesView';
import SignUp from './src/views/SignUp';
import LogIn from './src/views/LogIn';
import SplashView from './src/views/SplashView';
import BottomNavigationView from './src/views/BottomNavigationView';
import HeroDetailView from './src/views/HeroDetailView';
import StepIndicatorView from './src/views/StepIndicatorView';

import {UserProvider} from './src/contextApi/UserContext';

import AccessAsyncStore from './src/utils/AccessAsyncStore';

const splashNavigator = createStackNavigator({
  SplashView: {
    screen: SplashView,
    navigationOptions: {
      headerShown: false,
    },
  },
  BottomNavigationView: {
    screen: BottomNavigationView,
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
  HeroDetailView: {
    screen: HeroDetailView,
    navigationOptions: {
      headerShown: true,
    },
  },
  StepIndicatorView: {
    screen: StepIndicatorView,
    navigationOptions: {
      headerShown: true,
    },
  },
});

const App = createAppContainer(splashNavigator);

export default () => (
  <UserProvider>
    <App />
  </UserProvider>
);
