import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {StatusBar, useColorScheme} from 'react-native';
import {ApolloProvider} from '@apollo/client';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import client from './src/graphql/apolloClient'; // Adjust path as needed
import UserListScreen from './src/screens/UserListScreen';
import HomeScreen from './src/screens/HomeScreen';

const Tab = createBottomTabNavigator();

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <ApolloProvider client={client}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />

      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => ({
            headerShown: false,
            sceneStyle: {
              backgroundColor: '#FFFFFF',
            },
            tabBarIcon: ({focused, color}) => {
              let iconName: string;
              if (route.name === 'Home') {
                iconName = focused ? 'home' : 'home-outline';
              } else if (route.name === 'Users') {
                iconName = focused ? 'people' : 'people-outline';
              }
              console.log('color', color);
              return <Icon name={iconName} size={30} color={color} />;
            },
          })}>
          <Tab.Screen name="Users" component={UserListScreen} />
          <Tab.Screen name="Home" component={HomeScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
}

export default App;
