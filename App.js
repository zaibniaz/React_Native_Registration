/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {View, SafeAreaView, StatusBar} from 'react-native';

import Login from './src/views/Login';

const App: () => React$Node = () => {
  return (
    <View>
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
      <Login />
      </SafeAreaView>
    </View>
  );
};

export default App;
