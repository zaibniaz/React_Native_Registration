/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState, useEffect} from 'react';

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

import CustomButton from '../components/CustomButton';

import Helper from '../utils/Helper';

import DateTimePicker from '@react-native-community/datetimepicker';

import moment from 'moment';

import Icon from 'react-native-vector-icons/FontAwesome';

import AccessAsyncStore from '../utils/AccessAsyncStore';

import User from '../models/User';

const SignUp = props => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorForInvalidfullName, setErrorForInvalidfullName] = useState(
    'false',
  );
  const [errorForInvalidEmail, setErrorForInvalidEmail] = useState('false');
  const [errorForInvalidPassword, setErrorForInvalidPassword] = useState(
    'false',
  );
  const [isSelected, setIsSelected] = useState(true);
  const [data, setData] = useState({data: null});

  const navigateToLogIn = () => {
    props.navigation.navigate('LogIn');
  };

  // useEffect(() => {
  //   alert(data);
  // }, [data]);

  const handleEmailChange = text => {
    setEmail(text);
  };

  const changeGender = value => {
    setIsSelected(value);
  };

  const handlePasswordChange = text => {
    setPassword(text);
  };

  const handleFullNameChange = text => {
    setFullName(text);
  };

  const makeSignUp = () => {
    //Validating Name From Helper Class and notifying state
    setErrorForInvalidfullName(Helper.isNameValid(fullName));
    //Validating Email From Helper Class and notifying state
    setErrorForInvalidEmail(Helper.isEmailNotValid(email));
    //Validating PAssword From Helper Class and notifying state
    setErrorForInvalidPassword(Helper.isPasswordNotValid(password));

    if (
      errorForInvalidfullName &&
      errorForInvalidEmail &&
      errorForInvalidPassword
    ) {
      const user_object = {
        fullName,
        email,
        password,
      };

      AccessAsyncStore.storeItem('user', new User(user_object));
      props.navigation.navigate('BottomNavigationView');
      alert('Successfully Signed Up', [
        {
          text: 'OK',
          onPress: () => props.navigation.replace('BottomNavigationView'),
        },
      ]);
    }
  };

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
            showError={errorForInvalidfullName}
            type="fullName"
            hint="Full Name"
            issecureText="false"
            onChangeText={text => handleFullNameChange(text)}
          />
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

          <Text style={styles.genderSelectionTitle}>Select your Gender</Text>
          <View style={styles.genderSelectionView}>
            <CustomButton
              textColor={isSelected ? 'white' : 'black'}
              backgroundColor={isSelected ? '#822D8C' : '#A9A9A9'}
              name="Male"
              selected={true}
              changeGender={text => changeGender.bind(this, text)}
            />
            <CustomButton
              textColor={isSelected ? 'black' : 'white'}
              backgroundColor={isSelected ? '#A9A9A9' : '#822D8C'}
              name="Female"
              selected={false}
              changeGender={text => changeGender.bind(this, text)}
            />
          </View>

          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={makeSignUp.bind(this)}>
            <Text style={styles.signInText}>Sign Up</Text>
          </TouchableOpacity>

          <View style={styles.signUpViewContainer}>
            <Text style={styles.messageText}>Already have an acount?</Text>

            <TouchableOpacity onPress={navigateToLogIn}>
              <Text style={styles.signUpText}>Log In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

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
    marginTop: '5%',
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
  genderSelectionView: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    marginTop: 10,
  },
  genderSelectionTitle: {
    marginStart: 16,
    fontSize: 14,
    fontFamily: 'sfui_text_bold',
    color: 'black',
  },
});

export default SignUp;
