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

import LogIn from './src/views/LogIn';
import SignUp from './src/views/SignUp';

const AppNavigator = createStackNavigator({
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
});

const App = createAppContainer(AppNavigator);

export default App;
