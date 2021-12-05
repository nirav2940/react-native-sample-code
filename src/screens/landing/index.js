import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import styles from './styles';
import Button from '../../components/button';

const LandingScreen = ({navigation}) => {
  return (
    <ImageBackground
      source={require('../../assets/images/bg.jpg')}
      resizeMode="cover"
      style={styles.container}>
      <View style={styles.contant}>
        <Text style={styles.header}>Abda</Text>
        <Text style={styles.text}>
          Whatch your favorite movies or series on only one platform. You can
          watch it anytime and anyware.
        </Text>
        <Button title="Get Started" action={() => navigation.navigate('registration')} />
      </View>
    </ImageBackground>
  );
};

export default LandingScreen;
