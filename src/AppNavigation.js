import React from 'react';
import {
  createNativeStackNavigator
} from '@react-navigation/native-stack';
import { connect } from 'react-redux'
import LandingScreen from './screens/landing';
import LoginScreen from './screens/login';
import RegistrationScreen from './screens/registration';
import HomeScreen from './screens/home';

const Stack = createNativeStackNavigator();

const AppNavigation = ({token}) => {
  return (
    <Stack.Navigator
      initialRouteName = {token !== null?'home':'landing'}
      screenOptions={props => ({
        headerShown: false,
        gestureEnabled: false,
        cardOverlayEnabled: true,
        animation: 'slide_from_right',
      })}>
      <Stack.Screen name="landing" component={LandingScreen} />
      <Stack.Screen name="login" component={LoginScreen} />
      <Stack.Screen name="registration" component={RegistrationScreen} />
      <Stack.Screen name="home" component={HomeScreen} />
    </Stack.Navigator>
  );
};

const mapStateToProps = (state) => ({
    token: state.LoginReducer.token
})

export default connect(mapStateToProps, null)(AppNavigation);
// export default AppNavigation;
