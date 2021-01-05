import { useContext } from 'react';
import { useQuery, useApolloClient } from '@apollo/react-hooks';
import { useHistory } from "react-router-native";

import { GET_USER } from '../graphql/queries';
import AuthStorageContext from '../contexts/AuthStorageContext';

const useSignOut = () => {
  const authStorage = useContext(AuthStorageContext);
  const { data } = useQuery(GET_USER);
  const history = useHistory();
  const apolloClient = useApolloClient();

  const signOut = async () => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
    history.push("/signin")
  };

  return [signOut, data];
};
export default useSignOut;