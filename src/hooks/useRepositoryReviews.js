import { useQuery } from '@apollo/react-hooks';
import { GET_REPOSITORIY_REVIEWS } from '../graphql/queries';

const useRepositoryReviews = ({ id, first }) => {
    const { data, loading, fetchMore, variables, ...result } = useQuery(GET_REPOSITORIY_REVIEWS, {
        fetchPolicy: 'cache-and-network',
        variables: { id, first }
    });

    const handleFetchMore = () => {
        const canFetchMore =
          !loading && data && data.repository.reviews.pageInfo.hasNextPage;
    
        if (!canFetchMore) {
          return;
        }
    
        fetchMore({
            query: GET_REPOSITORIY_REVIEWS,
            variables: {
              after: data.repository.reviews.pageInfo.endCursor,
              ...variables,
            },
            updateQuery: (previousResult, { fetchMoreResult }) => {
              const nextResult = {
                repository: {
                    ...fetchMoreResult.repository,
                  reviews: {
                    ...fetchMoreResult.repository.reviews,
                      edges: [
                      ...previousResult.repository.reviews.edges,
                      ...fetchMoreResult.repository.reviews.edges,
                    ],
                  }                  
                },
              };
      
              return nextResult;
            },
          });
      };
    return {
        reviews: data ? data.repository.reviews.edges : undefined,
        fetchMore: handleFetchMore,
        loading,
        ...result,
      };
}

export default useRepositoryReviews;