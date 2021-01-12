import { useMutation } from '@apollo/react-hooks';
import { useHistory } from "react-router-native";

import { CREATE_REVIEW } from '../graphql/mutation';


const useReview = () => {
  const [mutate, { data, error }] = useMutation(CREATE_REVIEW);
  const history = useHistory();

  const submitReview = async ({ repositoryName, ownerName, rating, text }) => {
    mutate({ variables: { repositoryName, ownerName, rating: Number(rating), text }})
    history.push(`/repositories/${data.createReview.repositoryId}`)
  };

  return [submitReview, { error }];
};
export default useReview;