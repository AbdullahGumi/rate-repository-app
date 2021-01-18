import { useMutation } from '@apollo/react-hooks';

import { DELETE_REVIEW } from '../graphql/mutation';

const useDelete = () => {
  const [mutate, { error }] = useMutation(DELETE_REVIEW);

  const deleteReview = async (id) => {
    mutate({ variables: { id }})
  };

  return [deleteReview, { error }];
};
export default useDelete;