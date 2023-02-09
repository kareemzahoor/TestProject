import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import Weather from '../screens/Weather';
import Quote from '../screens/Quote';

const Stack = createNativeStackNavigator();

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Signup' >
        <Stack.Screen name="Signup" component={Signup} 
        options={
            {headerShown:false}
            }/>
        <Stack.Screen name="Login" component={Login}
         options={
            {headerShown:false}
            } />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Weather" component={Weather} />
        <Stack.Screen name="Quote" component={Quote} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;