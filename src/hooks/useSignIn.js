import { useContext } from 'react';
import { useMutation, useApolloClient } from '@apollo/react-hooks';
import { useHistory } from "react-router-native";

import { AUTHORIZE } from '../graphql/mutation';
import AuthStorageContext from '../contexts/AuthStorageContext';

const useSignIn = () => {
  const authStorage = useContext(AuthStorageContext);
  const [mutate, result] = useMutation(AUTHORIZE);
  const history = useHistory();
  const apolloClient = useApolloClient();

  const signIn = async ({ username, password }) => {
  	mutate({ variables: { username, password }})
    await authStorage.setAccessToken(result.data.authorize.accessToken);
    apolloClient.resetStore();
    history.push("/")    
  	return result;
  };

  return [signIn, result];
};
export default useSignIn;