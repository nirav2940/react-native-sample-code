import React from 'react';
import {StyleSheet, Text, Image} from 'react-native';
import Ripple from 'react-native-material-ripple';

const GoogleButton = props => {
  const {title, action} = props;
  return (
    <Ripple style={styles.button} onPress={action}>
      <Image
        source={require('../assets/images/google.jpg')}
        style={styles.googleImg}
        resizeMode="contain"
      />
      <Text style={styles.title}>{title}</Text>
    </Ripple>
  );
};

export default GoogleButton;

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    width: '100%',
    borderRadius: 20,
  },
  title: {
    color: '#585a60',
  },
  googleImg: {
    height: 30,
    width: 30,
    marginRight: 20,
  },
});
