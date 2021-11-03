import React from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import Button from '../../components/button';
import logOut from './action';
import styles from './styles';

const HomeScreen = ({navigation, logOut}) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>
          Congratulations..! You have successfully logged in.
        </Text>
      </View>
      <Button
        title="Logout"
        action={() => {
          logOut(() => {
            navigation.reset('login');
          });
        }}
      />
    </View>
  );
};

const mapDispatchToProps = dispatch => ({
  logOut: callback => dispatch(logOut(callback)),
});

export default connect(null, mapDispatchToProps)(HomeScreen);
