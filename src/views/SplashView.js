import {StyleSheet, View, Image, Alert} from 'react-native';
import React from 'react';

import BottomNavigationView from './BottomNavigationView';
import SignUp from './SignUp';
import LogIn from './LogIn';
import User from '../models/User';

import AccessAsyncStore from '../utils/AccessAsyncStore';

const SplashView = props => {
  setTimeout(() => {
    AccessAsyncStore.getItem('user')
      .then((res, err) => {
        if (res != null) {
          let user = new User(JSON.parse(res));
          /// alert(user.fullName);
          if (user.email === '') props.navigation.replace('SignUp');
          else props.navigation.replace('BottomNavigationView');
        } else props.navigation.replace('SignUp');

        //
      })
      .catch(error => {
        console.log(error);
        alert(error);
      });
  }, 2000);

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../assets/images/ic_launcher_round.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: 100,
    width: 100,
  },
});

export default SplashView;
