import { useQuery } from "@apollo/react-hooks";

import { GET_AUTHORIZED_USER } from "../graphql/queries";

const useUserReviews = () => {
    const { data, loading, fetchMore, variables } = useQuery(GET_AUTHORIZED_USER, {
      fetchPolicy: "cache-and-network",
      variables: { includeReviews: true, first: 8 }
    });

    
  const handleFetchMore = () => {
    const canFetchMore =
      !loading && data && data.authorizedUser.reviews.pageInfo.hasNextPage;

      if (!canFetchMore) {
        return;
      }
      fetchMore({
        query: GET_AUTHORIZED_USER,
        variables: {
          after: data.authorizedUser.reviews.pageInfo.endCursor,
          ...variables,
        },
        updateQuery: (previousResult, { fetchMoreResult }) => {
          const nextResult = {
            authorizedUser: {
              ...fetchMoreResult.authorizedUser,
              reviews: {
                ...fetchMoreResult.authorizedUser.reviews,
                edges: [
                  ...previousResult.authorizedUser.reviews.edges,
                  ...fetchMoreResult.authorizedUser.reviews.edges,
                ],
              }
            },
          };
  
          return nextResult;
        },
      });
    };
    return {
      data: data ? data : undefined,
      fetchMore: handleFetchMore
    };
};

export default useUserReviews;      