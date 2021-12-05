import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Ripple from 'react-native-material-ripple';

const LinkButton = props => {
  const {text, linkText, action} = props;
  return (
    <View style={styles.button}>
      <Text style={styles.linkText}>{text} </Text>
      <Ripple onPress={action}>
        <Text style={styles.link}>{linkText}</Text>
      </Ripple>
    </View>
  );
};

export default LinkButton;

const styles = StyleSheet.create({
  button: {flexDirection: 'row', justifyContent: 'center'},
  linkText: {
    fontSize: 16,
    color: '#ffffff',
  },
  link: {
    fontSize: 16,
    color: '#5468ff',
  },
});
