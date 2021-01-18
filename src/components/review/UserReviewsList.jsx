import React from 'react';
import UserReviewsListContainer from './UserReviewsListContainer';
import { useSelector } from 'react-redux';

import useUserReviews from '../../hooks/useUserReviews';


const UserReviewsList = () => {

    const { data, fetchMore } = useUserReviews();
    
  const onEndReach = () => {
    fetchMore()
  };


  return <UserReviewsListContainer reviews={data} onEndReach={onEndReach}/>
};
export default UserReviewsList;