import { ApolloClient, InMemoryCache } from '@apollo/client';

const Client = new ApolloClient({
  uri: 'https://countries.trevorblades.com',
  cache: new InMemoryCache(),
});

export default Client;
