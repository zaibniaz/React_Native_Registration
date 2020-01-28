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

import InputField from '../components/InputField';

type Props = {};
class Login extends Component<Props> {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }

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

  LogIn = () => {
    const {email, password} = this.state;
    try {
      let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (reg.test(email) === false) {
        alert('Email is Not Correct');
        return false;
      } else if (reg.test(email) === true) {
        alert('Email is Correct');
      }
      if (password.length < 8) {
        alert('Pasword is Not Valid');
        return false;
      } else {
        alert('Pasword is Correct');
      }
    } catch (error) {
      alert(error);
    }
  };

  render() {
    return (
      <View>
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
                type="email"
                hint="email"
                issecureText="false"
                onChangeText={text => this.handleEmailChange(text)}
              />
              <InputField
                type="password"
                hint="pasword"
                issecureText="true"
                onChangeText={text => this.handlePasswordChange(text)}
              />
              <TouchableOpacity style={styles.buttonStyle} onPress={this.LogIn}>
                <Text style={styles.signInText}>Sign In</Text>
              </TouchableOpacity>
              <View style={styles.signUpViewContainer}>
                <Text style={styles.messageText}>Don't have an acount?</Text>
                <TouchableOpacity onPress={this.LogIn}>
                  <Text style={styles.signUpText}>Sign Up</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    height: '100%',
  },

  upperPortion: {
    alignSelf: 'center',
    height: '50%',
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
    height: '50%',
  },
  inputFieldError: {
    borderColor: 'red',
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
    marginRight: '7%',
    alignSelf: 'center',
    fontSize: 20,
    fontFamily: 'sfui_text_bold',
    color: '#822D8C',
    textDecorationLine: 'underline',
  },
});

export default Login;
