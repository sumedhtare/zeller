import React from 'react';
// import {createStackNavigator} from '@react-navigation/stack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import TabNavigator from './tabNavigator';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import RoomScreen from '../screens/RoomScreen';

const Stack = createNativeStackNavigator();

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
      <Stack.Screen name="room" component={RoomScreen} />
    </Stack.Navigator>
  );
}
