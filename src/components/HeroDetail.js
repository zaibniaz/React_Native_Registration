import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, ActivityIndicator} from 'react-native';
import {UserContext} from '../contextApi/UserContext';

const HeroDetail = props => {
  const [isLoading, setLoading] = useState(true);

  //   const handleClose = reason => {
  //     if (reason === true) {
  //       return;
  //     }
  //     setLoading(false);
  //   };

  return (
    <UserContext.Consumer>
      {context => {
        const {userState} = context;
        //   console.log(userState.fullName);
        return (
          <View style={styles.container}>
            <View>
              <Image
                style={styles.image}
                //   onLoadEnd={handleClose(false)}
                source={{uri: props.hero.image}}
              />

              {/* <ActivityIndicator
            style={styles.activityIndicator}
            animating={isLoading}
          /> */}
            </View>

            <Text> {userState.fullName}</Text>
            <Text> {props.hero.description}</Text>
            <Text> {props.hero.role}</Text>
            <Text> {props.hero.difficulty}</Text>
          </View>
        );
      }}
    </UserContext.Consumer>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 1,
    justifyContent: 'space-around',
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    width: 150,
    alignSelf: 'center',
    height: 150,
    borderRadius: 150 / 2,
    overflow: 'hidden',
    borderWidth: 3,
    borderColor: 'red',
  },
  activityIndicator: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
});

export default HeroDetail;
