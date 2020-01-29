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
import Helper from '../utils/Helper';

import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';

type Props = {};
class SignUp extends Component<Props> {
  static navigationOptions = {
    headerShown: false,
  };

  constructor() {
    super();
    this.state = {
      fullName: '',
      email: '',
      password: '',
      errorForInvalidfullName: 'false',
      errorForInvalidEmail: 'false',
      errorForInvalidPassword: 'false',
      date: new Date('2020-06-12T14:42:42'),
      show: false,
    };
  }

  setDate = (event, date) => {
    date = date || this.state.date;

    this.setState({
      show: Platform.OS === 'ios' ? true : false,
      date,
    });
  };

  datepicker = () => {
    this.show('date');
  };
  show = () => {
    this.setState({
      show: true,
    });
  };

  navigateToLogIn = () => {
    this.props.navigation.navigate('LogIn');
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

  handleFullNameChange(text) {
    this.setState({
      fullName: text,
    });
  }

  LogIn = () => {
    const {fullName, email, password} = this.state;

    this.setState({
      //Validating Name From Helper Class and notifying state
      errorForInvalidfullName: Helper.isNameValid(fullName) ? 'true' : 'false',
      //Validating Email From Helper Class and notifying state
      errorForInvalidEmail: Helper.isEmailValid(email) ? 'true' : 'false',
      //Validating PAssword From Helper Class and notifying state
      errorForInvalidPassword: Helper.isPasswordValid(password)
        ? 'true'
        : 'false',
    });

    if (
      !this.state.errorForInvalidfullNam &&
      !this.state.errorForInvalidEmail &&
      !this.state.errorForInvalidPassword
    ) {
      alert(
        ' Full Name is =' +
          this.state.errorForInvalidfullName +
          '\n' +
          'Email is =' +
          this.state.errorForInvalidEmail +
          '\n' +
          'Password is =' +
          this.state.errorForInvalidPassword,
      );
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.scrollView}
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
              showError={this.state.errorForInvalidfullName}
              type="fullName"
              hint="Full Name"
              issecureText="false"
              onChangeText={text => this.handleFullNameChange(text)}
            />
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
            <View>
              <Button onPress={this.datepicker} title={'Show date picker!'} />

              <Text style={styles.description}>
                {moment.utc(this.state.date).format('MM/DD/YYYY')}
              </Text>
            </View>

            {this.state.show && (
              <DateTimePicker
                value={this.state.date}
                mode={'date'}
                is24Hour={true}
                display="default"
                onChange={this.setDate}
              />
            )}

            <TouchableOpacity style={styles.buttonStyle} onPress={this.LogIn}>
              <Text style={styles.signInText}>Sign Up</Text>
            </TouchableOpacity>

            <View style={styles.signUpViewContainer}>
              <Text style={styles.messageText}>Already have an acount?</Text>

              <TouchableOpacity onPress={this.navigateToLogIn}>
                <Text style={styles.signUpText}>Log In</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
  },
  container: {
    flexDirection: 'column',
    flex: 1,
  },

  upperPortion: {
    alignSelf: 'center',
    height: 270,
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
    marginBottom: 10,
    flexDirection: 'column',
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
    marginRight: '5%',
    alignSelf: 'center',
    fontSize: 20,
    fontFamily: 'sfui_text_bold',
    color: '#822D8C',
    textDecorationLine: 'underline',
  },
});

export default SignUp;
