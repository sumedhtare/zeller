import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import awsconfig from '../../awsconfig'; // Adjust the import path as per your project structure

const client = new ApolloClient({
  link: new HttpLink({
    uri: awsconfig.aws_appsync_graphqlEndpoint, // GraphQL endpoint
    headers: {
      'x-api-key': awsconfig.aws_appsync_apiKey, // API key for authentication
    },
  }),
  cache: new InMemoryCache(), // In-memory caching
});

export default client;
