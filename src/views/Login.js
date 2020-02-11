/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState} from 'react';

import {
  StyleSheet,
  View,
  Image,
  TextInput,
  ScrollView,
  Button,
  Text,
  TouchableOpacity,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import Helper from '../utils/Helper';

import InputField from '../components/InputField';

const LogIn = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorForInvalidEmail, seterrorForInvalidEmail] = useState('false');
  const [errorForInvalidPassword, seterrorForInvalidPassword] = useState(
    'false',
  );

  const logIn = () => {
    //Validating Email From Helper Class and notifying state
    seterrorForInvalidEmail(Helper.isEmailNotValid(email) ? 'true' : 'false');
    //Validating PAssword From Helper Class and notifying state
    seterrorForInvalidPassword(
      Helper.isPasswordNotValid(password) ? 'true' : 'false',
    );

    if (!errorForInvalidEmail && !errorForInvalidPassword) {
      props.navigation.replace('BottomNavigationView')
      alert('Successfully LoggedIn', [
        {
          text: 'OK',
          onPress: () => props.navigation.replace('BottomNavigationView'),
        },
      ]);
    }
  };

  const handleEmailChange = text => {
    setEmail(text);
  };

  const handlePasswordChange = text => {
    setPassword(text);
  };

  navigateToSignUp = () => {
    props.navigation.navigate('SignUp');
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        keyboardShouldPersistTaps="always">
        <View style={styles.upperPortion}>
          <Image
            style={styles.logo}
            source={require('../assets/images/ic_launcher_round.png')}
          />
          <Text style={styles.heading}>Amplifyd</Text>
          <Text style={styles.description}>Let’s Get You Connected</Text>
        </View>
        <View style={styles.lowerPortion}>
          <InputField
            showError={errorForInvalidEmail}
            type="email"
            hint="email"
            issecureText="false"
            onChangeText={text => handleEmailChange(text)}
          />
          <InputField
            showError={errorForInvalidPassword}
            type="password"
            hint="pasword"
            issecureText="true"
            onChangeText={text => handlePasswordChange(text)}
          />

          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={logIn.bind(this)}>
            <Text style={styles.signInText}>Sign In</Text>
          </TouchableOpacity>
          <View style={styles.signUpViewContainer}>
            <Text style={styles.messageText}>Don't have an acount?</Text>
            <TouchableOpacity onPress={navigateToSignUp}>
              <Text style={styles.signUpText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
  },

  upperPortion: {
    alignSelf: 'center',
    flex: 0.5,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  logo: {
    alignSelf: 'center',
    height: 100,
    width: 100,
  },
  heading: {
    marginTop: '3%',
    alignSelf: 'center',
    fontSize: 24,
    fontFamily: 'sfui_text_bold',
  },
  description: {
    marginTop: '3%',
    alignSelf: 'center',
    fontSize: 20,
    fontFamily: 'sfui_text_bold',
    color: 'grey',
  },
  lowerPortion: {
    flexDirection: 'column',
    width: '100%',
    flex: 0.5,
  },

  buttonStyle: {
    marginTop: '3%',
    padding: 10,
    width: '50%',
    alignSelf: 'center',
    backgroundColor: '#822D8C',
    borderRadius: 5,
  },
  signInText: {
    alignSelf: 'center',
    fontSize: 16,
    fontFamily: 'sfui_text_bold',
    color: 'white',
  },
  signUpViewContainer: {
    marginTop: '7%',
    justifyContent: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  messageText: {
    fontSize: 14,
    fontFamily: 'sfui_text_bold',
    color: 'grey',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  signUpText: {
    marginRight: '5%',
    alignSelf: 'center',
    fontSize: 20,
    fontFamily: 'sfui_text_bold',
    color: '#822D8C',
    textDecorationLine: 'underline',
  },
});

export default LogIn;
