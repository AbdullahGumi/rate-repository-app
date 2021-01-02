import ApolloClient from 'apollo-boost';

const createApolloClient = () => {
  return new ApolloClient({
    uri: 'http://192.168.43.229:5000/api/repositories',
  });
};

export default createApolloClient;