import { ApolloClient, InMemoryCache } from '@apollo/client';
import { RestLink } from 'apollo-link-rest';
import { setContext } from '@apollo/client/link/context';

const restLink = new RestLink({ uri: 'https://api-platform.klet.ninja/' });

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('access_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});
const Client = new ApolloClient({
  link: authLink.concat(restLink),
  cache: new InMemoryCache(),
});

export default Client;
