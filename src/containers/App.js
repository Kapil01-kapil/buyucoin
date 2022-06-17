import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store } from '../config/configureStore';
import RootNavigator from "../navigation/RootNavigator"
import { navigationRef } from '../navigation/NavigationService';
const App = () => {
  return (
    <Provider store={store}>
          <NavigationContainer ref={navigationRef}>
            <RootNavigator />
          </NavigationContainer>
    </Provider>
  )
}

export default App