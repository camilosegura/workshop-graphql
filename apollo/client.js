import ApolloClient from 'apollo-boost';
import fetch from 'isomorphic-fetch';

const HOST = process.env.HOST || 'http://localhost:3000';

const client = new ApolloClient({
  uri: `${HOST}/graphql`,
  fetch,
});

export default client;
