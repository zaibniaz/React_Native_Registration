/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';

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
import {Snackbar} from 'react-native-paper';

import Helper from '../utils/Helper';

import InputField from '../components/InputField';

type Props = {};
class LogIn extends Component<Props> {
  static navigationOptions = {
    headerShown: false,
  };

  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      errorForInvalidEmail: 'false',
      errorForInvalidPassword: 'false',
    };
  }

  logIn = () => {
    const {email, password} = this.state;

    this.setState({
      //Validating Email From Helper Class and notifying state
      errorForInvalidEmail: Helper.isEmailValid(email) ? 'true' : 'false',
      //Validating PAssword From Helper Class and notifying state
      errorForInvalidPassword: Helper.isPasswordValid(password)
        ? 'true'
        : 'false',
    });
    if (
      !this.state.errorForInvalidEmail &&
      !this.state.errorForInvalidPassword
    ) {
      alert(
        'Email is =' +
          this.state.errorForInvalidEmail +
          '\n' +
          'Password is =' +
          this.state.errorForInvalidPassword,
      );
    }
  };

  handleEmailChange(text) {
    this.setState({
      email: text,
    });
  }

  handlePasswordChange(text) {
    this.setState({
      password: text,
    });
  }

  navigateToSignUp = () => {
    this.props.navigation.navigate('SignUp');
  };

  render() {
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
              showError={this.state.errorForInvalidEmail}
              type="email"
              hint="email"
              issecureText="false"
              onChangeText={text => this.handleEmailChange(text)}
            />
            <InputField
              showError={this.state.errorForInvalidPassword}
              type="password"
              hint="pasword"
              issecureText="true"
              onChangeText={text => this.handlePasswordChange(text)}
            />
            <TouchableOpacity style={styles.buttonStyle} onPress={this.logIn}>
              <Text style={styles.signInText}>Sign In</Text>
            </TouchableOpacity>
            <View style={styles.signUpViewContainer}>
              <Text style={styles.messageText}>Don't have an acount?</Text>
              <TouchableOpacity onPress={this.navigateToSignUp}>
                <Text style={styles.signUpText}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

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
