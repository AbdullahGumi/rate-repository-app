import { useMutation } from '@apollo/react-hooks';

import { CREATE_USER } from '../graphql/mutation';

const useSignUp = () => {
  const [mutate, { error }] = useMutation(CREATE_USER);

  const signUp = async ({ username, password }) => {
    mutate({ variables: { username, password }})
  };

  return [signUp, { error }];
};
export default useSignUp;