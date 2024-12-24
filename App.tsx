import React from 'react';
import {StatusBar} from 'react-native';
import {ApolloProvider} from '@apollo/client';

import client from './src/graphql/apolloClient'; // Adjust path as needed
import Navigations from './src/navigations';
import './global.css';

function App(): React.JSX.Element {
  return (
    <ApolloProvider client={client}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Navigations />
    </ApolloProvider>
  );
}

export default App;
