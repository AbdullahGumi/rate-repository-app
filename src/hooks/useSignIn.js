import { useMutation } from '@apollo/react-hooks';

import { AUTHORIZE } from '../graphql/mutation';
import AuthStorage from '../utils/authStorage';

const useSignIn = () => {
  const [mutate, result] = useMutation(AUTHORIZE);
  const auth = new AuthStorage('auth');

  const signIn = async ({ username, password }) => {
  	mutate({ variables: { username, password }})
    await auth.setAccessToken(result.data.authorize.accessToken);
    const token = await auth.getAccessToken();
    console.log('token', token);  	
  	return result;
  };

  return [signIn, result];
};
export default useSignIn;