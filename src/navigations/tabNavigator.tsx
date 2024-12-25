import React, {useCallback} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import UserListScreen from '../screens/UserListScreen';
import HomeScreen from '../screens/HomeScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  const tabBarIcon = useCallback(({route, focused, color}: any) => {
    let iconName = 'home';

    if (route.name === 'welcome') {
      iconName = focused ? 'home' : 'home-outline';
    } else if (route.name === 'devices') {
      iconName = focused ? 'people' : 'people-outline';
    }

    return <Icon name={iconName} size={30} color={color} />;
  }, []);

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        sceneStyle: {
          backgroundColor: '#FFFFFF',
        },
        tabBarIcon: ({focused, color}) => tabBarIcon({route, focused, color}),
      })}>
      <Tab.Screen name="welcome" component={HomeScreen} />
      <Tab.Screen name="devices" component={UserListScreen} />
    </Tab.Navigator>
  );
}
