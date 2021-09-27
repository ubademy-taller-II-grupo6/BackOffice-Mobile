import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { Inicio } from '../screems/Inicio';
import { Login } from '../screems/Login';
import { Registro } from '../screems/Registro';

const Stack = createStackNavigator();

export const InicioNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Inicio" component={Inicio} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Registro" component={Registro} />
    </Stack.Navigator>
  );
}