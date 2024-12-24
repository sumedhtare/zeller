import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import TabNavigator from './tabNavigator';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={() => ({
        headerShown: false,
        sceneStyle: {
          backgroundColor: '#FFFFFF',
        },
      })}>
      <Stack.Screen name="login" component={LoginScreen} />
      <Stack.Screen name="signUp" component={SignupScreen} />
      <Stack.Screen name="home" component={TabNavigator} />
    </Stack.Navigator>
  );
}
