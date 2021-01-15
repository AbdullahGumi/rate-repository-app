import { gql } from 'apollo-boost';

export const GET_REPOSITORIES = gql`
query repositories($orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection, $searchKeyword: String!, $first: Int!, $after: String){
    repositories(orderBy: $orderBy, orderDirection: $orderDirection, searchKeyword: $searchKeyword, first: $first, after: $after){
    edges {
      node{
        fullName
        description
        ownerAvatarUrl
        stargazersCount
        forksCount
        ratingAverage
        reviewCount
        language
      }
      cursor
    }
    pageInfo {
      endCursor
      startCursor
      totalCount
      hasNextPage
    }

  }
}
`;

export const GET_USER = gql`
query{
  authorizedUser {
    id
    username
  }
}
`;

export const GET_REPOSITORIY = gql`
query repository($id: ID!){
  repository(id: $id){
    id
    fullName
    url
    description
    language
    ratingAverage
    forksCount
    stargazersCount
    ownerAvatarUrl
    reviewCount
  }
}
`

export const GET_REPOSITORIY_REVIEWS = gql`
query repository($id: ID!, $first: Int!, $after: String){
  repository(id: $id){
    id
    reviews(first: $first, after: $after) {
      edges {
        node {
          id
          text
          rating
          createdAt
          user {
            id
            username
          }
        }
      }
      pageInfo {
        hasNextPage
        totalCount
        endCursor
        startCursor
      }
    }
  }
}
`