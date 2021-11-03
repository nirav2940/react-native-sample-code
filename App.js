import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import AppNavigation from './src/AppNavigation';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './src/redux/store';
import {SafeAreaView, StatusBar} from 'react-native';
import {navigationRef} from './src/navigationRef';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaView style={{flex: 1}}>
          <StatusBar
            translucent
            barStyle="light-content"
            animated
            backgroundColor="rgba(0,0,0,0)"
          />
          <NavigationContainer ref={navigationRef}>
            <AppNavigation />
          </NavigationContainer>
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
};

export default App;
