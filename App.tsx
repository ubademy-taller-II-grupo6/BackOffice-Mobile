import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { InicioNavigator } from './src/navigators/InicioNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <InicioNavigator />
    </NavigationContainer>
  )
}

export default App;
