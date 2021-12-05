import React from 'react';
import {
  createNativeStackNavigator
} from '@react-navigation/native-stack';
import { connect } from 'react-redux'
import LandingScreen from './screens/landing';
import LoginScreen from './screens/login';
import RegistrationScreen from './screens/registration';
import HomeScreen from './screens/home';
import HeaderRight from './components/headerRight'
const Stack = createNativeStackNavigator();

const AppNavigation = ({token}) => {
  return (
    <Stack.Navigator
      initialRouteName="home"
      screenOptions={props => ({
        gestureEnabled: false,
        cardOverlayEnabled: true,
        animation: 'slide_from_right',
        headerRight: () => <HeaderRight/>,
      })}>
      <Stack.Screen name="landing" component={LandingScreen} />
      <Stack.Screen name="login" component={LoginScreen} />
      <Stack.Screen name="registration" component={RegistrationScreen} />
      <Stack.Screen options={{title:"Agroxem"}} name="home" component={HomeScreen} />
    </Stack.Navigator>
  );
};

const mapStateToProps = (state) => ({
    token: state.LoginReducer.token
})

export default connect(mapStateToProps, null)(AppNavigation);
// export default AppNavigation;
