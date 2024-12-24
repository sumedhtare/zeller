import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './stackNavigator';

export default function Navigations() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
