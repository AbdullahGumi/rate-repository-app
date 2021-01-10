import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_REPOSITORIY_REVIEWS } from '../graphql/queries';

const useRepositoryReviews = ({ id }) => {
    const [reviews, setReviews] = useState([]);
    const { data, called } = useQuery(GET_REPOSITORIY_REVIEWS, {
        fetchPolicy: 'cache-and-network',
        variables: { id }
    });

    useEffect(() => {
        if (called) {
            const reviewsData = data ? data.repository.reviews.edges : null;
            setReviews(reviewsData)
        }
    }, [data])

    return { reviews }
}

export default useRepositoryReviews;