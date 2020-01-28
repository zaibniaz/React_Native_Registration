import React, {Component} from 'react';

import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  StatusBar,
  ScrollView,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

class InpuField extends Component {
  render() {
    const {value} = this.props;
    return (
      <View>
        <TextInput
          style={styles.textInput}
          placeholder={value}
          placeholderTextColor="#7a42f4"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    padding: 10,
    borderRadius: 10,
    borderColor: '#7a42f4',
    borderWidth: 1,
    margin: 10,
    height: 50,
    backgroundColor: Colors.white,
  },
});

export default InpuField;
